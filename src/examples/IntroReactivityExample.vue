<script setup>
import { computed, ref } from "vue";
import ExampleShell from "../components/ExampleShell.vue";

const count = ref(2);
const lessonLength = ref(15);

const totalMinutes = computed(() => count.value * lessonLength.value);
</script>

<template>
  <ExampleShell
    title="1. Reaktivita s ref a computed"
    level="Základ"
    summary="Nejmenší užitečný příklad pro pochopení, že Vue automaticky propojuje stav a šablonu."
    :bullets="[
      '`ref()` drží reaktivní primitivní hodnotu.',
      '`computed()` odvozuje stav bez ruční synchronizace.',
      'Template se překreslí automaticky po změně hodnot.',
    ]"
  >
    <div class="stack">
      <label>
        Počet lekcí
        <input v-model="count" type="range" min="1" max="12" />
      </label>

      <label>
        Minut na lekci
        <input v-model="lessonLength" type="range" min="5" max="60" step="5" />
      </label>

      <div class="result">
        <strong>{{ count }}</strong> lekcí po <strong>{{ lessonLength }}</strong> minutách
        znamená dohromady <strong>{{ totalMinutes }}</strong> minut.
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

input {
  accent-color: #d77727;
}

.result {
  padding: 1rem;
  border-radius: 18px;
  background: #fff6ef;
  line-height: 1.6;
}
</style>
