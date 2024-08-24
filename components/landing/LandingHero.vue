<template>
  <section id="hero">
    <div class="hero-text" :data-speed="0.001">
      <h1 class="hero-title">IT Development Team</h1>
      <BaseCTAButton href="#projects-section" class="hero-btn"
        >Projects</BaseCTAButton
      >
    </div>
    <div class="hero-img-container">
      <Tilt class="hero-img-box" :options="tiltOptions">
        <img
          class="hero-img"
          src="../../assets/hero-img1.webp"
          alt="hero-img1"
        />
      </Tilt>
      <Tilt class="hero-img-box" :options="tiltOptions">
        <img
          class="hero-img"
          src="../../assets/hero-img2.webp"
          alt="hero-img2"
        />
      </Tilt>
      <Tilt class="hero-img-box" :options="tiltOptions">
        <img
          class="hero-img"
          src="../../assets/hero-img3.webp"
          alt="hero-img3"
        />
      </Tilt>
      <Tilt class="hero-img-box" :options="tiltOptions">
        <img
          class="hero-img"
          src="../../assets/hero-img4.webp"
          alt="hero-img4"
        />
      </Tilt>
    </div>
  </section>
</template>

<script setup>
import Tilt from "vanilla-tilt-vue";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Tilt options
const tiltOptions = {
  "full-page-listening": true,
  perspective: 800,
  reverse: true,
  glare: true,
  "max-glare": 0.1,
};

// Lifecycle hooks
onMounted(() => {
  // Animation setup
  gsap.to(".hero-text", {
    scrollTrigger: {
      trigger: "html",
      start: "top top",
      scrub: true,
    },
    y: (i, target) => ScrollTrigger.maxScroll(window) * target.dataset.speed,
    ease: "none",
  });
});

onBeforeUnmount(() => {
  // Cleanup ScrollTrigger instances
  ScrollTrigger.getAll().forEach((t) => t.kill());
});
</script>
<style scoped>
#hero {
  gap: 1.5rem;

  position: relative;
}

.hero-text {
  width: 50vw;
  z-index: 1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.hero-title {
  font-size: 100px;
  color: white;

  text-align: center;
  user-select: none;
}
@media (max-width: 1609px) {
  .hero-text {
    width: 70vw;
  }
}
@media (max-width: 1240px) {
  .hero-text {
    width: auto;
  }
  .hero-title {
    font-size: clamp(3rem, 9vw, 90px);
  }
}

.hero-img-container {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  min-height: 90vh;

  overflow: hidden;
}
.hero-img-box {
  border-radius: 34px;
  z-index: 0;
  position: relative;
  user-select: none;
  box-shadow: 4px -3px 4px #00000040;
}

.button-primary {
  display: flex;
  gap: 12%;
  width: 12.5rem;
}
.hero-img {
  width: 100%;
  border-radius: 34px;
  height: 100%;
  object-fit: cover;
}
.hero-img-box:nth-of-type(1) {
  width: 372px;
  height: 285px;
  transform: rotate(-5.46deg);
  justify-self: start;
  left: 10vw;
  top: 2vh;
}
.hero-img-box:nth-of-type(2) {
  width: 279px;
  height: 361px;
  transform: rotate(7.97deg);
  justify-self: end;
  align-self: end;
  right: 15vw;
}
.hero-img-box:nth-of-type(3) {
  width: 427.32px;
  height: 321.87px;
  transform: rotate(2.11deg);
  justify-self: start;
  align-self: end;
  left: 7vw;
  bottom: 1vw;
}
.button-primary {
  margin: auto;
}
.hero-img-box:nth-of-type(4) {
  height: 259.91px;
  width: 516px;
  transform: rotate(4.94deg);
  bottom: 3%;
  right: 10vw;
  justify-self: end;
  top: 12vh;
  right: 9vw;
}
@media (max-width: 1240px) {
  .hero-img-box:nth-of-type(1) {
    left: 5vw;
    width: 35vw;
  }
  .hero-img-box:nth-of-type(2) {
    right: 5vw;
    width: 25vw;
    height: 40vh;
  }
  .hero-img-box:nth-of-type(3) {
    left: 5vw;
    width: 40vw;
  }
  .hero-img-box:nth-of-type(4) {
    right: 5vw;
    width: 35vw;
  }
}
@media (max-width: 500px) or (max-device-height: 600px) {
  .hero-img-box:nth-of-type(1) {
    height: 80%;
    width: 80%;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    filter: brightness(75%);
  }
  .hero-img-box:nth-of-type(2) {
    display: none;
  }
  .hero-img-box:nth-of-type(3) {
    display: none;
  }
  .hero-img-box:nth-of-type(4) {
    display: none;
  }
  .hero-img-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0;
  }
}
</style>
