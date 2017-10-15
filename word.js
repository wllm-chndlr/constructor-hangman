

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
var lollapalooza = new Word("lollapalooza");
var bulky = new Word("bulky");

// chicken.push();
// backhoe.push();
// lollapalooza.push();

var randomWord = wordArray[Math.floor(Math.random() * wordArray.length)];

module.exports = randomWord;