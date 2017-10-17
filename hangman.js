var inquirer = require('inquirer');
var letterMethods = require('./Letter.js');
var randomWord = require("./Word.js");
var fs = require("fs");

var letterNew = letterMethods.letterMethods;	

var randomWord;
var blankRandomWord; 
var guesses;
var lettersGuessed;


// function to generate new word
function newWord() {
  console.log(randomWord);
  blankRandomWord = letterNew.displayBlanks();
  // letterNew.displayBlanks;
  // letterMethods.displayBlanks();
  lettersGuessed = [];
  guesses = 10;
}

// function to handler user input
function userGuess() {

  // console.log("blankRandomWord: " + blankRandomWord);

  inquirer.prompt(
    {
      type: 'input',
      name: 'letter',
      message: 'Please select a letter.'
    } 
  )
  .then(letterGuessCallback);

  function letterGuessCallback (answers) {

    var userLetterGuess = answers.letter.toLowerCase();
    var isLetter = letterNew.checkIfLetter(userLetterGuess);
    var correct = false;

    // console.log(isLetter);
    
    // console.log("answers.letter: " + answers.letter);

    if (isLetter) {
      
      for (var i = 0; i < randomWord.length; i++) {
        if (userLetterGuess == randomWord[i]) {
          console.log("Corecto!!");
          lettersGuessed.push(userLetterGuess);
          blankRandomWord = letterNew.swapLetter(blankRandomWord, i, userLetterGuess);
          correct = true;
          // console.log("Letters guessed: " + lettersGuessed);
        }
      }

      console.log(blankRandomWord);
    
      if (!correct && !letterNew.inArray(userLetterGuess, lettersGuessed)) {
        console.log("Sorry, you're a bad guesser.");
        lettersGuessed.push(userLetterGuess);
        guesses--;
        console.log("You have " + guesses + " guesses remaining.");
        // console.log("Letters guessed: " + lettersGuessed);
      }

      console.log("Letters guessed: " + lettersGuessed);


      // if (lettersGuessed.indexOf(userLetterGuess) != -1) {
      //   console.log("You already guessed that one!");
      // }

      if(blankRandomWord.indexOf("_") === -1) {
				console.log("You won!");
				console.log("The word was " + randomWord + "!");
				playAgain();
      } 
      else if(guesses == 0){
				console.log("You have no more guesses!");
				console.log("The word was " + randomWord + "!");
				playAgain();
      } 
      else {
				userGuess();
			}

      // var logGuess =
      // "\n******************\nLetters guessed: " + answers.letter;
    
      // lettersGuessed.push(answers.letter);
    
      // fs.appendFile("guessLog.txt", logGuess, function(error) {
      //   if (error) {
      //     return console.log(error);
      //   }
      //   else {
      //   console.log("guessLog.txt was updated!");
      //   }
      
      // });
    
    }

    else {
      console.log("That wasn't a letter. Please try again.");
      userGuess();
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
        newWord();
        userGuess();
      } else {
        console.log("Adios, muchacho!");
      }
    });
}


newWord();
userGuess();