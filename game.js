var options = ["rock", "paper", "scissors"];
var results = 0;

function playRound(computerSelection) {
  playerSelection = prompt("Rock, paper, scissors?");
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection === "rock" && computerSelection === "paper") {
    alert("You Lose! Paper beats Rock");
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    alert("You win! Paper beats Rock");
    results++;
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    alert("You Lose! Paper beats Rock");
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    alert("You win! Scissors beat paper");
    results++;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    alert("You Lose! Rock beats Scissors");
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    alert("You win! Scissors  beat rock");
    results++;
  } else {
    alert("Its a draw!");
  }
}

function displayScore() {
  document.querySelector("#player-score").textContent = results;
}

function game() {
  for (var i = 0; i < 6; i++) {
    let computerSelection = options[Math.floor(Math.random() * options.length)];
    console.log(computerSelection);
    displayScore();
    playRound(computerSelection);
  }
}

game();
alert(results);
