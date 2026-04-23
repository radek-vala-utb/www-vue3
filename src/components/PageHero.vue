<script setup>
defineProps({
  eyebrow: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  intro: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <header class="hero">
    <p class="hero__eyebrow">{{ eyebrow }}</p>
    <h2>{{ title }}</h2>
    <p class="hero__intro">{{ intro }}</p>
  </header>
</template>

<style scoped>
.hero {
  display: grid;
  gap: 0.75rem;
}

.hero__eyebrow {
  margin: 0;
  color: #8c5523;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

h2,
p {
  margin: 0;
}

.hero__intro {
  color: #44515f;
  line-height: 1.7;
}
</style>
