const phrases = ["I'm Nicolas Falciglio", "I'm Frontend Developer"];
const typingText = document.getElementById('typing-text');
let phraseIndex = 0;
let letterIndex = 0;
let isTyping = true;

function typeAndErase() {
    if (isTyping && letterIndex < phrases[phraseIndex].length) {
        typingText.textContent += phrases[phraseIndex][letterIndex];
        letterIndex++;
    } else if (!isTyping && letterIndex > 0) {
        typingText.textContent = phrases[phraseIndex].substring(0, letterIndex - 1);
        letterIndex--;
    } else {
        isTyping = !isTyping;
        if (isTyping) {
            phraseIndex = (phraseIndex + 1) % phrases.length;
        }
    }

    const speed = isTyping ? 150 : 75;
    setTimeout(typeAndErase, speed);
}

typeAndErase(); // Comienza el proceso de tipeo y borrado



//flecha


