let gameChoices = ["Rock", "Paper", "Scissors"];
let playerPoints = 0;
let computerPoints = 0;

//function to get a choice for computer
function getComputerChoice () {
    return gameChoices[(Math.floor(Math.random() * gameChoices.length))];
}
function winPlayer() {
    return playerPoints++;
}
function winComputer() {
    return computerPoints++;
}

//function to play a round
function playRound (playerSelection, computerSelection) {
    //playerSelection == "Rock"
    if(playerSelection == "rock" && computerSelection == "Rock")
        console.log(`Draw, ${computerSelection} is the same as ${playerSelection}`);

    else if(playerSelection == "rock" && computerSelection == "Paper")
        {
            console.log(`You lose, ${computerSelection} beats ${playerSelection}`);
            winComputer();
        }

    else if(playerSelection == "rock" && computerSelection == "Scissors")
        {
            console.log(`You win, ${playerSelection} beats ${computerSelection}`);
            winPlayer();
        }

    //playerSelection == "Rock"
    else if(playerSelection == "paper" && computerSelection == "Rock")
        {
            console.log(`You win, ${playerSelection} beats ${computerSelection}`);
            winPlayer();
        }

    else if(playerSelection == "paper" && computerSelection == "Paper")
        console.log(`Draw, ${computerSelection} is the same as ${playerSelection}`);

    else if(playerSelection == "paper" && computerSelection == "Scissors")
        {
            console.log(`You lose, ${computerSelection} beats ${playerSelection}`);
            winComputer();
        }

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
while(playerPoints != 5 || computerPoints != 5){
playRound(playerSelection, computerSelection);
}