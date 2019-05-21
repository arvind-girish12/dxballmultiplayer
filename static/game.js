var socket = io();
socket.on('message', function (data) {
    console.log(data);
});

var movement = {
    up: false,
    down: false,
    left: false,
    right: false
}

document.addEventListener('keydown', function (event) {
    switch (event.keyCode) {
        case 37: // Left arrow
            movement.left = true;
            break;
        case 38: // Up arrow
            movement.up = true;
            break;
        case 39: // Right arrow
            movement.right = true;
            break;
        case 40: // Down arrow
            movement.down = true;
            break;
    }
});

document.addEventListener('keyup', function (event) {
    switch (event.keyCode) {
        case 37: // Left arrow
            movement.left = false;
            break;
        case 38: // Up arrow
            movement.up = false;
            break;
        case 39: // Right arrow
            movement.right = false;
            break;
        case 40: // Down arrow
            movement.down = false;
            break;
    }
});

socket.emit('new player');
setInterval(function () {
    socket.emit('movement', movement);
}, 1000 / 60);

var canvas = document.getElementById('canvas');
canvas.width = 1000;
canvas.height = 800;
var context = canvas.getContext('2d');
socket.on('state', function (players) {
    context.clearRect(0, 0, 800, 600);
    context.fillStyle = 'green';
    var counter = 1;
    for (var id in players) {
        var player = players[id];
        context.beginPath();
        context.arc(player.x, player.y, 10, 0, 2 * Math.PI);
        counter++;
        context.fill();
    }
});