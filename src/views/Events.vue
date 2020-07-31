<template>
  <Page page-title="EVENTS" button-label="My favorites" @click="goToFavorites">
    <div slot="content">
      <EventsList :show-all-events="true" data-events-list />
    </div>
  </Page>
</template>
.
<script>
import EventsList from '@/components/EventsList'
import {FAVORITES_PATH, LOGIN_PATH} from '@/utils/constants'
import Page from '@/layouts/Page'
import {mapGetters} from "vuex";

export default {
  name: 'Events',
  components: { Page, EventsList },
  created() {
    !this.isAuthenticated && this.$router.push(LOGIN_PATH)
  },
  computed: {
    ...mapGetters({
      isAuthenticated: "isAuthenticated"
    })
  },
  methods: {
    goToFavorites() {
      this.$router.push(FAVORITES_PATH)
    }
  }
}
</script>

<style scoped></style>
