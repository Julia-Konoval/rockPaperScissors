const modal = document.querySelector('#myModal');
let options = ['rock', 'paper', 'scissors'];
let playerResults = 0;
let computerResults = 0;
let roundsPlayed = 1;
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
  roundsPlayed++;
}
function displayScore() {
  document.querySelector('#player-score').textContent = playerResults;
  document.querySelector('#computer-score').textContent = computerResults;
}
function displayRound() {
  document.querySelector('#current-round').textContent = roundsPlayed;
}
function totalResults() {
  const modalContent = document.querySelector('.modal-content');
  // Get the <span> element that closes the modal
  const span = document.querySelector('#close');

  if (roundsPlayed === 6) {
    modal.style.display = 'block';

    if (playerResults > computerResults) {
      modalContent.style.backgroundImage = "url('images/win.JPEG')";
    } else if (playerResults < computerResults) {
      modalContent.style.backgroundImage = "url('images/lose.JPEG')";
    } else {
      modalContent.style.backgroundImage = "url('images/draw.JPEG')";
    }
  }
  span.onclick = function () {
    modal.style.display = 'none';
  };
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  };
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
  roundEnd();
});

document.querySelector('#paper').addEventListener('click', () => {
  let computerSelection = options[Math.floor(Math.random() * options.length)];
  const playerSelection = options[1];
  displayComputerChoice(computerSelection);
  playRound(computerSelection, playerSelection);
  roundEnd();
});
document.querySelector('#scissors').addEventListener('click', () => {
  let computerSelection = options[Math.floor(Math.random() * options.length)];
  const playerSelection = options[2];
  displayComputerChoice(computerSelection);
  playRound(computerSelection, playerSelection);
  roundEnd();
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
  document.querySelector('#current-round').textContent = '1';
  modal.style.display = 'none';
  computerResults = 0;
  playerResults = 0;
  roundsPlayed = 1;
});

function roundEnd() {
  displayScore();
  displayRound();
  totalResults();
}
