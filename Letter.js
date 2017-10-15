var randomWord = require("./Word.js");

var blankCurrentWord = "";



function Letters() {
	for (var i = 0; i < randomWord.length; i++) {
		blankCurrentWord += '_ ';
  };
}

Letters();

console.log(randomWord);
console.log(blankCurrentWord);

// module.exports = Letters;