/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Gameboard.js"
/*!**************************!*\
  !*** ./src/Gameboard.js ***!
  \**************************/
(module) {

eval("{//Need an array from 0-99, boolean true or false -> ture = ship, false = no ship\r\n//prompt = let ship\r\nfunction Gameboard() {\r\n  const size = 10;\r\n\r\n  const board = Array(size)\r\n    .fill(null)\r\n    .map(() => Array(size).fill(null));\r\n\r\n  const ships = [];\r\n  const missedShots = [];\r\n\r\n  const placeShip = (ship, x, y, direction) => {\r\n    if (direction === \"horizontal\") {\r\n      if (y + ship.length > size) return false;\r\n\r\n      for (let i = 0; i < ship.length; i++) {\r\n        if (board[x][y + i] !== null) return false;\r\n      }\r\n\r\n      for (let i = 0; i < ship.length; i++) {\r\n        board[x][y + i] = ship;\r\n      }\r\n\r\n      ships.push(ship);\r\n      return true;\r\n    }\r\n\r\n    if (direction === \"vertical\") {\r\n      if (x + ship.length > size) return false;\r\n\r\n      for (let i = 0; i < ship.length; i++) {\r\n        if (board[x + i][y] !== null) return false;\r\n      }\r\n\r\n      for (let i = 0; i < ship.length; i++) {\r\n        board[x + i][y] = ship;\r\n      }\r\n\r\n      ships.push(ship);\r\n      return true;\r\n    }\r\n\r\n    return false;\r\n  };\r\n\r\n  const receiveAttack = (x, y) => {\r\n    const cell = board[x][y];\r\n\r\n    if (cell === \"miss\" || cell === \"hit\") {\r\n      return false;\r\n    }\r\n\r\n    if (cell === null) {\r\n      board[x][y] = \"miss\";\r\n      missedShots.push([x, y]);\r\n      return \"miss\";\r\n    }\r\n\r\n    if (typeof cell === \"object\") {\r\n      cell.hit();\r\n      board[x][y] = \"hit\";\r\n      return \"hit\";\r\n    }\r\n  };\r\n\r\n  const allShipsSunk = () => {\r\n    return ships.every(ship => ship.isSunk());\r\n  };\r\n\r\n  return { board, placeShip, receiveAttack, ships, missedShots, allShipsSunk };\r\n}\r\n\r\nmodule.exports = Gameboard;\n\n//# sourceURL=webpack://odin-battleship/./src/Gameboard.js?\n}");

/***/ },

/***/ "./src/Player.js"
/*!***********************!*\
  !*** ./src/Player.js ***!
  \***********************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{const Gameboard = __webpack_require__(/*! ./Gameboard */ \"./src/Gameboard.js\");\r\n\r\nfunction Player(type = \"human\") {\r\n  const gameboard = Gameboard();\r\n  const triedMoves = new Set();\r\n\r\n  const attack = (enemyGameboard, x, y) => {\r\n    return enemyGameboard.receiveAttack(x, y);\r\n  };\r\n\r\n  const randomAttack = (enemyGameboard) => {\r\n    let x, y, key;\r\n\r\n    do {\r\n      x = Math.floor(Math.random() * 10);\r\n      y = Math.floor(Math.random() * 10);\r\n      key = `${x},${y}`;\r\n    } while (triedMoves.has(key));\r\n\r\n    triedMoves.add(key);\r\n    return enemyGameboard.receiveAttack(x, y);\r\n  };\r\n\r\n  return { gameboard, attack, randomAttack, type };\r\n}\r\n\r\nmodule.exports = Player;\n\n//# sourceURL=webpack://odin-battleship/./src/Player.js?\n}");

/***/ },

/***/ "./src/Ship.js"
/*!*********************!*\
  !*** ./src/Ship.js ***!
  \*********************/
(module) {

eval("{function Ship(length) {\r\n  let hits = 0;\r\n\r\n  const hit = () => {\r\n    hits++;\r\n  };\r\n\r\n  const isSunk = () => {\r\n    return hits >= length;\r\n  };\r\n\r\n  return { length, hit, isSunk };\r\n}\r\n\r\nmodule.exports = Ship;\n\n//# sourceURL=webpack://odin-battleship/./src/Ship.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("{document.addEventListener(\"DOMContentLoaded\", () => {\r\n  const playerBoardDiv = document.getElementById(\"player-board\");\r\n  const enemyBoardDiv = document.getElementById(\"enemy-board\");\r\n\r\n  const Player = __webpack_require__(/*! ./Player */ \"./src/Player.js\");\r\n  const Ship = __webpack_require__(/*! ./Ship */ \"./src/Ship.js\");\r\n\r\n  const player = Player();\r\n  const cpu = Player(\"cpu\");\r\n\r\n  cpu.gameboard.placeShip(Ship(3), 0, 0, \"horizontal\");\r\n  player.gameboard.placeShip(Ship(3), 2, 2, \"horizontal\");\r\n\r\n  function renderPlayerBoard() {\r\n    playerBoardDiv.innerHTML = \"\";\r\n    const board = player.gameboard.board;\r\n\r\n    for (let x = 0; x < 10; x++) {\r\n      for (let y = 0; y < 10; y++) {\r\n        const cell = document.createElement(\"div\");\r\n        cell.classList.add(\"cell\");\r\n\r\n        const value = board[x][y];\r\n\r\n        if (value === \"hit\") cell.style.backgroundColor = \"red\";\r\n        if (value === \"miss\") cell.style.backgroundColor = \"gray\";\r\n        if (typeof value === \"object\") cell.style.backgroundColor = \"blue\";\r\n\r\n        playerBoardDiv.appendChild(cell);\r\n      }\r\n    }\r\n  }\r\n\r\n  function renderEnemyBoard() {\r\n    enemyBoardDiv.innerHTML = \"\";\r\n\r\n    for (let x = 0; x < 10; x++) {\r\n      for (let y = 0; y < 10; y++) {\r\n        const cell = document.createElement(\"div\");\r\n        cell.classList.add(\"cell\");\r\n\r\n        cell.addEventListener(\"click\", () => {\r\n          const result = player.attack(cpu.gameboard, x, y);\r\n          if (!result) return;\r\n\r\n          cpu.randomAttack(player.gameboard);\r\n\r\n          renderPlayerBoard();\r\n          renderEnemyBoard();\r\n        });\r\n\r\n        enemyBoardDiv.appendChild(cell);\r\n      }\r\n    }\r\n  }\r\n\r\n  renderPlayerBoard();\r\n  renderEnemyBoard();\r\n});\n\n//# sourceURL=webpack://odin-battleship/./src/index.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;