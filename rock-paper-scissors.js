console.log("Welcome to Logan Delaney's Rock, Paper, Scissors");

function getComputerChoice() {
let computerChoice = ""
let compNum = Math.random();
if (compNum <= .33) {
    computerChoice = "rock"
}
else if (compNum > .33 && compNum <= .66) {
    computerChoice = "paper"
}
else if (compNum > .66) {
    computerChoice = "scissors"
}
return computerChoice

}
console.log(getComputerChoice())
