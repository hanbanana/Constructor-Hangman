var Inquirer = require("inquirer");
var Word = require("./word");
var Letter = require("./letter");
var letterGuessedArray = [];
var previouslyGuessed = [];
var numberGuesses = 15;

var wordBank = ["asparagus", "carrot", "spinach", "lettuce", "pepper", "cucumber", "artichoke", "potato", "arugula", "pea"];
var randomIndex = Math.floor(Math.random() * wordBank.length);
var randomWord = wordBank[randomIndex];

for(var i = 0; i < randomWord.length; i ++) {
	letterGuessedArray.push(new Letter(randomWord.charAt(i)));
}

var currentWord = new Word(letterGuessedArray);

var queryUser = function() {
	if (numberGuesses > 0) {
		var wordDisplay = currentWord.show();

		console.log("You have " + numberGuesses + " guesses remaining.");
		Inquirer.prompt([
				{
					name: "letter",
					message: "Please guess a letter."
				}
			]).then(function(userInput) {
			
				var guessedLetter = userInput.letter.toLowerCase();

				var alreadyGuessed = false;
				for (var i = 0; i < previouslyGuessed.length; i++) {
					if (guessedLetter === previouslyGuessed[i]) {
						alreadyGuessed = true;
						break;
					}
				}

				if(alreadyGuessed) {
					console.log("This letter was already guessed.");
				} else {
					numberGuesses--;
					previouslyGuessed.push(guessedLetter);
					currentWord.trueCharacter(guessedLetter);
				}

				if(currentWord.finishedWord()) {
					console.log("Congrats, you've guessed the word correctly!");
					return;
				}

				queryUser();
			});
	} else {
		console.log("You've used all of your guesses.");
	}
};

queryUser();