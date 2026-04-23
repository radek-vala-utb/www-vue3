<script setup>
import { RouterLink, RouterView, useRoute } from "vue-router";

const route = useRoute();

const navigation = [
  { to: "/", label: "Domů", description: "Přehled celé ukázkové appky" },
  { to: "/examples", label: "Příklady", description: "Původní showcase všech témat" },
  { to: "/router-demo", label: "Router demo", description: "Více stránek, nested routes, parametry" },
  { to: "/about", label: "O projektu", description: "Jak to použít při výuce" },
];
</script>

<template>
  <div class="page">
    <aside class="sidebar">
      <p class="sidebar__eyebrow">Vue 3 Showcase</p>
      <h1>Od prvních kroků až po vícestránkovou aplikaci</h1>
      <p class="sidebar__intro">
        Teď už nejde jen o izolované komponenty. Tahle verze ukazuje i to, jak
        z Vue aplikace udělat malý web s navigací a URL routingem.
      </p>

      <nav class="nav" aria-label="Hlavní navigace">
        <RouterLink
          v-for="item in navigation"
          :key="item.to"
          :to="item.to"
          :class="['nav__item', { 'is-active': route.path === item.to || route.path.startsWith(`${item.to}/`) }]"
        >
          <span>{{ item.label }}</span>
          <small>{{ item.description }}</small>
        </RouterLink>
      </nav>

      <section class="hosting">
        <h2>Hosting doporučení</h2>
        <ul>
          <li><strong>GitHub Pages:</strong> nejlepší pro sdílení hotové statické ukázky.</li>
          <li><strong>Codespaces:</strong> nejlepší pro výuku, editaci a živé hraní si s kódem.</li>
        </ul>
      </section>
    </aside>

    <main class="content">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
:global(*) {
  box-sizing: border-box;
}

:global(body) {
  margin: 0;
  font-family: "Avenir Next", "Segoe UI", sans-serif;
  color: #2c3a47;
  background:
    radial-gradient(circle at top left, rgba(255, 222, 187, 0.7), transparent 28%),
    linear-gradient(135deg, #fff9f2 0%, #f8efe7 40%, #f2f6fb 100%);
}

:global(button),
:global(input),
:global(select),
:global(textarea) {
  font: inherit;
}

:global(a) {
  color: inherit;
}

.page {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: minmax(280px, 340px) minmax(0, 1fr);
  min-height: 100vh;
  padding: 1.5rem;
}

.sidebar,
.content {
  border-radius: 32px;
  padding: 1.5rem;
  background: rgba(255, 251, 246, 0.72);
  backdrop-filter: blur(20px);
  box-shadow: 0 30px 80px rgba(116, 82, 50, 0.12);
}

.sidebar {
  display: grid;
  align-content: start;
  gap: 1.25rem;
}

.sidebar__eyebrow {
  margin: 0;
  color: #8c5523;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

h1,
h2,
h3,
p,
ul {
  margin: 0;
}

.sidebar__intro,
.hosting li {
  color: #44515f;
  line-height: 1.7;
}

.nav {
  display: grid;
  gap: 0.7rem;
}

.nav__item {
  display: grid;
  gap: 0.2rem;
  width: 100%;
  border: 1px solid rgba(172, 122, 76, 0.16);
  border-radius: 20px;
  padding: 1rem;
  text-decoration: none;
  background: rgba(255, 255, 255, 0.76);
  transition:
    transform 160ms ease,
    border-color 160ms ease,
    box-shadow 160ms ease;
}

.nav__item:hover,
.nav__item.is-active {
  transform: translateY(-1px);
  border-color: rgba(215, 119, 39, 0.55);
  box-shadow: 0 16px 32px rgba(215, 119, 39, 0.12);
}

.nav__item small {
  color: #6a7480;
}

.content {
  display: grid;
  gap: 1.5rem;
  align-content: start;
}

.hosting ul {
  padding-left: 1.25rem;
}

@media (max-width: 960px) {
  .page {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 720px) {
  .page {
    padding: 1rem;
  }

  .sidebar,
  .content {
    border-radius: 24px;
    padding: 1.1rem;
  }
}
</style>
