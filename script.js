//define the available moves
const moves = ["Rock", "Paper", "Scissors"];

//obtain player's choice, sanitize it and keep asking if it isn't valid
const getplayerSelection = (e) => {
  let playerSelection = e.target.innerText;
  alert(playerSelection);
  return playerSelection;
};

//obtain computer's choice by randomly outputting rock papper scissors
const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * moves.length);
  let computerChoice = moves[randomNumber];
  return computerChoice;
};

//create a scoreboard object
const scores = {
  player: 0,
  cpu: 0,
};

//call to add scores if necessary
const increaseScore = (winner) => {
  winner === "player" ? scores.player++ : scores.cpu++;
};

//play round of RPS using both selections as argument
const playRound = (playerSelection, computerChoice) => {
  console.log(
    `Player selected ${playerSelection}.\n` +
      `Computer selected ${computerChoice}.`
  );

  if (playerSelection === computerChoice) {
    console.log("Tie!");
  } else if (playerSelection === "Rock") {
    if (computerChoice === "Paper") {
      console.log("YOU LOSE! Paper beats Rock");
      increaseScore("cpu");
    } else {
      console.log("YOU WIN! Rock beats Scissors");
      increaseScore("player");
    }
  } else if (playerSelection === "Paper") {
    if (computerChoice === "Scissors") {
      console.log("YOU LOSE! Scissors beats Paper");
      increaseScore("cpu");
    } else {
      console.log("YOU WIN! Paper beats Rock");
      increaseScore("player");
    }
  } else if (playerSelection === "Scissors") {
    if (computerChoice === "Rock") {
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
    playRound(getplayerSelection(), getComputerChoice());
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

const buttons = document.querySelectorAll(".playerBoard button");
buttons.forEach((btn) => btn.addEventListener("click", getplayerSelection));
