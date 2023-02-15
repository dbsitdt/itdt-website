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
import Scrambler from "scrambling-text";

const canvas = document.getElementById("canvas3d");
const app = new Application(canvas);
app.load("https://prod.spline.design/9SVDrl2aFACVIQ2Z/scene.splinecode");
// create an instance of Scrambler.
const scrambler = new Scrambler();
const handleScramble = text => {
  const loaderText = document.querySelector(".loader-text");
  loaderText.innerText = text;
};
const characters = [
  ...Scrambler.CHARACTERS.DEFAULT,
  ...Scrambler.CHARACTERS.ALPHABET,
  "<",
  ">",
];
scrambler.scramble("IT Development Team", handleScramble, {
  characters: characters,
});
const loader = document.querySelector("#loader");
window.addEventListener("load", function () {
  this.setTimeout(function () {
    gsap.to(".loader-logo", {
      duration: 1.2,
      transform: "translateY(-100vh)",
    });
    gsap.to(".loader-text", {
      duration: 1.3,
      transform: "translateY(-100vh)",
    });
    gsap.to("#loader", {
      duration: 1.4,
      transform: "translateY(-100vh)",
    });
    const tl = gsap.timeline();
    tl.from(
      ".hero-title",
      {
        y: -10,
        opacity: 0,
        duration: 0.4,
        delay: 0.5,
      },
      "begin"
    );
    tl.from(
      ".hero-img",
      {
        y: -10,
        opacity: 0,
        duration: 0.4,
        stagger: 0.1,
        delay: 0.5,
      },
      "begin"
    );
    tl.from(
      ".hero-btn",
      {
        y: -10,
        opacity: 0,
        duration: 0.4,
        delay: 0.5,
      },
      "begin"
    );
    tl.from(".nav-item", {
      y: -10,
      opacity: 0,
      duration: 0.3,
      stagger: 0.1,
      delay: 0.1,
    });
  }, 3500);
});

const socialMediaGrid = document.querySelector(".contacts-info-grid");

socialMediaGrid.addEventListener("click", e => {
  if (!e.target.closest(".social-media-group")) return;
  console.log(e.target);
  const copyText = e.target.querySelector(".social-media-texts") ?? e.target;
  const socialMediaGroup = copyText.closest(".social-media-group");
  socialMediaGroup.classList.add("copied");
  navigator.clipboard.writeText(copyText.innerText);
  setTimeout(() => {
    socialMediaGroup.classList.remove("copied");
  }, 1000);
});

gsap.registerPlugin(ScrollTrigger);
gsap.from(".projects-title", {
  scrollTrigger: { trigger: ".projects-title" },
  x: -100,
  opacity: 0,
  duration: 0.7,
});
gsap.from(".gd-title", {
  scrollTrigger: { trigger: ".gd-title" },
  x: -100,
  opacity: 0,
  duration: 0.7,
});
gsap.from(".CU-title", {
  scrollTrigger: { trigger: ".CU-title" },
  x: -100,
  opacity: 0,
  duration: 0.7,
});
gsap.from(".contacts-info-grid", {
  scrollTrigger: { trigger: ".contacts-info-grid" },
  y: 100,
  opacity: 0,
  duration: 0.7,
});

// gsap.from(`.grid img`, {
//   // scrollTrigger: { trigger: `.grid` },
//   scale: 0,
//   stagger: 0.3,
//   duration: 1,
// });
