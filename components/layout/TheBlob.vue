<template>
  <div class="blob"></div>
</template>
<style scoped>
.blob {
  position: fixed;
  width: 430px;
  height: 480px;
  background: linear-gradient(45deg, rgb(0, 136, 255), rgba(0, 238, 255, 0.8));
  border-radius: 100%;
  filter: blur(50px);
  z-index: -2;
}
</style>
