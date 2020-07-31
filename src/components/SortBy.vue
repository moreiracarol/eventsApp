<template>
  <div class="sort-by ml-auto">
    <b-form-select
      v-model="selected"
      :options="options"
      @change="sortEvents(selected)"
    />
  </div>
</template>

<script>
import { SORT_OPTIONS } from "@/utils/constants";
export default {
  name: "SortBy",
  data() {
    return {
      selected: null,
      options: SORT_OPTIONS
    };
  },
  methods: {
    sortEvents(selected) {
      this.$emit("sortEvents", selected);
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/styles/events-app";

.sort-by {
  padding-top: 8px;
  color: $color-secondary;

  @media (min-width: $breakpoint-tablet) {
    width: 240px;
  }
}
</style>
