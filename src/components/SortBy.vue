<template>
  <div class="sort-by">
    <span class="sort-by__title">Sort by</span>
    <select
      id="orderBy"
      @change="sortEvents(sort)"
      v-model="sort"
      data-sort-select
    >
      <option
        v-for="(option, index) in sortOptions"
        :key="index"
        :value="option.value"
        v-text="option.text"
        data-sort-options
      />
    </select>
  </div>
</template>

<script>
import { SORT_OPTIONS } from "../utils/constants";
export default {
  name: "SortBy",
  data() {
    return {
      sort: "",
      sortOptions: SORT_OPTIONS
    };
  },
  methods: {
    sortEvents(sort) {
      this.$emit("sortEvents", sort);
    }
  }
};
</script>

<style scoped lang="scss">
@import "../styles/events-app";
.sort-by {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 12px;
  padding: 16px 8px;
  color: $color6;

  &__title {
    padding-right: 8px;
  }

  #orderBy {
    height: 30px;
    width: 120px;
    background: $color2;
    color: $color6;

    &:hover {
      border: solid 1px $color6;
      background: $color1;
      cursor: pointer;
    }
  }
}
</style>
