// File: a7.js
//Author: Lokshiv Gupta
// Date: June 29, 2025:
// About: This is a simple program that draws a square, circle, or triangle on a canvas
// based on the colors provided by the user.

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let count = 0;
function drawSquare(color){
    ctx.fillStyle = color;
    ctx.fillRect(25, 25, 50, 50);
};

function drawCircle(color){
    ctx.beginPath();
    ctx.arc(50, 50, 50, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
};
function drawTriangle(color){
    ctx.beginPath();
    ctx.moveTo(50, 0);
    ctx.lineTo(100, 100);
    ctx.lineTo(0, 100);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
};

function display(){
    
    let sqColor = document.getElementById("sqColor").value;
    let circleColor = document.getElementById("circleColor").value;
    let trColor = document.getElementById("trColor").value;

    document.getElementById("output").innerHTML = "The colors are:" + sqColor + ", " + circleColor + ", " + trColor;

    ctx.clearRect(0, 0, canvas.width, canvas.height); 

    let shapeIndex = count % 3;
    if(shapeIndex === 0){
        drawSquare(sqColor);
    }
    else if(shapeIndex === 1){
        drawCircle(circleColor);
    } else if(shapeIndex === 2){
        drawTriangle(trColor);
    }
    count++;
}
document.getElementById("display").addEventListener("click", display);

let interval = null;
document.getElementById("startAlt").addEventListener("click", function() {
    if (interval === null) {  
        interval = setInterval(display, 1000);
    }
});

document.getElementById("stopAlt").addEventListener("click", function() {
    if (interval !== null) {
        clearInterval(interval);
        interval = null;
    }
});
