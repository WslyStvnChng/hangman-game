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
  // console.log(randomWordSplit);

  //Select word to a variable for blanks
  for (var i = 0; i < randomWord.length; i++) {
    // console.log(wordBank[i]);
    underScores.push("_");
  } //end for loop

  //Print underScores to screen
  document.getElementById("missing-word").innerHTML = underScores.join(" ");

  //Now we grab a function in the event of user's guess
  document.onkeyup = function(e) 
  {
    var userGuesses = e.key;  //user Guesses on keyboard
    // console.log(keyPressed);

  //Checking if letter exist inside the word
  if(randomWord.indexOf(userGuesses) > -1) 
  {
  //Creating another for loop for new variable that was selected from randomWordSplit iterator    
    for (var i = 0; i < randomWordSplit.length; i++) {
      // console.log(randomWordSplit[i]);

      //if the randomWordSplit is corrected from user's input on keyboard, that statement is tru
      if (randomWordSplit[i] === userGuesses) 
      {
        underScores[i] = userGuesses; //underScores is equal to userGuesses
        console.log(underScores);
      }
    }
  } //If wrong then push the user's lives decrease
  else {
    wrongLetter.push(userGuesses);
    guessLeft--;
    console.log(guessLeft);
  }

}
}



  //If key is pressed by user it will compare to the new variable of the randomWordSplit and see if it matches with the string within the word
  //If the selected input is CORRECTED in the randomWordSplit; than it will input it on the ID selected of html  
    // if (keyPressed == randomWordSplit[i]) {
    //   // console.log(keyPressed)
    // } 



    
  //IF isn't corrected, it will grab the ID selector from the HTML to show the losses (counter)
    // } else if {


  








    //Next steps:
    //create a function pass in the randomWord variable; associate a character in randomWord with each dash up to the length of the dash
    //compare selected word to underscores
    //Style or attach id from div class = hidden word

