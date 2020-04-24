import Events from "./views/Events";
import Favorites from "./views/Favorites";
import VueRouter from "vue-router";
import { EVENTS_PATH, FAVORITES_PATH } from "./utils/constants";

const routes = [
  {
    path: EVENTS_PATH,
    name: "events",
    component: Events
  },
  {
    path: FAVORITES_PATH,
    name: "favorites",
    component: Favorites
  },
  {
    path: "/",
    redirect: EVENTS_PATH
  },
  {
    path: "*",
    redirect: EVENTS_PATH
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
