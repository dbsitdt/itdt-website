<template>
  <base-section class="container">
    <h2>{{ error.statusCode }}</h2>
    <h4>Oops! That page doesn't exist! :&#x29;</h4>
    <h5>
      Maybe you can find what you need at our
      <router-link to="/">landing page</router-link>?
    </h5>
  </base-section>
</template>
<script setup>
const props = defineProps({
  error: Object,
});
</script>
<style scoped>
.container {
  text-align: center;
  color: white;
  height: 100dvh;
  width: 100dvw;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
h2 {
  font-size: 3rem;
}
h4 {
  font-weight: 600;
  font-size: 3rem;
}
h5 {
  font-weight: 500;
  font-size: 2rem;
  margin-bottom: 5vh;
}
a {
  text-decoration: underline;
}
</style>
