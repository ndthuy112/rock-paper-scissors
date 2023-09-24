const options = ["rock", "paper", "scissors", "rock"];

function getComputerChoice() {
    choice = Math.floor(Math.random()*3);
    return choice
}

function getPlayerChoice() {
    return prompt("rock/paper/scissors").toLowerCase();
}

computerSelection = getComputerChoice();
playerSelection = getPlayerChoice();

function result(computerSelection, playerSelection) {
    if (playerSelection == options[computerSelection]) {
        return "Tie!";
    }
    else if (playerSelection == options[computerSelection + 1]) {
        return `You win! ${playerSelection} beats ${options[computerSelection]}`;
    }
    else {
        return `You lose! ${playerSelection} loses to ${options[computerSelection]}`;
    }
}

console.log(result(computerSelection, playerSelection));
