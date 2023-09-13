console.log("HEY THIS WORKS");

function getComputerChoice() {
    let computerChoices = ["Rock", "Paper", "Scissors"];
    let randomNumber = Math.floor(Math.random() * 3);
    let computerChoice = computerChoices[randomNumber];
    console.log(computerChoice);
}