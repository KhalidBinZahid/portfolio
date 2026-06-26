// Typing Animation

const professions = [
    "Mechatronics Engineer",
    "Embedded Systems Engineer",
    "Robotics Researcher"
   
];

let professionIndex = 0;
let charIndex = 0;
let deleting = false;

const typingElement = document.getElementById("typing-text");

function typeEffect() {

    const currentText = professions[professionIndex];

    if (!deleting) {

        typingElement.textContent =
            currentText.substring(0, charIndex);

        charIndex++;

        if (charIndex > currentText.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typingElement.textContent =
            currentText.substring(0, charIndex);

        charIndex--;

        if (charIndex < 0) {

            deleting = false;

            professionIndex++;

            if (professionIndex >= professions.length) {
                professionIndex = 0;
            }
        }
    }

    setTimeout(typeEffect, deleting ? 50 : 100);
}

typeEffect();