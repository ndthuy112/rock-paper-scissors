let playerScore = 0;
let computerScore = 0;


const container = document.querySelector(".selection-container");
container.addEventListener("click", function (e) {
    const playerChoice = e.target.id;
    const computerChoice = generateComputerChoice();
    if (playerChoice !== "rock" && playerChoice !== "paper" && playerChoice !== "scissors") {
        return;
    }
    const selectionText = `You selected ${playerChoice}. Computer selected ${computerChoice}.`
    const selectionParagraph = document.createElement("p");
    selectionParagraph.textContent = selectionText;

    const result = resolve(playerChoice, computerChoice);
    const resultParagraph = document.createElement("p");
    let resultText;
    switch (result) {
        case 0:
            resultText = "Draw game.";
            break;
        case 1:
            playerScore++;
            resultText = "You won!"
            break;
        case 2:
            computerScore++;
            resultText = "You lose!";
            break;
        default:
            resultText = "Unexpected error happened.";
            break;
    }
    resultParagraph.textContent = `${resultText} Your score: ${playerScore}. Computer score: ${computerScore}.`

    const textControl = document.querySelector(".text-control");
    textControl.innerHTML = "";
    textControl.appendChild(selectionParagraph);
    textControl.appendChild(resultParagraph);
});


function generateComputerChoice () {
    let computerNumber = Math.floor(Math.random() * 3)
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
            throw new Error("Failed to get computer choice!");
    }
    return computerChoice;
}

//Return 0 if drawn, 1 if player wins, 2 if computer wins, null if fails
function resolve (playerChoice, computerChoice) {
    if (playerChoice !== "rock" && playerChoice !== "paper" && playerChoice !== "scissors") {
        return null;
    }
    
    if (playerChoice === computerChoice) {
        return 0;
    }
    else if (playerChoice === "rock") {
        if (computerChoice === "paper") {
            return 2;
        }
        else {
            return 1;
        }
    }
    else if (playerChoice === "paper") {
        if (computerChoice === "scissors") {
            return 2;
        }
        else {
            return 1;
        }
    }
    else if (playerChoice === "scissors") {
        if (computerChoice === "rock") {
            return 2;
        }
        else {
            return 1;
        }
    }
}