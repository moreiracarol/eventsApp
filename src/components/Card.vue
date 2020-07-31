<template>
  <b-card no-body class="overflow-hidden">
    <b-row no-gutters class="card__row">
      <b-col md="4">
        <b-img :src="event.image" fluid-grow rounded />
      </b-col>
      <b-col md="8" class="card__content">
        <Date :date="event.date" />
        <div class="card__name" v-text="event.name"></div>
        <div class="card__price" v-text="event.price"></div>
        <div class="card__icons">
          <img :src="getRedirectIcon" @click="redirectToEventPage" data-icon-redirect />
          <img :src="getIcon" @click="saveFavorite" />
        </div>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import { mapActions } from "vuex";
import { getImageContext } from "@/utils/stringUtils";
import Date from "@/components/Date";

export default {
  name: "Card",
  components: { Date },
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
      return getImageContext("external-link");
    }
  },
  methods: {
    ...mapActions({
      addToFavorites: "addToFavorites"
    }),
    saveFavorite() {
      this.addToFavorites(this.event);
    },
    redirectToEventPage() {
      window.open(this.event.url);
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/styles/events-app";

.card {
  background: #f4f7f6;
  border: solid 2px white;
  margin: 8px 0;

  &:hover {
    background: $color-white;
    border: solid 2px $color-light-green;
    color: $color-secondary;
  }

  &__row {
    align-items: center;
    width: 100%;
  }

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 16px !important;

    @media (min-width: $breakpoint-tablet) {
      padding-left: 16px !important;
      text-align: left;
    }
  }

  &__name {
    font-size: 20px;
    padding: 4px;

    @media (min-width: $breakpoint-tablet) {
      font-size: 24px;
      padding: 8px 0;
    }
  }

  &__price {
    font-style: italic;
    padding: 4px;
    color: $color-dark-gray;
    font-size: 12px;

    @media (min-width: $breakpoint-tablet) {
      font-size: 16px;
    }
  }

  &__icons {
    margin-bottom: 8px;
    display: flex;
    justify-content: flex-end;

    & > * {
      cursor: pointer;
      padding-left: 24px;
    }

    @media (min-width: $breakpoint-tablet) {
      margin: 0 16px;
    }
  }
}
</style>
