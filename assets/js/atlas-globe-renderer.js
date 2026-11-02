// A single GPU draw projects the geographic coastline mask onto the orthographic sphere.
// The overlay and the regional maps continue to use the same longitude/latitude coordinates.
window.createAtlasGlobeRenderer = function (stage, overlay, invalidate) {
    const layer = document.createElement('canvas');
    layer.className = 'globe-surface';
    layer.setAttribute('aria-hidden', 'true');
    const gl = layer.getContext('webgl', { alpha: true, antialias: true, depth: false, stencil: false });
    if (!gl) return null;
    const renderer = { ready: false, resize, draw };
    const vertex = `
        attribute vec2 a_position;
        uniform vec2 u_resolution, u_center;
        uniform float u_radius;
        varying vec2 v_position;
        void main() {
            v_position = a_position;
            gl_Position = vec4((u_center + a_position * u_radius) / u_resolution * 2.0 - 1.0, 0.0, 1.0);
        }`;
    const fragment = `
        precision highp float;
        varying vec2 v_position;
        uniform sampler2D u_mask;
        uniform vec4 u_rotation;
        uniform vec3 u_land, u_landLight, u_ocean, u_oceanEdge;
        uniform float u_radius;
        const float PI = 3.141592653589793;
        void main() {
            vec2 p = v_position;
            float distanceSquared = dot(p, p);
            if (distanceSquared > 1.0) discard;
            float zView = sqrt(max(0.0, 1.0 - distanceSquared));
            float cy = u_rotation.x, sy = u_rotation.y, cp = u_rotation.z, sp = u_rotation.w;
            float latitudeY = p.y * cp + zView * sp;
            float zYaw = zView * cp - p.y * sp;
            float x = p.x * cy - zYaw * sy;
            float z = p.x * sy + zYaw * cy;
            float lon = atan(x, z), lat = asin(clamp(latitudeY, -1.0, 1.0));
            vec2 uv = vec2(lon / (2.0 * PI) + .5, .5 - lat / PI);
            float land = texture2D(u_mask, uv).r;
            vec3 ocean = mix(u_ocean, u_oceanEdge, clamp(length(p - vec2(-.3, .4)) / 1.4, 0.0, 1.0));
            vec3 ink = mix(u_landLight, u_land, clamp((p.x - p.y + 2.0) / 4.0, 0.0, 1.0));
            vec3 color = mix(ocean, ink, land);
            vec2 gridDistance = abs(fract(vec2(lon, lat) / (PI / 6.0) + .5) - .5) * (PI / 6.0);
            float lineWidth = 1.2 / u_radius;
            float grid = 1.0 - smoothstep(lineWidth * .25, lineWidth, min(gridDistance.x * cos(lat), gridDistance.y));
            color = mix(color, vec3(.459, .608, .722), grid * .25);
            float alpha = smoothstep(0.0, 1.0 / u_radius, 1.0 - sqrt(distanceSquared));
            gl_FragColor = vec4(color * alpha, alpha);
        }`;
    function compile(type, code) {
        const shader = gl.createShader(type);
        gl.shaderSource(shader, code);
        gl.compileShader(shader);
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(shader));
        return shader;
    }
    let program;
    try {
        program = gl.createProgram();
        gl.attachShader(program, compile(gl.VERTEX_SHADER, vertex));
        gl.attachShader(program, compile(gl.FRAGMENT_SHADER, fragment));
        gl.linkProgram(program);
        if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return null;
    } catch (_) { return null; }
    gl.useProgram(program);
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), gl.STATIC_DRAW);
    const position = gl.getAttribLocation(program, 'a_position');
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
    const uniforms = {};
    for (const name of ['resolution', 'center', 'radius', 'rotation', 'land', 'landLight', 'ocean', 'oceanEdge', 'mask']) {
        uniforms[name] = gl.getUniformLocation(program, 'u_' + name);
    }
    const texture = gl.createTexture();
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.uniform1i(uniforms.mask, 0);
    const mask = new Image();
    mask.onload = () => {
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, mask);
        renderer.ready = gl.getError() === gl.NO_ERROR;
        if (renderer.ready) {
            stage.insertBefore(layer, overlay);
            stage.dataset.renderer = 'webgl';
            invalidate();
        }
    };
    mask.src = 'assets/data/atlas-land-mask.png';
    layer.addEventListener('webglcontextlost', event => {
        event.preventDefault();
        renderer.ready = false;
        layer.style.display = 'none';
        stage.dataset.renderer = 'canvas';
        invalidate();
    });
    function resize(width, height) {
        if (layer.width !== width) layer.width = width;
        if (layer.height !== height) layer.height = height;
        gl.viewport(0, 0, width, height);
    }
    function rgb(value) {
        return value.startsWith('#')
            ? value.slice(1).match(/../g).map(component => parseInt(component, 16) / 255)
            : value.split(',').map(component => +component.trim() / 255);
    }
    function draw(options) {
        const { width, height, cx, cy, radius, yaw, pitch, colors } = options;
        resize(width, height);
        gl.useProgram(program);
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.uniform2f(uniforms.resolution, width, height);
        gl.uniform2f(uniforms.center, cx, height - cy);
        gl.uniform1f(uniforms.radius, radius);
        gl.uniform4f(uniforms.rotation, Math.cos(yaw), Math.sin(yaw), Math.cos(pitch), Math.sin(pitch));
        for (const [name, value] of Object.entries(colors)) gl.uniform3fv(uniforms[name], rgb(value));
        gl.drawArrays(gl.TRIANGLES, 0, 6);
    }
    return renderer;
};
