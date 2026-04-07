/*
This JavaScript file controls sound playback
No JavaScript is written inside the HTML file (requirement)
*/

// Create a new audio object
const sound = new Audio("sound.mp3");

// Get play button from HTML
const playButton = document.getElementById("playBtn");

// Get pause button from HTML
const pauseButton = document.getElementById("pauseBtn");

// Add event listener to play button
playButton.addEventListener("click", function () {
sound.play(); // Play sound
});

// Add event listener to pause button
pauseButton.addEventListener("click", function () {
sound.pause(); // Pause sound
});
