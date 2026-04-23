<script setup>
import { RouterLink, RouterView } from "vue-router";
import PageHero from "../components/PageHero.vue";

const lessons = [
  { slug: "uvod-do-routeru", title: "Úvod do routeru", level: "Základ" },
  { slug: "aktivni-navigace", title: "Aktivní navigace", level: "Střední" },
  { slug: "url-parametry", title: "URL parametry", level: "Střední" },
];
</script>

<template>
  <section class="stack">
    <PageHero
      eyebrow="Router Demo"
      title="Více stránek a nested routes"
      intro="Tahle stránka je sama route a uvnitř má další vnořené route. Díky tomu můžeš ukázat, jak část layoutu zůstává stejná a mění se jen konkrétní obsah."
    />

    <div class="layout">
      <aside class="panel">
        <h3>Vyber lekci</h3>
        <RouterLink class="lesson-link" to="/router-demo">
          Přehled router konceptů
        </RouterLink>
        <RouterLink
          v-for="lesson in lessons"
          :key="lesson.slug"
          class="lesson-link"
          :to="`/router-demo/lesson/${lesson.slug}`"
        >
          <span>{{ lesson.title }}</span>
          <small>{{ lesson.level }}</small>
        </RouterLink>
      </aside>

      <div class="panel">
        <RouterView />
      </div>
    </div>
  </section>
</template>

<style scoped>
.stack {
  display: grid;
  gap: 1.5rem;
}

.layout {
  display: grid;
  gap: 1rem;
  grid-template-columns: minmax(220px, 280px) minmax(0, 1fr);
}

.panel {
  display: grid;
  gap: 0.85rem;
  align-content: start;
  padding: 1.25rem;
  border: 1px solid rgba(172, 122, 76, 0.18);
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.82);
}

.panel h3 {
  margin: 0;
}

.lesson-link {
  display: grid;
  gap: 0.15rem;
  padding: 0.9rem 1rem;
  border-radius: 18px;
  text-decoration: none;
  background: #fff6ef;
}

.lesson-link small {
  color: #6a7480;
}

@media (max-width: 860px) {
  .layout {
    grid-template-columns: 1fr;
  }
}
</style>
