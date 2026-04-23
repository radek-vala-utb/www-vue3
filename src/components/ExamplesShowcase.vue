<script setup>
import { computed, ref } from "vue";
import IntroReactivityExample from "../examples/IntroReactivityExample.vue";
import ListFilteringExample from "../examples/ListFilteringExample.vue";
import FormBindingExample from "../examples/FormBindingExample.vue";
import ComponentEventsExample from "../examples/ComponentEventsExample.vue";
import ComposableAsyncExample from "../examples/ComposableAsyncExample.vue";
import AdvancedPatternsExample from "../examples/AdvancedPatternsExample.vue";

const examples = [
  {
    id: "intro",
    title: "Reaktivita",
    difficulty: "Základ",
    description: "ref + computed",
    component: IntroReactivityExample,
  },
  {
    id: "lists",
    title: "Seznamy a podmínky",
    difficulty: "Základ",
    description: "v-for + v-if + filtering",
    component: ListFilteringExample,
  },
  {
    id: "forms",
    title: "Formuláře",
    difficulty: "Střední",
    description: "v-model + watch",
    component: FormBindingExample,
  },
  {
    id: "components",
    title: "Komunikace komponent",
    difficulty: "Střední",
    description: "props + emits",
    component: ComponentEventsExample,
  },
  {
    id: "composables",
    title: "Composable",
    difficulty: "Pokročilý",
    description: "sdílená logika + async",
    component: ComposableAsyncExample,
  },
  {
    id: "advanced",
    title: "Architektonické patterny",
    difficulty: "Pokročilý",
    description: "teleport + dynamic UI",
    component: AdvancedPatternsExample,
  },
];

const activeId = ref(examples[0].id);

const activeExample = computed(
  () => examples.find((example) => example.id === activeId.value) ?? examples[0],
);
</script>

<template>
  <div class="showcase">
    <nav class="example-nav" aria-label="Příklady">
      <button
        v-for="example in examples"
        :key="example.id"
        type="button"
        :class="['example-nav__item', { 'is-active': example.id === activeId }]"
        @click="activeId = example.id"
      >
        <span>{{ example.title }}</span>
        <small>{{ example.difficulty }} · {{ example.description }}</small>
      </button>
    </nav>

    <component :is="activeExample.component" />
  </div>
</template>

<style scoped>
.showcase {
  display: grid;
  gap: 1.5rem;
}

.example-nav {
  display: grid;
  gap: 0.7rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.example-nav__item {
  display: grid;
  gap: 0.2rem;
  width: 100%;
  border: 1px solid rgba(172, 122, 76, 0.16);
  border-radius: 20px;
  padding: 1rem;
  text-align: left;
  background: rgba(255, 255, 255, 0.76);
  cursor: pointer;
  transition:
    transform 160ms ease,
    border-color 160ms ease,
    box-shadow 160ms ease;
}

.example-nav__item:hover,
.example-nav__item.is-active {
  transform: translateY(-1px);
  border-color: rgba(215, 119, 39, 0.55);
  box-shadow: 0 16px 32px rgba(215, 119, 39, 0.12);
}

.example-nav__item small {
  color: #6a7480;
}

@media (max-width: 860px) {
  .example-nav {
    grid-template-columns: 1fr;
  }
}
</style>
