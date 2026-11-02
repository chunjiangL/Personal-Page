// Globe interaction adapted from Tonychen050400/personal_page/world.html.

        (function () {
            'use strict';

            // Conferences with verified papers in _data/publications.yml.
            // Locations: https://colm.cc/ and https://eccv.ecva.net/Conferences/2026/Venues
            const VENUES = [
                { key: 'COLM 2026', city: 'San Francisco', place: 'San Francisco, California', when: 'Oct 2026', lon: -122.410, lat: 37.786 },
                { key: 'ECCV 2026', city: 'Malmö', place: 'Malmö, Sweden', when: 'Sep 2026', lon: 12.976, lat: 55.565 },
                { key: 'ICLR 2026', city: 'Rio de Janeiro', place: 'Rio de Janeiro, Brazil', when: 'Apr 2026', lon: -43.41, lat: -22.98 },
                // Coordinates from the embedded map on the convention center's official directions page.
                { key: 'ICCV 2025', city: 'Honolulu', place: 'Honolulu, Hawaiʻi', when: 'Oct 2025', lon: -157.8358919, lat: 21.2896943 },
            ];

            const DWELL = 7000;     // ms each conference stays in focus during the tour
            const HOLD = 15000;     // ms the tour waits after someone picks a conference or drags the globe
            let PIN, landColor, landLight, sphereLight, sphereEdge;
            const TAU = Math.PI * 2;
            const RAD = Math.PI / 180;

            const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            const narrow = window.matchMedia('(max-width: 760px)');

            const stage = document.getElementById('stage');
            const canvas = document.getElementById('globe');
            const ctx = canvas.getContext('2d');
            const panel = document.getElementById('panel');
            const placeEl = document.getElementById('panel-place');
            const cardsEl = document.getElementById('panel-cards');
            const chipsEl = document.getElementById('chips');
            const note = document.getElementById('note');
            function readTheme() {
                const css = getComputedStyle(stage);
                PIN = css.getPropertyValue('--atlas-pin').trim();
                landColor = css.getPropertyValue('--atlas-land').trim();
                landLight = css.getPropertyValue('--atlas-land-light').trim();
                sphereLight = css.getPropertyValue('--atlas-sphere-light').trim();
                sphereEdge = css.getPropertyValue('--atlas-sphere-edge').trim();
            }
            readTheme();
            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => { readTheme(); mapKey = ''; invalidate(); });

            const vec = (lon, lat) => [Math.cos(lat) * Math.sin(lon), Math.sin(lat), Math.cos(lat) * Math.cos(lon)];
            const projection = d3.geoOrthographic().clipAngle(90).precision(0.35);
            const graticule = d3.geoGraticule().step([30, 30])();
            const mapCanvas = document.createElement('canvas');
            const mapCtx = mapCanvas.getContext('2d');
            const mapPath = d3.geoPath(projection, mapCtx);
            let land = null, landShapes = [], regions = {}, mapKey = '', globeGPU = null;
            const regionViews = new Map();

            // Coastlines and regional paths are prepared once, outside the animation loop.
            fetch('assets/data/atlas-geography.json')
                .then(r => { if (!r.ok) throw new Error('Coastline unavailable'); return r.json(); })
                .then(data => {
                    land = data.globe;
                    landShapes = prepareLand(land);
                    regions = data.regions;
                    mapKey = '';
                    renderRegionDetail();
                    invalidate();
                })
                .catch(() => { note.hidden = false; note.textContent = 'The coastline could not load. You can still explore the conference papers below.'; });

            function svgElement(tag, attributes, text) {
                const el = document.createElementNS('http://www.w3.org/2000/svg', tag);
                for (const [name, value] of Object.entries(attributes)) el.setAttribute(name, value);
                if (text) el.textContent = text;
                return el;
            }

            function prepareLand(geometry) {
                return geometry.coordinates.map(coordinates => {
                    const center = [0, 0, 0];
                    const rings = coordinates.map(ring => {
                        const vertices = new Float32Array(ring.length * 3);
                        ring.forEach(([lon, lat], i) => {
                            const point = vec(lon * RAD, lat * RAD);
                            vertices.set(point, i * 3);
                            for (let axis = 0; axis < 3; axis++) center[axis] += point[axis];
                        });
                        return vertices;
                    });
                    const length = Math.hypot(...center) || 1;
                    for (let axis = 0; axis < 3; axis++) center[axis] /= length;
                    let minDot = 1;
                    for (const ring of rings) {
                        for (let i = 0; i < ring.length; i += 3) {
                            minDot = Math.min(minDot, ring[i] * center[0] + ring[i + 1] * center[1] + ring[i + 2] * center[2]);
                        }
                    }
                    // Conservative spherical bounds: only skip polygons entirely behind the globe.
                    const threshold = minDot > 0 ? Math.sqrt(Math.max(0, 1 - minDot * minDot)) + .00001 : 2;
                    return { rings, center, threshold, geometry: { type: 'Polygon', coordinates } };
                });
            }

            function traceLand(g) {
                const cY = Math.cos(yaw * RAD), sY = Math.sin(yaw * RAD);
                const cP = Math.cos(pitch * RAD), sP = Math.sin(pitch * RAD);
                for (const shape of landShapes) {
                    const depth = -shape.center[0] * sY * cP + shape.center[1] * sP + shape.center[2] * cY * cP;
                    if (depth < -shape.threshold) continue;
                    if (depth <= shape.threshold) {
                        // D3 handles the horizon intersections and large continental polygons.
                        mapPath(shape.geometry);
                        continue;
                    }
                    // Fully visible polygons need only a matrix transform, with no trig or clipping per vertex.
                    for (const ring of shape.rings) {
                        for (let i = 0; i < ring.length; i += 3) {
                            const x = ring[i] * cY + ring[i + 2] * sY;
                            const z = ring[i + 2] * cY - ring[i] * sY;
                            const y = ring[i + 1] * cP - z * sP;
                            if (i === 0) g.moveTo(cx + R * x, cy - R * y);
                            else g.lineTo(cx + R * x, cy - R * y);
                        }
                        g.closePath();
                    }
                }
            }

            function renderRegionDetail() {
                const detail = document.getElementById('region-detail');
                const venue = shown[focus];
                const region = regions[venue?.key];
                detail.hidden = !region;
                if (!region) { placePanel(); return; }
                detail.querySelector('.region-detail-label').textContent = region.title;
                let svg = regionViews.get(venue.key);
                if (!svg) {
                    const local = d3.geoMercator().center(region.center).scale(region.scale).translate(region.translate);
                    svg = svgElement('svg', {viewBox: '0 0 360 176', role: 'img', 'aria-label': `Regional map of ${region.title}, showing ${venue.city}`});
                    svg.append(svgElement('path', {d: region.path, class: 'region-land'}));
                    for (const label of region.labels) {
                        svg.append(svgElement('text', {x: label.x, y: label.y, class: 'region-label', 'text-anchor': 'middle'}, label.name));
                    }
                    const [x, y] = local([venue.lon, venue.lat]);
                    const labelX = venue.key === 'ICCV 2025' ? 88 : 20;
                    svg.append(svgElement('path', {d: `M${x},${y} L${Math.max(28, x - 20)},145 L${labelX},145`, class: 'region-leader'}));
                    svg.append(svgElement('circle', {cx: x, cy: y, r: 1.8, class: 'region-point'}));
                    svg.append(svgElement('text', {x: labelX, y: 163, class: 'region-city'}, venue.city + (venue.key === 'ICCV 2025' ? ' · Oʻahu' : '')));
                    regionViews.set(venue.key, svg);
                }
                detail.querySelector('.region-map').replaceChildren(svg);
                placePanel();
            }

            function drawBaseMap() {
                const key = `${yaw.toFixed(2)}|${pitch.toFixed(2)}|${W}|${H}|${landColor}|${!!land}|${!!globeGPU?.ready}`;
                if (mapKey === key) return;
                mapKey = key;
                projection.rotate([yaw, -pitch]).translate([cx, cy]).scale(R);
                if (globeGPU?.ready) {
                    globeGPU.draw({ width: canvas.width, height: canvas.height, cx: cx * pixelRatio, cy: cy * pixelRatio,
                        radius: R * pixelRatio, yaw: yaw * RAD, pitch: pitch * RAD,
                        colors: { land: landColor, landLight, ocean: sphereLight, oceanEdge: sphereEdge } });
                    return;
                }
                const g = mapCtx;
                g.clearRect(0, 0, W, H);
                const ocean = g.createRadialGradient(cx - R * .3, cy - R * .4, 0, cx, cy, R);
                ocean.addColorStop(0, sphereLight);
                ocean.addColorStop(1, sphereEdge);
                g.fillStyle = ocean;
                g.beginPath(); g.arc(cx, cy, R, 0, TAU); g.fill();
                if (land) {
                    const ink = g.createLinearGradient(cx - R, cy - R, cx + R, cy + R);
                    ink.addColorStop(0, `rgb(${landLight})`);
                    ink.addColorStop(1, `rgb(${landColor})`);
                    g.beginPath(); traceLand(g);
                    g.fillStyle = ink; g.fill();
                }
                g.strokeStyle = 'rgba(117, 155, 184, .25)';
                g.lineWidth = .65;
                g.beginPath(); mapPath(graticule); g.stroke();
                drawRim(g);
            }

            function drawRim(g) {
                // A fine graduated rim gives the globe the feel of a printed atlas.
                g.strokeStyle = `rgba(${landColor}, .35)`;
                g.lineWidth = .8;
                g.beginPath(); g.arc(cx, cy, R, 0, TAU); g.stroke();
                g.strokeStyle = `rgba(${landColor}, .16)`;
                g.beginPath(); g.arc(cx, cy, R + 11, 0, TAU); g.stroke();
                g.beginPath();
                for (let i = 0; i < 72; i++) {
                    const a = i * TAU / 72;
                    const length = i % 6 === 0 ? 6 : 2.5;
                    g.moveTo(cx + (R + 11) * Math.cos(a), cy + (R + 11) * Math.sin(a));
                    g.lineTo(cx + (R + 11 + length) * Math.cos(a), cy + (R + 11 + length) * Math.sin(a));
                }
                g.stroke();
            }

            // ---------------- State ----------------
            let shown = [];                     // conferences that have at least one paper
            let arcs = [];
            let pins = [];                      // where each conference's pin is on screen
            let anchors = [];
            let panelX = 0;
            const OFFSET = 28;
            let focus = -1;
            let yaw = 40, pitch = 18, yawT = null, pitchT = null;
            let nextAt = 0, holdUntil = 0, lineT0 = 0;
            let dragging = false, dragMoved = 0, lastX = 0, lastY = 0, hoverPanel = false;
            let W = 0, H = 0, R = 200, cx = 0, cy = 0, pixelRatio = 1;

            function layout() {
                // A hidden or resizing browser surface can briefly report a zero-sized stage.
                if (!stage.clientWidth || !stage.clientHeight) return;
                W = stage.clientWidth;
                H = stage.clientHeight;
                const dpr = Math.min(2, window.devicePixelRatio || 1);
                pixelRatio = dpr;
                canvas.width = Math.round(W * dpr);
                canvas.height = Math.round(H * dpr);
                mapCanvas.width = canvas.width;
                mapCanvas.height = canvas.height;
                mapCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
                mapKey = '';
                ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
                if (narrow.matches) {
                    R = Math.min(W, H) * 0.40;
                    cx = W / 2;
                    cy = H / 2;
                    panel.style.left = panel.style.top = panel.style.width = '';
                } else {
                    const pw = Math.min(400, Math.round(W * 0.4));
                    const left = W - pw - 40;   // room for the globe and its halo
                    R = Math.min(H * 0.40, left * 0.43);
                    cx = left / 2 + 10;
                    cy = H / 2;
                    panelX = W - pw;
                    panel.style.width = pw + 'px';
                    panel.style.left = panelX + 'px';
                }
                placePanel();
                invalidate();
            }

            function placePanel() {
                const minHeight = narrow.matches ? '' : (panel.offsetHeight + 56) + 'px';
                if (stage.style.minHeight !== minHeight) {
                    stage.style.minHeight = minHeight;
                    layout();
                    return;
                }
                anchors = [];
                if (narrow.matches || !cardsEl.childElementCount) return;
                const top = Math.max(0, (H - panel.offsetHeight) / 2);
                panel.style.top = top + 'px';
                const city = placeEl.querySelector('.venue-city');
                anchors.push({ x: panelX, y: top + city.offsetTop + city.offsetHeight / 2 });
            }

            // ---------------- Focus ----------------
            function setFocus(i, byUser) {
                const now = performance.now();
                focus = i;
                const v = shown[i];
                yawT = -v.lon + (v.key === 'ICCV 2025' ? -12 : narrow.matches ? 0 : OFFSET);
                pitchT = Math.max(-30, Math.min(40, v.lat * 0.7));
                if (reduceMotion) {
                    yaw = yawT;
                    pitch = pitchT;
                }
                if (byUser) holdUntil = now + HOLD;
                nextAt = Math.max(now + DWELL, holdUntil);
                lineT0 = now;

                const edition = document.createElement('div');
                edition.className = 'venue-edition';
                edition.textContent = v.key;
                const city = document.createElement('h2');
                city.className = 'venue-city';
                city.textContent = v.city;
                const meta = document.createElement('p');
                meta.className = 'venue-meta';
                meta.textContent = `${v.place.split(', ').slice(1).join(', ')} · ${v.when}`;
                placeEl.replaceChildren(edition, city, meta);
                cardsEl.replaceChildren(...v.papers.map((p, k) => {
                    const card = document.createElement('a');
                    card.className = 'paper-card';
                    card.href = p.href;
                    card.style.animationDelay = 150 + k * 90 + 'ms';
                    const body = document.createElement('span');
                    body.className = 'card-body';
                    const badge = document.createElement('span');
                    badge.className = 'card-badge' + (p.workshop ? ' workshop' : '');
                    badge.textContent = p.badge;
                    const title = document.createElement('span');
                    title.className = 'card-title';
                    title.textContent = p.title;
                    body.append(badge, title);
                    const arrow = document.createElement('span');
                    arrow.className = 'card-arrow';
                    arrow.setAttribute('aria-hidden', 'true');
                    arrow.textContent = '↗';
                    card.append(body, arrow);
                    return card;
                }));
                [...chipsEl.children].forEach((chip, k) => chip.setAttribute('aria-pressed', String(k === i)));
                renderRegionDetail();
                invalidate();
            }

            function start() {
                shown = VENUES.filter((v) => v.papers.length);
                if (!shown.length) {
                    note.hidden = false;
                    return;
                }
                shown.forEach((v) => (v.vec = vec(v.lon * RAD, v.lat * RAD)));
                arcs = [];
                for (let i = 0; i + 1 < shown.length; i++) arcs.push(makeArc(shown[i], shown[i + 1]));
                chipsEl.replaceChildren(...shown.map((v, i) => {
                    const chip = document.createElement('button');
                    chip.type = 'button';
                    chip.className = 'chip';
                    chip.textContent = `${v.key} · ${v.city}`;
                    chip.addEventListener('click', () => setFocus(i, true));
                    return chip;
                }));
                // world.html#iccv2025 opens on that conference
                const fromHash = shown.findIndex((v) => '#' + v.key.replace(/\s+/g, '').toLowerCase() === location.hash.toLowerCase());
                setFocus(Math.max(0, fromHash), false);
            }

            // Arcs from one conference to the next, lifted off the surface
            function makeArc(a, b) {
                const A = a.vec, B = b.vec;
                const ang = Math.acos(Math.max(-1, Math.min(1, A[0] * B[0] + A[1] * B[1] + A[2] * B[2])));
                const lift = 0.05 + 0.2 * (ang / Math.PI);
                const pts = [];
                for (let k = 0; k <= 48; k++) {
                    const u = k / 48;
                    const wa = Math.sin((1 - u) * ang) / Math.sin(ang);
                    const wb = Math.sin(u * ang) / Math.sin(ang);
                    const h = 1 + lift * Math.sin(Math.PI * u);
                    pts.push([(A[0] * wa + B[0] * wb) * h, (A[1] * wa + B[1] * wb) * h, (A[2] * wa + B[2] * wb) * h]);
                }
                return { a, b, pts };
            }

            // ---------------- Drawing ----------------
            function draw(now) {
                if (!canvas.width || !canvas.height || !mapCanvas.width || !mapCanvas.height) return;
                ctx.clearRect(0, 0, W, H);

                const cY = Math.cos(yaw * RAD), sY = Math.sin(yaw * RAD);
                const cP = Math.cos(pitch * RAD), sP = Math.sin(pitch * RAD);
                // Rotate a point given in globe coordinates; returns [x, y, z] with z > 0 facing the viewer
                const rot = (x, y, z) => {
                    const x1 = x * cY + z * sY, z1 = z * cY - x * sY;
                    return [x1, y * cP - z1 * sP, y * sP + z1 * cP];
                };

                drawBaseMap();
                if (globeGPU?.ready) drawRim(ctx);
                else ctx.drawImage(mapCanvas, 0, 0, W, H);

                // Batch each route into a single canvas stroke.
                ctx.lineWidth = 0.8;
                ctx.strokeStyle = `rgba(${PIN}, .22)`;
                for (const arc of arcs) {
                    let drawing = false;
                    ctx.beginPath();
                    for (const p of arc.pts) {
                        const v = rot(p[0], p[1], p[2]);
                        if (v[2] <= 0) { drawing = false; continue; }
                        const x = cx + R * v[0], y = cy - R * v[1];
                        if (drawing) ctx.lineTo(x, y); else ctx.moveTo(x, y);
                        drawing = true;
                    }
                    ctx.stroke();
                }

                // Use the coastline's projection directly: geographical positions have no visual offsets.
                pins = shown.map((v) => {
                    const p = rot(...v.vec);
                    const [x, y] = projection([v.lon, v.lat]);
                    return { x, y, z: p[2] };
                });

                // One leader connects the selected place to its heading.
                const f = pins[focus];
                const seen = !!f && f.z > 0.06;
                panel.classList.toggle('detached', !!f && !seen);
                if (seen) {
                    const k = reduceMotion ? 1 : Math.min(1, (now - lineT0) / 650);
                    const grow = 1 - Math.pow(1 - k, 3);
                    ctx.strokeStyle = `rgba(${PIN}, 0.75)`;
                    ctx.fillStyle = `rgba(${PIN}, 0.9)`;
                    ctx.lineWidth = 1;
                    if (!narrow.matches) {
                        for (const a of anchors) {
                            const dx = a.x - 34 - f.x, dy = a.y - f.y;
                            const distance = Math.hypot(dx, dy) || 1;
                            leader([[f.x + dx / distance * 4, f.y + dy / distance * 4], [a.x - 34, a.y], [a.x - 1, a.y]], grow, true);
                        }
                    }
                }

                // Small yellow centers with a soft halo, painted above the map lines.
                pins.forEach((pin, i) => {
                    if (pin.z <= 0) return;
                    const fade = Math.min(1, pin.z * 4);
                    const on = i === focus;
                    const radius = on ? 10 : 6;
                    const halo = ctx.createRadialGradient(pin.x, pin.y, 0, pin.x, pin.y, radius);
                    halo.addColorStop(0, `rgba(255, 199, 45, ${fade * .7})`);
                    halo.addColorStop(.3, `rgba(255, 199, 45, ${fade * .35})`);
                    halo.addColorStop(1, 'rgba(255, 199, 45, 0)');
                    ctx.fillStyle = halo;
                    ctx.beginPath(); ctx.arc(pin.x, pin.y, radius, 0, TAU); ctx.fill();
                    ctx.fillStyle = `rgba(255, 211, 78, ${fade})`;
                    ctx.beginPath(); ctx.arc(pin.x, pin.y, on ? 2.3 : 1.8, 0, TAU); ctx.fill();
                });
            }

            // Draw the first `part` (0..1) of a polyline; once complete, mark its end with a dot
            function leader(pts, part, endDot) {
                let total = 0;
                for (let i = 1; i < pts.length; i++) total += Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]);
                let left = total * part;
                ctx.beginPath();
                ctx.moveTo(pts[0][0], pts[0][1]);
                for (let i = 1; i < pts.length && left > 0; i++) {
                    const [x0, y0] = pts[i - 1], [x1, y1] = pts[i];
                    const len = Math.hypot(x1 - x0, y1 - y0);
                    const u = Math.min(1, left / (len || 1));
                    ctx.lineTo(x0 + (x1 - x0) * u, y0 + (y1 - y0) * u);
                    left -= len;
                }
                ctx.stroke();
                if (endDot && part >= 1) {
                    const [x, y] = pts[pts.length - 1];
                    ctx.beginPath();
                    ctx.arc(x - 2, y, 2.5, 0, TAU);
                    ctx.fill();
                }
            }

            // ---------------- Animation loop ----------------
            // One RAF chain at the display's refresh rate. Settled views sleep until input or the next stop.
            let last = performance.now(), rafId = 0, tourTimer = 0, dirty = true;
            function requestFrame() {
                if (!document.hidden && !rafId) rafId = requestAnimationFrame(frame);
            }
            function invalidate() {
                dirty = true;
                requestFrame();
            }
            function scheduleTour() {
                clearTimeout(tourTimer);
                if (document.hidden || reduceMotion || narrow.matches || hoverPanel || shown.length < 2) return;
                tourTimer = setTimeout(requestFrame, Math.max(0, nextAt - performance.now()));
            }
            function frame(now) {
                rafId = 0;
                const dt = Math.min(50, now - last);
                last = now;
                let moving = false;
                if (!dragging) {
                    if (yawT !== null) {
                        const dy = ((((yawT - yaw) % 360) + 540) % 360 - 180);
                        const dp = pitchT - pitch;
                        if (Math.abs(dy) > .005 || Math.abs(dp) > .005) {
                            const ease = 1 - Math.pow(0.93, dt / 16.7);
                            yaw += dy * ease;
                            pitch += dp * ease;
                            moving = true;
                        } else if (yaw !== yawT || pitch !== pitchT) {
                            yaw = yawT; pitch = pitchT; dirty = true;
                        }
                    } else if (!reduceMotion) {
                        yaw += .03 * (dt / 16.7);
                        moving = true;
                    }
                    if (!reduceMotion && !narrow.matches && shown.length > 1 && !hoverPanel && now >= nextAt) {
                        setFocus((focus + 1) % shown.length, false);
                        moving = true;
                    }
                }
                const leaderMoving = !reduceMotion && now - lineT0 < 650;
                if (dirty || moving || leaderMoving) {
                    draw(now);
                    dirty = false;
                }
                if (moving || leaderMoving) requestFrame(); else scheduleTour();
            }

            document.addEventListener('visibilitychange', () => {
                cancelAnimationFrame(rafId);
                clearTimeout(tourTimer);
                rafId = 0;
                if (!document.hidden) { last = performance.now(); invalidate(); }
            });

            // ---------------- Interaction ----------------
            function pinAt(x, y) {
                let best = -1, bestD = 22;
                pins.forEach((p, i) => {
                    const d = Math.hypot(p.x - x, p.y - y);
                    if (p.z > 0.06 && d < bestD) {
                        bestD = d;
                        best = i;
                    }
                });
                return best;
            }

            canvas.addEventListener('pointerdown', (e) => {
                dragging = true;
                dragMoved = 0;
                lastX = e.clientX;
                lastY = e.clientY;
                canvas.setPointerCapture(e.pointerId);
                canvas.classList.add('dragging');
                invalidate();
            });
            canvas.addEventListener('pointermove', (e) => {
                if (!dragging) {
                    const r = canvas.getBoundingClientRect();
                    canvas.style.cursor = pinAt(e.clientX - r.left, e.clientY - r.top) >= 0 ? 'pointer' : '';
                    return;
                }
                const dx = e.clientX - lastX, dy = e.clientY - lastY;
                lastX = e.clientX;
                lastY = e.clientY;
                dragMoved += Math.abs(dx) + Math.abs(dy);
                if (dragMoved > 4) {
                    yawT = pitchT = null;
                    yaw += dx * 0.35;
                    pitch = Math.max(-60, Math.min(60, pitch + dy * 0.3));
                    holdUntil = nextAt = performance.now() + HOLD;
                    invalidate();
                }
            });
            function endDrag(e) {
                if (!dragging) return;
                dragging = false;
                canvas.classList.remove('dragging');
                invalidate();
                if (e.type === 'pointerup' && dragMoved <= 4) {
                    const r = canvas.getBoundingClientRect();
                    const i = pinAt(e.clientX - r.left, e.clientY - r.top);
                    if (i >= 0) setFocus(i, true);
                }
            }
            canvas.addEventListener('pointerup', endDrag);
            canvas.addEventListener('pointercancel', endDrag);

            // Hovering or tabbing through the cards pauses the tour
            panel.addEventListener('pointerenter', () => { hoverPanel = true; clearTimeout(tourTimer); });
            panel.addEventListener('pointerleave', () => {
                hoverPanel = false;
                nextAt = Math.max(nextAt, performance.now() + 2500);
                scheduleTour();
            });
            panel.addEventListener('focusin', () => { hoverPanel = true; clearTimeout(tourTimer); });
            panel.addEventListener('focusout', () => { hoverPanel = false; nextAt = Math.max(nextAt, performance.now() + 2500); scheduleTour(); });

            window.addEventListener('resize', layout);
            if (document.fonts) document.fonts.ready.then(layout);
            narrow.addEventListener('change', layout);

            // Publications are emitted from the same Jekyll data as the homepage.
            const publications = JSON.parse(document.getElementById('atlas-data').textContent);
            VENUES.forEach(v => { v.papers = publications.filter(p => p.venue === v.key); });
            stage.dataset.renderer = 'canvas';
            globeGPU = window.createAtlasGlobeRenderer?.(stage, canvas, invalidate) || null;
            start();
            layout();
            invalidate();
        })();
