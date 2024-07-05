function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    return choice;
}

function getHumanChoice(){
    let humanChoice = prompt("choose rock, paper or scissors", "rock");
    return humanChoice;
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    
    function playRound(humanChoice, computerChoice){
        humanChoice = humanChoice.toLowerCase();
    
        // check if the round is a draw first
        if (humanChoice === computerChoice){
            console.log("It's a draw!", humanChoice, "And", computerChoice);
        }
    
        // if it isnt check if the human chose scissors
        else if (humanChoice === "scissors"){
            // if the computer chose paper
            if (computerChoice === "paper"){
                console.log("You win! Scissors beats paper");
                humanScore++;
            }
            // if the computer chose rock
            else if (computerChoice === "rock"){
                console.log("You lose! Rock beats Scissors");
                computerScore++;
            }
        }
    
        // check if the human chose paper
        else if (humanChoice === "paper"){
            // check if computer chose scissors
            if (computerChoice === "scissors"){
                console.log("You Lose! Scissors beats Paper");
                computerScore++;
            }
            // check if computer chose rock
            else if (computerChoice === "rock"){
                console.log("You win! Paper beats rock");
                humanScore++;
            }
        }
    
        // check if the human chose rock
        else if (humanChoice === "rock"){
            // check if computer chose scissors
            if (computerChoice === "scissors"){
                console.log("You win! Rock beats Scissors");
                humanScore++;
            }
    
            // check if compuer chose paper
            else if (computerChoice === "paper"){
                console.log("You lose! Paper beats rock");
                computerScore++;
            }
        }
    }
}