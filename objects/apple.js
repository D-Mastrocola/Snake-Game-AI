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
  changePosition() {
    this.x = Math.round(Math.random() * this.canvas.xCells) * this.size;
    this.y = Math.round(Math.random() * this.canvas.yCells) * this.size;
  }
  update() { }
  draw(ctx) {
    ctx.fillStyle = '#ff0000'
    ctx.fillRect(this.x, this.y, this.size, this.size);
  }
}
export default Apple;