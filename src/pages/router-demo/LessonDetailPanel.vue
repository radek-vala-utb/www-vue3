<script setup>
import { computed } from "vue";

const props = defineProps({
  slug: {
    type: String,
    required: true,
  },
});

const lessons = {
  "uvod-do-routeru": {
    title: "Úvod do routeru",
    text: "Router mapuje URL adresy na konkrétní stránky nebo pohledy. Díky tomu aplikace reaguje na historii prohlížeče a jednotlivé části mají vlastní adresu.",
  },
  "aktivni-navigace": {
    title: "Aktivní navigace",
    text: "Navigační prvky můžou reflektovat aktuální route, takže uživatel hned vidí, kde se nachází. To je důležité pro větší aplikace i dashboardy.",
  },
  "url-parametry": {
    title: "URL parametry",
    text: "Parametr v URL jako `:slug` se hodí pro detail stránky, třeba lekce, článku nebo produktu. Díky props je práce s ním v komponentě čistší.",
  },
};

const lesson = computed(() => lessons[props.slug] ?? {
  title: "Neznámá lekce",
  text: "Tenhle slug není v ukázkových datech, ale je dobře vidět, že router doručil parametr do komponenty.",
});
</script>

<template>
  <article class="stack">
    <p class="eyebrow">Detail podle URL parametru</p>
    <h3>{{ lesson.title }}</h3>
    <p>{{ lesson.text }}</p>
    <code>/router-demo/lesson/{{ slug }}</code>
  </article>
</template>

<style scoped>
.stack {
  display: grid;
  gap: 0.75rem;
}

.eyebrow {
  margin: 0;
  color: #8c5523;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

h3,
p,
code {
  margin: 0;
}

p {
  color: #44515f;
  line-height: 1.7;
}

code {
  justify-self: start;
  border-radius: 999px;
  padding: 0.4rem 0.7rem;
  background: #fff6ef;
  font-family: "SFMono-Regular", "Consolas", monospace;
}
</style>
