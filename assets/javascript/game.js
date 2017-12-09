//Global Event Handler to load event of a Window
window.onload = function() {
  // Global Variables
  var wordBank = [
    "trout",
    "salmon",
    "walleye",
    "saugeye",
    "bluegill",
    "bass",
    "crappie",
    "sunfish",
    "catfish"
  ];
  var wins = 0; //Starts game with 0 points
  var loss = 0; //Ends when user losses
  var wrongLetter = [];
  var guessLeft = 10;
  var userGuesses = []; //User Guesses
  var underScores = []; //Pushes the Underscores
  // var selectedWord = new Array(randomWord);

  // Generate random word from words selected
  randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
  // console.log(randomWord);

  // Create new variable that takes the randomWord selected and breaks into a array

  randomWordSplit = Array.from(randomWord);
  console.log(randomWordSplit);

  //Select word to a variable for blanks
  for (var i = 0; i < randomWord.length; i++) {
    // console.log(wordBank[i]);
    underScores.push("_");
  }

  //Print underScores to screen
  document.getElementById("missing-word").textContent = underScores.join(" ");

  //Now we grab a function in the event of user's guess
  document.onkeyup = function(event) {
    var keyPressed = event.key;

    for (var i = 0; i < randomWord.length; i++) {
      console.log(randomWord[i]);
    }

    if (keyPressed == randomWord[i]) {
      console.log(randomWord[i]);
    } else {
    }

    //Next steps:
    //create a function pass in the randomWord variable; associate a character in randomWord with each dash up to the length of the dash
    //compare selected word to underscores
    //Style or attach id from div class = hidden word
  };
};
