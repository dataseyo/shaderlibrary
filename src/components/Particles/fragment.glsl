uniform vec3 u_intersection;
uniform vec2 u_ratio;
uniform float u_time;

varying float diff;
varying float v_displacement;
varying float dist;

void main() {
    vec3 color = vec3(0.6, 0.8, 0.92);

    float fade = clamp(1.0 - diff / 2.0, 0.0, 1.0);
    // gl_FragColor = vec4((color / fade) / v_displacement, 1.0);
    // gl_FragColor = vec4(color / fade, 1.0);
    if (dist < 0.75) {
        gl_FragColor = vec4(color / fade, 1.0);
    } else {
        gl_FragColor = vec4((color / fade) * sin(v_displacement) * 20.0, 1.0);
    }
}