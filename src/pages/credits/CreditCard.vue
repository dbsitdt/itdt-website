<template>
  <div>
    <h4>{{ title }}:</h4>
    <p>{{ peopleList }}</p>
  </div>
</template>
<script>
export default {
  props: ["title", "people"],
  computed: {
    peopleList() {
      return this.people.join(", ");
    },
  },
};
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
