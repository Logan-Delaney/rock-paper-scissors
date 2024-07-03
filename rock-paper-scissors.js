console.log("Welcome to Logan Delaney's Rock, Paper, Scissors");

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
//console.log(getComputerChoice());

function getPlayerChoice(message = "Please input Rock, Paper, or Scissors") {
  switch (prompt(message).toLowerCase()) {
    case "rock":
      return "rock";
      break;
    case "paper":
      return "paper";
      break;
    case "scissors":
      return "scissors";
      break;
    default:
      return getPlayerChoice(
        "Please enter a valid option. Rock, Paper, or Scissors"
      );
  }
}
//console.log(getPlayerChoice());

let humanScore = 0;
let computerScore = 0;

function playRound(playerChoice, computerChoice) {
  if (playerChoice == computerChoice) {
    alert("You tie. " + playerChoice + " equals " + computerChoice);
    return 0;
  } else if (playerChoice == "rock" && computerChoice == "scissors") {
    alert("You win. " + playerChoice + " beats " + computerChoice);
    return 1;
  } else if (playerChoice == "paper" && computerChoice == "rock") {
    alert("You win. " + playerChoice + " beats " + computerChoice);
    return 1;
  } else if (playerChoice == "scissors" && computerChoice == "paper") {
    alert("You win. " + playerChoice + " beats " + computerChoice);
    return 1;
  } else {
    alert("You lose. " + playerChoice + " loses to " + computerChoice);
    return 2;
  }
}

//console.log(playRound(getPlayerChoice(), getComputerChoice()))

function playGame() {
  while (humanScore < 3 && computerScore < 3) {
    roundScore = playRound(getPlayerChoice(), getComputerChoice());
    if (roundScore == 1) {
      humanScore++;
      alert(
        "Player gains one point. The score is Player: " +
          humanScore +
          " Computer: " +
          computerScore
      );
    } else if (roundScore == 2) {
      computerScore++;
      alert(
        "Computer gains one point. The score is Player: " +
          humanScore +
          " Computer: " +
          computerScore
      );
    } else {
      alert(
        "No score change that round. The score is Player: " +
          humanScore +
          " Computer: " +
          computerScore
      );
    }
  }
  alert("Final Score is Player: " + humanScore + " Computer: " + computerScore);
}

playGame();
