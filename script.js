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
