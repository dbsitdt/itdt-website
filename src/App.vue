<template>
  <div class="hov" @mousemove="mousemove">
    <the-loader @finishedLoader="loaderIsFinished"></the-loader>
    <the-blob ref="blob"></the-blob>
    <the-cursor
      :style="{ opacity: !!cursorText ? 1 : 0 }"
      :text="cursorText"
    ></the-cursor>
    <the-header :playAnimation="finishedLoader"></the-header>
    <router-view v-slot="slotProps">
      <transition name="route" mode="out-in">
        <component :is="slotProps.Component"></component> </transition
    ></router-view>
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheBlob from "./components/layout/TheBlob.vue";
import TheFooter from "./components/layout/TheFooter.vue";
import TheCursor from "./components/layout/TheCursor.vue";
import TheLoader from "./components/layout/TheLoader.vue";
import TheHeader from "./components/layout/TheHeader.vue";
import { gsap } from "gsap";
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
export default {
  components: {
    TheHeader,
    TheFooter,
    TheBlob,
    TheCursor,
    TheLoader,
  },
  data() {
    return {
      mouseX: null,
      mouseY: null,
      finishedLoader: false,
    };
  },
  computed: {
    cursorText() {
      return this.$store.getters.getCursorText;
    },
    isLoading() {
      return this.$store.state.isLoading;
    },
  },

  async mounted() {
    // const blob = this.$refs.blob;

    gsap.set(".blob", { xPercent: -50, yPercent: -50 });
    gsap.set(".cursor", { xPercent: -50, yPercent: -50 });

    await delay(4000);
    gsap.to(".loader-logo", {
      duration: 1,
      transform: "translateY(-150vh)",
    });
    gsap.to(".loader-text", {
      duration: 1.4,
      transform: "translateY(-150vh)",
    });
    gsap.to("#loader", {
      duration: 1.6,
      transform: "translateY(-150vh)",
    });
    this.$emit("finishedLoader");
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
    // this.$store.state.initialTl.play();
    // console.log("PLAYED TL");
  },
  methods: {
    mousemove(e) {
      if (window.innerWidth > 600) {
        this.mouseX = e.clientX;
        this.mouseY = e.clientY;
        gsap.to(".blob", 0.8, { x: this.mouseX, y: this.mouseY });
        gsap.to(".cursor", 0.9, { x: this.mouseX, y: this.mouseY });
      }
    },
    loaderIsFinished() {
      this.finishedLoader = true;
    },
  },
};
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
  position: relative;
  overflow-x: hidden;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  will-change: transform;
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
