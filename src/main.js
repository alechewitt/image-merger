"use strict";

import vertexShader from "./vertex-shader.vert";
import fragmentShader from "./fragment-shader.frag";

// Main Entry point which sets up the game
window.onload = function() {

    let canvas = document.getElementById("imageCanvas");
    let rangeSelector = document.getElementById("rangeSelector");
    var canvasSize = Math.min((window.innerHeight - 100), (window.innerWidth - 100));
    let paternize = new PaternizeApp(canvas, canvasSize);
    paternize.init();
    rangeSelector.addEventListener("input", function(event) {
        var newValue = rangeSelector.value / 100;
        paternize.updatePatternScale(newValue);
    })

};

// Width and height of our images
const IMAGE_SIZE = 512;
/**
 * Create A WebGL context to merge two images together
 */
class PaternizeApp {

    constructor(canvas, desiredSize) {
        this.canvas = canvas;
        let size = Math.min(IMAGE_SIZE, desiredSize);
        this.canvas.height = size;
        this.canvas.width = size;

        // Img srcs
        this.image0Src = "textures/windmills.jpg";
        this.image1Src = "textures/earth.jpg";
        this.patternSrc = "textures/spiral.png";

        // Textures
        this.texImage0 = null;
        this.texImage1 = null;
        this.texPattern = null;

        // Uniform variable For pattern scale
        this.uPatternWidth = null;
        // Floating between 0 - 1 specifying width of the pattern currently in use
        this.currentPatternScale = null;
        // Value that is being requested
        this.requestedPatternScale = 0.3;
        // Whether the canvas is already drawing
        this.drawing = false;

    }

    /**
     * Initialise the main WebGL context
     */
    init() {
        this.gl = this.canvas.getContext("webgl") || this.canvas.getContext("experimental-webgl");

        // Setup Up shader Programs;
        let shaderProg = this.createShaderProgram_(vertexShader(), fragmentShader());
        this.gl.useProgram(shaderProg);

        // Set Buffer Data for coordinates
        this.setImageCoords(shaderProg);

        this.uPatternWidth = this.gl.getUniformLocation(shaderProg, "u_patternWidth");

        let self = this;
        this.loadImage(self.image0Src)
            .then(function(image) {
                // Set image up image 1 texture
                self.texImage0 = self.loadTexture(image);
                return self.loadImage(self.image1Src);
            })
            .then(function(image) {
                self.texImage1 = self.loadTexture(image);
                return self.loadImage(self.patternSrc);
            })
            .then(function(image){
                self.texPattern = self.loadTexture(image);
                self.bindTexturesToTextureUnits(shaderProg);
                self.draw();
            })
            .catch(function(err) {
                console.error("Error Caught: ", err);
            });
    }

    /**
     * Method to draw the canvas
     */
    draw() {
        if (this.currentPatternScale !== this.requestedPatternScale) {
            // Set pattern width
            this.gl.uniform1f(this.uPatternWidth, this.requestedPatternScale);
            this.gl.drawArrays(this.gl.TRIANGLES, 0, 6);
            this.currentPatternScale = this.requestedPatternScale;
            window.requestAnimationFrame(this.draw.bind(this));
        } else {
            this.drawing = false;
        }
    }

    /**
     * @param {float} value - Between 0 - 1
     */
    updatePatternScale(value) {
        this.requestedPatternScale = value;
        if (!this.drawing) {
            this.draw();
        }
    }

    /**
     * Gets the location of the a_coords in this.shaderProg
     * then sets up the buffer data in order
     */
    setImageCoords(shaderProg) {
        let attributeCoords = this.gl.getAttribLocation(shaderProg, "a_coords");
        this.gl.enableVertexAttribArray(attributeCoords);

        // Set Up Draw buffer draw coords
        let bufferCoords = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, bufferCoords);
        this.gl.bufferData(this.gl.ARRAY_BUFFER,
            new Float32Array([
                -1.0, -1.0,
                1.0, -1.0,
                -1.0, 1.0,
                -1.0, 1.0,
                1.0, -1.0,
                1.0, 1.0]),
            this.gl.STATIC_DRAW);
        this.gl.vertexAttribPointer(attributeCoords, 2, this.gl.FLOAT, false, 0, 0);
    }

    /**
     * Get the location of the uniform variables that
     * @param {WebGLProgram} program
     */
    bindTexturesToTextureUnits(program) {
        // First Get location of our uniform variables in the fragment shader
        let uImage0 = this.gl.getUniformLocation(program, "u_image0");
        let uImage1 = this.gl.getUniformLocation(program, "u_image1");
        let uPattern = this.gl.getUniformLocation(program, "u_pattern");

        // Set which variable uses which texture unit
        this.gl.uniform1i(uImage0, 0); // use texture unit 0
        this.gl.uniform1i(uImage1, 1); // use texture unit 1
        this.gl.uniform1i(uPattern, 2); // use texture unit 2

        // Now bind texture to each of these texture units
        this.gl.activeTexture(this.gl.TEXTURE0);
        this.gl.bindTexture(this.gl.TEXTURE_2D, this.texImage0);
        this.gl.activeTexture(this.gl.TEXTURE1);
        this.gl.bindTexture(this.gl.TEXTURE_2D, this.texImage1);
        this.gl.activeTexture(this.gl.TEXTURE2);
        this.gl.bindTexture(this.gl.TEXTURE_2D, this.texPattern);
    }

    /**
     * Accepts two strings that are compiled as vertex and fragment shaders
     * then loaded onto the graphics card.
     * @param {string} vertexShaderSource
     * @param {string} fragmentShaderSource
     * @returns {WebGLProgram}
     */
    createShaderProgram_(vertexShaderSource, fragmentShaderSource) {
        // Compile Vertex Shader:
        let vsh = this.gl.createShader(this.gl.VERTEX_SHADER);
        this.gl.shaderSource(vsh, vertexShaderSource);
        this.gl.compileShader(vsh);
        if (!this.gl.getShaderParameter(vsh, this.gl.COMPILE_STATUS)) {
            throw "Error in vertex shader: " + this.gl.getShaderInfoLog(vsh);
        }

        // Compile Fragment Shader
        let fsh = this.gl.createShader(this.gl.FRAGMENT_SHADER);
        this.gl.shaderSource(fsh, fragmentShaderSource);
        this.gl.compileShader(fsh);
        if (!this.gl.getShaderParameter(fsh, this.gl.COMPILE_STATUS)) {
            throw "Error in Fragment Shader: " + this.gl.getShaderInfoLog(fsh);
        }

        // Create Program and attach the compiled shaders
        let prog = this.gl.createProgram();
        this.gl.attachShader(prog, vsh);
        this.gl.attachShader(prog, fsh);
        this.gl.linkProgram(prog);
        if (!this.gl.getProgramParameter(prog, this.gl.LINK_STATUS)) {
            throw "LInk error in program: " + this.gl.getProgramInfoLog(prog);
        }
        return prog;
    }

    /**
     * Asynchronously load and create image object
     * @param {string} src
     * @returns {Promise} Resolve: Image object
     *                    Reject: Error
     */
    loadImage(src) {
        return new Promise(function(resolve, reject) {
            let img = new Image();
            img.onload = function() {
                resolve(img);
            };
            img.onerror = function(err) {
                reject(err)
            };
            img.src = src;
        });
    }

    /**
     * Create a WebGL texture object and load onto the graphics card
     * @param {Image} image
     * @returns {WebGLTexture}
     */
    loadTexture(image) {
        let texture = this.gl.createTexture();
        this.gl.bindTexture(this.gl.TEXTURE_2D, texture);

        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE);
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE);
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.NEAREST);
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.NEAREST);

        // Upload the image into the texture.
        this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, this.gl.RGBA, this.gl.UNSIGNED_BYTE, image);
        return texture;
    }

}
