// Menú hamburguesa
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", function () {
    navMenu.classList.toggle("show");
    hamburger.classList.toggle("active");
});

// Dropdown de proyectos
const proyectosBtn = document.getElementById("proyectos-btn");
const dropdownMenu = document.getElementById("dropdown-menu");
const dropdownParent = document.querySelector(".dropdown");

proyectosBtn.addEventListener("click", function (e) {
    e.preventDefault();
    dropdownMenu.classList.toggle("show");
    dropdownParent.classList.toggle("active");
});

// Cerrar dropdown al hacer click fuera
document.addEventListener("click", function (e) {
    if (!e.target.closest(".dropdown")) {
        dropdownMenu.classList.remove("show");
    }
});

// Cerrar menú móvil al hacer click en un enlace
const navLinks = document.querySelectorAll(".nav-menu a");
navLinks.forEach((link) => {
    link.addEventListener("click", function () {
        if (link.id !== "proyectos-btn") {
            if (window.innerWidth <= 768) {
                navMenu.classList.remove("show");
                dropdownMenu.classList.remove("show");
            }
        }
    });
});

// Header sticky con efecto scroll
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("main section");
  const navLinks = document.querySelectorAll(".sidebar a");
  const headerHeight = document.querySelector("header").offsetHeight;

  function activateSection() {
    let currentSection = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop - headerHeight - 20;
      if (window.scrollY >= sectionTop) {
        currentSection = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + currentSection) {
        link.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", activateSection);
  activateSection(); // activar al cargar
});