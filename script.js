/*
This file controls background space sound with smooth effects
All JavaScript is external (assignment requirement)
*/

// Create audio object
const sound = new Audio("sound.mp3");

// Set looping
sound.loop = true;

// Set default volume (ambient level)
sound.volume = 0.4;

// Get buttons
const playButton = document.getElementById("playBtn");
const pauseButton = document.getElementById("pauseBtn");

// Function to fade in sound
function fadeIn(audio) {
audio.volume = 0;
audio.play();

```
let volume = 0;
const fade = setInterval(function () {
    if (volume < 0.4) {
        volume += 0.02;
        audio.volume = volume;
    } else {
        clearInterval(fade);
    }
}, 100);
```

}

// Function to fade out sound
function fadeOut(audio) {
let volume = audio.volume;

```
const fade = setInterval(function () {
    if (volume > 0.02) {
        volume -= 0.02;
        audio.volume = volume;
    } else {
        audio.pause();
        clearInterval(fade);
    }
}, 100);
```

}

// Play button event
playButton.addEventListener("click", function () {
fadeIn(sound);
});

// Pause button event
pauseButton.addEventListener("click", function () {
fadeOut(sound);
});

