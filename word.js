function Word(word) {
  this.word = word;
}

Word.prototype.printInfo = function() {
  console.log("Word: " + this.word);
};

// var newWord = new Word(answers.word);
var newWord = new Word("chickenBeak");

newWord.printInfo();