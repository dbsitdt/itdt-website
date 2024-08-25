<template>
  <div :class="parallax ? 'preserve' : ''" id="tiltMe" ref="tiltRef">
    <slot></slot>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import VanillaTilt from "vanilla-tilt";

const props = defineProps({
  options: {
    type: Object,
    required: true,
  },
  parallax: {
    type: Boolean,
  },
});

const tiltRef = ref(null);

onMounted(() => {
  VanillaTilt.init(tiltRef.value, props.options);
});
</script>

<style>
.preserve {
  transform-style: preserve-3d;
}
</style>
