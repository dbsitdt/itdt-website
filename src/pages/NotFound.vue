<template>
  <base-section>
    <h4>Oops! That page doesn't exist! :&#x29;</h4>
    <h5>
      Maybe you can find what you need at our
      <router-link to="/">landing page</router-link>?
    </h5>
  </base-section>
</template>
<style scoped>
h4 {
  text-align: center;
  color: white;
  font-weight: 600;
  font-size: 4rem;
}
h5 {
  text-align: center;
  color: white;
  font-weight: 500;
  font-size: 3rem;
  margin-bottom: 5vh;
}
a {
  text-decoration: underline;
}
</style>
