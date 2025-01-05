// Dark mode toggle button
const darkModeToggle = document.getElementById("dark-mode-toggle");

// Event listener to toggle dark mode
darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Updating the button text
  if (document.body.classList.contains("dark-mode")) {
    darkModeToggle.textContent = "Switch to Light Mode";
  } else {
    darkModeToggle.textContent = "Switch to Dark Mode";
  }
});