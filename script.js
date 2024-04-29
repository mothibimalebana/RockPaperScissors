let gameChoices = ["rock", "paper", "scissors"];
let playerPoints = 0;
let computerPoints = 0;

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

rock.addEventListener("click", () => playRound("rock"));
paper.addEventListener("click", () => playRound("paper"));
scissors.addEventListener("click", () => playRound("scissors"));

let humanScore = document.getElementById("humanScore");
let computerScore = document.getElementById("computerScore");
humanScore.textContent = Number(playerPoints);
computerScore.textContent = Number(computerPoints);


//function to get player's choice
// function getPlayerChoice(choice) {
//     return choice ;
// }

//function to get a choice for computer
function getComputerChoice () {
    return gameChoices[(Math.floor(Math.random() * gameChoices.length))];
}
//function to play a round
function playRound (playerSelection) {
    computerSelection = gameChoices[(Math.floor(Math.random() * gameChoices.length))];

    //playerSelection == "rock"
    if(playerSelection == "rock" && computerSelection == "rock"){
        console.log('Draw');
    }

    else if(playerSelection == "rock" && computerSelection == "paper"){
        computerScore.textContent++;
        console.log(`You lose, ${computerSelection} beats ${playerSelection}`);
    }

    else if(playerSelection == "rock" && computerSelection == "scissors"){
        humanScore.textContent++;
        console.log(`You win, ${playerSelection} beats ${computerSelection}`);
    }

    //playerSelection == "rock"
    else if(playerSelection == "paper" && computerSelection == "rock"){
        humanScore.textContent++;
        console.log(`You win, ${playerSelection} beats ${computerSelection}`);
    }

    else if(playerSelection == "paper" && computerSelection == "paper")
        console.log(`Draw, ${computerSelection} is the same as ${playerSelection}`);

    else if(playerSelection == "paper" && computerSelection == "scissors"){
        computerScore.textContent++;
        console.log(`You lose, ${computerSelection} beats ${playerSelection}`);
    }

    //playerSelection == "scissors"
    else if(playerSelection == "scissors" && computerSelection == "rock"){
        computerScore.textContent++;
        console.log(`You lose, ${computerSelection} beats ${playerSelection}`);
    }

    else if(playerSelection == "scissors" && computerSelection == "paper"){
        humanScore.textContent++;
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
// playRound(playerSelection);
