const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const result = document.querySelector('.result');

function computerPlay() {
  let randomWeapons = ['rock', 'paper', 'scissors'];
  return randomWeapons[Math.floor(Math.random() * randomWeapons.length)];
}

function playRound(playerSelection, computerSelection) {
  const p = document.createElement('p');
  let playerSelectionToLower = playerSelection.toLowerCase();

  // Player Chooses Rock
  if (playerSelectionToLower === 'rock') {
    if (computerSelection === 'rock') {
      p.innerText = 'Tie!';
      result.appendChild(p);
    } else if (computerSelection === 'paper') {
      p.innerText = 'You lose! Paper beats Rock';
      result.appendChild(p);
    } else {
      p.innerText = 'You win! Rock beats Scissors';
      result.appendChild(p);
    }
  }

  // Player Chooses Paper
  if (playerSelectionToLower === 'paper') {
    if (computerSelection === 'rock') {
      p.innerText = 'You win! Rock beats Paper';
      result.appendChild(p);
    } else if (computerSelection === 'paper') {
      p.innerText = 'Tie!';
      result.appendChild(p);
    } else {
      p.innerText = 'You lose! Scissors beats Paper';
      result.appendChild(p);
    }
  }

  // Player Chooses Scissors
  if (playerSelectionToLower === 'scissors') {
    if (computerSelection === 'rock') {
      p.innerText = 'You lose! Rock beats scissors';
      result.appendChild(p);
    } else if (computerSelection === 'paper') {
      p.innerText = 'You win! Paper beats scissors';
      result.appendChild(p);
    } else {
      p.innerText = 'Tie!';
      result.appendChild(p);
    }
  }
}

rock.addEventListener('click', function () {
  const playerSelection = 'rock';
  const computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);
});

paper.addEventListener('click', function () {
  const playerSelection = 'paper';
  const computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);
});

scissors.addEventListener('click', function () {
  const playerSelection = 'scissors';
  const computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);
});

// function game() {
//   for (let i = 0; i < 5; i++){
//     const playerSelection = prompt('Please enter the name of your weapon');
//     const computerSelection = computerPlay();
//     console.log(playRound(playerSelection, computerSelection));
//   }
// }
