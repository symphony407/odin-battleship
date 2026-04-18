const Gameboard = require('./Gameboard');

function Player(type = "human") {
    const gameboard = Gameboard();

    const attack = (enemyGameboard, x, y) => {
        return enemyGameboard.receiveAttack(x, y);
    };

    return {gameboard, attack, type};
}

module.exports = Player;