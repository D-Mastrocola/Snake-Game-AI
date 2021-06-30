class Apple {
  constructor(x, y, grid) {
    this.x = x;
    this.y = y;
    this.size = grid.size;
    this.canvas = {
      xCells: grid.xCells,
      yCells: grid.yCells
    }
  }
  changePosition(snakeX, snakeY, snakeTail) {
    this.x = Math.floor(Math.random() * this.canvas.xCells) * this.size;
    this.y = Math.floor(Math.random() * this.canvas.yCells) * this.size;
    if(this.x == snakeX && this.y == snakeY) this.changePosition(snakeX, snakeY, snakeTail);

    for(let i = 0; i < snakeTail.length; i++) {
      let snakeTailX = snakeTail[i][0];
      let snakeTailY = snakeTail[i][1];
      if(this.x == snakeTailX && this.y == snakeTailY) this.changePosition(snakeX, snakeY, snakeTail);
    }
  }
  update() { }
  draw(ctx) {
    ctx.fillStyle = '#ff0000'
    ctx.fillRect(this.x, this.y, this.size, this.size);
  }
}
export default Apple;