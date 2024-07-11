function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    
    if (choice === 0){
        return "rock";
    } 
    else if (choice === 1){
        return "paper";
    }
    else if (choice === 2){
        return "scissors";
    }
}

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();

    let resultsSection = document.querySelector(".results");

    // check if the round is a draw first
    if (humanChoice === computerChoice){
        resultsSection.textContent = "It's a draw!", humanChoice, "And", computerChoice;
        return "draw"
    }

    // if it isnt check if the human chose scissors
    else if (humanChoice === "scissors"){
        // if the computer chose paper
        if (computerChoice === "paper"){
            resultsSection.textContent = "You win! Scissors beats paper";
            return "human";
        }
        // if the computer chose rock
        else if (computerChoice === "rock"){
            resultsSection.textContent = "You lose! Rock beats Scissors";
            return "computer";
        }
    }

    // check if the human chose paper
    else if (humanChoice === "paper"){
        // check if computer chose scissors
        if (computerChoice === "scissors"){
            resultsSection.textContent = "You Lose! Scissors beats Paper";
            return "computer";
        }
        // check if computer chose rock
        else if (computerChoice === "rock"){
            resultsSection.textContent = "You win! Paper beats rock";
            return "human";
        }
    }

    // check if the human chose rock
    else if (humanChoice === "rock"){
        // check if computer chose scissors
        if (computerChoice === "scissors"){
            resultsSection.textContent = "You win! Rock beats Scissors";
            return ("human");
        }

        // check if compuer chose paper
        else if (computerChoice === "paper"){
            resultsSection.textContent = "You lose! Paper beats rock";
            return "computer";
        }
    }
}

const rockBtn = document.querySelector(".rock-btn");
const paperBtn = document.querySelector(".paper-btn");
const scissorsBtn = document.querySelector(".scissors-btn");
const playBtn = document.querySelector(".play-btn");

const plrScore = document.querySelector(".plr-score");
const cpuScore = document.querySelector(".cpu-score");
const results = document.querySelector(".results");
const Rounds = 5

let plrScoreN = 0;
let cpuScoreN = 0;

function incrementScore(winner){
    if (winner === "human"){
        plrScoreN++;
        plrScore.textContent = "Your Score:" + plrScoreN;
    } else if (winner === "computer"){
        cpuScoreN++;
        cpuScore.textContent = "Computer Score:" + cpuScoreN;
    }

    if(plrScoreN === 5){
        results.textContent = "Congrats, you win the game!";
    } else if (cpuScoreN === 5)
        results.textContent = "womp womp, you lost the game";

    if (plrScoreN === 5 || cpuScoreN == 5){
        plrScoreN = 0;
        cpuScoreN = 0;
        plrScore.textContent = "Your Score:" + plrScoreN;
        cpuScore.textContent = "Computer Score:" + cpuScoreN;
    }
}

rockBtn.addEventListener("click", function(){
    let winner = playRound("rock", getComputerChoice());
    incrementScore(winner);
});

paperBtn.addEventListener("click", function(){
    let winner = playRound("paper", getComputerChoice());
    incrementScore(winner);
});

scissorsBtn.addEventListener("click", function(){
    let winner = playRound("scissors", getComputerChoice());
    incrementScore(winner);
});