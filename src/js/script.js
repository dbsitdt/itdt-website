gsap.set(".blob", { xPercent: -50, yPercent: -50 });
const blob = document.querySelector(".blob");
let mouseX;
let mouseY;
window.addEventListener("mousemove", e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  gsap.to(blob, 0.8, { x: mouseX, y: mouseY });
});

const menuButton = document.querySelector(".nav-burger-menu");
const navList = document.querySelector(".nav-list");
const nav = document.querySelector("nav");
menuButton.addEventListener("click", () => {
  nav.classList.toggle("active");
  console.log("Hi");
});
