var inquirer = require('inquirer');
var Word = require("./Word.js");
var fs = require("fs");

var randomWord;
var blankRandomWord; 
var guesses;
var lettersGuessed;

var wordArray = ['pingpong', 'tennis', 'softball', 'lacrosse', 'basketball', 'cricket', 'soccer', 'football', 'badminton', 'fencing', 'squash'];


// function to handle user input and game play
function playGame() {

  lettersGuessed = [];
  guesses = 10;

  var randomWord = wordArray[Math.floor(Math.random() * wordArray.length)];
  console.log("randomWord: " + randomWord);

  var blankRandomWord = new Word(randomWord);
  console.log("blankRandomWord: " + blankRandomWord.displayBlanks());

  inquirer.prompt(
    {
      type: 'input',
      name: 'letter',
      message: 'Please select a letter.'
    } 
  )
  .then(letterGuessCallback);

  function letterGuessCallback (answers) {

    // var userGuess = answers.letter.toLowerCase();
    // var isLetter = letterNew.checkIfLetter(userLetterGuess);

    var userGuess = answers.letter;
    var correct = false;

    // console.log(randomWord);
    // console.log(blankRandomWord);
      
    for (var i = 0; i < randomWord.length; i++) {
      if (userGuess == randomWord[i]) {
        blankRandomWord = Word.swapLetter(blankRandomWord, i, userGuess);
        lettersGuessed.push(userGuess);
        console.log("Correct!!");
        correct = true;
      }
    }
  
    if (!correct) {
      console.log("Sorry, you're a bad guesser.");
      lettersGuessed.push(userGuess);
      guesses--;
    }

    console.log("Letters guessed: " + lettersGuessed);
    console.log("You have " + guesses + " guesses remaining.");

    if (blankRandomWord.indexOf("_") === -1) {
      console.log("You won!");
      console.log("The word was " + randomWord + "!");
      playAgain();
    } 
    else if (guesses == 0){
      console.log("You have no more guesses!");
      console.log("The word was " + randomWord + "!");
      playAgain();
    } 
    else {
      playGame();
    }

  }

}

// function to prompt player to play again or quit
function playAgain() {
  inquirer.prompt([
    {
      type: "confirm",
      message: "Do you want to play again?",
      name: "playAgain"
    }
    ]).then(function (user) {
      if(user.playAgain) {
        console.log("");
        // newWord();
        playGame();
      } else {
        console.log("Adios, muchacho!");
      }
    });
}


playGame();


// newWord();

// if (lettersGuessed.indexOf(userGuess) != -1) {
//   console.log("You already guessed that one!");
// }


// var logGuess =
// "\n******************\nLetters guessed: " + answers.letter;
  
// fs.appendFile("guessLog.txt", logGuess, function(error) {
//   if (error) {
//     return console.log(error);
//   }
//   else {
//   console.log("guessLog.txt was updated!");
//   }

// });