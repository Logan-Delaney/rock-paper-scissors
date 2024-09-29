console.log("Welcome to Logan Delaney's Rock, Paper, Scissors");

const buttons = document.querySelectorAll(".btn");
const playerScore = document.querySelector("#pscore");
const compScore = document.querySelector("#cscore");
const outcomeText = document.querySelector("#outcome");
const subtext = document.querySelector("#subtext")

let humanScore = 0;
let computerScore = 0;



buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    subtext.textContent = "Please make a selection:";
    let playerChoice = e.target.id;
    let computerChoice = getComputerChoice()
    console.log(playRound(playerChoice, computerChoice));

  })
})

function getComputerChoice() {
  let computerSelect = "";
  let compNum = Math.random();
  if (compNum <= 0.33) {
    computerSelect = "rock";
  } else if (compNum > 0.33 && compNum <= 0.66) {
    computerSelect = "paper";
  } else if (compNum > 0.66) {
    computerSelect = "scissors";
  }
  return computerSelect;
}

function playRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    outcomeText.textContent = "You tied. " + playerChoice + " = " + computerChoice;
    playerScore.textContent = "Your score is: " + humanScore;
    compScore.textContent = "Computer score is: " + computerScore;
  }
  else if (playerChoice === "rock" && computerChoice == "scissors"
    || playerChoice === "paper" && computerChoice == "rock"
    || playerChoice === "scissors" && computerChoice == "paper"
  ) {
    humanScore++;
    outcomeText.textContent = "You win. " + playerChoice + " beats " + computerChoice;
    playerScore.textContent = "Your score is: " + humanScore;
    compScore.textContent = "Computer score is: " + computerScore;
  }
  else if (playerChoice === "rock" && computerChoice == "paper"
    || playerChoice === "paper" && computerChoice == "scissors"
    || playerChoice === "scissors" && computerChoice == "rock"
  ) {
    computerScore++;
    outcomeText.textContent = "You lose. " + playerChoice + " loses to " + computerChoice;
    playerScore.textContent = "Your score is: " + humanScore;
    compScore.textContent = "Computer score is: " + computerScore;
  }

  if (humanScore == 5) {
    subtext.textContent = "You win! You were the first to 5";
    humanScore = 0;
    computerScore = 0;
  }

  else if (computerScore == 5) {
    subtext.textContent = "You lose! Computer was the first to 5";
    humanScore = 0;
    computerScore = 0;
  }
}
