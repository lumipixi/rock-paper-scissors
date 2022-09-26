const moves = ["rock", "paper", "scissors"];

//obtain player's choice, sanitize it and keep asking if it isn't valid
const getPlayerChoice = () => {
  let response = prompt("What will you play?\nType rock, paper or scissors.");
  let playerChoice = response.toLowerCase();
  //let isAlpha = () => /^[a-zA-Z]*$/.test(response);

  //As long as playerChoice isn't a valid move, keep asking and convert to lower
  while (moves.includes(playerChoice) != true) {
    response = prompt("Enter a valid move.\nType rock, paper or scissors.");
    playerChoice = response.toLowerCase();
  }

  return playerChoice;
};

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

const increaseScore = (winner) => {
  winner === "player" ? scores.player++ : scores.cpu++;
};

//play round of RPS using both selections as argument
const playRound = (playerChoice, computerChoice) => {
  console.log(
    `Player selected ${playerChoice}.\n` +
      `Computer selected ${computerChoice}.`
  );

  if (playerChoice === computerChoice) {
    console.log("Tie!");
  } else if (playerChoice === "rock") {
    computerChoice === "paper"
      ? console.log("You lose! Paper beats Rock")
      : console.log("You win! Rock beats Scissors");
  } else if (playerChoice === "paper") {
    computerChoice === "scissors"
      ? console.log("You lose! Scissors beats Paper")
      : console.log("You win! Paper beats Rock");
  } else if (playerChoice === "scissors") {
    computerChoice === "rock"
      ? console.log("You lose! Rock beats Scissors")
      : console.log("You win! Scissors beats Paper");
  }
};

playRound(getPlayerChoice(), getComputerChoice());

//console.log(`CPU selected ${getComputerChoice()}`);
//console.log(`Player selected ${getPlayerChoice()}`);

//obtain computer's choice
//compare RPS to return the winner
