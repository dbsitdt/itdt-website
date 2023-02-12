gsap.set(".blob", { xPercent: -50, yPercent: -50 });
const blob = document.querySelector(".blob");
let mouseX;
let mouseY;

window.addEventListener("mousemove", e => {
  if (window.innerWidth > 600) {
    mouseX = e.clientX;
    mouseY = e.clientY;
    gsap.to(blob, 0.8, { x: mouseX, y: mouseY });
  }
});

const menuButton = document.querySelector(".nav-burger-menu");
const navList = document.querySelector(".nav-list");
const nav = document.querySelector("nav");
menuButton.addEventListener("click", () => {
  nav.classList.toggle("active");
});
navList.addEventListener("click", () => {
  nav.classList.remove("active");
});
import { Application } from "@splinetool/runtime";

const canvas = document.getElementById("canvas3d");
const app = new Application(canvas);
app.load("https://prod.spline.design/9SVDrl2aFACVIQ2Z/scene.splinecode");
const socialMediaGrid = document.querySelector(".contacts-info-grid");

socialMediaGrid.addEventListener("click", e => {
  if (!e.target.classList.contains("social-media-group")) return;
  const socialMediaGroup = e.target.closest(".social-media-group");
  socialMediaGroup.classList.add("copied");
  const copyText = e.target.querySelector(".social-media-texts");
  navigator.clipboard.writeText(copyText.innerText);
  setTimeout(() => {
    socialMediaGroup.classList.remove("copied");
  }, 1000);
});
