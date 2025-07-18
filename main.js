// main.js

// Fungsi AOS animation (jika digunakan AOS)
document.addEventListener("DOMContentLoaded", function () {
  if (typeof AOS !== 'undefined') {
    AOS.init();
  }
});

// Smooth Scroll (opsional jika ingin klik anchor scroll halus)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// informasi
const menu = document.getElementById("menu-informasi");
const konten = document.getElementById("konten-informasi");

// Tampilkan saat mouse masuk
menu.addEventListener("mouseenter", () => {
  konten.style.display = "block";
});

// Sembunyikan saat mouse keluar
menu.addEventListener("mouseleave", () => {
  setTimeout(() => {
    if (!konten.matches(':hover')) {
      konten.style.display = "none";
    }
  }, 200);
});

konten.addEventListener("mouseleave", () => {
  konten.style.display = "none";
});

// Optional: Tetap tampil jika kursor berada di konten
konten.addEventListener("mouseenter", () => {
  konten.style.display = "block";
});

