import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/CurrencyView.vue";

const routes = [
  {
    path: "/",
    component: HomeView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
