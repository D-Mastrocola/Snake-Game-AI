class Snake {
  constructor(x, y, grid) {
    this.x = x;
    this.y = y;
    this.score = 1;
    this.lastMove = "right";
    this.dir = "right";
    this.size = grid.size;
    this.canvas = {
      xCells: grid.xCells,
      yCells: grid.yCells,
    };
    this.tail = [];
  }
  changeDirection(keyCode) {
    //right
    if (keyCode === 68 && this.lastMove !== "left") this.dir = "right";

    //lefts
    if (keyCode === 65 && this.lastMove !== "right") this.dir = "left";
    //up
    if (keyCode === 87 && this.lastMove !== "down") this.dir = "up";
    //down
    if (keyCode === 83 && this.lastMove !== "up") this.dir = "down";
  }
  checkCollistions(apple, setGameState) {
    //Level Bounds
    if (
      this.x < 0 ||
      this.x >= this.canvas.xCells * this.size ||
      this.y < 0 ||
      this.y >= this.canvas.yCells * this.size
    ) {
      console.log("out of bounds");
      setGameState("DEAD");
    }
    //Tail
    for (let i = 0; i < this.tail.length; i++) {
      if (this.x === this.tail[i][0] && this.y === this.tail[i][1]) {
        console.log("you bit yourselfs");
        setGameState("DEAD");
      }
    }
    //Apple
    if (this.x === apple.x && this.y === apple.y) {
      this.score++;
      this.tail.push([this.x, this.y]);

      apple.changePosition(this.x, this.y, this.tail);
    }
  }
  update(apple, setGameState) {
    this.checkCollistions(apple, setGameState);

    for (let i = 0; i < this.tail.length - 1; i++) {
      this.tail[i][0] = this.tail[i + 1][0];
      this.tail[i][1] = this.tail[i + 1][1];
    }
    if (this.tail.length > 0) {
      this.tail[this.tail.length - 1][0] = this.x;
      this.tail[this.tail.length - 1][1] = this.y;
    }

    if (this.dir === "right") {
        this.x += this.size;
        this.lastMove = 'right';
    }
    if (this.dir === "left") {
        this.x -= this.size;
        this.lastMove = 'left';
    }
    if (this.dir === "up") {
        this.y -= this.size;
        this.lastMove = 'up';
    }
    if (this.dir === "down") {
        this.y += this.size;
        this.lastMove = 'down';
    }
  }
  draw(ctx) {
    ctx.fillStyle = "#fff";
    ctx.fillRect(this.x, this.y, this.size, this.size);

    for (let i = 0; i < this.tail.length; i++) {
      ctx.fillRect(this.tail[i][0], this.tail[i][1], this.size, this.size);
    }
  }
}
export default Snake;
