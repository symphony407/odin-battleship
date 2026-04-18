const Player = require("../src/Player");
const Gameboard = require("../src/Gameboard");
const Ship = require("../src/Ship");

test("player can attack enemy board", () => {
  const player = Player();
  const enemyBoard = Gameboard(); 

  const ship = Ship(2);
  enemyBoard.placeShip(ship, 0, 0, "horizontal");

  const result = player.attack(enemyBoard, 0, 0);

  expect(result).toBe("hit");
});