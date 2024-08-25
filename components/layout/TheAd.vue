<template>
  <transition>
    <div class="ad" v-if="adOpen">
      <p>
        Looking to invest in your future? DBS ITDT is now recruiting for the
        24-25 school year!
        <NuxtLink to="/join">Click here to join.</NuxtLink>
      </p>
      <div class="cross" @click="closeAd"></div>
    </div>
  </transition>
</template>

<script setup>
import { ref } from "vue";

const adOpen = ref(true);

const closeAd = () => {
  adOpen.value = false;
};
</script>

<style scoped>
.ad {
  position: fixed;
  background: #496c91;
  bottom: 0;
  color: white;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 1vh 5vw;
  align-items: center;
  z-index: 4;
}

a {
  text-decoration: underline;
}

.cross:after {
  display: inline-block;
  content: "\00d7";
  font-size: 1.6rem;
  cursor: pointer;
}

.v-leave-from {
  transform: translateY(0);
}

.v-leave-active {
  transition: transform 300ms ease-in;
}

.v-leave-to {
  transform: translateY(20vh);
}
</style>
