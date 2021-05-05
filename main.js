import Snake from "./objects/snake.js";

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let player = new Snake(100, 100, 20);
let init = () => {
  canvas.width = 800;
  canvas.height = 600;
  window.requestAnimationFrame(gameLoop);
};
//---------------------------------
let secondsPassed;
let oldTimeStamp;
let fps;

let lastUpdate = 0;

let draw = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#666666";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  player.draw(ctx);
};

let update = (timeStamp) => {
  if (timeStamp - lastUpdate >= 125) {
      lastUpdate = timeStamp;
    player.update();
    draw();
  }
};
function gameLoop(timeStamp) {
  // Calculate the number of seconds passed since the last frame
  secondsPassed = (timeStamp - oldTimeStamp) / 1000;
  oldTimeStamp = timeStamp;

  // Calculate fps
  fps = Math.round(1 / secondsPassed);
  // Draw number to the screen

  // Perform the drawing operation

  update(timeStamp);

  // The loop function has reached it's end. Keep requesting new frames
  window.requestAnimationFrame(gameLoop);
}
init();
