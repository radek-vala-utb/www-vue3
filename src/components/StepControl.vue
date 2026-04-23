<script setup>
defineProps({
  value: {
    type: Number,
    required: true,
  },
});

const emit = defineEmits(["increment", "decrement"]);
</script>

<template>
  <div class="control">
    <button type="button" @click="emit('decrement')">-</button>
    <strong>{{ value }}</strong>
    <button type="button" @click="emit('increment')">+</button>
  </div>
</template>

<style scoped>
.control {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem;
  border-radius: 999px;
  background: #fff6ef;
}

button {
  width: 2rem;
  height: 2rem;
  border: 0;
  border-radius: 999px;
  background: #d77727;
  color: white;
  font-size: 1.1rem;
  cursor: pointer;
}

strong {
  min-width: 2ch;
  text-align: center;
}
</style>
