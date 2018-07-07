var Letter = require("./letter");

var Word = function(letters) {
	this.letters = letters;

	this.show = function() {
		var letterString = "";
		for (var i = 0; i < this.letters.length; i++) {
			letterString += this.letters[i].showCharacter() + " ";
		}
		return console.log(letterString);
	};

	this.trueCharacter = function(characterGuessed) {
		for (var i = 0; i < this.letters.length; i++) {
			this.letters[i].trueCharacter(characterGuessed);
		}
	};
	
	this.finishedWord = function() {
		for(var i = 0; i < this.letters.length; i++) {
			if (!this.letters[i].guessedStatus()) {
				return false;
			}
		}
		return true;
	};
};

module.exports = Word;