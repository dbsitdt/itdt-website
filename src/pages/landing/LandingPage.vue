<template>
  <div>
    <landing-hero id="hero"></landing-hero>
    <landing-projects id="projects-section"></landing-projects>
    <landing-events id="events"></landing-events>

    <landing-contact id="contact-us"></landing-contact>
  </div>
</template>
<script>
import LandingHero from "../../components/landing/LandingHero.vue";
import LandingProjects from "../../components/landing/LandingProjects.vue";
import LandingContact from "../../components/landing/LandingContact.vue";
import LandingEvents from "../../components/landing/LandingEvents.vue";
export default {
  components: {
    LandingHero,
    LandingProjects,
    LandingContact,
    LandingEvents,
  },
};
</script>
<style scoped></style>
