"use strict";

import PaternizeApp from "./paternize.js";

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


