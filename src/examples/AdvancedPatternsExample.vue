<script setup>
import { computed, provide, ref } from "vue";
import ExampleShell from "../components/ExampleShell.vue";
import PortalNotice from "../components/PortalNotice.vue";

const theme = ref("Písek");
const showDialog = ref(false);
const activeWidget = ref("stats");

const palette = computed(() =>
  theme.value === "Písek"
    ? { bg: "#fff6ef", accent: "#d77727" }
    : { bg: "#edf8ff", accent: "#2468a2" },
);

provide("coursePalette", palette);

const widgets = {
  stats: {
    title: "Statistický panel",
    description: "Dynamická komponenta může přepínat celé bloky UI bez routeru.",
  },
  roadmap: {
    title: "Roadmap panel",
    description: "Stejná oblast obrazovky umí zobrazit jiný obsah podle stavu.",
  },
};

const activeCard = computed(() => widgets[activeWidget.value]);
</script>

<template>
  <ExampleShell
    title="6. Pokročilé patterny: provide/inject, teleport, dynamic UI"
    level="Pokročilý"
    summary="Tady už nejde o syntaxi, ale o architektonické skládání větších aplikací."
    :bullets="[
      '`provide/inject` je vhodné pro sdílený kontext bez prop drillingu.',
      '`teleport` řeší modaly a overlay mimo běžný DOM strom.',
      'Dynamické přepínání bloků UI se hodí pro dashboardy a editory.',
    ]"
  >
    <div class="stack">
      <div class="toolbar">
        <label>
          Motiv
          <select v-model="theme">
            <option>Písek</option>
            <option>Moře</option>
          </select>
        </label>

        <label>
          Aktivní widget
          <select v-model="activeWidget">
            <option value="stats">Stats</option>
            <option value="roadmap">Roadmap</option>
          </select>
        </label>
      </div>

      <article class="card" :style="{ background: palette.bg }">
        <p class="eyebrow" :style="{ color: palette.accent }">Sdílený kontext</p>
        <h3>{{ activeCard.title }}</h3>
        <p>{{ activeCard.description }}</p>
      </article>

      <button class="open-button" type="button" @click="showDialog = true">
        Otevřít teleport modal
      </button>

      <PortalNotice :open="showDialog" @close="showDialog = false" />
    </div>
  </ExampleShell>
</template>

<style scoped>
.stack {
  display: grid;
  gap: 1rem;
}

.toolbar {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

label {
  display: grid;
  gap: 0.45rem;
  color: #44515f;
}

select,
.open-button {
  border: 0;
  border-radius: 16px;
  padding: 0.8rem 1rem;
  font: inherit;
}

select {
  background: #fff6ef;
}

.card {
  padding: 1.1rem;
  border-radius: 22px;
}

.eyebrow {
  margin: 0 0 0.35rem;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

h3,
p {
  margin: 0;
}

p + p {
  margin-top: 0.5rem;
}

.open-button {
  justify-self: start;
  background: #2c3a47;
  color: white;
  cursor: pointer;
}
</style>
