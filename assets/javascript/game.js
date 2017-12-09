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
  var randomWord = wordBank;
  

// Generate random word
  randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
  console.log(randomWord);  //Words are randomly created in console

//Select word to a variable

  for(var i = 0; i < randomWord.length; i++) {
    // console.log(wordBank[i]);
    underScores.push('_');
  }

//Print underScores to screen
  document.getElementById('missing-word').textContent = underScores.join(" ");
  
//Print number of guesses on html
  // document.getElementById('guess-left').textContent = guessLeft;

} // Global variables and random word generated throughout the game

//Get user's guesses is right 
  // document.addEventListener('keypress', function (e){
  //   console.log(event);
  // }

// Use a loop the selectedWord and see if the letter exisit in there. If it does, replace the relevent letterBlanks spaces with correct letters

// for (var i = 0; i < 
  
  

 



//  if(randomWord.indexOf(userGuesses[i]) > -1) {
//     //   console.log(randomWord.indexOf(userGuesses));
//       for(var i = 0; i < randomWord.length; i++) {
//       }
//       console.log(randomWord);
//       if(randomWord[i] === userGuesses) {
//       console.log(underScores);
//         underScores[i] = userGuesses;
//         console.log(underScores);
//       }
      
//     }
//     else {
//       wrongLetter.push(userGuesses);
//       console.log(wrongLetter);
//     }

//   }
// Captures keyboard input. Depending on the letter pressed it will "call" (execute) different functions.
//   document.onkeyup = function () {
//   userGuesses = event.key();
// }


    