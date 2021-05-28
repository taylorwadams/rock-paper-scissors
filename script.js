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
    } else if (playerChoice == "Rock" && compChoice == "Scissors" || "Lizard") {
        return outcome.innerHTML = playerChoice + " crushes " + compChoice + ", YOU WIN!";
    } else if (playerChoice == "Rock" && compChoice == "Spock") {
        return outcome.innerHTML = playerChoice + " is vaporized by " + compChoice + ", you lose.";
    } else if (playerChoice == "Rock" && compChoice == "Paper") {
        return outcome.innerHTML = playerChoice + " is covered by " + compChoice + ", you lose.";
    }
};

