import Ball from '../models/ball';
import Events from '../utils/events';
import Paddle from '../models/paddle';

// var body = document.querySelector('body');
// body.style.overflow = "hidden";

var socket = io();
var movement = Events();
socket.emit('new player');
setInterval(function () {
    socket.emit('movement', movement);
}, 1000 / 60);

const ballProperties = {
    vyInitial: 200,
    vxInitial: 200,
}
var canvasBall = document.getElementById('canvas-ball');
var contextBall = canvasBall.getContext('2d');
canvasBall.width = 800;
canvasBall.height = 800;

// updateBall();
var players = {};

var canvasPaddle = document.getElementById('canvas-paddle');
canvasPaddle.width = 800;
canvasPaddle.height = 800;
var contextPaddle = canvasPaddle.getContext('2d');
socket.on('state', function (players) {
    const paddle = new Paddle(players);
    paddle.draw(contextPaddle)
    console.log(this);
});

const playBall = new Ball(500, 300);
playBall.draw(contextBall);

const updateBall = function () {
    if (playBall.x > 800 - 10 || playBall.x < 0 + 10) {
        ballProperties.vxInitial = -ballProperties.vxInitial;
    }

    if (playBall.y > 800 - 10 || playBall.y < 0 + 10) {
        ballProperties.vyInitial = -ballProperties.vyInitial;
    }

    playBall.x += ballProperties.vxInitial / 60;
    playBall.y += ballProperties.vyInitial / 60;
    playBall.draw(contextBall);
    window.requestAnimationFrame(updateBall);
};

// TO CHANGE THIS FUNCTION EXECUTION TO GAME START EVENT
(function () {
    window.requestAnimationFrame(updateBall);
})();
