const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const result = document.querySelector(".result");
const playerScoresResult = document.querySelector(".playerScores");
const computerScoresResult = document.querySelector(".computerScores");
let playerScores = 0;
let computerScores = 0;

function computerPlay() {
  let randomWeapons = ["rock", "paper", "scissors"];
  return randomWeapons[Math.floor(Math.random() * randomWeapons.length)];
}

function playRound(playerSelection, computerSelection) {
  const p = document.createElement("p");
  let playerSelectionToLower = playerSelection.toLowerCase();

  // Player Chooses Rock
  if (playerSelectionToLower === "rock") {
    if (computerSelection === "rock") {
      p.innerText = "Tie!";
      result.appendChild(p);
    } else if (computerSelection === "paper") {
      p.innerText = "You lose! Paper beats Rock";
      computerScores++;
      result.appendChild(p);
      computerScoresResult.innerText = 'Computer: ' + computerScores;
    } else {
      p.innerText = "You win! Rock beats Scissors";
      playerScores++;
      result.appendChild(p);
      playerScoresResult.innerText = 'Player: ' + playerScores;
    }
  }

  // Player Chooses Paper
  if (playerSelectionToLower === "paper") {
    if (computerSelection === "rock") {
      p.innerText = "You win! Paper beats Rock";
      playerScores++;
      result.appendChild(p);
      playerScoresResult.innerText = 'Player: ' + playerScores;
    } else if (computerSelection === "paper") {
      p.innerText = "Tie!";
      result.appendChild(p);
    } else {
      p.innerText = "You lose! Scissors beats Paper";
      computerScores++;
      result.appendChild(p);
      computerScoresResult.innerText = 'Computer: ' + computerScores;
    }
  }

  // Player Chooses Scissors
  if (playerSelectionToLower === "scissors") {
    if (computerSelection === "rock") {
      p.innerText = "You lose! Rock beats Scissors";
      computerScores++;
      result.appendChild(p);
      computerScoresResult.innerText = 'Computer: ' + computerScores;
    } else if (computerSelection === "paper") {
      p.innerText = "You win! Scissors beats Paper";
      playerScores++;
      result.appendChild(p);
      playerScoresResult.innerText = 'Player: ' + playerScores;
    } else {
      p.innerText = "Tie!";
      result.appendChild(p);
    }
  }
}

const checkForTheWinner = function(playerScores, computerScores) {
  if(playerScores === 5) {
    const h2 = document.createElement("h2");
    h2.classList.add('playerWon');
    h2.innerText = `You won ${playerScores} to ${computerScores} great job beating the computer!`;
    result.appendChild(h2);
  } else if(computerScores === 5) {
    const h2 = document.createElement("h2");
    h2.classList.add('computerWon');
    h2.innerText = `You lost ${playerScores} to ${computerScores} great job beating the computer!`;
    result.appendChild(h2);
  }
}


rock.addEventListener("click", function () {
  const playerSelection = "rock";
  const computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);
  checkForTheWinner(playerScores, computerScores);
});

paper.addEventListener("click", function () {
  const playerSelection = "paper";
  const computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);
  checkForTheWinner(playerScores, computerScores);
});

scissors.addEventListener("click", function () {
  const playerSelection = "scissors";
  const computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);
  checkForTheWinner(playerScores, computerScores);
});

// function game() {
//   for (let i = 0; i < 5; i++){
//     const playerSelection = prompt('Please enter the name of your weapon');
//     const computerSelection = computerPlay();
//     console.log(playRound(playerSelection, computerSelection));
//   }
// }
