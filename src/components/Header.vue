<template>
  <div class="header">
    <div class="header__menu">
      <button
        v-if="isEventsRoute"
        class="header__menu__item"
        @click="goToFavorites"
        data-favorites-button
      >
        My favorites
      </button>
      <button
        v-else
        class="header__menu__item"
        @click="goToEvents"
        data-events-button
      >
        See all events
      </button>
    </div>
  </div>
</template>

<script>
import { EVENTS_PATH, FAVORITES_PATH } from "../utils/constants";
import { isEventsPage } from "../utils/stringUtils";

export default {
  name: "Header",
  methods: {
    goToEvents() {
      this.$router.push(EVENTS_PATH);
    },
    goToFavorites() {
      this.$router.push(FAVORITES_PATH);
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
@import "../styles/events-app";
.header {
  &__menu {
    display: flex;

    &__item {
      padding: 8px 16px;
      font-size: 24px;
      border: solid 2px;
      border-radius: 25px;
      color: $color1;
      background-color: $color4;

      &:focus {
        outline:0;
      }

      &:hover {
        color: $color4;
        border-color: $color4;
        background-color: $color1;
      }
    }
  }
}
</style>
