attribute vec2 a_coords;
varying vec2 v_texCoord;

void main() {
  v_texCoord = a_coords;
  gl_Position = vec4(a_coords, 0, 1);
}