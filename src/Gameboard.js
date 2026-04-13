//Need an array from 0-99, boolean true or false -> ture = ship, false = no ship
//prompt = let ship
//
function Gameboard() {
  const size = 10;

  const board = Array(size)
    .fill(null)
    .map(() => Array(size).fill(null));

  const ships = [];

  const placeShip = (ship, x, y, direction) => {
    if (direction === "horizontal") {
      for (let i = 0; i < ship.length; i++) {
        board[x][y + i] = ship;
      }
    } else {
      for (let i = 0; i < ship.length; i++) {
        board[x + i][y] = ship;
      }
    }

    ships.push(ship);
  };

  return { board, placeShip, ships };
}

module.exports = Gameboard;