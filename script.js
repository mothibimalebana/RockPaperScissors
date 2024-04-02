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

    else if(playerSelection == "Rock" && computerSelection == "Scissors")
        console.log(`You win, ${playerSelection} beats ${computerSelection}`);

    //playerSelection == "Rock"
    else if(playerSelection == "Paper" && computerSelection == "Rock")
        console.log(`You win, ${playerSelection} beats ${computerSelection}`);

    else if(playerSelection == "Paper" && computerSelection == "Paper")
        console.log(`Draw, ${computerSelection} is the same as ${playerSelection}`);

    else if(playerSelection == "Paper" && computerSelection == "Scissors")
        console.log(`You lose, ${computerSelection} beats ${playerSelection}`);

    //playerSelection == "Scissors"
    else if(playerSelection == "Scissors" && computerSelection == "Rock")
        console.log(`You lose, ${computerSelection} beats ${playerSelection}`);

    else if(playerSelection == "Scissors" && computerSelection == "Paper")
        console.log(`You win, ${playerSelection} beats ${computerSelection}`);

    else if(playerSelection == "Scissors" && computerSelection == "Scissors");
}

const playerSelection = "Rock";
const computerSelection = getComputerChoice();
console.log(`Player selection: ${playerSelection} \ncomputerSelection: ${computerSelection}`);
console.log(playRound(playerSelection, computerSelection));