import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Lb from "../views/Leaderboard.vue";
import Commands from "../views/Commands.vue";
import ServerLb from "../views/ServerLb.vue";
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
  { path: "/commands", name: "Commands", component: Commands },
  { path: "/leaderboard", name: "leaderboard", component: Lb },
  {
    path: "/profile/:id",
    name: "Profile",
    component: () => import("../views/Profile.vue"),
  },
  { path: "/server-lb", name: "Server Lb", component: ServerLb },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
