import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueRouter from "vue-router";
import store from "./store";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
