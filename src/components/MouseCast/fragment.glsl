uniform vec2 u_mouse;

void main() { 
    gl_FragColor = vec4(u_mouse.x, u_mouse.y, 0.3, 1.0);
}