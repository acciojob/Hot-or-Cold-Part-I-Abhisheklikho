// generate a random number between 1 and 100
const secretNumber = Math.floor(Math.random() * 100) + 1;

// get references to the HTML elements
const guessInput = document.getElementById("guess");
const response = document.getElementById("respond");
const button = document.querySelector("button");

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
  } else if (guessInput.lastGuess !== undefined) {
    const currentDiff = Math.abs(guess - secretNumber);
    const prevDiff = Math.abs(guessInput.lastGuess - secretNumber);
    if (currentDiff < prevDiff) {
      response.innerText = "Getting hotter!";
    } else {
      response.innerText = "Getting colder!";
    }
  }

  // store the last guess for comparison in the next turn
  guessInput.lastGuess = guess;

  // provide a hint to the user whether to guess higher or lower in the next turn
  if (guess < secretNumber) {
    response.innerText += " Guess higher!";
  } else {
    response.innerText += " Guess lower!";
  }
}

// listen for button click and call the checkGuess function
button.addEventListener("click", checkGuess);
