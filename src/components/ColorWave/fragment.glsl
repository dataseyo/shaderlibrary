uniform vec3 u_colorA;
uniform vec3 u_colorB;

varying float vZ; // receive from vertex

void main() {
  vec3 color = mix(u_colorA, u_colorB, vZ * 2.0 + 0.2);

  gl_FragColor = vec4(color,1.0);
}