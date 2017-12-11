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
  var wins = 10; //Starts game with 0 points
  var loss = 0; //Ends when user losses
  var wrongLetter = [];
  var lives = [];
  var guessLeft = 10;
  var userGuesses = []; //User Guesses
  var underScores = []; //Pushes the Underscores
  // var selectedWord = new Array(randomWord);

  // Generate random word from words selected
  randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
  // console.log(randomWord);

  // Create new variable that takes the randomWord selected and breaks into a array

  randomWordSplit = Array.from(randomWord);
  // console.log(randomWordSplit);

  //Select word to a variable for blanks
  for (var i = 0; i < randomWord.length; i++) {
    // console.log(wordBank[i]);
    underScores.push("_");
  } //end for loop

  //Now we grab a function in the event of user's guess
  document.onkeyup = function(e) 
    {
    var userGuesses = e.key.toLowerCase();  //user Guesses on keyboard
    // console.log("user guesses: " + userGuesses);

  //Checking if letter exist inside the word
    if(randomWord.indexOf(userGuesses) > -1) 
  {
  //Creating another for loop for new variable that was selected from randomWordSplit iterator    
    for (var i = 0; i < randomWordSplit.length; i++) {
      // console.log(randomWordSplit[i]);

      //if the randomWordSplit is corrected from user's input on keyboard, that statement is tru
      if (randomWordSplit[i] === userGuesses) { 
        underScores[i] = userGuesses;
        var correct = true;
        // console.log(underScores); //This console log will show the correct letters in the array of random word    
      }
    }
  }
    else {
      if (guessLeft > 0) {
        // endgame() 
        wrongLetter.push(userGuesses);
        guessLeft--; //Is guesses = guesses -1 
        // console.log("Guesses left: " + guessLeft);
  }
  else {
    alert("You bastard, you killed Kenny!!!!")
  }
}

//DOMS  - got letters to appear on DOM
  document.getElementById("missing-word").innerHTML = underScores.join(" ");

  document.getElementById("howmanylivesleft").innerHTML = guessLeft;

  document.getElementById("wrongletters").innerHTML = wrongLetter.join(" ");
}
}
  
