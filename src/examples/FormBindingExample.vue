<script setup>
import { computed, ref, watch } from "vue";
import ExampleShell from "../components/ExampleShell.vue";

const student = ref("Radka");
const selectedTrack = ref("Komponenty");
const newsletter = ref(true);
const note = ref("");
const status = ref("Formulář se ještě neupravoval.");

watch([student, selectedTrack, newsletter, note], () => {
  status.value = `Naposledy změněno v ${new Date().toLocaleTimeString("cs-CZ")}.`;
});

const summary = computed(
  () =>
    `${student.value || "Student"} chce studovat oblast ${selectedTrack.value}, ` +
    `${newsletter.value ? "má" : "nemá"} zájem o newsletter.`,
);
</script>

<template>
  <ExampleShell
    title="3. Formuláře a watch"
    level="Střední"
    summary="Dva časté stavební kameny aplikací: `v-model` pro formuláře a `watch` pro reakci na změny."
    :bullets="[
      '`v-model` mapuje vstupy na stav bez boilerplate.',
      '`watch()` je vhodný pro vedlejší efekty, ne pro odvozování dat.',
      '`computed()` zůstává nejlepší volbou pro čitelné souhrny.',
    ]"
  >
    <div class="grid">
      <form class="form" @submit.prevent>
        <label>
          Jméno
          <input v-model="student" type="text" />
        </label>

        <label>
          Studijní oblast
          <select v-model="selectedTrack">
            <option>Komponenty</option>
            <option>Reaktivita</option>
            <option>Pinia</option>
            <option>Testování</option>
          </select>
        </label>

        <label class="checkbox">
          <input v-model="newsletter" type="checkbox" />
          Posílat tipy na další lekce
        </label>

        <label>
          Poznámka
          <textarea v-model="note" rows="4" />
        </label>
      </form>

      <div class="preview">
        <h3>Náhled stavu</h3>
        <p>{{ summary }}</p>
        <p v-if="note"><strong>Poznámka:</strong> {{ note }}</p>
        <small>{{ status }}</small>
      </div>
    </div>
  </ExampleShell>
</template>

<style scoped>
.grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.form,
.preview {
  display: grid;
  gap: 0.9rem;
}

label {
  display: grid;
  gap: 0.45rem;
  color: #44515f;
}

input[type="text"],
select,
textarea {
  border: 1px solid #e4cfba;
  border-radius: 14px;
  padding: 0.85rem 1rem;
  font: inherit;
}

.checkbox {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
}

.preview {
  align-content: start;
  padding: 1rem;
  border-radius: 18px;
  background: #fff6ef;
}

.preview h3,
.preview p {
  margin: 0;
}

small {
  color: #6a7480;
}

@media (max-width: 720px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
