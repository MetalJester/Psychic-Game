//array for computer to choose a random letter from
var computerChoice = ['a', 'b', 'c', 'd', 'e', 'f', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];//variable for computer to select a random choice from the array

var winsCount = 1;//variable sets wins to start at zero

var lossesCount = 1;//variable sets losses to start at zero

var guessesLeft = 9;//variable sets guesses to start nine

var lettersGuessed = []; //an array to push user letter choices to

console.log(computerGuess);


// If userGuess equals computerGuess then record letter and notify win and record one win

document.onkeyup = function (event) {

    var userGuess = event.key;

    if (userGuess === computerGuess) {
        console.log("You win!");
        alert("You win!");
        document.getElementById("wins").innerHTML = 'Wins: ' + winsCount++;
        lettersGuessed = [];
        document.getElementById("guessesSoFar").innerHTML = "Your guesses so far: " + lettersGuessed;
        document.getElementById("guessesLeft").innerHTML = "Guesses remaining: 9";
        computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];//variable for computer to select a random choice from the array
        guessesLeft = 9;//variable sets guesses to start nine
        console.log(computerGuess);


    } else {
        console.log("Guess again!");
        document.getElementById("guessesLeft").innerHTML = "Guesses remaining: " + guessesLeft--;
        lettersGuessed.push(userGuess);
        document.getElementById("guessesSoFar").innerHTML = "Your guesses so far: " + lettersGuessed;
        
    }

    if (guessesLeft <= 0) {
        console.log("You lose!");
        alert("You lose!");
        document.getElementById("losses").innerHTML = 'Losses: ' + lossesCount++;
        lettersGuessed = [];
        document.getElementById("guessesSoFar").innerHTML = "Your guesses so far: " + lettersGuessed;
        document.getElementById("guessesLeft").innerHTML = "Guesses remaining: 9";
        computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];//variable for computer to select a random choice from the array
        console.log(computerGuess);

    }


};




// If userGuess does not equal computerGuess then record letter, minus 1 guessLeft, and notify lose
// For each loss remove one guess
// Game ends when guesses left = 0
// 