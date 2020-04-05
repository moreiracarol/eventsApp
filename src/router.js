import Events from "./views/Events";
import Favorites from "./views/Favorites";
import VueRouter from "vue-router";
import { EVENTS_PATH, FAVORITES_PATH, LOGIN_PATH } from "./utils/constants";
import Auth from "./views/Auth";
import Vue from "vue";

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
    path: LOGIN_PATH,
    name: "login",
    component: Auth
  },
  {
    path: "/",
    redirect: LOGIN_PATH
  },
  {
    path: "*",
    redirect: LOGIN_PATH
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

router.beforeResolve((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    Vue.prototype.$Amplify.Auth.currentAuthenticatedUser()
      .then(() => {
        next();
      })
      .catch(() => {
        next({
          path: LOGIN_PATH
        });
      });
  }
  next();
});

export default router;
