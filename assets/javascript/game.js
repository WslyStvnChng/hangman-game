//Global Event Handler to load event of a Window
window.onload = function() {

// Global Variables
  var wordBank = ["trout", 'salmon', 'walleye', 'saugeye', 'bluegill', 'bass', 'crappie', 'sunfish', 'catfish'];
  var wins = 0; //Starts game with 0 points
  var loss = 0; //Ends when user losses
  var wrongLetter = [];
  var guessLeft = 10;
  var userGuesses = []; //User Guesses
  var underScores = []; //Pushes the Underscores
  var randomWord;
  

// Generate random word
  var randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
  console.log(randomWord);  //Words are randomly created in console

//Select word to a variable

  for(var i = 0; i < wordBank.length; i++) {
    console.log(wordBank[i]);
    underScores.push('_');
  }

//Grab randomWord to place onto page with ID
  var randomWord = document.getElementById('missing-word').textContent = randomWord;
  

// Captures keyboard input. Depending on the letter pressed it will "call" (execute) different functions.
//   document.onkeyup = function () {
//   userGuesses = event.key();
// }
}
