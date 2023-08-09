import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/buttons",
      name: "buttons",
      component: () => import("../views/ButtonView.vue"),
    },
    {
      path: "/cards",
      name: "cards",
      component: () => import("../views/CardView.vue"),
    },
    {
      path: "/dialogs",
      name: "dialogs",
      component: () => import("../views/DialogView.vue"),
    },
    {
      path: "/expansion-panels",
      name: "expansion-panels",
      component: () => import("../views/ExpansionPanels.vue"),
    },
    {
      path: "/lists",
      name: "lists",
      component: () => import("../views/ListView.vue"),
    },
    {
      path: "/tables",
      name: "tables",
      component: () => import("../views/TableView.vue"),
    },
    {
      path: "/progress",
      name: "progress",
      component: () => import("../views/ProgressView.vue"),
    },
    {
      path: "/snackbars",
      name: "snackbars",
      component: () => import("../views/SnackbarsView.vue"),
    },
  ],
});

export default router;
