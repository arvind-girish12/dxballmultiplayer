const Paddle = function (players) {
    this.players = players;
}

Paddle.prototype.draw = function (ctx) {
    ctx.clearRect(0, 0, 800, 800);
    ctx.fillStyle = 'black';
    for (var id in this.players) {
        var player = this.players[id];
        ctx.beginPath();
        switch (player.playerNo) {
            case 1: {
                ctx.rect(player.x, player.y, 100, 20);
                ctx.fill();
                break;
            };
            case 2: {
                ctx.rect(player.x, player.y, 20, 100);
                ctx.fill();
                break;
            };
            case 3: {
                ctx.rect(player.x, player.y, 100, 20);
                ctx.fill();
                break;
            };
            case 4: {
                ctx.rect(player.x, player.y, 20, 100);
                ctx.fill();
                break;
            };
        }
    }
}

export default Paddle;