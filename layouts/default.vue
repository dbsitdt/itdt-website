<template>
  <div class="hov" @mousemove="mousemove">
    <the-loader @finishedLoader="loaderIsFinished"></the-loader>

    <the-blob ref="blob"></the-blob>
    <the-cursor :style="cursorStyle" :text="cursorText"></the-cursor>
    <the-header :playAnimation="finishedLoader"></the-header>
    <TheAd></TheAd>
    <slot></slot>
    <the-footer></the-footer>
  </div>
</template>

<script setup>
import { gsap } from "gsap";
import { useStore } from "../store/myStore";

const emit = defineEmits(["finishedLoader"]);

const mouseX = ref(null);
const mouseY = ref(null);
const finishedLoader = ref(false);
const store = useStore();

const cursorText = computed(() => store.getCursorText);
const cursorStyle = computed(() => ({
  opacity: !!cursorText.value && window.innerWidth > 600 ? 1 : 0,
}));
// const isLoading = computed(() => store.isLoading);

async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

onMounted(async () => {
  gsap.set(".blob", { xPercent: -50, yPercent: -50 });
  gsap.set(".cursor", { xPercent: -50, yPercent: -50 });

  await delay(5500);
  gsap.to("#loader", {
    duration: 1.5,
    transform: "translateY(-150vh)",
  });
  emit("finishedLoader");
  const tl = gsap.timeline();

  tl.from(
    ".hero-img-box",
    {
      y: -10,
      opacity: 0,
      duration: 0.4,
      stagger: 0.1,
      delay: 0.7,
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
});

function mousemove(e) {
  if (window.innerWidth > 600) {
    mouseX.value = e.clientX;
    mouseY.value = e.clientY;
    gsap.to(".blob", 0.8, { x: mouseX.value, y: mouseY.value });
    gsap.to(".cursor", 0.9, { x: mouseX.value, y: mouseY.value });
  }
}

function loaderIsFinished() {
  finishedLoader.value = true;
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  scroll-behavior: smooth;
}
:root {
  --background: #1e2121;
  --gradient: -webkit-linear-gradient(48deg, #278bff, #28ffed);
  --primary-color: #278bff;
}
h1,
h2,
h3,
h4,
h5,
h6,
p,
div,
a {
  font-family: "Poppins", sans-serif;
}
a {
  color: inherit;
  text-decoration: inherit;
}
body {
  background-color: var(--background);
  overflow-x: hidden;
}
.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}
.route-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.route-enter-active {
  transition: all 0.3s ease-out;
}
.route-leave-active {
  transition: all 0.3s ease-in;
}
.route-enter-to,
.route-leave-from {
  transform: translateY(0);
  opacity: 1;
}
.hov {
  min-height: 100vh;
  position: relative;
}
.section-title {
  font-size: clamp(3rem, 5vw, 4rem);
  color: white;
}
.section-title::before {
  content: "<";
}
.section-title::after {
  content: ">";
}
</style>
