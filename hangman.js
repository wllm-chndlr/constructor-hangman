var inquirer = require('inquirer');
var Word = require("./Word.js");

var randomWord;
var blankRandomWord; 
var guesses;
var lettersGuessed;

var wordArray = ['pingpong', 'tennis', 'softball', 'lacrosse', 'basketball', 'cricket', 'soccer', 'football', 'badminton', 'fencing', 'squash'];

// function to handle user input and game play
function playGame() {

  lettersGuessed = [];
  guesses = 10;

  // assign random word to variable
  var randomWord = wordArray[Math.floor(Math.random() * wordArray.length)];

  // assign new word constructor (with random word) to variable
  var blankRandomWord = new Word(randomWord);

  // ask user to input letter
  inquirer.prompt(
    {
      type: 'input',
      name: 'letter',
      message: 'Please select a letter.'
    } 
  )
  .then(letterGuessCallback);

  // run this function after user selects a letter
  function letterGuessCallback (answers) {

    var userGuess = answers.letter.toLowerCase();
    var correct = false;

    // functionality for correct guess
    for (var i = 0; i < randomWord.length; i++) {
      if (userGuess == randomWord[i]) {
        console.log(blankRandomWord.swapLetter((blankRandomWord.displayBlanks()), i, userGuess));
        lettersGuessed.push(userGuess);
        console.log("Correct!");
        correct = true;
      }
    }
  
    // functionality for incorrect guess
    if (!correct) {
      console.log("Incorrect!");
      lettersGuessed.push(userGuess);
      guesses--;
    }
  
    // updating user on their game status
    console.log("Letters guessed: " + lettersGuessed);
    console.log("You have " + guesses + " guesses remaining.");
    
    var batman = blankRandomWord.displayBlanks();
    
    // functionality for win
    if (batman.indexOf("_") === -1) {
      console.log("You won!");
      console.log("The word was " + randomWord + "!");
      playAgain();
    } 
    // functionality for loss
    else if (guesses == 0){
      console.log("You have no more guesses!");
      console.log("The word was " + randomWord + "!");
      playAgain();
    } 
    // functionality for continuing current game
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
        playGame();
      } else {
        console.log("Adios, muchacho!");
      }
    });
}

playGame();