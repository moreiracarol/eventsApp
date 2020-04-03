<template>
  <div class="card">
    <div class="card__content">
      <div class="card__image">
        <img :src="event.image" />
      </div>
      <div class="card__info">
        <Date :date="event.date"/>
        <div class="card__name" v-text="event.name"></div>
        <div class="card__price" v-text="event.price"></div>
      </div>
    </div>
    <div class="card__icons">
      <img
        class="card__icons__redirect"
        :src="getRedirectIcon"
        @click="redirectToEventPage"
      />
      <img
        class="card__icons__favorite"
        :src="getIcon"
        @click="addToFavorites"
      />
    </div>
  </div>
</template>

<script>
import store from "../store";
import { getImageContext } from "../utils/stringUtils";
import Date from "./Date";
export default {
  name: "Card",
  components: {Date},
  props: {
    event: {
      type: Object,
      required: true
    }
  },
  computed: {
    getIcon() {
      const icon = this.event.favorite ? "heart-solid" : "heart-regular";
      return getImageContext(icon);
    },
    getRedirectIcon() {
      return getImageContext("link-externo");
    }
  },
  methods: {
    addToFavorites() {
      store.dispatch("addToFavorites", this.event);
    },
    redirectToEventPage() {
      window.open(this.event.url);
    }
  }
};
</script>

<style scoped lang="scss">
@import "../styles/events-app";

.card {
  background: $color2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: solid 2px white;
  border-radius: 8px;

  &:hover {
    background: $color1;
    border: solid 2px $color2;
    color: $color6;
  }

  &__content {
    display: flex;
    align-items: center;
  }

  &__image {
    margin: 0 8px;

    @media (min-width: $breakpoint-tablet) {
      height: $card-image-height;
      width: $card-image-height;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 8px;
      margin: 0 12px;
    }

    img {
      width: $card-image-height;

      @media (min-width: $breakpoint-tablet) {
        height: $card-image-height;
        width: auto;
      }
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: initial;

    @media (min-width: $breakpoint-tablet) {
      margin: 8px 16px;
    }
  }

  &__name {
    font-size: 14px;
    padding: 4px;

    @media (min-width: $breakpoint-tablet) {
      font-size: 24px;
      padding: 8px;
    }
  }

  &__price {
    font-style: italic;
    padding: 4px;
    color: $color5;
    font-size: 12px;

    @media (min-width: $breakpoint-tablet) {
      font-size: 16px;
      padding: 8px;
    }
  }

  &__icons {
    justify-self: flex-end;
    margin: 8px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 100px;
    width: auto;

    & > * {
      cursor: pointer;
    }

    @media (min-width: $breakpoint-tablet) {
      margin: 16px;
      height: $card-image-height;
    }
  }
}
</style>
