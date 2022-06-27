let playerScores = 0,
  computerScores = 0;
const playerButtons = document.querySelectorAll('.player-button');
const result = document.querySelector('.result');
const p = document.createElement('p');
const playerScoresResult = document.querySelector('.playerScores');
const computerScoresResult = document.querySelector('.computerScores');
const h2 = document.createElement('h2');
const gameOverOutcome = document.querySelector('.gameOver');

function computerPlay() {
  let randomWeapons = ['rock', 'paper', 'scissors'];
  return randomWeapons[Math.floor(Math.random() * randomWeapons.length)];
}

function getPlayerSelection(event) {
  const playerSelection = event.target.textContent;
  const computerSelection = computerPlay();
  playRound(playerSelection.toLowerCase(), computerSelection);
  checkForTheWinner(playerScores, computerScores);
}

playerButtons.forEach((button) =>
  button.addEventListener('click', getPlayerSelection)
);

function playRound(playerSelection, computerSelection) {
  // Player Chooses Rock
  if (playerSelection === 'rock') {
    if (computerSelection === 'rock') {
      p.innerText = 'Tie!';
      result.appendChild(p);
    } else if (computerSelection === 'paper') {
      p.innerText = 'You lose! Paper beats Rock';
      computerScores++;
      result.appendChild(p);
      computerScoresResult.innerText = 'Computer: ' + computerScores;
    } else {
      p.innerText = 'You win! Rock beats Scissors';
      playerScores++;
      result.appendChild(p);
      playerScoresResult.innerText = 'Player: ' + playerScores;
    }
  } else if (playerSelection === 'paper') {
    // Player Chooses Paper
    if (computerSelection === 'rock') {
      p.innerText = 'You win! Paper beats Rock';
      playerScores++;
      result.appendChild(p);
      playerScoresResult.innerText = 'Player: ' + playerScores;
    } else if (computerSelection === 'paper') {
      p.innerText = 'Tie!';
      result.appendChild(p);
    } else {
      p.innerText = 'You lose! Scissors beats Paper';
      computerScores++;
      result.appendChild(p);
      computerScoresResult.innerText = 'Computer: ' + computerScores;
    }
  } else if (playerSelection === 'scissors') {
    // Player Chooses Scissors
    if (computerSelection === 'rock') {
      p.innerText = 'You lose! Rock beats Scissors';
      computerScores++;
      result.appendChild(p);
      computerScoresResult.innerText = 'Computer: ' + computerScores;
    } else if (computerSelection === 'paper') {
      p.innerText = 'You win! Scissors beats Paper';
      playerScores++;
      result.appendChild(p);
      playerScoresResult.innerText = 'Player: ' + playerScores;
    } else {
      p.innerText = 'Tie!';
      result.appendChild(p);
    }
  }
}

function checkForTheWinner(playerScores, computerScores) {
  if (playerScores === 5) {
    h2.classList.add('playerWon');
    h2.innerText = `You won ${playerScores} to ${computerScores} great job beating the computer!`;
    result.appendChild(h2);
    gameOver();
  } else if (computerScores === 5) {
    h2.classList.add('computerWon');
    h2.innerText = `You lose ${playerScores} to ${computerScores} great job beating the computer!`;
    result.appendChild(h2);
    gameOver();
  }
}

function gameOver() {
  const h2 = document.createElement('h2');
  playerButtons.forEach((button) =>
    button.removeEventListener('click', getPlayerSelection)
  );
  h2.innerText = 'The Game is Over!';
  gameOverOutcome.appendChild(h2);
}
