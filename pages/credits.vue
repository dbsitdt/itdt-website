<template>
  <base-section>
    <h3>Credits</h3>
    <p>
      The entire website was created and is being maintained by members of the
      DBS IT Development Team.
    </p>
    <div class="credits-container">
      <credit-card title="Project Manager" :people="managers"></credit-card>
      <credit-card title="Lead Designer" :people="designers"></credit-card>
      <credit-card title="Developers" :people="developers"></credit-card>
    </div>
    <div class="credits-container">
      <credit-card title="Teacher-in-charge" :people="tic"></credit-card>
      <credit-card title="Chairman" :people="chair"></credit-card>
      <credit-card title="Vice Chairmen" :people="vice"></credit-card>
      <credit-card title="Secretary" :people="secretary"></credit-card>
      <credit-card title="Treasurer" :people="treasurer"></credit-card>
      <credit-card
        title="Executive Committee Members"
        :people="exco"
      ></credit-card>
    </div>
  </base-section>
</template>

<script setup>
const managers = ref(["Owen Tam"]);
const designers = ref(["Owen Tam"]);
const developers = ref(["Owen Tam", "Timothy So", "Eddie Hu"]);
const tic = ref(["Ms. SC Chan", "Mr. KW Wong"]);
const chair = ref(["Tam Ho Wang"]);
const vice = ref(["Zhou Yixuan Richard", "So Pak Yin"]);
const secretary = ref(["Chen Cheuk Shing"]);
const treasurer = ref(["Wang Tsun Tang"]);
const exco = ref(["Wong Chun Wing Carlos", "Cheng Cheuk Nam"]);
</script>

<style scoped>
h3 {
  color: white;
  font-size: clamp(2.5rem, 4vw, 4rem);
}
p {
  color: white;
  line-height: 1.5;
  font-size: clamp(1.05rem, 3vw, 1.2rem);
}

.credits-container {
  margin-top: 4vh;
  background: rgba(41, 46, 51, 0.699);
  backdrop-filter: blur(5px);
  padding: 2vw;
  display: flex;
  flex-direction: column;
  gap: 3vh;
}
</style>
