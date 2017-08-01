var wins = 0;
var guessesRemaining = 12;
var lettersGuessed = [];
var words = ["beaker", "erlenmeyer flask", "periodic table", "deoxyribonucleic acid",
    "hypothesis", "scientific method"
];

var generateWordChoice = function() {
    return words[Math.floor(Math.random() * words.length)];
};
var currentWord = generateWordChoice();
var letterCount = currentWord.length;
var displayWord = [];
for (i = 0; i < letterCount; i++) {
    displayWord.push("_");
}

document.onkeyup = function(event) {
        var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

        if (currentWord.indexOf(userGuess) > -1) {
            guessesRemaining--;
            document.getElementById("guessesRemaining").innerHTML = guessesRemaining;
            lettersGuessed.push(userGuess);
            for (i = 0; i < letterCount; i++) {
            	var currentLetter = currentWord[i];
                if (userGuess === currentLetter) {
                	displayWord[i] = userGuess;
                }
            }





        }