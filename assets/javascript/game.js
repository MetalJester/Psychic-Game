//array for computer to choose a random letter from
var computerChoice = ['a', 'b', 'c', 'd', 'e', 'f', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var computerGuess = computerChoice[Math.floor(Math.random()*computerChoice.length)];//variable for computer to select a random choice from the array

var wins = 0;//variable sets wins to start at zero

var losses = 0;//variable sets losses to start at zero

var guessesLeft = 9;//variable sets guesses to start nine

var guessesSoFar = []; //an array to push user choices to

console.log(computerGuess);

