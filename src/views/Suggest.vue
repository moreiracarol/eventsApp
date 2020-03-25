<template>
  <div class="suggest">
    <h1>SUGGEST</h1>
    <EventsList :isSuggest="true" />
  </div>
</template>

<script>
import EventsList from "../components/EventsList";
export default {
  name: "Suggest",
  components: { EventsList }
};
</script>

<style scoped lang="scss">
@import "../styles/lt-challenge";
</style>
