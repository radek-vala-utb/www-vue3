<script setup>
import PageHero from "../components/PageHero.vue";
import ExamplesShowcase from "../components/ExamplesShowcase.vue";
</script>

<template>
  <section class="stack">
    <PageHero
      eyebrow="Příklady"
      title="Původní sada ukázek zůstává k dispozici"
      intro="Tady je celá sada od reaktivity přes formuláře až po pokročilejší patterny. Díky routeru má tahle část vlastní URL a může fungovat jako samostatná sekce."
    />

    <ExamplesShowcase />
  </section>
</template>

<style scoped>
.stack {
  display: grid;
  gap: 1.5rem;
}
</style>
