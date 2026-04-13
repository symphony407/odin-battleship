const Ship = require("../src/Ship");

test("ship stores its length", () => {
  const ship = Ship(3);
  expect(ship.length).toBe(3);
});

test("ship gets hit", () => {
  const ship = Ship(3);
  ship.hit();
  expect(ship.isSunk()).toBe(false);
});

test("ship sinks after enough hits", () => {
  const ship = Ship(2);
  ship.hit();
  ship.hit();
  expect(ship.isSunk()).toBe(true);
});

test("board starts empty", () => {
  const gameboard = Gameboard();

  gameboard.board.forEach(row => {
    row.forEach(cell => {
      expect(cell).toBe(null);
    });
  });
});