let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let computerChoices = ["Rock", "Paper", "Scissors"];
    let randomNumber = Math.floor(Math.random() * 3);
    let computerChoice = computerChoices[randomNumber];
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        container.textContent = "It's a draw";
        
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        container.textContent = "You lose";
        computerScore++;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        container.textContent = "You lose";
        computerScore++;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        container.textContent = "You lose";
        computerScore++;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        container.textContent = "You win";
        playerScore++;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        container.textContent = "You win";
        playerScore++;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        container.textContent = "You win";
        playerScore++;
    }

    roundResults.textContent = `Player Score: ${playerScore}` + `Computer Score: ${computerScore}`;

    if (playerScore === 5) {
        roundResults.textContent = "The player has won the game!";
        playerScore = 0;
        computerScore = 0;

    } else if (computerScore === 5) {
        roundResults.textContent = "The computer has won the game!";
        playerScore = 0;
        computerScore = 0;
    }
}


const container = document.querySelector(".container");
const roundResults = document.querySelector(".roundresults");

//Refactored

const buttons = document.querySelectorAll(".choice");

buttons.forEach(button => {
  button.addEventListener("click", function () {
    const choice = this.getAttribute("data-choice");
    let computerSelection = getComputerChoice();
    playRound(choice, computerSelection);
  });
});

/* Old code
document.getElementById("rock").addEventListener("click", function () {
    let computerSelection = getComputerChoice();
    playRound("rock", computerSelection);
})

document.getElementById("paper").addEventListener("click", function () {
    let computerSelection = getComputerChoice();
    playRound("paper", computerSelection);
})

document.getElementById("scissors").addEventListener("click", function () {
    let computerSelection = getComputerChoice();
    playRound("scissors", computerSelection);
})
*/