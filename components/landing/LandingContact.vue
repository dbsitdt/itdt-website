<template>
  <section id="contact-us">
    <h3 class="CU-title">Contact Us&#128075;</h3>
    <div class="contacts-info-grid">
      <div class="social-media-container">
        <div class="icon-container">
          <img
            class="icon"
            src="../../assets/contact-us-section/Gmail-icon.png"
          />
        </div>
        <div
          @click="copyEmail"
          :class="{ copied: emailCopied }"
          class="social-media-group"
        >
          <div class="copied-overlay">Copied!</div>
          <p class="social-media-texts">dbsitdt@gmail.com</p>
        </div>
      </div>
      <div class="social-media-container">
        <div class="icon-container">
          <img
            class="icon"
            src="../../assets/contact-us-section/Instagram-icon.png"
          />
        </div>
        <div
          :class="{ copied: igCopied }"
          @click="copyIg"
          class="social-media-group"
        >
          <div class="copied-overlay">Copied!</div>
          <p class="social-media-texts">@dbsitdt</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const emailCopied = ref(false);
const igCopied = ref(false);

const copyEmail = () => {
  emailCopied.value = true;
  setTimeout(() => {
    emailCopied.value = false;
  }, 1000);
};

const copyIg = () => {
  igCopied.value = true;
  setTimeout(() => {
    igCopied.value = false;
  }, 1000);
};
</script>
<style scoped>
section#contact-us {
  padding: 5vw;
}
.CU-Message {
  font-family: "Poppins";
  font-weight: 600;
}

.CU-title {
  color: white;
  font-size: clamp(4rem, 10vw, 8.5rem);
  margin-bottom: 1rem;
}
.social-media-container {
  display: flex;
}
.table-element {
  border-style: solid;
  border-color: black;
  box-sizing: content-box;
}

.contacts-info-grid {
  display: grid;
  grid-template-rows: 1fr 1fr;
  row-gap: 30px;
}

.social-media-group {
  border-width: 2px;
  border-color: white;
  border-style: solid;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 20rem;
  user-select: none;
  position: relative;
  cursor: pointer;
  overflow: hidden;
}
.social-media-group .copied-overlay {
  width: 100%;
  height: 100%;
  position: absolute;
  display: grid;
  place-items: center;
  font-size: 1.3rem;
  font-weight: 500;
  clip-path: circle(0px at 100% 100%);
  background: rgba(255, 255, 255, 0.801);
  transition: clip-path 300ms linear;
}
.social-media-group.copied .copied-overlay {
  clip-path: circle(200% at 100% 100%);
}
.icon-container {
  border-width: 2px;
  border-color: white;
  border-style: solid;
  border-right: none;
  display: grid;
  user-select: none;
  padding: 1rem;
  place-items: center;
  cursor: pointer;
}
.icon {
  display: grid;
  place-items: center;
  max-width: 4rem;
}

.social-media-texts {
  font-family: Poppins;
  font-weight: 500;
  color: white;
  padding-left: 10%;
  font-size: clamp(1rem, 5vw, 1.4rem);
}
@media (max-width: 446px) {
  .social-media-group {
    width: 100%;
  }
}
</style>
