<template>
  <div class="favorites">
    <h1>FAVORITES</h1>
    <button
      class="primary-button"
      @click="goToEvents"
      data-events-button
    >
      See all events
    </button>
    <EventsList />
  </div>
</template>

<script>
import EventsList from "../components/EventsList";
import { EVENTS_PATH } from "../utils/constants";
export default {
  name: "Favorites",
  components: { EventsList },
  methods: {
    goToEvents() {
      this.$router.push(EVENTS_PATH);
    }
  }
};
</script>

<style scoped lang="scss">
@import "../styles/events-app";
</style>
