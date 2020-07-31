<template>
  <div class="form">
    <h1 v-text="title"></h1>
    <b-form class="form__fields" @submit.prevent="submit">
      <slot name="form-fields"></slot>
      <b-button
        class="form__button"
        type="submit"
        variant="primary"
        v-text="buttonLabel"
      />
    </b-form>
    <a class="form-link" v-text="footerLabel" @click="goToPage"></a>
  </div>
</template>

<script>
export default {
  name: 'Form',
  props: {
    title: {
      type: String,
      default: ''
    },
    buttonLabel: {
      type: String,
      default: ''
    },
    footerLabel: {
      type: String,
      default: ''
    },
    footerLink: {
      type: String,
      default: ''
    }
  },
  methods: {
    submit() {
      this.$emit('submit')
    },
    goToPage(){
      this.$router.push(this.footerLink);
    }
  }
}
</script>

<style scoped lang="scss">
.form {
  max-width: 480px;
  margin: 80px auto;

  &__fields {
    margin: 16px 0;
  }

  &__button {
    margin-top: 8px;
  }
}
</style>
