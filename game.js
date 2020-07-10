let options = ['rock', 'paper', 'scissors'];
let playerResults = 0;
let computerResults = 0;
let roundsPlayed = 0;
let imagesArray = [
  'images/Stickers-tool.jpg',
  'images/paper.jpg',
  'images/scissors.jpg',
];

function playRound(computerSelection, playerSelection) {
  console.log(`computer:${computerSelection}`);
  console.log(`player:${playerSelection}`);
  if (computerSelection === 'rock' && playerSelection === 'paper') {
    playerResults++;
  } else if (computerSelection === 'rock' && playerSelection === 'scissors') {
    computerResults++;
  } else if (computerSelection === 'paper' && playerSelection === 'rock') {
    computerResults++;
  } else if (computerSelection === 'paper' && playerSelection === 'scissors') {
    playerResults++;
  } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
    computerResults++;
  } else if (computerSelection === 'scissors' && playerSelection === 'rock') {
    playerResults++;
  } else {
    return "It's a tie";
  }
}
function displayScore() {
  document.querySelector('#player-score').textContent = playerResults;
  document.querySelector('#computer-score').textContent = computerResults;
}
const rockSound = new Audio();
rockSound.src = 'audio/rock.mp3';

const paperSound = new Audio();
paperSound.src = 'audio/paper.mp3';

const scissorsSound = new Audio();
scissorsSound.src = 'audio/scissors.mp3';

// Rock Pick
document.querySelector('#rock').addEventListener('click', () => {
  let computerSelection = options[Math.floor(Math.random() * options.length)];
  const playerSelection = options[0];
  displayComputerChoice(computerSelection);
  playRound(computerSelection, playerSelection);
  displayScore();
});

document.querySelector('#paper').addEventListener('click', () => {
  let computerSelection = options[Math.floor(Math.random() * options.length)];
  const playerSelection = options[1];
  displayComputerChoice(computerSelection);
  playRound(computerSelection, playerSelection);
  displayScore();
});
document.querySelector('#scissors').addEventListener('click', () => {
  let computerSelection = options[Math.floor(Math.random() * options.length)];
  const playerSelection = options[2];
  displayComputerChoice(computerSelection);
  playRound(computerSelection, playerSelection);
  displayScore();
});
function displayComputerChoice(choice) {
  choiceElement = document.querySelector(`#computer-${choice}`);
  choiceElement.style.borderRadius = '50%';
  setTimeout(function () {
    choiceElement.style.borderRadius = '0%';
  }, 1000);
}

document.querySelector('#reset-button').addEventListener('click', () => {
  document.querySelector('#player-score').textContent = '0';
  document.querySelector('#computer-score').textContent = '0';
  computerResults = 0;
  playerResults = 0;
  roundsPlayed = 0;
});

console.log(playerResults);
console.log(computerResults);
