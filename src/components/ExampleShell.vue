<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  level: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
    required: true,
  },
  bullets: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <section class="shell">
    <header class="shell__header">
      <div>
        <p class="shell__eyebrow">{{ level }}</p>
        <h2>{{ title }}</h2>
      </div>
      <p class="shell__summary">{{ summary }}</p>
    </header>

    <div class="shell__content">
      <div class="shell__demo">
        <slot />
      </div>

      <aside class="shell__notes">
        <h3>Co si odnést</h3>
        <ul>
          <li v-for="bullet in bullets" :key="bullet">{{ bullet }}</li>
        </ul>
      </aside>
    </div>
  </section>
</template>

<style scoped>
.shell {
  display: grid;
  gap: 1.5rem;
}

.shell__header {
  display: grid;
  gap: 0.75rem;
}

.shell__eyebrow {
  margin: 0;
  color: #8c5523;
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.shell__header h2,
.shell__notes h3 {
  margin: 0;
}

.shell__summary {
  margin: 0;
  color: #44515f;
  line-height: 1.6;
}

.shell__content {
  display: grid;
  gap: 1rem;
  grid-template-columns: minmax(0, 2fr) minmax(260px, 1fr);
}

.shell__demo,
.shell__notes {
  background: rgba(255, 255, 255, 0.82);
  border: 1px solid rgba(172, 122, 76, 0.18);
  border-radius: 24px;
  padding: 1.25rem;
  backdrop-filter: blur(14px);
  box-shadow: 0 18px 50px rgba(138, 95, 54, 0.08);
}

.shell__notes ul {
  margin: 0.75rem 0 0;
  padding-left: 1.25rem;
  color: #44515f;
  line-height: 1.7;
}

@media (max-width: 900px) {
  .shell__content {
    grid-template-columns: 1fr;
  }
}
</style>
