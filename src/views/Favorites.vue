<template>
  <div class="favorites">
    <h1>FAVORITES</h1>
    <EventsList/>
  </div>
</template>

<script>
import EventsList from "../components/EventsList";
export default {
  name: "Favorites",
  components: { EventsList }
};
</script>

<style scoped lang="scss">
@import "../styles/events-app";
</style>
