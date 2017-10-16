var inquirer = require('inquirer');
var Letters = require('./Letter.js');
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


inquirer.prompt(
  // {
  //   type: 'confirm',
  //   name: 'playGame',
  //   message: 'Quieres jugar?'
  // },
  {
    type: 'input',
    name: 'letter',
    message: 'Please select a letter, Johnny Depp.'
  }
)
.then(letterGuessCallback);


function letterGuessCallback (answers) {

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

  console.log(lettersGuessed);

  // if letter in word:

  // for (var i = 0; i < randomWord.length; i++) {
  //   if (answers.letter === randomWord[i]) {
  //     console.log("Yeeeeeeeeeehaw!!")
  //     // guessWord = swapLetter(guessWord, i, userInput);
  //     // correct = true;
  //   }
  // }


  // if (lettersGuessed.indexOf(answers.letter) != -1) {
  //   console.log("You already guessed that one!");
  // }
  

  // else if:


  // else:

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