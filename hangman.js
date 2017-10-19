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

  var randomWord = wordArray[Math.floor(Math.random() * wordArray.length)];
  console.log("randomWord: " + randomWord);

  var blankRandomWord = new Word(randomWord);
  console.log("blankRandomWord: " + blankRandomWord.displayBlanks());
  var ongoingBlanks = blankRandomWord.displayBlanks();
  console.log("ongoingBlanks: " + ongoingBlanks);

  inquirer.prompt(
    {
      type: 'input',
      name: 'letter',
      message: 'Please select a letter.'
    } 
  )
  .then(letterGuessCallback);

  function letterGuessCallback (answers) {

    var userGuess = answers.letter;
    var correct = false;

    for (var i = 0; i < randomWord.length; i++) {
      if (userGuess == randomWord[i]) {
        console.log("attempting to swap");
        // console.log(blankRandomWord.word);
        // console.log(blankRandomWord.displayBlanks());
        console.log(blankRandomWord.swapLetter((blankRandomWord.displayBlanks()), i, userGuess));
        lettersGuessed.push(userGuess);
        console.log("Zang!");
        correct = true;
      }
    }
  
    if (!correct) {
      console.log("Blarf!");
      lettersGuessed.push(userGuess);
      guesses--;
    }

    console.log("Letters guessed: " + lettersGuessed);
    console.log("You have " + guesses + " guesses remaining.");

    if (blankRandomWord.word.indexOf("_") === -1) {
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
        playGame();
      } else {
        console.log("Adios, muchacho!");
      }
    });
}


playGame();


// if (lettersGuessed.indexOf(userGuess) != -1) {
//   console.log("You already guessed that one!");
// }