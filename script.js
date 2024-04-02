let gameChoices = ["Rock", "Paper", "Scissors"];

//function to get a choice for computer
function getComputerChoice () {
    return gameChoices[(Math.floor(Math.random() * gameChoices.length))];
}

//function to play a round
function playRound (playerSelection, computerSelection) {
    //playerSelection == "Rock"
    if(playerSelection == "rock" && computerSelection == "Rock")
        console.log(`Draw, ${computerSelection} is the same as ${playerSelection}`);

    else if(playerSelection == "rock" && computerSelection == "Paper")
        console.log(`You lose, ${computerSelection} beats ${playerSelection}`);

    else if(playerSelection == "rock" && computerSelection == "Scissors")
        console.log(`You win, ${playerSelection} beats ${computerSelection}`);

    //playerSelection == "Rock"
    else if(playerSelection == "paper" && computerSelection == "Rock")
        console.log(`You win, ${playerSelection} beats ${computerSelection}`);

    else if(playerSelection == "paper" && computerSelection == "Paper")
        console.log(`Draw, ${computerSelection} is the same as ${playerSelection}`);

    else if(playerSelection == "paper" && computerSelection == "Scissors")
        console.log(`You lose, ${computerSelection} beats ${playerSelection}`);

    //playerSelection == "Scissors"
    else if(playerSelection == "scissors" && computerSelection == "Rock")
        console.log(`You lose, ${computerSelection} beats ${playerSelection}`);

    else if(playerSelection == "scissors" && computerSelection == "Paper")
        console.log(`You win, ${playerSelection} beats ${computerSelection}`);

    else if(playerSelection == "scissors" && computerSelection == "Scissors");

    else
        console.log("Either you didn't spell Scissors right or you choose a invalid token")
}

playerSelection = prompt("Please enter a selection:", "Rock/ Paper/ Scissors")
playerSelection = playerSelection.toLowerCase();

const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));