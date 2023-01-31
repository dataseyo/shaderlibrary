uniform vec2 u_mouse;
uniform float u_time;
uniform vec2 u_ratio;

mat3 rotation3dY(float angle) {
  float s = sin(angle);
  float c = cos(angle);
  return mat3(
    c, 0.0, -s,
    0.0, 1.0, 0.0,
    s, 0.0, c
  );
}

varying vec2 vUv;

void main() {
    vUv = uv;

    vec3 seg = position - vec3(u_mouse, 1.0);
    vec3 dir = normalize(seg);
    float dist = length(seg);
    vec3 pos;
    if (dist < 2.){
        float force = clamp(1. / (dist * dist), 0., 1.);
        pos += dir * force;
    }

    vec4 modelPosition = modelMatrix * vec4(pos, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;
    gl_PointSize = 10.0;
    gl_Position = projectedPosition;

  
}