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


// Selecciona el contenedor del navbar
const navbarContainer = document.getElementById('navbarContainer');

// Define los elementos del navbar
const navItems = [
    { text: 'Home', link: '#inicio' },
    { text: 'About me', link: '#aboutme' },
    { text: 'Skills', link: '#skills' },
    { text: 'Portfolio', link: '#portfolio' },
    { text: 'Contact', link: '#contact' }
];

// Función para generar el navbar responsivo
function generateNavbar() {
    const navbar = document.createElement('nav');
    navbar.className = 'navbar navbar-expand-lg navbar-light';
    navbar.innerHTML = `
        <div class="container">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse flex-column text-md-center otronombre" id="navbarNav">
                <ul class="navbar-nav ms-auto flex-column align-items-center justify-content-center">
                    ${navItems.map(item => `<li class="nav-item"><a class="nav-link" href="${item.link}">${item.text}</a></li>`).join('')}
                </ul>
            </div>
        </div>
    `;
    navbarContainer.appendChild(navbar);

    // Agrega el evento para cerrar el menú al hacer clic en un enlace
    const navLinks = navbar.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            const navbarCollapse = navbar.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                navbarCollapse.classList.remove('show');
            }
        });
    });
}

// Verifica el tamaño de la ventana y genera el navbar si el ancho es 991px o menos
function checkWindowWidth() {
    if (window.innerWidth <= 991) {
        generateNavbar();
    } else {
        navbarContainer.innerHTML = ''; // Elimina el navbar si el ancho de la ventana es mayor a 991px
    }
}

// Ejecuta la función cuando se carga la página y cuando se cambia el tamaño de la ventana
window.addEventListener('load', checkWindowWidth);
window.addEventListener('resize', checkWindowWidth);


