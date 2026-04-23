<script setup>
import { RouterLink } from "vue-router";
import PageHero from "../components/PageHero.vue";

const cards = [
  {
    title: "Samostatné Vue příklady",
    text: "Každé téma je zabaleno do vlastní komponenty, takže je snadné ukázku rozebrat po částech.",
    to: "/examples",
  },
  {
    title: "Více stránek přes router",
    text: "Navigace, nested routes a parametry v URL ukazují, jak přejít od komponent k reálné aplikaci.",
    to: "/router-demo",
  },
  {
    title: "Nasazení a výuka",
    text: "GitHub Pages a Codespaces dávají dohromady pohodlný workflow pro publikaci i workshopy.",
    to: "/about",
  },
];
</script>

<template>
  <section class="stack">
    <PageHero
      eyebrow="Domů"
      title="Vue 3 ukázky s routerem"
      intro="Tahhle varianta ukazuje nejen jednotlivé koncepty, ale i to, jak je zasadit do vícestránkové aplikace. To je ideální pro výuku po blocích i pro samostatné zkoušení."
    />

    <div class="cards">
      <RouterLink v-for="card in cards" :key="card.to" :to="card.to" class="card">
        <h3>{{ card.title }}</h3>
        <p>{{ card.text }}</p>
      </RouterLink>
    </div>
  </section>
</template>

<style scoped>
.stack {
  display: grid;
  gap: 1.5rem;
}

.cards {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.card {
  display: grid;
  gap: 0.75rem;
  padding: 1.25rem;
  border: 1px solid rgba(172, 122, 76, 0.18);
  border-radius: 24px;
  text-decoration: none;
  background: rgba(255, 255, 255, 0.82);
  box-shadow: 0 18px 50px rgba(138, 95, 54, 0.08);
}

.card h3,
.card p {
  margin: 0;
}

.card p {
  color: #44515f;
  line-height: 1.6;
}

@media (max-width: 900px) {
  .cards {
    grid-template-columns: 1fr;
  }
}
</style>
