console.log("¡Hola desde app.js!");

// Automatic Copyright Year
const yearSpan = document.getElementById("current-year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}