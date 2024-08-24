<template>
  <nav ref="nav">
    <p class="nav-logo"><router-link to="/">&lt;dbsitdt&gt;</router-link></p>
    <ul class="nav-list">
      <li class="nav-item" @click="removeMenu">
        <router-link to="/">Home</router-link>
      </li>
      <li class="nav-item" @click="removeMenu">
        <router-link to="/#projects-section">Projects</router-link>
      </li>
      <li class="nav-item" @click="removeMenu">
        <router-link to="/#events">Events</router-link>
      </li>
      <li class="nav-item" @click="removeMenu">
        <router-link to="/#contact-us">Contact</router-link>
      </li>
    </ul>
    <img
      @click="toggleMenu"
      class="nav-burger-menu"
      src="../../assets/hamburg.svg"
    />
  </nav>
</template>

<script setup>
import { ref } from "vue";

const nav = ref(null);

const toggleMenu = () => {
  nav.value.classList.toggle("active");
};

const removeMenu = () => {
  nav.value.classList.remove("active");
};
</script>

<style scoped>
nav {
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 1.5rem 5rem;
  align-items: center;
}
.nav-logo {
  font-size: 2rem;
  font-weight: 500;
  color: white;
  z-index: 3;
}
.nav-burger-menu {
  z-index: 3;
  display: none;
  cursor: pointer;
}
.nav-list {
  display: flex;
  list-style: none;
  align-items: center;
}
.nav-item {
  font-size: 1.2rem;
  margin-inline: clamp(0.5vw, 10px, 1vw);
  position: relative;
}
a {
  color: white;
  text-decoration: none;
}
a::after {
  content: "";
  height: 3px;
  width: 0%;
  background: white;
  position: absolute;
  bottom: -2%;
  left: 0;
  transition: width ease-out 220ms;
}
a:hover::after {
  width: 100%;
}
@media (max-width: 790px) {
  .nav-list {
    flex-direction: column;
    transform: translateY(-100vh);
    transition: transform 400ms ease-in-out;
    position: fixed;
    background: var(--background);
    z-index: 2;
    width: 100vw;
    left: 0;
    height: 100vh;
    top: 0;
    justify-content: center;
  }
  .nav-item {
    margin-inline: 0;
    margin-bottom: 1rem;
  }
  .nav-item a {
    font-size: 2rem;
  }
  .nav-burger-menu {
    display: block;
  }
}

@media (max-width: 790px) {
  body:has(nav.active) {
    position: fixed;
    overflow-y: scroll;
  }
  nav {
    padding: 2rem 5vw;
    z-index: 3;
  }

  nav.active .nav-list {
    transform: translateY(0);
  }
}
</style>
