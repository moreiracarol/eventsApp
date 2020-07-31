<template>
  <div class="register">
    <Form
      v-if="step === steps.register"
      title="Register"
      footer-link="/login"
      footer-label="Have an account? Login"
      button-label="Register"
      @submit="register"
    >
      <div slot="form-fields">
        <b-form-input
          v-model="registerForm.email"
          type="email"
          placeholder="Email"
        />
        <b-form-input
          v-model="registerForm.password"
          type="password"
          placeholder="Password"
        />
        <Error v-if="error" />
      </div>
    </Form>
    <Form
      v-if="step === steps.confirm"
      title="Confirm"
      footer-link="/login"
      footer-label="Have an account? Login"
      button-label="Confirm"
      @submit="confirm"
    >
      <div slot="form-fields">
        <b-form-input
          v-model="confirmForm.email"
          type="email"
          placeholder="Email"
        />
        <b-form-input v-model="confirmForm.code" placeholder="Code" />
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

const steps = {
  register: "REGISTER",
  confirm: "CONFIRM"
};

export default {
  name: "Register",
  components: { Error, Form },
  data: () => ({
    steps: { ...steps },
    step: steps.register,
    registerForm: {
      email: "",
      password: ""
    },
    confirmForm: {
      email: "",
      code: ""
    }
  }),
  created() {
    this.clearError();
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
      authRegister: "register",
      authConfirmRegistration: "confirmRegistration",
      authLogin: "login",
      clearError: "clearAuthError"
    }),
    register() {
      this.authRegister(this.registerForm);
      if (this.isRegistered && !this.error) {
        this.confirmForm.email = this.registerForm.email;
        this.step = this.steps.confirm;
      }
    },
    confirm() {
      this.authConfirmRegistration(this.confirmForm);
      this.authLogin(this.registerForm);
      if (this.isAuthenticated && !this.error) {
        this.$router.push(EVENTS_PATH);
      }
    }
  }
};
</script>

<style scoped></style>
