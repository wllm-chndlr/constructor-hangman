var inquirer = require('inquirer');
var letterMethods = require('./Letter.js');
var randomWord = require("./Word.js");
var fs = require("fs");

var randomWord;
var blankRandomWord; 
var guesses;
var lettersGuessed;


function newWord() {
  blankRandomWord = letterMethods.displayBlanks;
  // letterMethods.displayBlanks();
  lettersGuessed = [];
  guesses = 10;
}


function userGuess() {

  console.log(blankRandomWord);

  inquirer.prompt(
    {
      type: 'input',
      name: 'letter',
      message: 'Please select a letter.'
    } 
  )
  .then(letterGuessCallback);

  function letterGuessCallback (answers) {

    var userGuess = answers.letter.toLowerCase();
    var isLetter = letterMethods.checkIfLetter(userGuess);
		var correct = false;

    if (isLetter) {
      
      for (var i = 0; i < randomWord.length; i++) {
        if (userGuess === randomWord[i]) {
          console.log("Yeeeeeeeeeehaw!!");
          blankRandomWord = letterMethods.swapLetter(blankRandomWord, i * 2, userGuess);
          correct = true;
        }
      }
    
      if (!correct) {
        console.log("Sorry, you're a bad guesser.");
        console.log("You have " + guesses + " guesses remaining.");
        console.log(lettersGuessed);
        guesses--;
      }

      var logGuess =
      "\n******************\nLetters guessed: " + answers.letter;
    
      lettersGuessed.push(answers.letter);
    
      fs.appendFile("guessLog.txt", logGuess, function(error) {
      
        if (error) {
          return console.log(error);
        }
    
        else {
        console.log("guessLog.txt was updated!");
        }
      
      });
    
    }

    else {
      console.log("That wasn't a letter. Please try again.");
      userGuess();
    }



    if (lettersGuessed.indexOf(userGuess) != -1) {
      console.log("You already guessed that one!");
    }
    
  }

}


function playAgain() {

}


newWord();
userGuess();