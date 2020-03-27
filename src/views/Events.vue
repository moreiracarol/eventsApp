<template>
  <div class="events">
    <h1 data-events-title>EVENTS</h1>
    <EventsList :showAllEvents="true" data-events-list />
  </div>
</template>

<script>
import EventsList from "../components/EventsList";
export default {
  name: "Events",
  components: { EventsList }
};
</script>

<style scoped lang="scss">
@import "../styles/events-app";
</style>
