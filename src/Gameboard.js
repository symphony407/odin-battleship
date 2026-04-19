//Need an array from 0-99, boolean true or false -> ture = ship, false = no ship
//prompt = let ship
function Gameboard() {
  const size = 10;

  const board = Array(size)
    .fill(null)
    .map(() => Array(size).fill(null));

  const ships = [];
  const missedShots = [];

  const placeShip = (ship, x, y, direction) => {
    if (direction === "horizontal") {
      if (y + ship.length > size) return false;

      for (let i = 0; i < ship.length; i++) {
        if (board[x][y + i] !== null) return false;
      }

      for (let i = 0; i < ship.length; i++) {
        board[x][y + i] = ship;
      }

      ships.push(ship);
      return true;
    }

    if (direction === "vertical") {
      if (x + ship.length > size) return false;

      for (let i = 0; i < ship.length; i++) {
        if (board[x + i][y] !== null) return false;
      }

      for (let i = 0; i < ship.length; i++) {
        board[x + i][y] = ship;
      }

      ships.push(ship);
      return true;
    }

    return false;
  };

  const receiveAttack = (x, y) => {
    const cell = board[x][y];

    if (cell === "miss" || cell === "hit") {
      return false;
    }

    if (cell === null) {
      board[x][y] = "miss";
      missedShots.push([x, y]);
      return "miss";
    }

    if (typeof cell === "object") {
      cell.hit();
      board[x][y] = "hit";
      return "hit";
    }
  };

  const allShipsSunk = () => {
    return ships.every(ship => ship.isSunk());
  };

  return { board, placeShip, receiveAttack, ships, missedShots, allShipsSunk };
}

module.exports = Gameboard;