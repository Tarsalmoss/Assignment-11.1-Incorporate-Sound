/*
This file controls background space sound
All JavaScript is kept outside HTML (requirement)
*/

// Create audio object
const sound = new Audio("sound.mp3");

// Make sound loop continuously
sound.loop = true;

// Get buttons
const playButton = document.getElementById("playBtn");
const pauseButton = document.getElementById("pauseBtn");

// Play sound when clicked
playButton.addEventListener("click", function () {
sound.play();
});

// Pause sound when clicked
pauseButton.addEventListener("click", function () {
sound.pause();
});
