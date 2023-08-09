<template>
  <a class="button-primary">
    <img class="button-arrow" src="../../assets/Arrow_2.svg" />
    <p><slot></slot></p
  ></a>
</template>
<style scoped>
.button-primary {
  position: relative;
  padding: 0.6rem 1rem;
  cursor: pointer;
  display: flex;
  gap: 1rem;
  justify-content: center;
  --border: 3px;
  color: #fff;
  background: var(--background);
  background-clip: padding-box;
  border: solid var(--border) transparent;
  border-radius: 19px;
  font-size: clamp(1.1rem, 3vw, 1.3rem);
}
img,
p {
  user-select: none;
}
@media (max-width: 1240px) {
  .button-primary {
    width: auto;
  }
}
.button-arrow {
  transition: transform 300ms;
}
.button-primary ::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  margin: calc(var(--border) * -1);
  border-radius: 19px;
  background: var(--gradient);
}
.button-primary:hover {
  .button-arrow {
    transform: translateX(8px);
  }
}
</style>
