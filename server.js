var express = require('express');
var http = require('http');
var path = require('path');
var socketIO = require('socket.io');
var app = express();
var server = http.Server(app);
var io = socketIO(server);
app.set('port', 5000);
app.use('/dist', express.static(__dirname + '/dist'));
// Routing
app.get('/', function (request, response) {
    response.sendFile(path.join(__dirname, 'index.html'));
});
console.log('bohemia');
// Starts the server.
server.listen(5000, function () {
    console.log('Starting server on port 5000');
});

var players = {};
io.on('connection', function (socket) {
    console.log(socket.id);
    socket.on('new player', function () {
        switch (Object.keys(players)) {
            case 0: {
                players[socket.id] = {
                    playerNo: 1,
                    x: 400,
                    y: 790
                };
                break;
            };
            case 1: {
                players[socket.id] = {
                    playerNo: 2,
                    x: 790,
                    y: 400
                }
                break;
            };
            case 2: {
                players[socket.id] = {
                    playerNo: 3,
                    x: 400,
                    y: 10
                }
                break;
            };
            case 3: {
                players[socket.id] = {
                    playerNo: 4,
                    x: 10,
                    y: 400
                }
                break;
            };
        }
    });
    socket.on('movement', function (data) {
        var player = players[socket.id] || {};
        switch (player.playerNo) {
            case 1: {
                if (data.left) {
                    player.x -= 5;
                }
                if (data.right) {
                    player.x += 5;
                }
                break;
            };
            case 2: {
                if (data.up) {
                    player.y -= 5;
                }
                if (data.down) {
                    player.y += 5;
                }
                break;
            };
            case 3: {
                if (data.left) {
                    player.x -= 5;
                }
                if (data.right) {
                    player.x += 5;
                }
                break;
            };
            case 4: {
                if (data.up) {
                    player.y -= 5;
                }
                if (data.down) {
                    player.y += 5;
                }
                break;
            };
        }
    });
});

setInterval(function () {
    io.sockets.emit('state', players);
}, 1000 / 60);



