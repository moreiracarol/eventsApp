<template>
  <div class="events">
    <h1 data-events-title>EVENTS</h1>
    <button
      class="primary-button events__favorites-button"
      @click="goToFavorites"
      data-favorites-button
    >
      My favorites
    </button>
    <EventsList :showAllEvents="true" data-events-list />
  </div>
</template>

<script>
import EventsList from "../components/EventsList";
import {FAVORITES_PATH} from "../utils/constants";

export default {
  name: "Events",
  components: { EventsList },
  methods: {
    goToFavorites() {
      this.$router.push(FAVORITES_PATH);
    }
  }
};
</script>

<style scoped lang="scss">
@import "../styles/events-app";
  .events__favorites-button {
    position: absolute;
    margin-bottom: -36px;
  }
</style>
