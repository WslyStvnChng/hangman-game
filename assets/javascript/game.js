<script type="text/javascript">

// Global Variables

  //Variables
  var wordBank = ['trout' ,'salmon', 'walleye', 'saugeye', 'bluegill', 'bass', 'crappie', 'sunfish', 'catfish'];  
  var wins = 0;
  var loss = 0;
  var wrongLetter = [];
  var guessLeft = 9;
  var userGuesses = [];
  var underScores = [];
  var randomWord;

  // Generate random word
  
  function startGame() {
  var wordBank = wordBank[Math.floor(Math.random()*wordBank.length)];
  console.log(wordBank.length);

    for(var i = 0; i < wordBank.length; i++) {
      console.log(wordBank[i]);
      
        underScores.push('_');
    }
    document.getElementById('missing-word').innerHTML = underScores;
  }
  




  



</script>
</body>
</html>

