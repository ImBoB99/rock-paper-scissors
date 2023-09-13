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
        console.log("It's a draw");
        
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        console.log("You lose");
        computerScore++;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        console.log("You lose");
        computerScore++;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        console.log("You lose");
        computerScore++;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log("You win");
        playerScore++;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("You win");
        playerScore++;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log("You win");
        playerScore++;
    }
}

function game() {

    for (let i = 0; i <= 5; i++) {
        if (i == 5) {
            if (playerScore == computerScore) {
                console.log("The game was a draw");
            } else if (playerScore < computerScore){
                console.log("Computer won the game");
            } else {
                console.log("Player won the game");
            }
            playerScore = 0;
            computerScore = 0;
        } else {
            let playerSelection = prompt("Pick rock paper or scissors");
            let computerSelection = getComputerChoice();
    
            playRound(playerSelection, computerSelection);
            console.log("Scores ---- " + "Player: " + playerScore + " " + "Computer: " + computerScore);
        }
    }
}