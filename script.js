//Declaring the initial empty player choice, and the three choices Computer has to pick from

let playerChoice = "";
let compChoice = "";
const CHOICES = ["rock", "paper", "scissors", "lizard", "spock"];

//Functions that set the players choice to the relavent button

function chooseRock() {
    playerChoice = "rock";
    compChoice = CHOICES[Math.floor(Math.random() * CHOICES.length)];
};

function choosePaper() {
    playerChoice = "paper";
    compChoice = CHOICES[Math.floor(Math.random() * CHOICES.length)];
};

function chooseScissors() {
    playerChoice = "scissors";
    compChoice = CHOICES[Math.floor(Math.random() * CHOICES.length)];
};

function chooseLizard() {
    playerChoice = "lizard";
    compChoice = CHOICES[Math.floor(Math.random() * CHOICES.length)];
};

function chooseSpock() {
    playerChoice = "spock";
    compChoice = CHOICES[Math.floor(Math.random() * CHOICES.length)];
};

