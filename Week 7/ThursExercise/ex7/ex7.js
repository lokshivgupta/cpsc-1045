let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

const width = 800;
const height = 500;
const MID = width / 2;
const GROUND = 400;

ctx.fillStyle = "cyan";
ctx.fillRect(0, 0, width, height); //sky background

ctx.fillStyle = "lightyellow";
ctx.fillRect(0, GROUND, width, 100); // ground

ctx.fillStyle = "yellow";
ctx.beginPath();
ctx.arc(0, 0, 80, 0, 2 * Math.PI); //sun
ctx.fill();

ctx.fillStyle = "red";
ctx.beginPath();
ctx.arc(MID, GROUND - 150, 150, Math.PI, 2 * Math.PI); // umbrella
ctx.fill();


ctx.fillStyle = "purple";
ctx.beginPath();
ctx.arc(MID - 75, GROUND - 180, 20, 0, 2 * Math.PI); // left
ctx.arc(MID, GROUND - 180, 20, 0, 2 * Math.PI);      // middle
ctx.arc(MID + 75, GROUND - 180, 20, 0, 2 * Math.PI); // right
ctx.fill();


ctx.beginPath();
ctx.fillStyle = "darkgray";
ctx.fillRect(MID, GROUND-150, 10, 200); // umbrella pole
ctx.fill();

ctx.font = "30px Arial"
ctx.strokeText("Lokshiv Gupta", 600,25); //name


ctx.fillStyle = "saddlebrown";
ctx.lineWidth = 2;

// Base
ctx.fillRect(650, GROUND + 2, 90, 50);
ctx.strokeRect(650, GROUND + 3, 90, 50);

// Middle tower
ctx.fillRect(660, GROUND - 80, 50, 80);
ctx.strokeRect(660, GROUND - 80, 50, 80);

// Left notch
ctx.fillRect(660, GROUND - 85, 5, 5);
ctx.strokeRect(660, GROUND - 85, 5, 5);

// Right notch
ctx.fillRect(705, GROUND - 85, 5, 5);
ctx.strokeRect(705, GROUND - 85, 5, 5);
ctx.strokeStyle = "black"; 



 

