precision mediump float;

attribute vec3 aPosition;
attribute vec3 aNormal;

uniform float uFrameCount;
uniform mat4 uProjectionMatrix;
uniform mat4 uModelViewMatrix;

varying vec3 vNormal;

void main() {
  vec4 newPosition = vec4(aPosition, 1.0);

  float frequency = 20.0;
  float amplitude = 0.1;
  float displacement = sin(newPosition.x * frequency + uFrameCount * 0.1);
  newPosition.x += displacement * aNormal.x * amplitude;

  vNormal = aNormal;

  gl_Position = uProjectionMatrix * uModelViewMatrix * newPosition;
}