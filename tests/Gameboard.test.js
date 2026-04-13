const Gameboard = require("../src/Gameboard");
const Ship = require("../src/Ship");

test("creates a 10x10 board", () => {
  const gameboard = Gameboard();

  expect(gameboard.board.length).toBe(10);

  gameboard.board.forEach(row => {
    expect(row.length).toBe(10);
  });
});

test("places ship horizontally", () => {
  const gameboard = Gameboard();
  const ship = Ship(3);

  gameboard.placeShip(ship, 0, 0, "horizontal");

  expect(gameboard.board[0][0]).toBe(ship);
  expect(gameboard.board[0][1]).toBe(ship);
  expect(gameboard.board[0][2]).toBe(ship);
});

test("places ship vertically", () => {
  const gameboard = Gameboard();
  const ship = Ship(2);

  gameboard.placeShip(ship, 0, 0, "vertical");

  expect(gameboard.board[0][0]).toBe(ship);
  expect(gameboard.board[1][0]).toBe(ship);
});