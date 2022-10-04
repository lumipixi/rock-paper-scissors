const moves = ["rock", "paper", "scissors"];

const scores = {
  player: 0,
  cpu: 0,
};

const playTurn = (e) => {
  const playerMove = e.target.getAttribute("data-move");
  const cpuMove = getComputerChoice();

  if (turn === 5) {
    fight(playerMove, cpuMove);
    updateScore();
    checkWinner();
    buttons.forEach((btn) => btn.removeEventListener("click", playTurn));
  } else {
    fight(playerMove, cpuMove);
    updateScore();
    turn++;
  }
};

//obtain computer's choice with a random number
const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * moves.length);
  let computerChoice = moves[randomNumber];
  return computerChoice;
};

const fight = (playerMove, cpuMove) => {
  console.log(
    `Player selected ${playerMove}.\n` + `Computer selected ${cpuMove}.`
  );

  if (playerMove === cpuMove) {
    history.innerText += `\nTurn ${turn}: Tie!\n`;
  } else if (playerMove === "rock") {
    if (cpuMove === "paper") {
      history.innerText += `\nTurn ${turn}: Defeat. CPU's Paper wrapped your Rock till suffocation\n`;
      increaseScore("cpu");
    } else {
      history.innerText += `\nTurn ${turn}: Win! Your ROCK crushed the CPU's Scissors to bits\n`;
      increaseScore("player");
    }
  } else if (playerMove === "paper") {
    if (cpuMove === "scissors") {
      history.innerText += `\nTurn ${turn}: Defeat. CPU's Scissors cut your Paper into a million pieces\n`;
      increaseScore("cpu");
    } else {
      history.innerText += `\nTurn ${turn}: Win! Your Paper wrapped the CPU's Rock till suffocation\n`;
      increaseScore("player");
    }
  } else if (playerMove === "scissors") {
    if (cpuMove === "rock") {
      history.innerText += `\nTurn ${turn}: Defeat. CPU's Rock crushed your Scissors to bits\n`;
      increaseScore("cpu");
    } else {
      history.innerText += `\nTurn ${turn}: Win! Your Scissors cut the CPU's Paper into a million pieces\n`;
      increaseScore("player");
    }
  }
};

const increaseScore = (winner) => {
  if (winner === "player") {
    scores.player++;
  } else {
    scores.cpu++;
  }
};

const updateScore = () => {
  scoreboard.innerText = `
    Player: ${scores.player}
    CPU: ${scores.cpu}`.trim();
};

const checkWinner = () => {
  if (scores.player > scores.cpu) {
    history.append("\nYou win the game!");
  } else if (scores.player === scores.cpu) {
    history.append("\nThis is a tie...");
  } else {
    history.append("\nYou lost. Better luck next time.");
  }
};

const resetGame = () => {
  turn = 1;
  scores.player = 0;
  scores.cpu = 0;
  history.innerText = "";
  updateScore();
  buttons.forEach((btn) => btn.addEventListener("click", playTurn));
};

const scoreboard = document.querySelector(".scoreboard");
const history = document.querySelector(".history");
const buttons = document.querySelectorAll(".player-moves .move-button");
const resetButton = document.querySelector(".reset-button");

buttons.forEach((btn) => btn.addEventListener("click", playTurn));
buttons.forEach((btn) =>
  btn.addEventListener(
    "mouseenter",
    () => (btn.style.backgroundColor = "blanchedalmond")
  )
);
buttons.forEach((btn) =>
  btn.addEventListener("mouseleave", () => (btn.style.backgroundColor = "pink"))
);

resetButton.addEventListener("click", resetGame);

let turn = 1;
updateScore();
