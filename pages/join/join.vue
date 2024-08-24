<template>
  <base-section
    ><div id="form-container">
      <h2>Recruitment has ended this year.</h2>
      <p>Please pay attention to our recruitment email next year!</p>
    </div>
  </base-section>
</template>
<style scoped>
#form-container {
  background: rgba(41, 46, 51, 0.699);
  backdrop-filter: blur(5px);
  padding: 2vw;
  color: white;
}
.select {
  display: flex;
  gap: 1rem;
}
h2 {
  margin-bottom: 1rem;
  font-size: 2rem;
}
label {
  margin-right: 1rem;
}
input,
select {
  border-radius: 20px;
  padding: 5px 0.5ch;
  border: 1px solid grey;
}
input[type="text"] {
  padding-left: 0.5rem;

  min-width: 10rem;
}
input[type="submit"] {
  padding: 1rem 1rem;
  font-family: inherit;
  color: white;
  border: none;
  background: var(--primary-color);
  font-size: 1rem;
  cursor: pointer;
}
</style>
