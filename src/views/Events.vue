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
import { FAVORITES_PATH } from '@/utils/constants'
import Page from '@/layouts/Page'

export default {
  name: 'Events',
  components: { Page, EventsList },
  methods: {
    goToFavorites() {
      this.$router.push(FAVORITES_PATH)
    }
  }
}
</script>

<style scoped></style>
