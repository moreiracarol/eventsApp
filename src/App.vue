<template>
  <div id="app">
    <Header v-if="showHeader" />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import { AmplifyEventBus } from "aws-amplify-vue";
import store from "./store";
import {LOGIN_PATH} from "./utils/constants";

export default {
  name: "App",
  components: {
    Header
  },
  data() {
    return {
      signedIn: false
    };
  },
  computed: {
    showHeader(){
      return this.$route.path !== LOGIN_PATH;
    }
  },
  async beforeCreate() {
    AmplifyEventBus.$on("authState", info => {
      if (info === "signedIn") {
        this.signedIn = true;
        store.dispatch("setUser");
      }
    });
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 1272px;
  margin: 60px 8%;
}
</style>
