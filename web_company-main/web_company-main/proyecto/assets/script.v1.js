// Botón de modo oscuro
const darkModeToggle = document.getElementById('darkModeToggle');
const isDarkMode = localStorage.getItem('darkMode') === 'true';

if (isDarkMode) {
    document.body.classList.add('dark-mode');
}

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
});

document.addEventListener("DOMContentLoaded", function() {
    let elemento = document.querySelector(".tu-clase-o-id");
    if (elemento) {
        elemento.addEventListener("click", function() {
            console.log("Evento agregado correctamente");
        });
    } else {
        console.error("El elemento no existe");
    }
});

// Menú responsivo (Botón hamburguesa)
document.addEventListener('DOMContentLoaded', () => {
    const dropdownItems = document.querySelectorAll('.has-dropdown');
    const menuToggle = document.querySelector('.menu-toggle');
    const navigation = document.querySelector('.navigation');

    // Alternar la clase active al hacer clic en el botón hamburguesa
    menuToggle.addEventListener('click', () => {
        navigation.classList.toggle('active');
    });

    dropdownItems.forEach((item) => {
        const link = item.querySelector('a');
        const dropdown = item.querySelector('.dropdown-menu'); // Cambiado a .dropdown-menu

        // Evitar redirección y alternar el submenú en móviles
        link.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                dropdown.classList.toggle('active');
            }
        });
    });
});

    // Resaltar sección activa al hacer scroll
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    menuLinks.forEach((link) => {
                        link.classList.toggle(
                            'active',
                            link.getAttribute('href').substring(1) === entry.target.id
                        );
                    });
                }
            });
        },
        { threshold: 0.7 }
    );

    sections.forEach((section) => observer.observe(section));


document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Ajustar según la altura del encabezado
                behavior: 'smooth',
            });
        }
    });
});


// Efecto Sticky en el encabezado
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});


//DOCUMENTOS
document.querySelector('.contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('Por favor, completa todos los campos.');
        return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
        alert('Por favor, introduce un correo electrónico válido.');
        return;
    }

    alert('¡Gracias por tu mensaje!');
    e.target.reset();
});
// TESTIMONIOS  
gsap.from(".testimonial-card", {
    duration: 1,
    opacity: 0,
    y: 50,
    stagger: 0.3
});
// animacion localizacion
AOS.init();

// Rastreo de clics en el botón de WhatsApp (para analíticas)
function trackWhatsappClick() {
    console.log("Botón de WhatsApp clickeado"); // Reemplazar con tu herramienta de analíticas
    if (typeof gtag === "function") {
        gtag('event', 'click', {
            'event_category': 'WhatsApp',
            'event_label': 'Botón Flotante'
        });
    }
}

// Modal para WhatsApp
function openModal() {
    document.getElementById('whatsapp-modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('whatsapp-modal').style.display = 'none';
}

// Sacudida opcional al cargar la página
window.onload = () => {
    const whatsappButton = document.querySelector('.whatsapp-floating');
    whatsappButton.classList.add('shake');
};

const languageSelector = document.getElementById("language-selector");

document.addEventListener("DOMContentLoaded", function () {
    const cookieBanner = document.getElementById("cookie-banner");
    const acceptCookiesBtn = document.getElementById("accept-cookies");
    const rejectCookiesBtn = document.getElementById("reject-cookies");

    // 📌 Verifica si el usuario ya aceptó o rechazó las cookies en `localStorage`
    if (!localStorage.getItem("cookiesAccepted")) {
        cookieBanner.classList.add("show-cookie-banner"); // Muestra el banner
    }

    // 📌 Evento cuando el usuario acepta las cookies
    acceptCookiesBtn.addEventListener("click", function () {
        localStorage.setItem("cookiesAccepted", "true"); // Guarda la preferencia
        cookieBanner.classList.remove("show-cookie-banner"); // Oculta el banner
    });

    // 📌 Evento cuando el usuario rechaza las cookies
    rejectCookiesBtn.addEventListener("click", function () {
        localStorage.setItem("cookiesAccepted", "false"); // Guarda la preferencia
        cookieBanner.classList.remove("show-cookie-banner"); // Oculta el banner
    });
});
