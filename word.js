var Letter = require("./Letter.js");

// word constructor
var Word = function(word) {
  
  this.word = word;

  // swaps out underscores for correct letter(s)
  Word.prototype.swapLetter = function(string, i, userGuess){
    // console.log("blankRandomord.word: " + blankRandomWord.word);
    var swappedLetter = string.substr(0, i * 2) + userGuess + string.substr(i * 2 + 1);
    return swappedLetter;
  }

  // displays blanks for letters in word
  Word.prototype.displayBlanks = function() {
    var blankRandomWord = "";
    // console.log(word);
    for (var i = 0; i < word.length; i++) {
      blankRandomWord += '_ ';
    };
    return blankRandomWord;  
  }

}

module.exports = Word;