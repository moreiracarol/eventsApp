<template>
  <div class="home">
    <div class="home__menu">
      <div
        v-if="isEventsRoute"
        class="home__menu__item"
        @click="goToSuggest"
        data-suggest-button
      >
        Browse suggestions
      </div>
      <div
        v-else
        class="home__menu__item"
        @click="goToEvents"
        data-events-button
      >
        See all events
      </div>
    </div>
  </div>
</template>

<script>
import { EVENTS_PATH, SUGGEST_PATH } from "../utils/constants";
import { isEventsPage } from "../utils/stringUtils";

export default {
  name: "Home",
  methods: {
    goToEvents() {
      this.$router.push(EVENTS_PATH);
    },
    goToSuggest() {
      this.$router.push(SUGGEST_PATH);
    }
  },
  computed: {
    isEventsRoute() {
      return isEventsPage(this.$route.path);
    }
  }
};
</script>

<style scoped lang="scss">
@import "../styles/lt-challenge";
</style>
