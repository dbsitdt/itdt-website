<template>
  <base-section class="container">
    <h2>{{ error.statusCode }}</h2>
    <h4 v-if="error.statusCode === 404">
      Oops! That page doesn't exist! :&#x29;
    </h4>
    <h4 v-else>Oops! Something went wrong :&#x29;</h4>
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
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  scroll-behavior: smooth;
}
:root {
  --background: #1e2121;
  --gradient: -webkit-linear-gradient(48deg, #278bff, #28ffed);
  --primary-color: #278bff;
}
h1,
h2,
h3,
h4,
h5,
h6,
p,
div,
a {
  font-family: "Poppins", sans-serif;
}
a {
  color: inherit;
  text-decoration: inherit;
}
body {
  background-color: var(--background);
  overflow-x: hidden;
}
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
