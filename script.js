// script.js

// Select the toggle button
const toggleButton = document.getElementById('toggle-mode');

// Add an event listener for the button click
toggleButton.addEventListener('click', () => {
    // Toggle the dark-mode class on the body element
    document.body.classList.toggle('dark-mode');

    // Optional: Change the button text based on the mode
    if (document.body.classList.contains('dark-mode')) {
        toggleButton.textContent = 'Light Mode'; // Change button text
    } else {
        toggleButton.textContent = 'Dark Mode'; // Change button text
    }
});