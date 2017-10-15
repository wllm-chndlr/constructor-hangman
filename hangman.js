var inquirer = require('inquirer');

var currentWord = "";
var guesses = 10;
var lettersGuessed = [];


function setWord() {
  currentWord = randomWord;
}



inquirer.prompt({
  type: 'input',
  name: 'letter',
  choices: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
  message: 'Please select a letter.'
}).then(letterGuessCallback);


function letterGuessCallback (answers) {

  var myAdmin = new WeatherAdmin(weatherSearchCallback);

  if (answers.loginType === "admin") {
    myAdmin.getData(function (searchLogText) {
      console.log(searchLogText);
    });
  }
  else {
    inquirer.prompt([ {
      type: 'input',
      name: 'letter',
      choices: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
      message: 'Please select a letter.'
    }]).then(function (answers) {
      console.log('Searching For ' + answers.location + '...');
      myAdmin.newUserSearch(answers.name, answers.location, weatherSearchCallback);
    })
  }
}



function playAgain() {
  
}