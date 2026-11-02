// Globe interaction adapted from Tonychen050400/personal_page/world.html.

        (function () {
            'use strict';

            // Where each conference was held, newest first; the globe tours them in this order.
            // A paper on index.html is pinned here when its venue badge starts with one of these
            // keys (so "ICCV 2025 Workshop" goes to ICCV 2025). Preprints have no key and are skipped.
            const VENUES = [
                { key: 'ICLR 2026', city: 'Rio de Janeiro', place: 'Rio de Janeiro, Brazil', when: 'Apr 2026', lon: -43.41, lat: -22.98 },
                { key: 'ICCV 2025', city: 'Honolulu', place: 'Honolulu, Hawaiʻi', when: 'Oct 2025', lon: -157.84, lat: 21.29 },
            ];

            const DWELL = 7000;     // ms each conference stays in focus during the tour
            const HOLD = 15000;     // ms the tour waits after someone picks a conference or drags the globe
            const OFFSET = 28;      // degrees the focused conference sits right of centre, toward its cards
            const PIN = '184, 79, 53'; // terracotta markers
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

            // Fixed pseudo-random numbers, so the globe looks the same on every visit
            const rnd = (i, s) => {
                const x = Math.sin(i * 12.9898 + s * 78.233) * 43758.5453;
                return x - Math.floor(x);
            };
            const vec = (lon, lat) => [Math.cos(lat) * Math.sin(lon), Math.sin(lat), Math.cos(lat) * Math.cos(lon)];

            // ---------------- Dotted globe ----------------
            // Points spread evenly over the sphere; the ones that fall on land are drawn
            const DOT_COUNT = narrow.matches ? 18000 : 50000;
            const dots = [];
            const golden = Math.PI * (3 - Math.sqrt(5));
            for (let i = 0; i < DOT_COUNT; i++) {
                const sl = 1 - (2 * i + 1) / DOT_COUNT;
                const lon = ((i * golden) % TAU) - Math.PI;
                dots.push({
                    lon, sl, cl: Math.sqrt(1 - sl * sl), land: false,
                    size: 0.9 + 1.5 * Math.pow(rnd(i, 1), 2.2),
                    light: rnd(i, 2) < 0.22,
                    tw: rnd(i, 3) * TAU,
                    jx: (rnd(i, 4) - 0.5) * 1.2,
                    jy: (rnd(i, 5) - 0.5) * 1.2,
                });
            }
            let land = [];

            if (window.d3 && window.topojson) {
                fetch('assets/vendor/land-110m.json')
                    .then((r) => r.json())
                    .then((topo) => {
                        // Paint the continents onto a hidden flat map, then check which points land on paint
                        const W = 1440, H = 720;
                        const off = document.createElement('canvas');
                        off.width = W;
                        off.height = H;
                        const g = off.getContext('2d', { willReadFrequently: true });
                        const proj = d3.geoEquirectangular().scale(W / TAU).translate([W / 2, H / 2]);
                        g.beginPath();
                        d3.geoPath(proj, g)(topojson.feature(topo, topo.objects.land));
                        g.fill();
                        const px = g.getImageData(0, 0, W, H).data;
                        dots.forEach((d) => {
                            const x = Math.min(W - 1, Math.floor((d.lon / TAU + 0.5) * W));
                            const y = Math.min(H - 1, Math.floor((0.5 - Math.asin(d.sl) / Math.PI) * H));
                            d.land = px[(y * W + x) * 4 + 3] > 127;
                        });
                        land = dots.filter((d) => d.land);
                    })
                    .catch(() => {});   // without land data the globe is just the sphere and the pins
            }

            // Particles: a soft halo around the rim, shading just inside it, and dust drifting outside
            const HALO = Array.from({ length: 2600 }, (_, i) => ({
                ang: rnd(i, 11) * TAU,
                d: Math.pow(rnd(i, 12), 2.2),
                s: 0.6 + 1.4 * Math.pow(rnd(i, 13), 2.5),
                a: 0.45 + 0.55 * rnd(i, 14),
                sp: (0.01 + 0.035 * rnd(i, 15)) * (rnd(i, 16) < 0.5 ? -1 : 1),
                light: rnd(i, 17) < 0.4,
            }));
            const RIM = Array.from({ length: 2600 }, (_, i) => ({
                ang: rnd(i, 21) * TAU,
                d: 0.4 * Math.pow(rnd(i, 22), 2),
                s: 0.6 + 1.2 * Math.pow(rnd(i, 23), 2.2),
                a: 0.4 + 0.6 * rnd(i, 24),
                sp: (0.004 + 0.016 * rnd(i, 25)) * (rnd(i, 26) < 0.5 ? -1 : 1),
            }));
            const DUST = Array.from({ length: 260 }, (_, i) => ({
                lon: rnd(i, 31) * TAU,
                lat: Math.asin(rnd(i, 32) * 2 - 1),
                r: 1.06 + 0.42 * Math.pow(rnd(i, 33), 1.5),
                sp: (0.015 + 0.05 * rnd(i, 34)) * (rnd(i, 35) < 0.3 ? -1 : 1),
                s: 0.6 + 1.0 * rnd(i, 36),
                ph: rnd(i, 37) * TAU,
            }));

            // Thousands of tiny dots are grouped by colour and opacity, then each group is filled at once
            const groups = new Map();
            function dot(rgb, a, x, y, size) {
                if (a < 0.03) return;
                const key = rgb + '|' + Math.min(10, Math.round(a * 10));
                let list = groups.get(key);
                if (!list) groups.set(key, (list = []));
                list.push(x, y, size / 2);
            }
            function flush() {
                for (const [key, list] of groups) {
                    if (!list.length) continue;
                    const [rgb, a] = key.split('|');
                    ctx.fillStyle = `rgba(${rgb}, ${a / 10})`;
                    ctx.beginPath();
                    for (let k = 0; k < list.length; k += 3) {
                        ctx.moveTo(list[k] + list[k + 2], list[k + 1]);
                        ctx.arc(list[k], list[k + 1], list[k + 2], 0, TAU);
                    }
                    ctx.fill();
                    list.length = 0;
                }
            }

            // ---------------- State ----------------
            let shown = [];                     // conferences that have at least one paper
            let arcs = [];
            let pins = [];                      // where each conference's pin is on screen
            let anchors = [];                   // where the leader lines meet the cards
            let focus = -1;
            let yaw = 40, pitch = 18, yawT = null, pitchT = null;
            let nextAt = 0, holdUntil = 0, lineT0 = 0;
            let dragging = false, dragMoved = 0, lastX = 0, lastY = 0, hoverPanel = false;
            let W = 0, H = 0, R = 200, cx = 0, cy = 0, panelX = 0;

            function layout() {
                W = stage.clientWidth;
                H = stage.clientHeight;
                const dpr = Math.min(2, window.devicePixelRatio || 1);
                canvas.width = Math.round(W * dpr);
                canvas.height = Math.round(H * dpr);
                ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
                if (narrow.matches) {
                    R = Math.min(W, H) * 0.36;
                    cx = W / 2;
                    cy = H / 2;
                    panel.style.left = panel.style.top = panel.style.width = '';
                } else {
                    const pw = Math.min(400, Math.round(W * 0.4));
                    const left = W - pw - 40;   // room for the globe and its halo
                    R = Math.min(H * 0.37, left * 0.4);
                    cx = left / 2 + 10;
                    cy = H / 2;
                    panelX = W - pw;
                    panel.style.width = pw + 'px';
                    panel.style.left = panelX + 'px';
                }
                placePanel();
            }

            function placePanel() {
                anchors = [];
                if (narrow.matches || !cardsEl.childElementCount) return;
                const top = Math.max(0, (H - panel.offsetHeight) / 2);
                panel.style.top = top + 'px';
                for (const card of cardsEl.children) {
                    anchors.push({ x: panelX + card.offsetLeft, y: top + card.offsetTop + card.offsetHeight / 2 });
                }
            }

            // ---------------- Focus ----------------
            function setFocus(i, byUser) {
                const now = performance.now();
                focus = i;
                const v = shown[i];
                yawT = -v.lon + (narrow.matches ? 0 : OFFSET);
                pitchT = Math.max(-30, Math.min(40, v.lat * 0.7));
                if (reduceMotion) {
                    yaw = yawT;
                    pitch = pitchT;
                }
                if (byUser) holdUntil = now + HOLD;
                nextAt = Math.max(now + DWELL, holdUntil);
                lineT0 = now;

                placeEl.textContent = `${v.place} · ${v.when}`;
                cardsEl.replaceChildren(...v.papers.map((p, k) => {
                    const card = document.createElement('a');
                    card.className = 'paper-card';
                    card.href = p.href;
                    card.style.animationDelay = 150 + k * 90 + 'ms';
                    const img = document.createElement('img');
                    img.src = p.img;
                    img.alt = '';
                    const body = document.createElement('span');
                    body.className = 'card-body';
                    const badge = document.createElement('span');
                    badge.className = 'card-badge' + (p.workshop ? ' workshop' : '');
                    badge.textContent = p.badge;
                    const title = document.createElement('span');
                    title.className = 'card-title';
                    title.textContent = p.title;
                    body.append(badge, title);
                    card.append(img, body);
                    return card;
                }));
                [...chipsEl.children].forEach((chip, k) => chip.setAttribute('aria-pressed', String(k === i)));
                placePanel();
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
                const t = reduceMotion ? 0 : now / 1000;
                ctx.clearRect(0, 0, W, H);

                const cY = Math.cos(yaw * RAD), sY = Math.sin(yaw * RAD);
                const cP = Math.cos(pitch * RAD), sP = Math.sin(pitch * RAD);
                // Rotate a point given in globe coordinates; returns [x, y, z] with z > 0 facing the viewer
                const rot = (x, y, z) => {
                    const x1 = x * cY + z * sY, z1 = z * cY - x * sY;
                    return [x1, y * cP - z1 * sP, y * sP + z1 * cP];
                };

                // 1. Halo around the rim
                for (const p of HALO) {
                    const th = p.ang + t * p.sp;
                    const r = R * (1 + 0.32 * p.d);
                    const a = p.a * Math.pow(1 - p.d, 1.8) * 0.45;
                    dot(p.light ? '170, 200, 235' : '110, 160, 220', a, cx + r * Math.cos(th), cy + r * Math.sin(th), p.s);
                }
                flush();

                // 2. Dust behind the globe
                const dust = DUST.map((p) => {
                    const v = rot(...vec(p.lon + t * p.sp, p.lat));
                    return { x: cx + R * p.r * v[0], y: cy - R * p.r * v[1], z: v[2], a: 0.55 + 0.45 * Math.sin(t * 1.3 + p.ph), s: p.s };
                });
                for (const q of dust) if (q.z <= 0) dot('110, 150, 200', q.a * 0.25 * (1 + q.z), q.x, q.y, q.s);
                flush();

                // 3. The sphere, lit from the upper left
                const shade = ctx.createRadialGradient(cx - R * 0.35, cy - R * 0.4, R * 0.1, cx, cy, R);
                shade.addColorStop(0, '#ffffff');
                shade.addColorStop(1, '#eaf1f8');
                ctx.fillStyle = shade;
                ctx.beginPath();
                ctx.arc(cx, cy, R, 0, TAU);
                ctx.fill();

                // 4. Land on the far side shows through faintly; the near side is darker and twinkles
                for (let i = 0; i < land.length; i++) {
                    const d = land[i];
                    const lam = d.lon + yaw * RAD;
                    const x = d.cl * Math.sin(lam), z0 = d.cl * Math.cos(lam);
                    const y = d.sl * cP - z0 * sP, z = d.sl * sP + z0 * cP;
                    if (z <= 0) {
                        if (i % 2 === 0) dot('37, 99, 175', 0.05 + 0.06 * -z, cx + R * x, cy - R * y, 1);
                    }
                }
                flush();

                for (const p of RIM) {
                    const th = p.ang + t * p.sp;
                    const r = R * (1 - p.d);
                    dot('96, 140, 196', p.a * Math.pow(1 - p.d / 0.4, 1.4) * 0.5, cx + r * Math.cos(th), cy + r * Math.sin(th), p.s);
                }
                flush();

                for (const d of land) {
                    const lam = d.lon + yaw * RAD;
                    const x = d.cl * Math.sin(lam), z0 = d.cl * Math.cos(lam);
                    const y = d.sl * cP - z0 * sP, z = d.sl * sP + z0 * cP;
                    if (z <= 0) continue;
                    const tw = reduceMotion ? 1 : 0.85 + 0.15 * Math.sin(t * 1.3 + d.tw);
                    dot(d.light ? '90, 150, 154' : '34, 100, 108', (0.34 + 0.66 * z) * tw,
                        cx + R * x + d.jx, cy - R * y + d.jy, d.size * (0.6 + 0.65 * z));
                }
                flush();

                // 5. Faint arcs from one conference to the next, fading out toward the edge of the globe
                //    (red is kept for the pin in focus and its lines)
                ctx.lineWidth = 0.8;
                for (const arc of arcs) {
                    let prev = null;
                    for (const p of arc.pts) {
                        const v = rot(p[0], p[1], p[2]);
                        const cur = { x: cx + R * v[0], y: cy - R * v[1], z: v[2] };
                        if (prev && prev.z > 0 && cur.z > 0) {
                            ctx.strokeStyle = `rgba(70, 100, 140, ${(0.24 * Math.min(1, (prev.z + cur.z) * 1.5)).toFixed(3)})`;
                            ctx.beginPath();
                            ctx.moveTo(prev.x, prev.y);
                            ctx.lineTo(cur.x, cur.y);
                            ctx.stroke();
                        }
                        prev = cur;
                    }
                }

                // 6. Dust in front
                for (const q of dust) if (q.z > 0) dot('110, 150, 200', q.a * (0.15 + 0.4 * q.z), q.x, q.y, q.s);
                flush();

                // 7. Conference pins: a glowing red point, with a ring pulsing out of the one in focus
                pins = shown.map((v, i) => {
                    const p = rot(...v.vec);
                    const pin = { x: cx + R * p[0], y: cy - R * p[1], z: p[2] };
                    if (pin.z <= 0) return pin;
                    const fade = Math.min(1, pin.z * 4);
                    const on = i === focus;
                    const wave = reduceMotion ? 0.5 : (Math.sin(t * 2.4 + i * 1.9) + 1) / 2;
                    const glow = on ? 20 + 8 * wave : 9 + 4 * wave;
                    const g = ctx.createRadialGradient(pin.x, pin.y, 0, pin.x, pin.y, glow);
                    g.addColorStop(0, `rgba(${PIN}, ${0.55 * fade})`);
                    g.addColorStop(0.4, `rgba(${PIN}, ${0.2 * fade})`);
                    g.addColorStop(1, `rgba(${PIN}, 0)`);
                    ctx.fillStyle = g;
                    ctx.beginPath();
                    ctx.arc(pin.x, pin.y, glow, 0, TAU);
                    ctx.fill();
                    if (on && !reduceMotion) {
                        const k = (t * 0.7) % 1;
                        ctx.strokeStyle = `rgba(${PIN}, ${0.6 * (1 - k) * fade})`;
                        ctx.lineWidth = 1.2;
                        ctx.beginPath();
                        ctx.arc(pin.x, pin.y, 5 + 22 * k, 0, TAU);
                        ctx.stroke();
                    }
                    ctx.fillStyle = `rgba(${PIN}, ${fade})`;
                    ctx.beginPath();
                    ctx.arc(pin.x, pin.y, on ? 4 : 3, 0, TAU);
                    ctx.fill();
                    ctx.fillStyle = `rgba(255, 255, 255, ${0.95 * fade})`;
                    ctx.beginPath();
                    ctx.arc(pin.x, pin.y, on ? 1.6 : 1.1, 0, TAU);
                    ctx.fill();
                    return pin;
                });

                // 8. Leader lines from the pin in focus out to its paper cards
                const f = pins[focus];
                const seen = !!f && f.z > 0.06;
                panel.classList.toggle('detached', !!f && !seen);
                if (seen) {
                    const k = reduceMotion ? 1 : Math.min(1, (now - lineT0) / 650);
                    const grow = 1 - Math.pow(1 - k, 3);
                    ctx.strokeStyle = `rgba(${PIN}, 0.75)`;
                    ctx.fillStyle = `rgba(${PIN}, 0.9)`;
                    ctx.lineWidth = 1;
                    if (narrow.matches) {
                        leader([[f.x, f.y], [f.x, H]], grow, false);
                    } else {
                        for (const a of anchors) leader([[f.x, f.y], [a.x - 34, a.y], [a.x - 1, a.y]], grow, true);
                    }
                }
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
            let last = performance.now();
            function frame(now) {
                const dt = Math.min(50, now - last);
                last = now;
                if (!dragging) {
                    if (yawT !== null) {
                        const ease = 1 - Math.pow(0.93, dt / 16.7);
                        yaw += ((((yawT - yaw) % 360) + 540) % 360 - 180) * ease;   // the short way round
                        pitch += (pitchT - pitch) * ease;
                    } else if (!reduceMotion) {
                        yaw += 0.03 * (dt / 16.7);
                    }
                    // No auto-tour on phones: the card list sits in the page flow, so switching would make it jump
                    if (!reduceMotion && !narrow.matches && shown.length > 1 && !hoverPanel && now >= nextAt) {
                        setFocus((focus + 1) % shown.length, false);
                    }
                }
                draw(now);
                if (!document.hidden) requestAnimationFrame(frame);
            }

            document.addEventListener('visibilitychange', () => { if (!document.hidden) { last = performance.now(); requestAnimationFrame(frame); } });

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
                }
            });
            function endDrag(e) {
                if (!dragging) return;
                dragging = false;
                canvas.classList.remove('dragging');
                if (e.type === 'pointerup' && dragMoved <= 4) {
                    const r = canvas.getBoundingClientRect();
                    const i = pinAt(e.clientX - r.left, e.clientY - r.top);
                    if (i >= 0) setFocus(i, true);
                }
            }
            canvas.addEventListener('pointerup', endDrag);
            canvas.addEventListener('pointercancel', endDrag);

            // Hovering or tabbing through the cards pauses the tour
            panel.addEventListener('pointerenter', () => (hoverPanel = true));
            panel.addEventListener('pointerleave', () => {
                hoverPanel = false;
                nextAt = Math.max(nextAt, performance.now() + 2500);
            });
            panel.addEventListener('focusin', () => (hoverPanel = true));
            panel.addEventListener('focusout', () => (hoverPanel = false));

            window.addEventListener('resize', layout);
            narrow.addEventListener('change', layout);

            // Publications are emitted from the same Jekyll data as the homepage.
            const publications = JSON.parse(document.getElementById('atlas-data').textContent);
            VENUES.forEach(v => { v.papers = publications.filter(p => p.venue === v.key); });
            start();
            layout();
            requestAnimationFrame(frame);
        })();
