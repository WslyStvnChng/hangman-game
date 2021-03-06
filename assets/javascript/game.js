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
  var guessLeft = 0;
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
  document.onkeyup = function(e) {
    var userGuesses = e.key.toLowerCase();  //user Guesses on keyboard
    // console.log("user guesses: " + userGuesses);

  //Checking if letter exist inside the word
    if(randomWord.indexOf(userGuesses) > -1) {
  //Creating another for loop for new variable that was selected from randomWordSplit iterator    
    for (var i = 0; i < randomWordSplit.length; i++) {
      // console.log(randomWordSplit[i]);

      //if the randomWordSplit is corrected from user's input on keyboard, that statement is tru
      if (randomWordSplit[i] === userGuesses) { 
        underScores[i] = userGuesses;
        // var correct = true;
        // console.log(underScores); //This console log will show the correct letters in the array of random word    
      }
    }
    var randomWordSplitString = randomWordSplit.join(" ")
    // console.log(randomrandomWord);
    var underScoresStrings = underScores.join(" ")

    if (randomWordSplitString === underScoresStrings) {
      setTimeout(function(){
        alert("You did it, you won the game")
      },5)

      wins ++
      document.getElementById("wins").innerHTML = wins;

     
    }
  } else {
      if (guessLeft === 0 && wrongLetter === 0) {
        wrongLetter.push(userGuesses); //If wrong letter, push to the random word[i] and count it as a loss
        guessLeft--; //Is guesses = guesses -1 
        // console.log("Guesses left: " + guessLeft);
        console.log(guessLeft);
      }
  }  
  if(guessLeft = 0) {
    alert("Time to replay again")
    loss--
    document.getElementById("losses").innerHTML = loss ++;
  }

//DOMS  - got letters to appear on DOM
  document.getElementById("missing-word").innerHTML = underScores.join(" ");
//Show how many lives left on DOM
  document.getElementById("howmanylettersleft").innerHTML = guessLeft;
// Show how many letters wrong on DOM
  document.getElementById("incorrect").innerHTML = wrongLetter.join(" ");
//Show the wins
  document.getElementById("wins").innerHTML = wins;
}
}

var resetButton = document.getElementById('myForm');
resetButton.onclick = reloadPage;

function reloadPage() {
  window.location.reload();
}
