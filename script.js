// Cambia esta fecha por la fecha real de los XV
const targetDate = new Date("November 21, 2025 20:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance < 0) {
    // si ya pasó la fecha, puedes ocultar el contador o mostrar un mensaje
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days.toString().padStart(2, "0");
  document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
  document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
  document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
}

// actualizar cada segundo
setInterval(updateCountdown, 1000);
updateCountdown();

// ====== MÚSICA ======
const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");

if (musicBtn && bgMusic) {
  musicBtn.addEventListener("click", () => {
    if (bgMusic.paused) {
      bgMusic.play();
      musicBtn.classList.add("is-playing");
    } else {
      bgMusic.pause();
      musicBtn.classList.remove("is-playing");
    }
  });
}

// ====== ANIMACIÓN AL HACER SCROLL ======
const revealEls = document.querySelectorAll(".reveal-right");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        // si no quieres que se quite nunca, deja de observar
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2
  });

  revealEls.forEach((el) => observer.observe(el));
} else {
  // fallback: si el navegador no soporta observer, las mostramos
  revealEls.forEach((el) => el.classList.add("is-visible"));
}



