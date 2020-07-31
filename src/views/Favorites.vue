<template>
  <Page
      page-title="FAVORITES"
      button-label="See all events"
      @click="goToEvents"
  >
    <div slot="content">
      <EventsList />
    </div>
  </Page>
</template>

<script>
import EventsList from '@/components/EventsList'
import {EVENTS_PATH, LOGIN_PATH} from '@/utils/constants'
import Page from '@/layouts/Page'
import {mapGetters} from "vuex";

export default {
  name: 'Favorites',
  components: { EventsList, Page },
  created() {
    !this.isAuthenticated && this.$router.push(LOGIN_PATH)
  },
  computed: {
    ...mapGetters({
      isAuthenticated: "isAuthenticated"
    })
  },
  methods: {
    goToEvents() {
      this.$router.push(EVENTS_PATH)
    }
  }
}
</script>

<style scoped></style>
