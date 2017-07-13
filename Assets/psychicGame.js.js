	    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var wins = 0;
    var losses = 0;
    var guessesLeft = 9;
    
    var computerPick = letters[Math.floor(Math.random()*letters.length)];
        console.log(computerPick);
    function gameOver () {
    	computerPick = letters[Math.floor(Math.random()*letters.length)];
        console.log(computerPick);
    }
        
    document.onkeyup = function() {
      var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
      var guessDiv = $('#guesses');
      if (guessesLeft > 8) {
      	guessDiv.append(userGuess);
        console.log(userGuess);
      } else {
      	  guessDiv.append(", " + userGuess);
          console.log(userGuess);
      }
    
      if (userGuess != computerPick && guessesLeft > 0) {
      	  guessesLeft--;
      	  alert("you guessed wrong")
        }  

      if (userGuess != computerPick && guessesLeft == 0) {
      	  losses++;
      	  guessesLeft = 9;
      	  alert("You lose!");
      	  $("#guesses").empty();
      	  gameOver();
      }

      if (userGuess == computerPick) {
      	  wins++;
      	  alert("you win");
      	  guessesLeft = 9;
      	  $("#guesses").empty();
      	  window [computerPick] = letters[Math.floor(Math.random()*letters.length)];
          console.log(computerPick);
          gameOver();
      }
    
      var html = "<h1>The Psychic Game</h1>" +
      "<h3>Guess what letter I'm thinking of</h3>" + 
      "<h3>Wins: " + wins + "</h3>" +
      "<h3>Losses: " + losses + "</h3>" +
      "<h3>Guesses Left: " + guessesLeft + "</h3>";     

	  document.querySelector('#gameStats').innerHTML = html;
      
	  }
  