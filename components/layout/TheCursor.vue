<template>
  <div class="cursor">
    <p>{{ text }}</p>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.cursor {
  position: fixed;
  z-index: 1;
  background: white;
  padding: 1vw 2vw;
  opacity: 0;
  pointer-events: none;
  transform: translate(-50%, -50%);
  transition: opacity 100ms;
}

p {
  font-size: 2rem;
}
</style>
