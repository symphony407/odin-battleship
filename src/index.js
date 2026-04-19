document.addEventListener("DOMContentLoaded", () => {
  const playerBoardDiv = document.getElementById("player-board");
  const enemyBoardDiv = document.getElementById("enemy-board");

  const Player = require("./Player");
  const Ship = require("./Ship");

  const player = Player();
  const cpu = Player("cpu");

  cpu.gameboard.placeShip(Ship(3), 0, 0, "horizontal");
  player.gameboard.placeShip(Ship(3), 2, 2, "horizontal");

  function renderPlayerBoard() {
    playerBoardDiv.innerHTML = "";
    const board = player.gameboard.board;

    for (let x = 0; x < 10; x++) {
      for (let y = 0; y < 10; y++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");

        const value = board[x][y];

        if (value === "hit") cell.style.backgroundColor = "red";
        if (value === "miss") cell.style.backgroundColor = "gray";
        if (typeof value === "object") cell.style.backgroundColor = "blue";

        playerBoardDiv.appendChild(cell);
      }
    }
  }

  function renderEnemyBoard() {
    enemyBoardDiv.innerHTML = "";

    for (let x = 0; x < 10; x++) {
      for (let y = 0; y < 10; y++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");

        cell.addEventListener("click", () => {
          const result = player.attack(cpu.gameboard, x, y);
          if (!result) return;

          cpu.randomAttack(player.gameboard);

          renderPlayerBoard();
          renderEnemyBoard();
        });

        enemyBoardDiv.appendChild(cell);
      }
    }
  }

  renderPlayerBoard();
  renderEnemyBoard();
});