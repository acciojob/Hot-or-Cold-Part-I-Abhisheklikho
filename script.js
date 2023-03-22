//your code here

// generate a random number between 1 and 100
const secretNumber = Math.floor(Math.random() * 100) + 1;

// get references to the HTML elements
const guessInput = document.getElementById("guess");
const response = document.getElementById("respond");

// function to handle the user's guess
function checkGuess() {
  // parse the user's guess from the input field
  const guess = parseInt(guessInput.value);
  
  // validate the user's guess
  if (isNaN(guess) || guess < 1 || guess > 100) {
    response.innerText = "Invalid guess. Please enter a number between 1 and 100.";
    return;
  }
  
  // provide feedback to the user based on the guess
  if (guess === secretNumber) {
    response.innerText = "Congratulations, you guessed the number!";
    return;
  } else if (guess < secretNumber) {
    response.innerText = "Guess higher!";
  } else {
    response.innerText = "Guess lower!";
  }
}
// listen for button click and call the checkGuess function
document.querySelector("button").addEventListener("click", checkGuess);
