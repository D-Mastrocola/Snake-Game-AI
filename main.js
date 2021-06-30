import Snake from "./objects/snake.js";
import Apple from './objects/apple.js'

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let grid = {
  xCells: 50,
  yCells: 30,
  size: 20
}
let gameState = 'PAUSED';

let setGameState = (state) => {
  gameState = state;
}
let player = new Snake(grid.size * 5, grid.size * 5, grid);
let apple = new Apple(grid.size * 20, grid.size * 5, grid);


let init = () => {
  canvas.width = grid.xCells * grid.size;
  canvas.height = grid.yCells * grid.size;
  gameState = 'RUNNING';
  window.requestAnimationFrame(gameLoop);
};

document.addEventListener('keydown', (e) => {
  player.changeDirection(e.keyCode);
})

//---------------------------------
let secondsPassed;
let oldTimeStamp;
let fps;

let lastUpdate = 0;

let draw = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  player.draw(ctx);
  apple.draw(ctx);

  ctx.fillStyle = '#fff';
  ctx.font = '48px serif';
  ctx.fillText('Score: ' + player.score, 10, 50);
};

let update = (timeStamp) => {
  if (gameState === 'RUNNING') {
    if (timeStamp - lastUpdate >= 40) {
      lastUpdate = timeStamp;
      player.update(apple, setGameState);
      apple.update()
      draw();
    }
  } else if(gameState === 'DEAD') {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#ffffff";
    ctx.font = "30px Arial";
    ctx.fillText("You're Dead!", canvas.width / 2 - 90, canvas.height/2);
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
