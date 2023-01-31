uniform vec2 u_mouse;
varying vec2 vUv;
uniform vec2 u_ratio;

void main() { 
    vec2 st = gl_FragCoord.xy/u_ratio.xy;
    st.x *= u_ratio.x/u_ratio.y;
    float strengthY = (st.y - u_mouse.y);
    float strengthX = (st.x - u_mouse.x);
    

    
    // gl_FragColor = vec4(strengthX, strengthY, 0.0, 1.0);

    vec2 um = u_mouse.xy;
    gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
}