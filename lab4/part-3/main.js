// setup canvas

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// function to generate random number

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

// function to generate random color

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}
class Ball {
  constructor(xaxis, yaxis, velocityx, velocityy, color, size) {
    this.xaxis = x;
    this.yaxis = y;
    this.velocityx = velocityx;
    this.velocityy  = velocityy;
    this.color = color;
    this.size = size;
  }

  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.xaxis, this.yaxis, this.size, 0, 2 * Math.PI);
    ctx.fill();
  }
  
  update() {
    if ((this.xaxis + this.size) >= width) {
      this.velocityx= -(this.velocityx);
    }
  
    if ((this.xaxis - this.size) <= 0) {
      this.velocityx = -(this.velocityx);
    }
  
    if ((this.yaxis + this.size) >= height) {
      this.velocityy= -(this.velocityy);
    }
  
    if ((this.yaxis- this.size) <= 0) {
      this.velocityy = -(this.velocityy);
    }
  
    this.x += this.velocityx;
    this.y += this.velocityy;
  }




}
const balls = [];

while (balls.length < 25) {
  const size = random(10, 20);
  const ball = new Ball(
    // ball position always drawn at least one ball width
    // away from the edge of the canvas, to avoid drawing errors
    random(0 + size, width - size),
    random(0 + size, height - size),
    random(-7, 7),
    random(-7, 7),
    randomRGB(),
    size,
  );

  balls.push(ball);
}
function loop() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
  ctx.fillRect(0, 0, width, height);

  for (const ball of balls) {
    ball.draw();
    ball.update();
  }

  requestAnimationFrame(loop);
}
loop();