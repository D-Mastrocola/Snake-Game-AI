class Snake {
    constructor(x, y, tileSize) {
        this.x = x;
        this.y = y;
        this.dir = 'right';
        this.size = tileSize;
    }
    changeDirection(keyCode) {
        console.log(keyCode);
    }
    update() {
        if(this.dir === 'right') this.x += this.size;
        if(this.dir === 'left') this.x -= this.size;
        if(this.dir === 'up') this.y -= this.size;
        if(this.dir === 'down') this.y += this.size;
    }
    draw(ctx) {
        ctx.fillStyle = '#006600';
        ctx.fillRect(this.x, this.y, this.size, this.size);
        ctx.fillStyle = '#00ff00';
        ctx.fillRect(this.x + 2, this.y + 2, this.size - 4, this.size - 4);
    }
}
export default Snake;