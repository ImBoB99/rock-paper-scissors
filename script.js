let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let computerChoices = ["Rock", "Paper", "Scissors"];
    let randomNumber = Math.floor(Math.random() * 3);
    let computerChoice = computerChoices[randomNumber];
    return computerChoice;
}

function checkScore() {
    if (playerScore === 5) {
        roundResults.innerHTML = "The player has won the game!<br>Refresh the page to play again";
        playerScore = 0;
        computerScore = 0;
        disableButtons();

    } else if (computerScore === 5) {
        roundResults.innerHTML = "The computer has won the game!<br>Refresh the page to play again";
        playerScore = 0;
        computerScore = 0;
        disableButtons();
    }
}

function updateResult(result) {
    container.textContent = result;
}

function scoreboard() {
    roundResults.innerHTML = `Player Score: ${playerScore}` + "<br>" + `Computer Score: ${computerScore}`;
}

function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true;
    })
}

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        updateResult("It's a draw");
        
    } else if (
        (playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "rock")
    ) {
        updateResult("You lose");
        computerScore++;
    } else {
        updateResult("You win");
        playerScore++;
    }

    scoreboard();
    checkScore();

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