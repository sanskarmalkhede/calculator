// Mendapatkan elemen-elemen yang dibutuhkan
const screen = document.getElementById("screen");
const equalBtn = document.getElementById('equal-btn')
const acBtn = document.getElementById('ac-btn')
const delBtn = document.getElementById('del-btn')
// const equalsButton = document.querySelector(".green-btn");
// const clearButton = document.querySelector(".red-btn");
// const deleteButton = document.querySelector(".red-btn");
const buttons = document.querySelectorAll("button");


// Menambahkan event listener pada semua tombol
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {

    if (event.target.id == 'equal-btn') {
      console.log("=")
      // Jika tombol "=" diklik, lakukan perhitungan matematika
      try {
        // Ganti operator perkalian dan pembagian
        screen.value = eval(screen.value.replace('x', '*').replace('÷', '/'));
      } catch (error) {
        screen.value = "Error";
      }
    }
    else if (event.target.id == 'ac-btn') {
      console.log("ac")
      // Jika tombol "AC" diklik, hapus semua input
      screen.value = "";
    }
    else if (event.target.id == 'del-btn') {
      console.log("del")
      // Jika tombol "Del" diklik, hapus karakter terakhir
      screen.value = screen.value.slice(0, -1);
    }
    else {
      // Selain itu, tambahkan teks tombol ke layar
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
