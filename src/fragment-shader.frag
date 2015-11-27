precision mediump float;

// Textures
uniform sampler2D u_image0;
uniform sampler2D u_image1;
uniform sampler2D u_pattern;

uniform float u_patternWidth;

// Texture coords passed from vertex shader
varying vec2 v_texCoord;

void main() {
    // Transpose canvas coords to texture coords
    vec2 textureCoords =  v_texCoord * vec2(1.0, -1.0);
    textureCoords =  0.5 + (0.5 * textureCoords);

    gl_FragColor = mix(
        texture2D(u_image0, textureCoords),
        texture2D(u_image1, textureCoords),
        step(texture2D(u_pattern, textureCoords).r, u_patternWidth)
    );
}