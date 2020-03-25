<template>
  <div class="events-list">
    <div class="events-list__sort">
      <span class="events-list__sort__title">Sort by</span>
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
    <div v-for="(event, index) in events" :key="index" data-card-container>
      <Card :event="event" data-card />
    </div>
    <Paginate
      :page-count="20"
      :click-handler="gotoPage"
      prev-text="Previous"
      next-text="Next"
      container-class="pagination"
      page-class="pagination__item"
      prev-class="pagination__item"
      next-class="pagination__item"
      data-pagination
    />
  </div>
</template>

<script>
import VuejsPaginate from "vuejs-paginate";
import store from "../store";
import Card from "./Card";
import { SORT_OPTIONS } from "../utils/constants";
import { mapActions } from "vuex";
export default {
  name: "EventsList",
  components: {
    Card,
    Paginate: VuejsPaginate
  },
  data() {
    return {
      events: [],
      page: 0,
      sort: "",
      sortOptions: SORT_OPTIONS
    };
  },
  props: {
    isSuggest: {
      type: Boolean,
      default: false
    }
  },
  async created() {
    this.loadList();
  },
  methods: {
    ...mapActions(["getEvents"]),
    async loadList(sort) {
      this.isSuggest
        ? await store.dispatch("getSuggestions", { page: this.page, sort })
        : await store.dispatch("getEvents", { page: this.page, sort });
      this.events = store.state.events;
    },
    gotoPage(page) {
      this.page = page - 1;
      this.loadList();
    },
    sortEvents(sort) {
      this.loadList(sort);
    }
  }
};
</script>

<style lang="scss">
@import "../styles/lt-challenge";

.events-list__sort {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 12px;
  padding: 16px 8px;
  color: $color6;

  &__title {
    padding-right: 8px;
  }
}
</style>
