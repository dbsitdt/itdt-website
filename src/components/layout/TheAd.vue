<template>
  <transition>
    <div class="ad" v-if="adOpen">
      <p>
        Looking to invest in your future in 2023? DBS ITDT is now recruiting
        until 31/9/2023!
        <router-link to="/join">Click here to join.</router-link>
      </p>
      <div class="cross" @click="closeAd"></div>
    </div>
  </transition>
</template>
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
<script setup>
import { ref } from "vue";
const adOpen = ref(true);
const closeAd = function () {
  adOpen.value = false;
};
</script>
