//Declaring the initial empty player choice, and the three choices Computer has to pick from

let outcome = document.getElementById("round-info");
let playerScore = 0;
let compScore = 0;
const CHOICES = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];

//Functions that set the players choice to the relavent button, then randomize the computers choice, then play the game

function chooseRock() {
    return playRound("Rock", CHOICES[Math.floor(Math.random() * CHOICES.length)]);
};

function choosePaper() {
    return playRound("Paper", CHOICES[Math.floor(Math.random() * CHOICES.length)]);
};

function chooseScissors() {
    return playRound("Scissors", CHOICES[Math.floor(Math.random() * CHOICES.length)]);
};

function chooseLizard() {
    return playRound("Lizard", CHOICES[Math.floor(Math.random() * CHOICES.length)]);
};

function chooseSpock() {
    return playRound("Spock", CHOICES[Math.floor(Math.random() * CHOICES.length)]);
};

//Play game function

function playRound(playerChoice, compChoice) {
    
    //if its a tie
    if (playerChoice === compChoice) {
        return outcome.innerHTML = "You both chose " + playerChoice + ", it's a tie!";

    //outcomes for rock
    } else if (playerChoice == "Rock" && compChoice == "Scissors") {
        addPlayerScore()
        return outcome.innerHTML = playerChoice + " crushes " + compChoice + ", YOU WIN!";
    } else if (playerChoice == "Rock" && compChoice == "Lizard") {
        addPlayerScore()
        return outcome.innerHTML = playerChoice + " crushes " + compChoice + ", YOU WIN!";
    } else if (playerChoice == "Rock" && compChoice == "Spock") {
        addCompScore()
        return outcome.innerHTML = playerChoice + " is vaporized by " + compChoice + ", you lose.";
    } else if (playerChoice == "Rock" && compChoice == "Paper") {
        addCompScore()
        return outcome.innerHTML = playerChoice + " is covered by " + compChoice + ", you lose.";
    }

    //outcomes for paper
    else if(playerChoice == "Paper" && compChoice == "Rock") {
        addPlayerScore()
        return outcome.innerHTML = playerChoice + " covers " + compChoice + ", YOU WIN!";
    } else if(playerChoice == "Paper" && compChoice == "Spock") {
        addPlayerScore()
        return outcome.innerHTML = playerChoice + " disproves " + compChoice + ", YOU WIN!";
    } else if(playerChoice == "Paper" && compChoice == "Scissors") {
        addCompScore()
        return outcome.innerHTML = playerChoice + " is cut by " + compChoice + ", you lose.";
    } else if(playerChoice == "Paper" && compChoice == "Lizard") {
        addCompScore()
        return outcome.innerHTML = playerChoice + " is eaten by " + compChoice + ", you lose.";
    }

    //outcomes for scissors
    else if(playerChoice == "Scissors" && compChoice == "Lizard") {
        addPlayerScore()
        return outcome.innerHTML = playerChoice + " decapitates " + compChoice + ", YOU WIN!";
    } else if(playerChoice == "Scissors" && compChoice == "Paper") {
        addPlayerScore()
        return outcome.innerHTML = playerChoice + " cuts " + compChoice + ", YOU WIN!";
    } else if(playerChoice == "Scissors" && compChoice == "Rock") {
        addCompScore()
        return outcome.innerHTML = playerChoice + " is crushed by " + compChoice + ", you lose.";
    } else if(playerChoice == "Scissors" && compChoice == "Spock") {
        addCompScore()
        return outcome.innerHTML = playerChoice + " is smashed by " + compChoice + ", you lose.";
    }

    //outcomes for Spock
    else if(playerChoice == "Spock" && compChoice == "Scissors") {
        addPlayerScore()
        return outcome.innerHTML = playerChoice + " smashes " + compChoice + ", YOU WIN!";
    } else if(playerChoice == "Spock" && compChoice == "Rock") {
        addPlayerScore()
        return outcome.innerHTML = playerChoice + " vaporizes " + compChoice + ", YOU WIN!";
    } else if(playerChoice == "Spock" && compChoice == "Lizard") {
        addCompScore()
        return outcome.innerHTML = playerChoice + " is poisoned by " + compChoice + ", you lose.";
    } else if(playerChoice == "Spock" && compChoice == "Paper") {
        addCompScore()
        return outcome.innerHTML = playerChoice + " is disproved by " + compChoice + ", you lose.";
    }

    //outcomes for Lizard
    else if(playerChoice == "Lizard" && compChoice == "Spock") {
        addPlayerScore()
        return outcome.innerHTML = playerChoice + " poisons " + compChoice + ", YOU WIN!";
    } else if(playerChoice == "Spock" && compChoice == "Paper") {
        addPlayerScore()
        return outcome.innerHTML = playerChoice + " eats " + compChoice + ", YOU WIN!";
    } else if(playerChoice == "Spock" && compChoice == "Rock") {
        addCompScore()
        return outcome.innerHTML = playerChoice + " is crushed by " + compChoice + ", you lose.";
    } else if(playerChoice == "Spock" && compChoice == "Scissors") {
        addCompScore()
        return outcome.innerHTML = playerChoice + " is decapitaed by " + compChoice + ", you lose.";
    }
};


//scoreboard functions

function addPlayerScore() {
    playerScore++;
    document.getElementById("player-score").innerHTML = playerScore;
    if (playerScore == 5) {
        playerScore = 0;
        document.getElementById("player-score").innerHTML = playerScore;
        compScore = 0;
        document.getElementById("comp-score").innerHTML = compScore;
        outcome.innerHTML = "Choose your fighter";
        return alert("You are the first to 5, You WIN!")
    }
};

function addCompScore() {
    compScore++;
    document.getElementById("comp-score").innerHTML = compScore;
    if (compScore == 5) {
        playerScore = 0;
        document.getElementById("player-score").innerHTML = playerScore;
        compScore = 0;
        document.getElementById("comp-score").innerHTML = compScore;
        outcome.innerHTML = "Choose your fighter";
        return alert("Computer is first to 5, You WIN!")
    }
};