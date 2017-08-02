
// ****GAME SETUP******

var wins = 0;
var guessesRemaining = 15;
var lettersGuessed = [];
var words = ["beaker", "flask", "periodic table", "deoxyribonucleic acid",
    "hypothesis", "scientific method", "science"
];

var generateWordChoice = function() {
    return words[Math.floor(Math.random() * words.length)];
};
var currentWord = generateWordChoice();
var letterCount = currentWord.length;
var lettersGuessedCorrectly = [];
var displayWord = "";
for (i = 0; i < letterCount; i++) {
    lettersGuessedCorrectly.push("_ ");
    displayWord += "_ ";
}

document.getElementById("currentWord").innerHTML = displayWord;
document.getElementById("wins").innerHTML = wins;
document.getElementById("guessesRemaining").innerHTML = guessesRemaining;


//*****GAME PLAY*****


console.log(currentWord)
document.onkeyup = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    guessesRemaining--;
    document.getElementById("guessesRemaining").innerHTML = guessesRemaining;
    if (currentWord.indexOf(userGuess) > -1) {
        lettersGuessed.push(userGuess);
        displayWord = "";
        for (i = 0; i < letterCount; i++) {
            var currentLetter = currentWord[i];
            if (userGuess === currentLetter) {
                lettersGuessedCorrectly[i] = userGuess;
                console.log("current user guess: " + lettersGuessedCorrectly[i]);

            }
            displayWord = displayWord + lettersGuessedCorrectly[i];
            document.getElementById("currentWord").innerHTML = displayWord;
        }


    } else {
        console.log("WRONG");
    }
};