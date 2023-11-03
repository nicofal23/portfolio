const phrases = ["Soy Nicolas Falciglio", "Soy Desarrollador Frontend"];
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




const modal = document.getElementById('myModal');
const btn = document.getElementById('openModalBtn');
const span = document.getElementsByClassName('close')[0];

btn.onclick = function() {
  modal.style.display = 'block';
};

span.onclick = function() {
  modal.style.display = 'none';
};

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
