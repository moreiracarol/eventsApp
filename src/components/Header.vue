<template>
  <div class="header">
    <div class="sign-out">
      <amplify-sign-out></amplify-sign-out>
    </div>
  </div>
</template>

<script>
import { AmplifyEventBus } from "aws-amplify-vue";
import store from "../store"

export default {
  name: "Header",
  data() {
    return {
      signedIn: false
    };
  },
  beforeCreate() {
    AmplifyEventBus.$on("authState", info => {
      if (info === "signedOut") {
        store.dispatch("signOut");
      }
    });
  }
};
</script>

<style scoped lang="scss">
@import "../styles/events-app";

.header {
  display: flex;
  justify-content: flex-end;
}
</style>
