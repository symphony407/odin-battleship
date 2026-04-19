const Gameboard = require("./Gameboard");

function Player(type = "human") {
  const gameboard = Gameboard();
  const triedMoves = new Set();

  const attack = (enemyGameboard, x, y) => {
    return enemyGameboard.receiveAttack(x, y);
  };

  const randomAttack = (enemyGameboard) => {
    let x, y, key;

    do {
      x = Math.floor(Math.random() * 10);
      y = Math.floor(Math.random() * 10);
      key = `${x},${y}`;
    } while (triedMoves.has(key));

    triedMoves.add(key);
    return enemyGameboard.receiveAttack(x, y);
  };

  return { gameboard, attack, randomAttack, type };
}

module.exports = Player;