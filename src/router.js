import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import ExamplesPage from "./pages/ExamplesPage.vue";
import AboutPage from "./pages/AboutPage.vue";
import RouterDemoPage from "./pages/RouterDemoPage.vue";
import RouterOverviewPanel from "./pages/router-demo/RouterOverviewPanel.vue";
import LessonDetailPanel from "./pages/router-demo/LessonDetailPanel.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/examples",
      name: "examples",
      component: ExamplesPage,
    },
    {
      path: "/router-demo",
      component: RouterDemoPage,
      children: [
        {
          path: "",
          name: "router-overview",
          component: RouterOverviewPanel,
        },
        {
          path: "lesson/:slug",
          name: "lesson-detail",
          component: LessonDetailPanel,
          props: true,
        },
      ],
    },
    {
      path: "/about",
      name: "about",
      component: AboutPage,
    },
  ],
  scrollBehavior() {
    return { top: 0, behavior: "smooth" };
  },
});

export default router;
