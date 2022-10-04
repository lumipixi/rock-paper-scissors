//define the available moves
const moves = ["rock", "paper", "scissors"];

// const getplayerSelection = (e) => {
//   let playerSelection = e.target.getAttribute("data-move");
//   console.log(playerSelection);
//   return playerSelection;
// };

//obtain computer's choice by randomly outputting rock papper scissors
const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * moves.length);
  let computerChoice = moves[randomNumber];
  return computerChoice;
};

const scores = {
  player: 0,
  cpu: 0,
};

//call to add scores if necessary
const increaseScore = (winner) => {
  winner === "player" ? scores.player++ : scores.cpu++;
};

//play round of RPS using both selections as argument
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

//main game loop, play five rounds
const game = () => {
  for (let i = 0; i < 5; i++) {
    console.log(">> Turn " + i);
    fight(getplayerSelection(), getComputerChoice());
    console.log(
      `SCOREBOARD\n` + `You: ${scores.player}\n` + `Computer: ${scores.cpu}`
    );
    console.log("");
  }

  if (scores.player === scores.cpu) {
    console.log("FINAL RESULT: TIE!");
  } else if (scores.player < scores.cpu) {
    console.log("FINAL RESULT: YOU LOSE!");
  } else {
    console.log("FINAL RESULT: YOU WIN!");
  }
};

const updateScore = () => {
  scoreboard.innerText = `
    Player: ${scores.player}
    CPU: ${scores.cpu}`.trim();
}

const checkTurn = () => {
  if (turn === 0) alert("Game Over")
}

const playRound = (e) => {
  const playerMove = e.target.getAttribute("data-move");
  const cpuMove = getComputerChoice();

  fight(playerMove, cpuMove);

  updateScore()
  turn++
};


const scoreboard = document.querySelector(".scoreboard");
const history = document.querySelector(".history");
const buttons = document.querySelectorAll(".move-button");
buttons.forEach((btn) => btn.addEventListener("click", playRound));
buttons.forEach((btn) => btn.addEventListener("mouseenter", () => btn.style.backgroundColor = "blanchedalmond"));
buttons.forEach((btn) => btn.addEventListener("mouseleave", () => btn.style.backgroundColor = "pink"));


let turn = 1;
updateScore()

