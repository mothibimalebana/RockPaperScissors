let gameChoices = ["Rock", "Paper", "Scissors"];
let playerPoints = 0;
let computerPoints = 0;

//function to get player's choice
function getPlayerChoice() {
    playerSelection = prompt("Please enter a selection:", "Rock/ Paper/ Scissors")
    playerSelection = playerSelection.toLowerCase();

    return playerSelection;
}
//function to get a choice for computer
function getComputerChoice () {
    return gameChoices[(Math.floor(Math.random() * gameChoices.length))];
}
//function to play a round
function playRound (playerSelection, computerSelection) {
    //playerSelection == "Rock"
    if(playerSelection == "rock" && computerSelection == "Rock")
        console.log(`Draw, ${computerSelection} is the same as ${playerSelection}`);

    else if(playerSelection == "rock" && computerSelection == "Paper"){
        computerPoints++;
        console.log(`You lose, ${computerSelection} beats ${playerSelection}`);
    }

    else if(playerSelection == "rock" && computerSelection == "Scissors"){
        playerPoints++;
        console.log(`You win, ${playerSelection} beats ${computerSelection}`);
    }

    //playerSelection == "Rock"
    else if(playerSelection == "paper" && computerSelection == "Rock"){
        playerPoints++;
        console.log(`You win, ${playerSelection} beats ${computerSelection}`);
    }

    else if(playerSelection == "paper" && computerSelection == "Paper")
        console.log(`Draw, ${computerSelection} is the same as ${playerSelection}`);

    else if(playerSelection == "paper" && computerSelection == "Scissors"){
        computerPoints++;
        console.log(`You lose, ${computerSelection} beats ${playerSelection}`);
    }

    //playerSelection == "Scissors"
    else if(playerSelection == "scissors" && computerSelection == "Rock"){
        computerPoints++;
        console.log(`You lose, ${computerSelection} beats ${playerSelection}`);
    }

    else if(playerSelection == "scissors" && computerSelection == "Paper"){
        playerPoints++;
        console.log(`You win, ${playerSelection} beats ${computerSelection}`);
    }

    else if(playerSelection == "scissors" && computerSelection == "Scissors")
        console.log(`Draw, ${computerSelection} is the same as ${playerSelection}`);    

    else
        console.log("Either you didn't spell Scissors right or you choose a invalid token")
}
function getWinner(playerPoints, computerPoints) {
    if (playerPoints < computerPoints)
        console.log("Computer wins");
    else
        console.log("You win");
}

playerSelection = getPlayerChoice();
computerSelection = getComputerChoice();
playRound(playerSelection, computerSelection);
