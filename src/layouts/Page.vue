<template>
  <div class="view-layout">
    <div class="view-layout__header">
      <h1 data-events-title>{{ pageTitle }}</h1>
    </div>
    <div class="view-layout__body">
      <b-button class="view-layout__body__button" variant="secondary" data-favorites-button @click="goToPage">
        {{ buttonLabel }}
      </b-button>
      <slot name="content" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ViewLayout',
  props: {
    pageTitle: {
      type: String,
      required: true
    },
    buttonLabel: {
      type: String,
      required: true
    }
  },
  methods: {
    goToPage() {
      this.$emit('click')
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/styles/events-app';
.view-layout {
  max-width: $max-content-size;
  margin: 24px auto;
  padding: 8px;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    position: fixed;
    height: 100px;
    background: $color-white;
    z-index: 2;
    padding: 0 24px;
    box-shadow: 8px 4px 4px $color-light-green;
  }

  &__body {
    margin-top: 120px;
    display: flex;
    flex-direction: column;

    &__button {
      align-self: flex-start;
    }
  }
}
</style>
