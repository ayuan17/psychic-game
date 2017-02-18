//First make a variable with an array of letters for the computer to guess
var randomLetter = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessedLetters = [];


// this variable sets up computerChoice to select a random letter from the array
var computerChoice = randomLetter[Math.floor(Math.random() * randomLetter.length)];

var updateGuessesLeft = function() {
    document.getElementById('guessesLeft').innerHTML = "Guesses Left: " + guessesLeft;

};

var updateComputerChoice = function() {
    this.computerChoice = this.randomLetter[Math.floor(Math.random() * this.randomLetter.length)];
};

//This will display the characters the user has pressed
var updateGuessesSoFar = function() {
    document.getElementById('guessesSoFar').innerHTML = "Guesses So Far: " + guessedLetters.join(', ');
};

// this function will be called to reset everything

var reset = function() {
    guessesLeft = 9;
    guessedLetters = [];

updateComputerChoice();
updateGuessesLeft();
updateGuessesSoFar();

}

updateComputerChoice();
updateGuessesLeft();

//when key is pressed, it is the users choice
document.onkeyup = function(event) {
    guessesLeft--;

    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    guessedLetters.push(userGuess);
    updateGuessesLeft();
    updateGuessesSoFar();

        if (guessesLeft > 0) {
            if (userGuess === computerChoice) {
                wins++;
                document.querySelector('#wins').innerHTML = "Wins: " + wins;
                alert("Congratulations, you guessed correctly!");
                reset();
            }
        } else if(guessesLeft === 0){
            losses++;
            document.querySelector('#losses').innerHTML = "Losses: " + losses;
            alert("Sorry, try again!");

            reset();
        }
};