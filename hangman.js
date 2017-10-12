'use strict';
var inquirer = require('inquirer');

var questions = [
  {
    type: 'input',
    name: 'letter',
    message: 'Please select a letter.'
  }
];

inquirer.prompt(questions).then(function (answers) {
  console.log(JSON.stringify(answers, null, '  '));
});