function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    return choice;
}

function getHumanChoice(){
    let humanChoice = prompt("choose rock, paper or scissors", "rock");
    return humanChoice;
}

