<template>
  <div class="events-list">
    <div v-if="isEmptyScreen">No events to show</div>
    <div v-else>
      <SortBy v-if="showAllEvents" @sortEvents="sortEvents" />
      <Card
        v-for="(event, index) in events"
        :key="index"
        :event="event"
        data-card
      />
      <Pagination
        v-if="showPagination"
        :totalPages="totalPages"
        @gotoPage="gotoPage"
      />
    </div>
  </div>
</template>

<script>
import store from "@/store";
import Card from "@/components/Card";
import { SORT_OPTIONS } from "@/utils/constants";
import Pagination from "@/components/Pagination";
import SortBy from "@/components/SortBy";

export default {
  name: "EventsList",
  components: {
    SortBy,
    Pagination,
    Card
  },
  data() {
    return {
      events: [],
      page: 0,
      sort: "",
      totalPages: 0,
      sortOptions: SORT_OPTIONS
    };
  },
  props: {
    showAllEvents: {
      type: Boolean,
      default: false
    }
  },
  async created() {
    this.loadList();
  },
  computed: {
    isEmptyScreen() {
      return !this.events.length;
    },
    showPagination() {
      return this.showAllEvents && this.totalPages > 1;
    }
  },
  methods: {
    async loadList(sort) {
      this.showAllEvents
        ? await store.dispatch("getEvents", { page: this.page, sort })
        : await store.dispatch("getFavorites", { page: this.page, sort });
      this.events = store.state.events;
      this.totalPages = store.state.totalPages;
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

<style scoped lang="scss">
@import "../styles/events-app";
.events-list {
  display: flex;
  flex-direction: column;
  align-items: center;

  & > * {
    width: 100%;
  }
}
</style>
