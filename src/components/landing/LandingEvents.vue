<template>
  <section id="events">
    <h2 class="section-title gd-title">Events</h2>
    <div class="photo-container">
      <div
        class="photo"
        @click="navEvent('ive')"
        @mouseenter="handleEnter('<visit-to-ive>')"
        @mouseleave="handleLeave"
      ></div>
      <div
        class="photo"
        @click="navEvent('dream-district-competition')"
        @mouseenter="handleEnter('<dream-district-competition>')"
        @mouseleave="handleLeave"
      ></div>
      <div
        class="photo"
        @click="navEvent('osaka')"
        @mouseenter="handleEnter('<osaka-trip>')"
        @mouseleave="handleLeave"
      ></div>
      <div
        class="photo"
        @click="navEvent('easter-camp')"
        @mouseenter="handleEnter('<easter-camp>')"
        @mouseleave="handleLeave"
      ></div>
    </div>
  </section>
</template>
<script>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default {
  beforeUnmount() {
    ScrollTrigger.getAll().forEach((t) => t.kill());
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(
      ".photo",
      {
        scrollTrigger: { trigger: ".gd-title" },
        y: -10,
        opacity: 0,
        duration: 0.4,
        stagger: 0.1,
        delay: 0.7,
      },
      "begin"
    );
  },
  methods: {
    handleEnter(str) {
      this.$store.dispatch("changeCursorText", str);
    },
    handleLeave() {
      this.$store.dispatch("changeCursorText", "");
    },
    navEvent(to) {
      this.handleLeave();
      this.$router.push(`/events/${to}`);
    },
  },
};
</script>
<style scoped>
#events {
  padding: 5vw;
}
.photo-container {
  display: flex;
  gap: 2vw;
}
.photo {
  /* width: 100px; */
  height: 50vh;
  background-size: cover;
  background-position: center;
  border-radius: 20px;
  transition: flex 300ms ease-in-out;
  cursor: none;
  flex: 1;
}

.photo:nth-of-type(1) {
  background-image: url("../../assets/events/events-landing1.webp");
}
.photo:nth-of-type(2) {
  background-image: url("../../assets/events/events-landing2.webp");
}
.photo:nth-of-type(3) {
  background-image: url("../../assets/events/events-landing3.webp");
}
.photo:nth-of-type(4) {
  background-image: url("../../assets/events/events-landing4.webp");
}
.photo:hover {
  flex: 2;
}
@media (max-width: 630px) {
  .photo-container {
    flex-direction: column;
    height: 90vh;
  }
  .photo {
    cursor: pointer;
  }
}
</style>
