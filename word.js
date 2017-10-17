var wordArray = [];

var Word = function(word) {
  this.word = word;
  wordArray.push(this.word);
}

// Word.prototype.push = function() {
//   wordArray.push(this.word);
// };

var chicken = new Word("chicken");
var backhoe = new Word("backhoe");
var pangea = new Word("pangea");
var bulky = new Word("bulky");
var turnstile = new Word("turnstile");
var mongolia = new Word("mongolia");

var randomWord = wordArray[Math.floor(Math.random() * wordArray.length)];

module.exports = randomWord;