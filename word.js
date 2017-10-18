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
  this.swapLetter = function(word, i, userGuess){
    var blankRandomWord = "";
    // var isLetter = Letter.checkIfLetter();
    // if (isLetter) {
      // console.log("str: " + str);
      var swappedLetter = word.substr(0, i * 2) + userGuess + word.substr(i * 2 + 1);
      console.log(swappedLetter);
      return swappedLetter;
    // }
    // else {
    //   console.log("Invalid input. Please try again.");
    //   playGame();
    // }
  }

}
 
module.exports = Word;