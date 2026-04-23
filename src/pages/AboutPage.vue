<script setup>
import PageHero from "../components/PageHero.vue";

const recommendations = [
  "GitHub Pages je nejlepší pro veřejné sdílení hotové statické verze.",
  "Codespaces je lepší pro workshopy, párové programování a studentské experimenty.",
  "Nejpraktičtější kombinace bývá: vývoj v Codespaces, publikace přes GitHub Pages.",
];
</script>

<template>
  <section class="stack">
    <PageHero
      eyebrow="O projektu"
      title="Jak tenhle repozitář používat při výuce"
      intro="Může fungovat jako učebnice, jako sandbox pro studenty i jako základ menší demo aplikace. Tím, že má router, se už podobá běžnému frontend projektu."
    />

    <article class="panel">
      <h3>Doporučení k hostingu</h3>
      <ul>
        <li v-for="item in recommendations" :key="item">{{ item }}</li>
      </ul>
    </article>

    <article class="panel">
      <h3>Co ukázat studentům navíc</h3>
      <p>
        Na stránce Router demo můžeš vysvětlit rozdíl mezi komponentou a stránkou,
        práci s historií prohlížeče, aktivní linky a to, že URL může nést stav aplikace.
      </p>
    </article>
  </section>
</template>

<style scoped>
.stack {
  display: grid;
  gap: 1.5rem;
}

.panel {
  display: grid;
  gap: 0.75rem;
  padding: 1.25rem;
  border: 1px solid rgba(172, 122, 76, 0.18);
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.82);
}

.panel h3,
.panel p,
.panel ul {
  margin: 0;
}

.panel p,
.panel li {
  color: #44515f;
  line-height: 1.7;
}

.panel ul {
  padding-left: 1.25rem;
}
</style>
