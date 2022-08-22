import { createRouter, createWebHistory } from "vue-router";
import MainVue from "../pages/Main.vue";
import PostPageVue from "../pages/PostPage.vue";
import AboutVue from "../pages/About.vue";
import PostIdPageVue from "../pages/PostIdPage.vue";
import PostPageWithStoreVue from "../pages/PostPageWithStore.vue";
import PostPageCompositionApiVue from "../pages/PostPageCompositionApi.vue";

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
  {
    path: "/store",
    component: PostPageWithStoreVue,
  },
  {
    path: "/composition",
    component: PostPageCompositionApiVue,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
