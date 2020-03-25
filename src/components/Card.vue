<template>
  <div class="card">
    <div class="card__date" v-text="event.date"></div>
    <div class="card__name" v-text="event.name"></div>
    <div class="card__price" v-text="event.price"></div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    event: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped lang="scss">
@import "../styles/lt-challenge";

.card {
  background: $color2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  border: solid 2px white;
  border-radius: 8px;
  padding: 16px;

  &:hover {
    background: $color1;
    border: solid 2px $color2;
    color: $color6;
  }

  &__name {
    font-size: 24px;
    padding: 16px;
  }

  &__date {
    color: $color4;
    font-weight: 600;
    padding: 8px 16px;
  }

  &__price {
    font-style: italic;
    align-self: flex-end;
    padding: 8px 16px;
    color: $color5;
  }
}
</style>
