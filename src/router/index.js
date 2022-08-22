import { createRouter, createWebHistory } from "vue-router";
import MainVue from "../pages/Main.vue";
import PostPageVue from "../pages/PostPage.vue";
import AboutVue from "../pages/About.vue";
import PostIdPageVue from "../pages/PostIdPage.vue";

const routes = [
  {
    path: "/",
    component: MainVue,
  },
  {
    path: "/posts",
    component: PostPageVue,
  },
  {
    path: "/about",
    component: AboutVue,
  },
  {
    path: "/posts/:id",
    component: PostIdPageVue,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
