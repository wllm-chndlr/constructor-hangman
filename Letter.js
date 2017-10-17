var randomWord = require("./Word.js");

var blankCurrentWord = "";

function Letters() {

  // checks to make sure user guess is a letter
  this.checkIfLetter = function(letter) {
    var abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    for (var i = 0; i < abc.length; i++) {
      if(letter == abc[i]){
        return true;
      }
    }
    return false;
  }

  // displays blanks for letters in word
  this.displayBlanks = function() {
    for (var i = 0; i < randomWord.length; i++) {
      blankCurrentWord += '_ ';
    };
  }

  // swaps the letter in the blank word
  this.swapLetter = function(str, i, userGuess){
    return str.substr(0, i) + letter + str.substr(i + 1);
  }

  // checks to see if letter is in array (checks if letter has been guessed already)
  this.inArray = function(letter, array) {
    for (var j = 0; j < array.length; j++) {
      if (letter == arr[i]){
        return true;
      }
    }
    return false;
  }

}

var letterMethods = new Letters();

module.exports = {
  letterMethods: letterMethods
}