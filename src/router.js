import Events from "./views/Events";
import Suggest from "./views/Suggest";
import VueRouter from "vue-router";
import { EVENTS_PATH, SUGGEST_PATH } from "./utils/constants";

const routes = [
  {
    path: EVENTS_PATH,
    name: "events",
    component: Events
  },
  {
    path: SUGGEST_PATH,
    name: "suggest",
    component: Suggest
  },
  {
    path: "/",
    redirect: EVENTS_PATH
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
