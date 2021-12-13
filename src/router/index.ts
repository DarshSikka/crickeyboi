import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Help from "../views/Help.vue";
import Commands from "../views/Commands.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/help",
    name: "Help",
    component: Help,
  },
  { path: "/commands", name: "Commands", component: Commands },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
