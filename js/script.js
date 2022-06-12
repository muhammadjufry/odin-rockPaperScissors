function computerPlay() {
  let randomWeapons = ['rock', 'paper', 'scissors'];
  return randomWeapons[Math.floor(Math.random() * randomWeapons.length)];

}

function playRound(playerSelection, computerSelection) {
  let result = '';
  let playerSelectionToLower = playerSelection.toLowerCase();

  // Player Chooses Rock
  if (playerSelectionToLower === 'rock') {
    if (computerSelection === 'rock') {
      result = 'Tie!';
    } else if (computerSelection === 'paper') {
      result = 'You lose! Paper beats Rock';
    } else {
      result = 'You win! Rock beats Scissors';
    }
  }

  // Player Chooses Paper
  if (playerSelectionToLower === 'paper') {
    if (computerSelection === 'rock') {
      result = 'You win! Rock beats Paper';
    } else if (computerSelection === 'paper') {
      result = 'Tie!';
    } else {
      result = 'You lose! Scissors beats Paper';
    }
  }

  // Player Chooses Scissors
  if (playerSelectionToLower === 'scissors') {
    if (computerSelection === 'rock') {
      result = 'You lose! Rock beats scissors';
    } else if (computerSelection === 'paper') {
      result = 'You win! Paper beats scissors';
    } else {
      result = 'Tie!';
    }
  }
  return result;
}

function game(){
  for (let i = 0; i < 5; i++){
    const playerSelection = prompt('Please enter the name of your weapon');
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
  }
}
game();
