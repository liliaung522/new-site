// Set current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Greeting button
const greetBtn = document.getElementById("greetBtn");
const greetOutput = document.getElementById("greetOutput");

const messages = [
  "Thanks for visiting! 🎉",
  "Have a great day! ☀️",
  "You clicked the button! 🚀",
  "This site is live on GitHub Pages! 🌐",
];

greetBtn.addEventListener("click", () => {
  const msg = messages[Math.floor(Math.random() * messages.length)];
  greetOutput.textContent = msg;
});