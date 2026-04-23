<script setup>
import { computed, ref } from "vue";
import ExampleShell from "../components/ExampleShell.vue";
import StepControl from "../components/StepControl.vue";

const attendees = ref(6);
const pricePerSeat = ref(390);

const totalPrice = computed(() => attendees.value * pricePerSeat.value);
</script>

<template>
  <ExampleShell
    title="4. Props a emits mezi komponentami"
    level="Střední"
    summary="Rodič drží stav, potomek pouze posílá události. To je velmi zdravý výchozí pattern."
    :bullets="[
      'Props tečou shora dolů.',
      'Události (`emit`) tečou zdola nahoru.',
      'Díky tomu zůstává komponenta znovupoužitelná a předvídatelná.',
    ]"
  >
    <div class="stack">
      <StepControl
        :value="attendees"
        @increment="attendees += 1"
        @decrement="attendees = Math.max(1, attendees - 1)"
      />

      <label>
        Cena za místo
        <input v-model="pricePerSeat" type="range" min="100" max="900" step="10" />
      </label>

      <div class="summary">
        Workshop pro <strong>{{ attendees }}</strong> lidí po
        <strong>{{ pricePerSeat }} Kč</strong> vychází na
        <strong>{{ totalPrice }} Kč</strong>.
      </div>
    </div>
  </ExampleShell>
</template>

<style scoped>
.stack {
  display: grid;
  gap: 1rem;
}

label {
  display: grid;
  gap: 0.5rem;
  color: #44515f;
}

.summary {
  padding: 1rem;
  border-radius: 18px;
  background: #fff6ef;
}
</style>
