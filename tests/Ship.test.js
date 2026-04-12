const Gameboard = require("../Gameboard");

test("creates a 10x10 board", () => {
  const gameboard = Gameboard();

  expect(gameboard.board.length).toBe(10);

  gameboard.board.forEach(row => {
    expect(row.length).toBe(10);
  });
});