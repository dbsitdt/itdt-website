<template>
  <div>
    <h4>{{ title }}:</h4>
    <p>{{ peopleList }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  people: {
    type: Array,
    required: true,
  },
});

const peopleList = computed(() => props.people.join(", "));
</script>

<style scoped>
h4,
p {
  color: white;
}
h4 {
  font-weight: 600;
  font-size: 1.8rem;
}
p {
  font-size: 1.3rem;
}
</style>
