var Letter = require("./Letter.js");

// word constructor
var Word = function(word) {

  this.word = word;

  // displays blanks for letters in word
  this.displayBlanks = function() {
    var blankRandomWord = "";
    for (var i = 0; i < word.length; i++) {
      blankRandomWord += '_ ';
    };
    return blankRandomWord;
  }

  // swaps the letter in the blank word
  this.swapLetter = function(string, i, userGuess){
    console.log("String: " + string);
    var swappedLetter = string.substr(0, i * 2) + userGuess + string.substr(i * 2 + 1);
    return swappedLetter;

    // if (isLetter) {
    // }
    // else {
    //   console.log("Invalid input. Please try again.");
    //   playGame();
    // }
    
  }

}
 
module.exports = Word;