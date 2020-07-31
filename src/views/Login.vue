<template>
  <div class="login">
    <Form
      title="Login"
      footer-label="Don't have an account? Create"
      footer-link="/register"
      button-label="Login"
      @submit="login"
    >
      <div slot="form-fields">
        <b-form-input v-model="email" type="email" placeholder="Email" />
        <b-form-input
          v-model="password"
          type="password"
          placeholder="Password"
        />
        <Error v-if="error" />
      </div>
    </Form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { EVENTS_PATH } from "@/utils/constants";
import Form from "@/layouts/Form";
import Error from "@/components/Error";

export default {
  name: "Login",
  components: { Error, Form },
  data: () => ({
    email: "",
    password: ""
  }),
  created() {
    this.error && this.clearError();
    this.isAuthenticated && this.$router.push(EVENTS_PATH);
  },
  computed: {
    ...mapGetters({
      isAuthenticated: "isAuthenticated",
      error: "error"
    })
  },
  methods: {
    ...mapActions({
      authLogin: "login",
      clearError: "clearAuthError"
    }),
    async login() {
      await this.authLogin({ email: this.email, password: this.password });
      if (this.isAuthenticated && !this.error) {
        this.$router.push(EVENTS_PATH);
      }
    }
  }
};
</script>

<style scoped></style>
