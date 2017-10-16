var inquirer = require('inquirer');
var Letters = require('./Letter.js');
var randomWord = require("./Word.js");
var fs = require("fs");

var randomWord;
var guessWord = "";
var guesses = 10;
var lettersGuessed = [];
var allLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];


// function setWord() {
//   // guessWord = randomWord;
//   Letters();
// }
// setWord();


console.log(randomWord);

inquirer.prompt([
  {
    type: 'confirm',
    name: 'playGame',
    message: 'Quieres jugar?'
  },
  {
    type: 'input',
    name: 'letter',
    message: 'Please select a letter.'
  }
])
.then(letterGuessCallback);

function swapLetter(str, i, userGuess) {
  if(i > str.length-1) {
    return str;
  }
  return str.substr(0, i) + userGuess + str.substr(i + 1);
}

function letterGuessCallback (answers) {

  var correct = false;
  var userGuess = answers.letter;

  if (answers.playGame) {
    
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
  
    // console.log(lettersGuessed);

  }

  else {
    console.log("Well, screw you then!");
  }

  for (var i = 0; i < randomWord.length; i++) {
    if (answers.letter === randomWord[i]) {
      console.log("Yeeeeeeeeeehaw!!");
      correct = true;
      // guessWord = swapLetter(guessWord, i, userGuess);
    }
    // console.log(guessWord);
  }

  if (!correct) {
    console.log("Sorry, you're a bad guesser.");
    console.log("You have " + guesses + " guesses remaining.");
    console.log(lettersGuessed);
    guesses--;
  }


  // if (lettersGuessed.indexOf(answers.letter) != -1) {
  //   console.log("You already guessed that one!");
  // }
  


}




//   var myAdmin = new WeatherAdmin(weatherSearchCallback);

//   if (answers.loginType === "admin") {
//     myAdmin.getData(function (searchLogText) {
//       console.log(searchLogText);
//     });
//   }
//   else {
//     inquirer.prompt([ {
//       type: 'input',
//       name: 'letter',
//       message: 'Please select a letter.'
//     }]).then(function (answers) {
//       console.log('Searching For ' + answers.location + '...');
//       myAdmin.newUserSearch(answers.name, answers.location, weatherSearchCallback);
//     })
//   }
// }



// function playAgain() {

// }