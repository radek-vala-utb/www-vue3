import { computed, ref } from "vue";

const courseCatalog = [
  { id: 1, title: "Základy reaktivity", duration: 20, level: "Začátečník" },
  { id: 2, title: "Práce s formuláři", duration: 35, level: "Začátečník" },
  { id: 3, title: "Komponenty a komunikace", duration: 45, level: "Střední" },
  { id: 4, title: "Composable patterns", duration: 55, level: "Pokročilý" },
];

export function useFakeCourses() {
  const loading = ref(false);
  const filter = ref("Vše");
  const items = ref([]);

  const visibleCourses = computed(() => {
    if (filter.value === "Vše") {
      return items.value;
    }

    return items.value.filter((course) => course.level === filter.value);
  });

  async function loadCourses() {
    loading.value = true;

    await new Promise((resolve) => {
      window.setTimeout(resolve, 800);
    });

    items.value = courseCatalog;
    loading.value = false;
  }

  return {
    filter,
    items,
    loading,
    visibleCourses,
    loadCourses,
  };
}
