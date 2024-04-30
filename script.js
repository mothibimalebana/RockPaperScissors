<<<<<<< HEAD
let gameChoices = ["Rock", "Paper", "Scissors"];
let playerPoints = 0;
let computerPoints = 0;
=======
let gameChoices = ["rock", "paper", "scissors"];
let playerPoints = 0;
let computerPoints = 0;

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const playerHand = document.getElementById("playerHand");
const computerHand = document.getElementById("computerHand");

rock.addEventListener("click", () => playRound("rock"));
paper.addEventListener("click", () => playRound("paper"));
scissors.addEventListener("click", () => playRound("scissors"));

let humanScore = document.getElementById("humanScore");
let computerScore = document.getElementById("computerScore");
humanScore.textContent = Number(playerPoints);
computerScore.textContent = Number(computerPoints);

>>>>>>> rps-ui

//function to get a choice for computer
function getComputerChoice () {
    return gameChoices[(Math.floor(Math.random() * gameChoices.length))];
}
<<<<<<< HEAD
function winPlayer() {
    return playerPoints++;
}
function winComputer() {
    return computerPoints++;
}

=======
>>>>>>> rps-ui
//function to play a round
function playRound (playerSelection) {
    computerSelection = gameChoices[(Math.floor(Math.random() * gameChoices.length))];

<<<<<<< HEAD
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
=======
    //playerSelection == "rock"
    if(playerSelection == "rock" && computerSelection == "rock"){
        playerHand.src = './img/HUMANrock.png';
        computerHand.src = './img/AIrock.png';
    }

    else if(playerSelection == "rock" && computerSelection == "paper"){
        computerScore.textContent++;
        playerHand.src = './img/HUMANrock.png';
        computerHand.src = './img/AIpaper.png';
    }

    else if(playerSelection == "rock" && computerSelection == "scissors"){
        humanScore.textContent++;
        playerHand.src = './img/HUMANrock.png';
        computerHand.src = './img/AIscissors.png';
    }
>>>>>>> rps-ui

    //playerSelection == "rock"
    else if(playerSelection == "paper" && computerSelection == "rock"){
        humanScore.textContent++;
        playerHand.src = './img/HUMANpaper.png';
        computerHand.src = './img/AIrock.png';
    }

<<<<<<< HEAD
    else if(playerSelection == "paper" && computerSelection == "Scissors")
        {
            console.log(`You lose, ${computerSelection} beats ${playerSelection}`);
            winComputer();
        }
=======
    else if(playerSelection == "paper" && computerSelection == "paper"){
        playerHand.src = './img/HUMANpaper.png';
        computerHand.src = './img/AIpaper.png';
    }
    else if(playerSelection == "paper" && computerSelection == "scissors"){
        computerScore.textContent++;
        playerHand.src = './img/HUMANpaper.png';
        computerHand.src = './img/AIscissors.png';
    }
>>>>>>> rps-ui

    //playerSelection == "scissors"
    else if(playerSelection == "scissors" && computerSelection == "rock"){
        computerScore.textContent++;
        playerHand.src = './img/HUMANscissors.png';
        computerHand.src = './img/AIrock.png';
    }

    else if(playerSelection == "scissors" && computerSelection == "paper"){
        humanScore.textContent++;
        playerHand.src = './img/HUMANscissors.png';
        computerHand.src = './img/AIpaper.png';
    }

    else if(playerSelection == "scissors" && computerSelection == "scissors"){
        playerHand.src = './img/HUMANscissors.png';
        computerHand.src = './img/AIscissors.png';
    }
    else
        console.log("Either you didn't spell scissors right or you choose a invalid token")

    getWinner(humanScore.textContent, computerScore.textContent);
}

<<<<<<< HEAD
playerSelection = prompt("Please enter a selection:", "Rock/ Paper/ Scissors")
playerSelection = playerSelection.toLowerCase();

const computerSelection = getComputerChoice();
while(playerPoints != 5 || computerPoints != 5){
playRound(playerSelection, computerSelection);
=======
function getWinner(humanScore, computerScore) {
    if(humanScore == 5){
        alert("You win : )");
        location.reload();
    }
    else if(computerScore == 5) {
        alert("You lose : (");
        location.reload();
    }
    else{
        console.log("continue playing");
    }
>>>>>>> rps-ui
}