let options = ["rock", "paper", "scissors"];
let yourResults = 0;
let computerResults = 0;

// function playRound(computerSelection) {
//   playerSelection = prompt("Rock, paper, scissors?");
//   playerSelection = playerSelection.toLowerCase();
//   if (playerSelection === "rock" && computerSelection === "paper") {
//     alert("You Lose! Paper beats Rock");
//   } else if (playerSelection === "paper" && computerSelection === "rock") {
//     alert("You win! Paper beats Rock");
//     results++;
//   } else if (playerSelection === "rock" && computerSelection === "paper") {
//     alert("You Lose! Paper beats Rock");
//   } else if (playerSelection === "scissors" && computerSelection === "paper") {
//     alert("You win! Scissors beat paper");
//     results++;
//   } else if (playerSelection === "scissors" && computerSelection === "rock") {
//     alert("You Lose! Rock beats Scissors");
//   } else if (playerSelection === "rock" && computerSelection === "scissors") {
//     alert("You win! Scissors  beat rock");
//     results++;
//   } else {
//     alert("Its a draw!");
//   }
// }

function representativeImages() {
  document.querySelector("#rock").onclick = options[0];
  document.querySelector("#paper").onclick = options[1];
  document.querySelector("#scissors").onclick = options[2];
}

function playRound(computerSelection, playerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (computerSelection === playerSelection) {
    return "It's a tie";
  } else if (computerSelection === "rock" && playerSelection === "paper") {
    return "You Win! Paper beats Rock";
    yourResults++;
  } else if (computerSelection === "rock" && playerSelection === "scissors") {
    return "You Lose! Rock beats Scissors";
    computerResults++;
  } else if (computerSelection === "paper" && playerSelection === "rock") {
    return "You Lose! Paper beats Rock";
    computerResults++;
  } else if (computerSelection === "paper" && playerSelection === "scissors") {
    return "You Win! Scissors beats Paper";
    yourResults++;
  } else if (computerSelection === "scissors" && playerSelection === "paper") {
    return "You Lose! Scissors beat Paper";
    computerResults++;
  } else if (computerSelection === "scissors" && playerSelection === "rock") {
    return "You Win! Rock beats Scissors";
    yourResults++;
  }
}

function displayScore() {
  document.querySelector("#player-score").textContent = yourResults;
  document.querySelector("#computer-score").textContent = computerResults;

  document.querySelector("#rock").addEventListener("click", () => {
    let computerSelection = options[Math.floor(Math.random() * options.length)];
    const playerSelection = "rock";
    console.log("Hi");
    playRound(computerSelection, playerSelection);
  });
  document.querySelector("#paper").addEventListener("click", () => {
    let computerSelection = options[Math.floor(Math.random() * options.length)];
    const playerSelection = "paper";
    console.log("Hi");
    playRound(computerSelection, playerSelection);
  });
  document.querySelector("#scissors").addEventListener("click", () => {
    let computerSelection = options[Math.floor(Math.random() * options.length)];
    const playerSelection = "scissors";
    console.log("Hi");
    playRound(computerSelection, playerSelection);
  });
  console.log(computerSelection);
  displayScore();
  playRound(computerSelection);
}

console.log(yourResults);
console.log(computerResults);
