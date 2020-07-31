import Events from "@/views/Events";
import Favorites from "@/views/Favorites";
import VueRouter from "vue-router";
import Login from "@/views/Login";
import Register from "@/views/Register";
import {
  EVENTS_PATH,
  FAVORITES_PATH,
  LOGIN_PATH,
  REGISTER_PATH
} from "@/utils/constants";

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
    redirect: LOGIN_PATH
  },
  {
    path: "*",
    redirect: LOGIN_PATH
  },

  {
    path: LOGIN_PATH,
    name: "login",
    component: Login
  },
  {
    path: REGISTER_PATH,
    name: "register",
    component: Register
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
