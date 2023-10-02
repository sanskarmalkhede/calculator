// Mendapatkan elemen-elemen yang dibutuhkan
const screen = document.getElementById("screen");
const equalsButton = document.querySelector(".green-btn");
const clearButton = document.querySelector(".red-btn");
const deleteButton = document.querySelector(".red-btn");
const buttons = document.querySelectorAll("button");

// Menambahkan event listener pada semua tombol
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.textContent === "=") {
      // Jika tombol "=" diklik, lakukan perhitungan matematika
      try {
        // Ganti operator perkalian dan pembagian
        screen.value = eval(screen.value.replace('x', '*').replace('÷', '/'));
      } catch (error) {
        screen.value = "Error";
      }
    } else if (button.textContent === "AC") {
      // Jika tombol "AC" diklik, hapus semua input
      screen.value = "";
    } else if (button.textContent === "Del") {
      // Jika tombol "Del" diklik, hapus karakter terakhir
      screen.value = screen.value.slice(0, -1);
    } else {
      // Selain itu, tambahkan teks tombol ke layar
      screen.value += button.textContent;
    }
  });
});
