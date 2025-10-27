// Simple example script
console.log("Welcome to Holy Crepes! 🍓");

// Smooth scroll for nav links
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const section = document.querySelector(link.getAttribute("href"));
    section.scrollIntoView({ behavior: "smooth" });
  });
});
