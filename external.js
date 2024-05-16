let playerScore = 0;
let computerScore = 0;
let roundNumber = 0;
while (roundNumber < 5)
{
    playRound();
    roundNumber++;
}

function askForPlayerChoice() {
    let playerChoice = ""
    while (true)
    {
        playerChoice = prompt("What's your choice?").toLowerCase();
        if (playerChoice !== "rock" && playerChoice !== "paper" && playerChoice !== "scissors") 
        {
            console.log("Invalid choice!");
        }
        else
        {
            break;
        }
    }
    return playerChoice;
}

function generateComputerChoice () {
    let computerNumber = Math.floor(Math.random() * 2)
    let computerChoice;
    switch (computerNumber)
    {
        case 0:
            computerChoice = "rock";
            break;
        case 1:
            computerChoice = "paper";
            break;
        case 2:
            computerChoice = "scissors";
            break;
        default:
            throw new Error("Failed to get computer choice");
    }
    return computerChoice;
}

function playRound () {
    let playerChoice = askForPlayerChoice();
    let computerChoice = generateComputerChoice();
    console.log(`You selected ${playerChoice}. Computer selected ${computerChoice}.`)
    if (playerChoice === computerChoice) {
        console.log("Draw.");
    }
    else if (playerChoice === "rock") {
        if (computerChoice === "paper") {
            console.log("You lose!");
            computerScore++;
        }
        else {
            console.log("You won!");
            playerScore++;
        }
    }
    else if (playerChoice === "paper") {
        if (computerChoice === "scissors") {
            console.log("You lose!");
            computerScore++;
        }
        else {
            console.log("You won!");
            playerScore++;
        }
    }
    else if (playerChoice === "scissors") {
        if (computerChoice === "rock") {
            console.log("You lose!");
            computerScore++;
        }
        else {
            console.log("You won!");
            playerScore++;
        }
    }
    console.log(`Your score: ${playerScore}. Computer score: ${computerScore}`)
}