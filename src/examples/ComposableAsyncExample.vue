<script setup>
import { onMounted } from "vue";
import ExampleShell from "../components/ExampleShell.vue";
import { useFakeCourses } from "../composables/useFakeCourses";

const { filter, loading, visibleCourses, loadCourses } = useFakeCourses();

onMounted(() => {
  loadCourses();
});
</script>

<template>
  <ExampleShell
    title="5. Composable a asynchronní stav"
    level="Pokročilý"
    summary="Když logika přeroste jednu komponentu, vyplatí se ji vytáhnout do composable funkce."
    :bullets="[
      'Composable vrací znovupoužitelný stav i akce.',
      'Asynchronní loading je oddělený od prezentační vrstvy.',
      'Stejný pattern se dobře hodí pro API, auth i feature flags.',
    ]"
  >
    <div class="stack">
      <div class="toolbar">
        <button type="button" @click="loadCourses">Načíst znovu</button>

        <select v-model="filter">
          <option>Vše</option>
          <option>Začátečník</option>
          <option>Střední</option>
          <option>Pokročilý</option>
        </select>
      </div>

      <p v-if="loading" class="state">Načítám kurzy...</p>

      <ul v-else class="list">
        <li v-for="course in visibleCourses" :key="course.id">
          <strong>{{ course.title }}</strong>
          <span>{{ course.level }} • {{ course.duration }} min</span>
        </li>
      </ul>
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

button,
select {
  border: 0;
  border-radius: 999px;
  padding: 0.75rem 1rem;
  background: #fff6ef;
  font: inherit;
}

button {
  background: #d77727;
  color: white;
  cursor: pointer;
}

.list {
  display: grid;
  gap: 0.75rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.list li,
.state {
  padding: 1rem;
  border-radius: 18px;
  background: #fff6ef;
}

span {
  display: block;
  margin-top: 0.25rem;
  color: #6a7480;
}
</style>
