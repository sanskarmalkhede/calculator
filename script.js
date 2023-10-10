// Getting the elements needed
const screen = document.getElementById("screen");
const equalBtn = document.getElementById('equal-btn')
const acBtn = document.getElementById('ac-btn')
const delBtn = document.getElementById('del-btn')
const buttons = document.querySelectorAll("button");


// Add event listener to all buttons
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {

    if (event.target.id == 'equal-btn') {
      // If the "=" button is clicked, do math calculation
      try {
        // Replace multiplication and division operators
        screen.value = eval(screen.value.replace('x', '*').replace('÷', '/'));
      } catch (error) {
        screen.value = "Error";
      }
    }
    else if (event.target.id == 'ac-btn') {
      // If the "AC" button is clicked, clear all inputs
      screen.value = "";
    }
    else if (event.target.id == 'del-btn') {
      // If the "Del" button is clicked, delete the last character
      screen.value = screen.value.slice(0, -1);
    }
    else {
      // Also, add text to the screen
      screen.value += button.textContent;
    }
  });
});


// Add event listeners for keyboard input
document.addEventListener('keydown', function (event) {

  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    equalBtn.click();
  }
  else if (event.key === "Backspace") {
    delBtn.click();
  }
  else if (event.key === "Delete") {
    acBtn.click()
  }
else if (event.key.match(/[0-9/.-/+*//]/)) {
    //press on button with text 0-9
    document.getElementById(`${event.key}-btn`)?.click()
  }
  else if (event.key.match(/[/(/)]/)) {
    //press on button with text 0-9
    if (event.key == "(")
      document.getElementById(`lp-btn`)?.click()
    else if (event.key == ")")
      document.getElementById(`rp-btn`)?.click()
  }
});

// Get the decimal precision elements
const decimalPrecisionElement = document.getElementById("decimal-precision");
const increasePrecisionBtn = document.getElementById("increase-precision");
const decreasePrecisionBtn = document.getElementById("decrease-precision");

// Initialize the decimal precision and result variables
let decimalPrecision = 2; // Default precision
let resultValue = ""; // Variable to store the result
// Function to update the decimal precision on the screen
function updateDecimalPrecision() {
  decimalPrecisionElement.textContent = decimalPrecision;
}

// Add event listeners to increase and decrease precision
increasePrecisionBtn.addEventListener("click", () => {
  decimalPrecision++;
  updateDecimalPrecision();
  // Clear the input field after updating the precision
  screen.value = resultValue;
});

decreasePrecisionBtn.addEventListener("click", () => {
  if (decimalPrecision > 0) {
    decimalPrecision--;
    updateDecimalPrecision();
    // Clear the input field after updating the precision
    screen.value = resultValue;
  }
});

// Add an event listener to the equal button to perform calculations
equalBtn.addEventListener("click", () => {
  try {
    // Evaluate the expression
    const result = eval(screen.value.replace('x', '*').replace('÷', '/'));

    // Round the result to the specified precision
    resultValue = result.toFixed(decimalPrecision);

    // Display the result on the screen
    screen.value = resultValue;
  } catch (error) {
    screen.value = "Error";
  }
});

// Initial update of decimal precision
updateDecimalPrecision();
