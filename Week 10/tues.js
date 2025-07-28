let Circle = {
    x:200,
    y:200,
    radius:10,
    color:"#ff0000",

    draw: function(ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }
};

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");  

Circle.draw(ctx);


function moveCircle(event) {
    Circle.x = event.clientX - canvas.offsetLeft;
    Circle.y = event.clientY - canvas.offsetTop;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    Circle.draw(ctx);
}
canvas.addEventListener("mousemove", moveCircle);
document.addEventListener("keydown", function(event) {
    if(event.key === "ArrowUp"){
        Circle.radius += 1;
        Circle.draw(ctx);
    }
    console.log(event.key);
    
    if(event.key === "ArrowDown"){
        Circle.radius -= 1;
        Circle.draw(ctx);

    }

    Circle.draw(ctx);
});

document.getElementById("color").onchange = function(){
    Circle.color = this.value;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    Circle.draw(ctx);
}