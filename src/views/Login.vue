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
      </div>
    </Form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { EVENTS_PATH } from "@/utils/constants";
import Form from "@/layouts/Form";

export default {
  name: "Login",
  components: { Form },
  data: () => ({
    email: "",
    password: ""
  }),
  created() {
    if (this.isAuthenticated) {
      this.$router.push(EVENTS_PATH);
    }
  },
  computed: {
    ...mapGetters({
      isAuthenticated: "isAuthenticated"
    })
  },
  methods: {
    ...mapActions({
      authLogin: "login"
    }),
    async login() {
      await this.authLogin({ email: this.email, password: this.password });
      this.$router.push(EVENTS_PATH);
    }
  }
};
</script>

<style scoped></style>
