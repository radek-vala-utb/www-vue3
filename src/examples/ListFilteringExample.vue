<script setup>
import { computed, ref } from "vue";
import ExampleShell from "../components/ExampleShell.vue";

const onlyCompleted = ref(false);
const search = ref("");

const lessons = ref([
  { id: 1, title: "Co je Vue aplikace", completed: true, duration: 12 },
  { id: 2, title: "Direktivy a podmínky", completed: false, duration: 18 },
  { id: 3, title: "Seznamy a klíče", completed: true, duration: 16 },
  { id: 4, title: "Form bindings", completed: false, duration: 24 },
]);

const filteredLessons = computed(() =>
  lessons.value.filter((lesson) => {
    const statusMatch = onlyCompleted.value ? lesson.completed : true;
    const searchMatch = lesson.title
      .toLowerCase()
      .includes(search.value.toLowerCase());

    return statusMatch && searchMatch;
  }),
);
</script>

<template>
  <ExampleShell
    title="2. Podmínky, seznamy a filtrování"
    level="Základ"
    summary="Ukázka práce s `v-for`, `v-if` a filtrováním nad reaktivním seznamem."
    :bullets="[
      'Každá položka v `v-for` potřebuje stabilní `:key`.',
      'Filtrování je lepší držet v `computed`, ne přímo v šabloně.',
      'UI může reagovat na více vstupů současně bez ručního DOM kódu.',
    ]"
  >
    <div class="stack">
      <div class="toolbar">
        <input v-model="search" type="search" placeholder="Hledat lekci..." />
        <label class="checkbox">
          <input v-model="onlyCompleted" type="checkbox" />
          Jen hotové
        </label>
      </div>

      <ul class="list">
        <li v-for="lesson in filteredLessons" :key="lesson.id">
          <div>
            <strong>{{ lesson.title }}</strong>
            <small>{{ lesson.duration }} min</small>
          </div>
          <span :class="lesson.completed ? 'done' : 'todo'">
            {{ lesson.completed ? "Hotovo" : "Rozpracováno" }}
          </span>
        </li>
      </ul>

      <p v-if="filteredLessons.length === 0" class="empty">
        Pro aktuální filtr nic nevyhovuje.
      </p>
    </div>
  </ExampleShell>
</template>

<style scoped>
.stack {
  display: grid;
  gap: 1rem;
}

.toolbar {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

input[type="search"] {
  flex: 1 1 220px;
  border: 1px solid #e4cfba;
  border-radius: 14px;
  padding: 0.85rem 1rem;
}

.checkbox {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.list {
  display: grid;
  gap: 0.75rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.list li {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem;
  border-radius: 18px;
  background: #fff6ef;
}

small {
  display: block;
  margin-top: 0.2rem;
  color: #6a7480;
}

.done,
.todo {
  align-self: center;
  border-radius: 999px;
  padding: 0.3rem 0.7rem;
  font-size: 0.85rem;
}

.done {
  background: #d9f0dc;
  color: #1b6a34;
}

.todo {
  background: #ffe3ca;
  color: #8c5523;
}

.empty {
  margin: 0;
  color: #6a7480;
}
</style>
