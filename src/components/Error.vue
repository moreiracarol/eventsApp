<template>
  <div class="error">{{ error }}</div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Error",
  computed: {
    ...mapGetters({
      error: "error"
    })
  }
};
</script>

<style scoped lang="scss">
@import "@/styles/events-app";

.error {
  margin: 24px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  background: $color-light-red;
  color: $color-dark-red;
}
</style>
