document.addEventListener('DOMContentLoaded', () => {
    // ⭐ GENERADOR DE ESTRELLAS ALEATORIAS ⭐
    // Cambia este número para tener más o menos estrellas
    const starCount = 80; // Número total de estrellas

    function createStars() {
        // Crear un contenedor fijo para las estrellas
        const starContainer = document.createElement('div');
        starContainer.style.position = 'fixed';
        starContainer.style.top = '0';
        starContainer.style.left = '0';
        starContainer.style.width = '100%';
        starContainer.style.height = '100%';
        starContainer.style.zIndex = '-1'; // Al fondo
        starContainer.style.pointerEvents = 'none';
        starContainer.id = 'star-container';

        document.body.appendChild(starContainer);

        for (let i = 0; i < starCount; i++) {
            const star = document.createElement('div');

            // Posición aleatoria (0% a 100%)
            const x = Math.random() * 100;
            const y = Math.random() * 100;

            // Tamaño aleatorio (1px a 3px)
            const size = Math.floor(Math.random() * 3) + 1;

            // Opacidad aleatoria (0.3 a 1.0) para efecto de brillo
            const opacity = Math.random() * 0.7 + 0.3;

            star.style.position = 'absolute';
            star.style.left = `${x}%`;
            star.style.top = `${y}%`;
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            star.style.backgroundColor = 'white';
            star.style.borderRadius = '50%';
            star.style.opacity = opacity;
            star.style.pointerEvents = 'none'; // Las estrellas no bloquean clicks
            star.style.zIndex = '0';

            starContainer.appendChild(star);
        }
    }

    createStars();

    // Event Date: December 26, 2026, 6:00 PM
    const eventDate = new Date('December 26, 2025 18:00:00').getTime();

    // Countdown Timer
    const countdownTimer = setInterval(() => {
        const now = new Date().getTime();
        const distance = eventDate - now;

        if (distance < 0) {
            clearInterval(countdownTimer);
            document.getElementById('countdown').innerHTML = "¡El evento ha comenzado!";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').innerText = days;
        document.getElementById('hours').innerText = hours;
        document.getElementById('minutes').innerText = minutes;
        document.getElementById('seconds').innerText = seconds;
    }, 1000);

    // Web Animations API for Scroll Reveal
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');

                // Optional: specific animation using Web Animations API
                entry.target.animate([
                    { opacity: 0, transform: 'translateY(20px)' },
                    { opacity: 1, transform: 'translateY(0)' }
                ], {
                    duration: 1000,
                    easing: 'ease-out',
                    fill: 'forwards'
                });

                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));

    // Music Player Controls
    const musicButton = document.getElementById('musicButton');
    const backgroundMusic = document.getElementById('backgroundMusic');
    let isPlaying = false;

    // Establecer volumen inicial (0.0 a 1.0, donde 0.5 = 50%)
    backgroundMusic.volume = 0.3;

    musicButton.addEventListener('click', () => {
        if (isPlaying) {
            backgroundMusic.pause();
            musicButton.classList.remove('playing');
            musicButton.innerHTML = '<i class="fas fa-music"></i>';
            musicButton.title = 'Reproducir Música';
        } else {
            backgroundMusic.play();
            musicButton.classList.add('playing');
            musicButton.innerHTML = '<i class="fas fa-pause"></i>';
            musicButton.title = 'Pausar Música';
        }
        isPlaying = !isPlaying;
    });
});
