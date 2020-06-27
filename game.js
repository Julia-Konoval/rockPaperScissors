let options = ["rock", "paper", "scissors"];
let yourResults = 0;
let computerResults = 0;
let roundsPlayed = 0;

function playRound(computerSelection, playerSelection) {
  playerSelection = playerSelection.toLowerCase();
  console.log(`computer:${computerSelection}`);
  console.log(`player:${playerSelection}`);
  if (computerSelection === "rock" && playerSelection === "paper") {
    yourResults++;
  } else if (computerSelection === "rock" && playerSelection === "scissors") {
    computerResults++;
  } else if (computerSelection === "paper" && playerSelection === "rock") {
    computerResults++;
  } else if (computerSelection === "paper" && playerSelection === "scissors") {
    yourResults++;
  } else if (computerSelection === "scissors" && playerSelection === "paper") {
    computerResults++;
  } else if (computerSelection === "scissors" && playerSelection === "rock") {
    yourResults++;
  } else {
    return "It's a tie";
  }
}
function displayScore() {
  document.querySelector("#player-score").textContent = yourResults;
  document.querySelector("#computer-score").textContent = yourResults;
}

// Rock Pick
document.querySelector("#rock").addEventListener("click", () => {
  let computerSelection = options[Math.floor(Math.random() * options.length)];
  const playerSelection = options[0];
  playRound(computerSelection, playerSelection);
  displayScore();
});

document.querySelector("#paper").addEventListener("click", () => {
  let computerSelection = options[Math.floor(Math.random() * options.length)];
  const playerSelection = options[1];
  playRound(computerSelection, playerSelection);
  displayScore();
});
document.querySelector("#scissors").addEventListener("click", () => {
  let computerSelection = options[Math.floor(Math.random() * options.length)];
  const playerSelection = options[2];
  playRound(computerSelection, playerSelection);
  displayScore();
});

// console.log(computerSelection);
displayScore();
// playRound(computerSelection);

console.log(yourResults);
console.log(computerResults);
