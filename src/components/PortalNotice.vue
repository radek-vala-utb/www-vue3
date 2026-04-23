<script setup>
defineProps({
  open: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(["close"]);
</script>

<template>
  <teleport to="body">
    <div v-if="open" class="overlay" @click.self="emit('close')">
      <div class="dialog">
        <p class="dialog__eyebrow">Teleport</p>
        <h3>Obsah se renderuje mimo hierarchii komponenty</h3>
        <p>
          To se hodí pro modaly, notifikace nebo plovoucí overlay prvky.
        </p>
        <button type="button" @click="emit('close')">Zavřít</button>
      </div>
    </div>
  </teleport>
</template>

<style scoped>
.overlay {
  position: fixed;
  inset: 0;
  display: grid;
  place-items: center;
  padding: 1rem;
  background: rgba(34, 22, 12, 0.45);
}

.dialog {
  width: min(480px, 100%);
  padding: 1.5rem;
  border-radius: 24px;
  background: #fffaf5;
  box-shadow: 0 24px 80px rgba(34, 22, 12, 0.28);
}

.dialog__eyebrow {
  margin: 0 0 0.25rem;
  color: #8c5523;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

h3 {
  margin: 0 0 0.75rem;
}

p {
  color: #44515f;
  line-height: 1.6;
}

button {
  border: 0;
  border-radius: 999px;
  padding: 0.75rem 1rem;
  background: #d77727;
  color: white;
  cursor: pointer;
}
</style>
