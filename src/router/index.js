import { createRouter, createWebHistory } from "vue-router";
import InContact from "../views/InContact.vue";
import AboutUs from "../views/AboutUs.vue";
import HomeView from "../views/HomeView.vue";

import DefaultLayout from "../layouts/DefaultLayout.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "homeview",
      meta: { layout: DefaultLayout },
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      meta: { layout: DefaultLayout },
      component: AboutUs,
    },
    {
      path: "/contact",
      name: "contact",
      meta: { layout: DefaultLayout },
      component: InContact,
    },
  ],
  scrollBehavior() {
    return new Promise(resolve => {
      resolve({ left: 0, top: 0 });
    });
  },
});

export default router;
