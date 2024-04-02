let gameChoices = ["Rock", "Paper", "Scissors"];

//function to get a choice for computer
function getComputerChoice () {
    return gameChoices[(Math.floor(Math.random() * gameChoices.length))];
}

//function to play a round
function playRound (playerSelection, computerSelection) {
    //playerSelection == "Rock"
    if(playerSelection == "Rock" && computerSelection == "Rock")
        console.log(`Draw, ${computerSelection} is the same as ${playerSelection}`);

    else if(playerSelection == "Rock" && computerSelection == "Paper")
        console.log(`You lose, ${computerSelection} beats ${playerSelection}`);

    else if(playerSelection == "Rock" && computerSelection == "Scissor")
        console.log(`You win, ${playerSelection} beats ${computerSelection}`);

    //playerSelection == "Rock"
    else if(playerSelection == "Paper" && computerSelection == "Rock")
        console.log(`You win, ${playerSelection} beats ${computerSelection}`);

    else if(playerSelection == "Paper" && computerSelection == "Paper")
        console.log(`Draw, ${computerSelection} is the same as ${playerSelection}`);

    else if(playerSelection == "Paper" && computerSelection == "Scissor")
        console.log(`You lose, ${computerSelection} beats ${playerSelection}`);

    //playerSelection == "Scissors"
    else if(playerSelection == "Scissor" && computerSelection == "Rock")
        console.log(`You lose, ${computerSelection} beats ${playerSelection}`);

    else if(playerSelection == "Scissor" && computerSelection == "Paper")
        console.log(`You win, ${playerSelection} beats ${computerSelection}`);

    else if(playerSelection == "Scissor" && computerSelection == "Scissor");
}

const playerSelection = "Rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));