function Letter() {

  // checks to make sure user guess is a letter
  this.checkIfLetter = function(letter) {
    var abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    for (var i = 0; i < abc.length; i++) {
      if(letter == abc[i]){
        return true;
      }
    }
    return false;
  }

  // checks to see if letter is in array (checks if letter has been guessed already)
  this.inArray = function(letter, array) {
    for (var j = 0; j < array.length; j++) {
      if (letter == array[j]){
        return true;
      }
    }
    return false;
  }

  // updates letter input to lower case
  this.toLowerCase = function(letter) {
    var lowerLetter = letter.toLowerCase();
    return lowerLetter;
  }

}

module.exports = Letter;