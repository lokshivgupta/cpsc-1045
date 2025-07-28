//File Name: a8.js  
//Author: Lokshiv Gupta
//Date: July 09, 2025
//About: The programs allows user to draw circles using different methods
let coordinates = [];
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let radiusInput = document.getElementById("rad");

canvas.addEventListener("click", function(event){
        let xCoordinate = event.offsetX;
        let yCoordinate = event.offsetY;

        coordinates.push([xCoordinate, yCoordinate]);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
         for (let i = 0; i < coordinates.length; i++) {
        let x = coordinates[i][0];
        let y = coordinates[i][1];
        ctx.beginPath();
        ctx.arc(x, y, 10, 0, Math.PI * 2);
        ctx.fill();
        
    }
});

function drawCircles() {
    let radius = Number(radiusInput.value);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if(isNaN(radius)||radius < 0 || radius > 25){
        alert("Radius is invalid.");
    }
    for (let i = 0; i < coordinates.length; i++) {
        let x = coordinates[i][0];
        let y = coordinates[i][1];
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      
    } 
}

function drawColoredCircles() {
    let color = document.getElementById("color").value;
  let radius = 10; 
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < coordinates.length; i++) {
    let x = coordinates[i][0];
    let y = coordinates[i][1];
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = color;  
    ctx.fill();
  }
};

function drawRandomColorCircles(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    for (let i = 0; i < coordinates.length; i++) {
        let random = Math.random();
        let x = coordinates[i][0];
        let y = coordinates[i][1];

        if(random < 0.33){
            ctx.fillStyle = "red";
        }else if(random < 0.66){
            ctx.fillStyle = "green"; 
        }else{
            ctx.fillStyle = "blue";
        }
        ctx.beginPath();
        ctx.arc(x, y, 10, 0, Math.PI * 2);
        ctx.fill();   
        
    }
}

document.getElementById("rad").addEventListener("keydown",function(event) {
    if (event.key === "Enter") {
        drawCircles();

    }
});

document.addEventListener("keydown", function(event) {
    if (event.key === "c" || event.key === "C") {
        drawColoredCircles();
    }
});
document.addEventListener("keydown", function(event) {
    if (event.key  === "r" || event.key === "R") {
        drawRandomColorCircles();
    }
});
