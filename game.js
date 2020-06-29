let options = ["rock", "paper", "scissors"];
let playerResults = 0;
let computerResults = 0;
let roundsPlayed = 0;
let imagesArray = [
  "images/Stickers-tool.jpg",
  "images/paper.jpg",
  "images/scissors.jpg",
];

function playRound(computerSelection, playerSelection) {
  console.log(`computer:${computerSelection}`);
  console.log(`player:${playerSelection}`);
  if (computerSelection === "rock" && playerSelection === "paper") {
    playerResults++;
  } else if (computerSelection === "rock" && playerSelection === "scissors") {
    computerResults++;
  } else if (computerSelection === "paper" && playerSelection === "rock") {
    computerResults++;
  } else if (computerSelection === "paper" && playerSelection === "scissors") {
    playerResults++;
  } else if (computerSelection === "scissors" && playerSelection === "paper") {
    computerResults++;
  } else if (computerSelection === "scissors" && playerSelection === "rock") {
    playerResults++;
  } else {
    return "It's a tie";
  }
}
function displayScore() {
  document.querySelector("#player-score").textContent = playerResults;
  document.querySelector("#computer-score").textContent = computerResults;
}
var rockSound = new Audio();
rockSound.src = "audio/rock.mp3";

var paperSound = new Audio();
paperSound.src = "audio/paper.mp3";

var scissorsSound = new Audio();
scissorsSound.src = "audio/scissors.mp3";

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
function displayComputerChoice() {
  let computerSelection = options[Math.floor(Math.random() * options.length)];

  if (computerSelection === options[0]) {
    document.getElementById("computerRock").click();
  } else if (computerSelection === options[1]) {
    document.getElementById("computerPaper").click();
  } else {
    document.getElementById("computerScissors").click();
    // $("#computerScissors").trigger("click");
  }
  console.log(computerSelection);
}
// console.log(computerSelection);
displayComputerChoice();
displayScore();
// playRound(computerSelection);

console.log(playerResults);
console.log(computerResults);
