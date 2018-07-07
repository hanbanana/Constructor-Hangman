var Letter = function(character){
	this.character = character;
	this.letterCorrect = false;
	this.showCharacter = function(){
		if(this.letterCorrect) {
			return this.character;
		} else {
			return "_";
		}
	};
	this.trueCharacter = function(guessCharacter){
		if(guessCharacter == this.character) {
			this.letterCorrect = true;
		}
	};
	this.guessedStatus = function() {
		return this.letterCorrect;
	};
};

module.exports = Letter;