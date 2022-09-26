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
const playRound = (playerChoice, computerChoice) => {
  console.log(
    `Player selected ${playerChoice}.\n` +
      `Computer selected ${computerChoice}.`
  );

  if (playerChoice === computerChoice) {
    console.log("Tie!");
  } else if (playerChoice === "rock") {
    if (computerChoice === "paper") {
      console.log("YOU LOSE! Paper beats Rock");
      increaseScore("cpu");
    } else {
      console.log("YOU WIN! Rock beats Scissors");
      increaseScore("player");
    }
  } else if (playerChoice === "paper") {
    if (computerChoice === "scissors") {
      console.log("YOU LOSE! Scissors beats Paper");
      increaseScore("cpu");
    } else {
      console.log("YOU WIN! Paper beats Rock");
      increaseScore("player");
    }
  } else if (playerChoice === "scissors") {
    if (computerChoice === "rock") {
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
    playRound(getPlayerChoice(), getComputerChoice());
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

game();

//console.log(`CPU selected ${getComputerChoice()}`);
//console.log(`Player selected ${getPlayerChoice()}`);

//obtain computer's choice
//compare RPS to return the winner
