uniform mat4 projectionMatrix;
uniform mat4 viewMatrix; 
uniform mat4 modelMatrix;

attribute float aRandom;

attribute vec3 position; // attributes change between vertices

varying float vRandom;

uniform vec2 u_frequency;
uniform float u_time;

attribute vec2 uv;
varying vec2 vUv;

void main() {
    vUv = uv;

    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    modelPosition.z += sin(modelPosition.x * u_frequency.x - u_time) * 0.1;
    modelPosition.z += sin(modelPosition.y * u_frequency.y - u_time) * 0.1;

    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;
    gl_Position = projectedPosition;
}