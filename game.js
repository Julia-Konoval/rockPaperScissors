var things = ["rock", "paper", "scissors"];
var results = 0;
let playerSelection = prompt("Rock, paper, scissors?");
let computerSelection = function computerPlay() {
  return things[Math.floor(Math.random() * things.length)];
};
console.log(computerSelection);

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection == "rock" && computerSelection == "paper") {
    alert("You Lose! Paper beats Rock");
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    alert("You win! Paper beats Rock");
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    alert("You Lose! Paper beats Rock");
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    alert("You win! Scissors beat paper");
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    alert("You Lose! Rock beats Scissors");
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    alert("You win! Scissors  beat rock");
  }
}
for (var i = 0; i < 6; i++) {
  function game(playRound) {
    if ((alert = "You win!")) {
      return results + 1;
    } else {
      return results;
    }
  }
}
alert(results);
