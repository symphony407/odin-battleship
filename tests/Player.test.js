const Player = require('../src/Player');
const Gameboard = require('../src/Gameboard');
const Ship = require('../src/Ship');

test("player can attack enemy board", () => {
    const player = Player();
    const enemyGameboard = Gameboard();
    const ship = Ship(2);

    enemyGameboard.placeShip(ship, 0, 0, "horizontal");

    const result = player.attack(enemyGameboard, 0, 0);
    expect(result).toBe(true);
});