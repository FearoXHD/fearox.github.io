
const textParts = [
    "FearoX",
    "FearoX on top ",
    "Why are you stalking? "
];

let currentPartIndex = 0;
let position = 0;
let interval;

function writeTextPart() {
    const currentPart = textParts[currentPartIndex];
    document.title = currentPart.substring(0, position);
    position++;

    if (position > currentPart.length) {
        currentPartIndex++;
        position = 0;
        if (currentPartIndex === textParts.length) {
            currentPartIndex = 0;
        }
    }
}

interval = setInterval(writeTextPart, 120);
S