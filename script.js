let gameChoices = ["rock", "paper", "scissors"];
let playerPoints = 0;
let computerPoints = 0;

//function to get player's choice
function getPlayerChoice() {
    playerSelection = prompt("Please enter a selection:", "rock/ paper/ scissors")
    playerSelection = playerSelection.toLowerCase();

    return playerSelection;
}
//function to get a choice for computer
function getComputerChoice () {
    return gameChoices[(Math.floor(Math.random() * gameChoices.length))];
}
//function to play a round
function playRound (playerSelection, computerSelection) {
    //playerSelection == "rock"
    if(playerSelection == "rock" && computerSelection == "rock")
        console.log(`Draw, ${computerSelection} is the same as ${playerSelection}`);

    else if(playerSelection == "rock" && computerSelection == "paper"){
        computerPoints++;
        console.log(`You lose, ${computerSelection} beats ${playerSelection}`);
    }

    else if(playerSelection == "rock" && computerSelection == "scissors"){
        playerPoints++;
        console.log(`You win, ${playerSelection} beats ${computerSelection}`);
    }

    //playerSelection == "rock"
    else if(playerSelection == "paper" && computerSelection == "rock"){
        playerPoints++;
        console.log(`You win, ${playerSelection} beats ${computerSelection}`);
    }

    else if(playerSelection == "paper" && computerSelection == "paper")
        console.log(`Draw, ${computerSelection} is the same as ${playerSelection}`);

    else if(playerSelection == "paper" && computerSelection == "scissors"){
        computerPoints++;
        console.log(`You lose, ${computerSelection} beats ${playerSelection}`);
    }

    //playerSelection == "scissors"
    else if(playerSelection == "scissors" && computerSelection == "rock"){
        computerPoints++;
        console.log(`You lose, ${computerSelection} beats ${playerSelection}`);
    }

    else if(playerSelection == "scissors" && computerSelection == "paper"){
        playerPoints++;
        console.log(`You win, ${playerSelection} beats ${computerSelection}`);
    }

    else if(playerSelection == "scissors" && computerSelection == "scissors")
        console.log(`Draw, ${computerSelection} is the same as ${playerSelection}`);    

    else
        console.log("Either you didn't spell scissors right or you choose a invalid token")
}
function getWinner(playerPoints, computerPoints) {
    if (playerPoints < computerPoints)
        console.log("Computer wins");
    else
        console.log("You win");
}

// playerSelection = getPlayerChoice();
// computerSelection = getComputerChoice();
// playRound(playerSelection, computerSelection);
