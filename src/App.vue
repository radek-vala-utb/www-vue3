<script setup>
import { computed, ref } from "vue";
import IntroReactivityExample from "./examples/IntroReactivityExample.vue";
import ListFilteringExample from "./examples/ListFilteringExample.vue";
import FormBindingExample from "./examples/FormBindingExample.vue";
import ComponentEventsExample from "./examples/ComponentEventsExample.vue";
import ComposableAsyncExample from "./examples/ComposableAsyncExample.vue";
import AdvancedPatternsExample from "./examples/AdvancedPatternsExample.vue";

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
  <div class="page">
    <aside class="sidebar">
      <p class="sidebar__eyebrow">Vue 3 Showcase</p>
      <h1>Od prvních kroků až po větší patterny</h1>
      <p class="sidebar__intro">
        Kolekce krátkých živých ukázek, které můžeš použít při výuce, self-study
        nebo jako startovní bod pro vlastní cvičení.
      </p>

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

      <section class="hosting">
        <h2>Hosting doporučení</h2>
        <ul>
          <li><strong>GitHub Pages:</strong> nejlepší pro sdílení hotové statické ukázky.</li>
          <li><strong>Codespaces:</strong> nejlepší pro výuku, editaci a živé hraní si s kódem.</li>
        </ul>
      </section>
    </aside>

    <main class="content">
      <component :is="activeExample.component" />

      <section class="guide">
        <h2>Jak to provozovat</h2>
        <div class="guide__grid">
          <article>
            <h3>GitHub Pages</h3>
            <p>
              Repo stačí pushnout na GitHub. Workflow v
              <code>.github/workflows/deploy-pages.yml</code> provede build a
              publikuje statický obsah do Pages.
            </p>
          </article>

          <article>
            <h3>Codespaces</h3>
            <p>
              Připravený <code>.devcontainer/devcontainer.json</code> nainstaluje
              závislosti a otevře port 5173. To je ideální pro workshopy a cvičení.
            </p>
          </article>
        </div>
      </section>
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
.hosting li,
.guide p {
  color: #44515f;
  line-height: 1.7;
}

.example-nav {
  display: grid;
  gap: 0.7rem;
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

.content {
  display: grid;
  gap: 1.5rem;
  align-content: start;
}

.guide {
  display: grid;
  gap: 1rem;
}

.guide__grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.guide__grid article {
  border: 1px solid rgba(172, 122, 76, 0.18);
  border-radius: 24px;
  padding: 1.25rem;
  background: rgba(255, 255, 255, 0.82);
}

.hosting ul {
  padding-left: 1.25rem;
}

code {
  font-family: "SFMono-Regular", "Consolas", monospace;
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

  .guide__grid {
    grid-template-columns: 1fr;
  }
}
</style>
