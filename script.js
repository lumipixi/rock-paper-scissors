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
    console.log("Tie!");
  } else if (playerMove === "rock") {
    if (cpuMove === "paper") {
      console.log("YOU LOSE! Paper beats Rock");
      increaseScore("cpu");
    } else {
      console.log("YOU WIN! Rock beats Scissors");
      increaseScore("player");
    }
  } else if (playerMove === "paper") {
    if (cpuMove === "scissors") {
      console.log("YOU LOSE! Scissors beats Paper");
      increaseScore("cpu");
    } else {
      console.log("YOU WIN! Paper beats Rock");
      increaseScore("player");
    }
  } else if (playerMove === "scissors") {
    if (cpuMove === "rock") {
      console.log("YOU LOSE! Rock beats Scissors");
      increaseScore("cpu");
    } else {
      console.log("YOU WIN! Scissors beats Paper");
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

const fakeRound = (e) => {
  const playerMove = e.target.getAttribute("data-move");
  const cpuMove = getComputerChoice();

  fight(playerMove, cpuMove);

  scoreboard.innerText = `
  Player: ${scores.player}
  CPU: ${scores.cpu}`.trim();
};

const buttons = document.querySelectorAll(".playerBoard button");
buttons.forEach((btn) => btn.addEventListener("click", fakeRound));

const scoreboard = document.querySelector(".scoreboard");
scoreboard.innerText = `
  Player: ${scores.player}
  CPU: ${scores.cpu}`.trim();
