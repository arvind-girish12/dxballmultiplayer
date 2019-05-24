/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./static/game.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./models/ball.js":
/*!************************!*\
  !*** ./models/ball.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Ball = function Ball(x, y) {\n  var size = 10;\n  var fillStyle = 'green';\n  this.x = x;\n  this.y = y;\n};\n\nBall.prototype.draw = function (ctx) {\n  ctx.clearRect(0, 0, 800, 800);\n  ctx.beginPath();\n  ctx.fillStyle = 'green';\n  ctx.arc(this.x, this.y, 10, 0, 2 * Math.PI);\n  ctx.fill();\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Ball);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tb2RlbHMvYmFsbC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL21vZGVscy9iYWxsLmpzPzExMzUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQmFsbCA9IGZ1bmN0aW9uICh4LCB5KSB7XG4gICAgY29uc3Qgc2l6ZSA9IDEwO1xuICAgIGNvbnN0IGZpbGxTdHlsZSA9ICdncmVlbic7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xufVxuXG5CYWxsLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24gKGN0eCkge1xuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgODAwLCA4MDApO1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHguZmlsbFN0eWxlID0gJ2dyZWVuJztcbiAgICBjdHguYXJjKHRoaXMueCwgdGhpcy55LCAxMCwgMCwgMiAqIE1hdGguUEkpO1xuICAgIGN0eC5maWxsKCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhbGw7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./models/ball.js\n");

/***/ }),

/***/ "./models/paddle.js":
/*!**************************!*\
  !*** ./models/paddle.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Paddle = function Paddle(players) {\n  this.players = players;\n};\n\nPaddle.prototype.draw = function (ctx) {\n  ctx.clearRect(0, 0, 800, 800);\n  ctx.fillStyle = 'black';\n\n  for (var id in this.players) {\n    var player = this.players[id];\n    ctx.beginPath();\n\n    switch (player.playerNo) {\n      case 1:\n        {\n          ctx.rect(player.x, player.y, 100, 20);\n          ctx.fill();\n          break;\n        }\n        ;\n\n      case 2:\n        {\n          ctx.rect(player.x, player.y, 20, 100);\n          ctx.fill();\n          break;\n        }\n        ;\n\n      case 3:\n        {\n          ctx.rect(player.x, player.y, 100, 20);\n          ctx.fill();\n          break;\n        }\n        ;\n\n      case 4:\n        {\n          ctx.rect(player.x, player.y, 20, 100);\n          ctx.fill();\n          break;\n        }\n        ;\n    }\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Paddle);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tb2RlbHMvcGFkZGxlLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbW9kZWxzL3BhZGRsZS5qcz8wMGIwIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFBhZGRsZSA9IGZ1bmN0aW9uIChwbGF5ZXJzKSB7XG4gICAgdGhpcy5wbGF5ZXJzID0gcGxheWVycztcbn1cblxuUGFkZGxlLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24gKGN0eCkge1xuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgODAwLCA4MDApO1xuICAgIGN0eC5maWxsU3R5bGUgPSAnYmxhY2snO1xuICAgIGZvciAodmFyIGlkIGluIHRoaXMucGxheWVycykge1xuICAgICAgICB2YXIgcGxheWVyID0gdGhpcy5wbGF5ZXJzW2lkXTtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBzd2l0Y2ggKHBsYXllci5wbGF5ZXJObykge1xuICAgICAgICAgICAgY2FzZSAxOiB7XG4gICAgICAgICAgICAgICAgY3R4LnJlY3QocGxheWVyLngsIHBsYXllci55LCAxMDAsIDIwKTtcbiAgICAgICAgICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNhc2UgMjoge1xuICAgICAgICAgICAgICAgIGN0eC5yZWN0KHBsYXllci54LCBwbGF5ZXIueSwgMjAsIDEwMCk7XG4gICAgICAgICAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjYXNlIDM6IHtcbiAgICAgICAgICAgICAgICBjdHgucmVjdChwbGF5ZXIueCwgcGxheWVyLnksIDEwMCwgMjApO1xuICAgICAgICAgICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY2FzZSA0OiB7XG4gICAgICAgICAgICAgICAgY3R4LnJlY3QocGxheWVyLngsIHBsYXllci55LCAyMCwgMTAwKTtcbiAgICAgICAgICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFkZGxlOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBcEJBO0FBc0JBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./models/paddle.js\n");

/***/ }),

/***/ "./static/game.js":
/*!************************!*\
  !*** ./static/game.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models_ball__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/ball */ \"./models/ball.js\");\n/* harmony import */ var _utils_events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/events */ \"./utils/events.js\");\n/* harmony import */ var _models_paddle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/paddle */ \"./models/paddle.js\");\n\n\n // var body = document.querySelector('body');\n// body.style.overflow = \"hidden\";\n\nvar socket = io();\nvar movement = Object(_utils_events__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\nsocket.emit('new player');\nsetInterval(function () {\n  socket.emit('movement', movement);\n}, 1000 / 60);\nvar ballProperties = {\n  vyInitial: 200,\n  vxInitial: 200\n};\nvar canvasBall = document.getElementById('canvas-ball');\nvar contextBall = canvasBall.getContext('2d');\ncanvasBall.width = 800;\ncanvasBall.height = 800; // updateBall();\n\nvar players = {};\nvar canvasPaddle = document.getElementById('canvas-paddle');\ncanvasPaddle.width = 800;\ncanvasPaddle.height = 800;\nvar contextPaddle = canvasPaddle.getContext('2d');\nsocket.on('state', function (players) {\n  var paddle = new _models_paddle__WEBPACK_IMPORTED_MODULE_2__[\"default\"](players);\n  paddle.draw(contextPaddle);\n  console.log(this);\n});\nvar playBall = new _models_ball__WEBPACK_IMPORTED_MODULE_0__[\"default\"](500, 300);\nplayBall.draw(contextBall);\n\nvar updateBall = function updateBall() {\n  if (playBall.x > 800 - 10 || playBall.x < 0 + 10) {\n    ballProperties.vxInitial = -ballProperties.vxInitial;\n  }\n\n  if (playBall.y > 800 - 10 || playBall.y < 0 + 10) {\n    ballProperties.vyInitial = -ballProperties.vyInitial;\n  }\n\n  playBall.x += ballProperties.vxInitial / 60;\n  playBall.y += ballProperties.vyInitial / 60;\n  playBall.draw(contextBall);\n  window.requestAnimationFrame(updateBall);\n}; // TO CHANGE THIS FUNCTION EXECUTION TO GAME START EVENT\n\n\n(function () {\n  window.requestAnimationFrame(updateBall);\n})();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdGF0aWMvZ2FtZS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3N0YXRpYy9nYW1lLmpzP2ZjNTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhbGwgZnJvbSAnLi4vbW9kZWxzL2JhbGwnO1xuaW1wb3J0IEV2ZW50cyBmcm9tICcuLi91dGlscy9ldmVudHMnO1xuaW1wb3J0IFBhZGRsZSBmcm9tICcuLi9tb2RlbHMvcGFkZGxlJztcblxuLy8gdmFyIGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4vLyBib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcblxudmFyIHNvY2tldCA9IGlvKCk7XG52YXIgbW92ZW1lbnQgPSBFdmVudHMoKTtcbnNvY2tldC5lbWl0KCduZXcgcGxheWVyJyk7XG5zZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgc29ja2V0LmVtaXQoJ21vdmVtZW50JywgbW92ZW1lbnQpO1xufSwgMTAwMCAvIDYwKTtcblxuY29uc3QgYmFsbFByb3BlcnRpZXMgPSB7XG4gICAgdnlJbml0aWFsOiAyMDAsXG4gICAgdnhJbml0aWFsOiAyMDAsXG59XG52YXIgY2FudmFzQmFsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMtYmFsbCcpO1xudmFyIGNvbnRleHRCYWxsID0gY2FudmFzQmFsbC5nZXRDb250ZXh0KCcyZCcpO1xuY2FudmFzQmFsbC53aWR0aCA9IDgwMDtcbmNhbnZhc0JhbGwuaGVpZ2h0ID0gODAwO1xuXG4vLyB1cGRhdGVCYWxsKCk7XG52YXIgcGxheWVycyA9IHt9O1xuXG52YXIgY2FudmFzUGFkZGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcy1wYWRkbGUnKTtcbmNhbnZhc1BhZGRsZS53aWR0aCA9IDgwMDtcbmNhbnZhc1BhZGRsZS5oZWlnaHQgPSA4MDA7XG52YXIgY29udGV4dFBhZGRsZSA9IGNhbnZhc1BhZGRsZS5nZXRDb250ZXh0KCcyZCcpO1xuc29ja2V0Lm9uKCdzdGF0ZScsIGZ1bmN0aW9uIChwbGF5ZXJzKSB7XG4gICAgY29uc3QgcGFkZGxlID0gbmV3IFBhZGRsZShwbGF5ZXJzKTtcbiAgICBwYWRkbGUuZHJhdyhjb250ZXh0UGFkZGxlKVxuICAgIGNvbnNvbGUubG9nKHRoaXMpO1xufSk7XG5cbmNvbnN0IHBsYXlCYWxsID0gbmV3IEJhbGwoNTAwLCAzMDApO1xucGxheUJhbGwuZHJhdyhjb250ZXh0QmFsbCk7XG5cbmNvbnN0IHVwZGF0ZUJhbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHBsYXlCYWxsLnggPiA4MDAgLSAxMCB8fCBwbGF5QmFsbC54IDwgMCArIDEwKSB7XG4gICAgICAgIGJhbGxQcm9wZXJ0aWVzLnZ4SW5pdGlhbCA9IC1iYWxsUHJvcGVydGllcy52eEluaXRpYWw7XG4gICAgfVxuXG4gICAgaWYgKHBsYXlCYWxsLnkgPiA4MDAgLSAxMCB8fCBwbGF5QmFsbC55IDwgMCArIDEwKSB7XG4gICAgICAgIGJhbGxQcm9wZXJ0aWVzLnZ5SW5pdGlhbCA9IC1iYWxsUHJvcGVydGllcy52eUluaXRpYWw7XG4gICAgfVxuXG4gICAgcGxheUJhbGwueCArPSBiYWxsUHJvcGVydGllcy52eEluaXRpYWwgLyA2MDtcbiAgICBwbGF5QmFsbC55ICs9IGJhbGxQcm9wZXJ0aWVzLnZ5SW5pdGlhbCAvIDYwO1xuICAgIHBsYXlCYWxsLmRyYXcoY29udGV4dEJhbGwpO1xuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlQmFsbCk7XG59O1xuXG4vLyBUTyBDSEFOR0UgVEhJUyBGVU5DVElPTiBFWEVDVVRJT04gVE8gR0FNRSBTVEFSVCBFVkVOVFxuKGZ1bmN0aW9uICgpIHtcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZUJhbGwpO1xufSkoKTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./static/game.js\n");

/***/ }),

/***/ "./utils/events.js":
/*!*************************!*\
  !*** ./utils/events.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Events = function Events() {\n  var movement = {\n    up: false,\n    down: false,\n    left: false,\n    right: false\n  };\n  document.addEventListener('keydown', function (event) {\n    switch (event.keyCode) {\n      case 37:\n        // Left arrow\n        movement.left = true;\n        break;\n\n      case 38:\n        // Up arrow\n        movement.up = true;\n        break;\n\n      case 39:\n        // Right arrow\n        movement.right = true;\n        break;\n\n      case 40:\n        // Down arrow\n        movement.down = true;\n        break;\n    }\n  });\n  document.addEventListener('keyup', function (event) {\n    switch (event.keyCode) {\n      case 37:\n        // Left arrow\n        movement.left = false;\n        break;\n\n      case 38:\n        // Up arrow\n        movement.up = false;\n        break;\n\n      case 39:\n        // Right arrow\n        movement.right = false;\n        break;\n\n      case 40:\n        // Down arrow\n        movement.down = false;\n        break;\n    }\n  });\n  return movement;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Events);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9ldmVudHMuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9ldmVudHMuanM/N2YzNiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBFdmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgbW92ZW1lbnQgPSB7XG4gICAgICAgIHVwOiBmYWxzZSxcbiAgICAgICAgZG93bjogZmFsc2UsXG4gICAgICAgIGxlZnQ6IGZhbHNlLFxuICAgICAgICByaWdodDogZmFsc2VcbiAgICB9XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcbiAgICAgICAgICAgIGNhc2UgMzc6IC8vIExlZnQgYXJyb3dcbiAgICAgICAgICAgICAgICBtb3ZlbWVudC5sZWZ0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzg6IC8vIFVwIGFycm93XG4gICAgICAgICAgICAgICAgbW92ZW1lbnQudXAgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOTogLy8gUmlnaHQgYXJyb3dcbiAgICAgICAgICAgICAgICBtb3ZlbWVudC5yaWdodCA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDQwOiAvLyBEb3duIGFycm93XG4gICAgICAgICAgICAgICAgbW92ZW1lbnQuZG93biA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xuICAgICAgICAgICAgY2FzZSAzNzogLy8gTGVmdCBhcnJvd1xuICAgICAgICAgICAgICAgIG1vdmVtZW50LmxlZnQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzg6IC8vIFVwIGFycm93XG4gICAgICAgICAgICAgICAgbW92ZW1lbnQudXAgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzk6IC8vIFJpZ2h0IGFycm93XG4gICAgICAgICAgICAgICAgbW92ZW1lbnQucmlnaHQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNDA6IC8vIERvd24gYXJyb3dcbiAgICAgICAgICAgICAgICBtb3ZlbWVudC5kb3duID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gbW92ZW1lbnQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50czsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFaQTtBQWNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBWkE7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/events.js\n");

/***/ })

/******/ });