const Ball = function (x, y) {
    const size = 10;
    const fillStyle = 'green';
    this.x = x;
    this.y = y;
}

Ball.prototype.draw = function (ctx) {
    ctx.beginPath();
    ctx.fillStyle = 'green';
    ctx.arc(this.x, this.y, 10, 0, 2 * Math.PI);
    ctx.fill();
}

export default Ball;