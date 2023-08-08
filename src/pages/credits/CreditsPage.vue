<template>
  <base-section>
    <h3>Credits</h3>
    <p>
      The entire website was created and is being maintained by members of the
      DBS IT Development Team.
    </p>
    <div class="credits-container">
      <credit-card
        class="credit-card"
        title="Project Manager"
        :people="this.managers"
      >
      </credit-card>
      <credit-card
        class="credit-card"
        title="Designer"
        :people="this.designers"
      >
      </credit-card>
      <credit-card
        class="credit-card"
        title="Developers"
        :people="this.developers"
      >
      </credit-card>
    </div>
  </base-section>
</template>
<script>
import CreditCard from "./CreditCard.vue";
export default {
  components: {
    CreditCard,
  },
  data() {
    return {
      managers: ["Owen Tam"],
      designers: ["Owen Tam"],
      developers: ["Owen Tam", "Timothy So", "Eddie Hu"],
    };
  },
  methods: {},
  computed: {},
};
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
