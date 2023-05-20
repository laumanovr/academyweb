<template>
  <Auth>
    <div class="login">
      <div class="login__title h2">Log in</div>
      <form @submit.prevent="onSubmit" class="login__form">
        <div class="login__form-row">
          <VInput
            type="email"
            placeholder="Enter your email"
            v-model="field.email"
          />
        </div>
        <div class="login__form-row">
          <VInput
            type="password"
            placeholder="Password"
            v-model="field.password"
          />
        </div>
        <div class="login__form-bottom">
          <VCheckbox v-model="field.application">Remember me</VCheckbox>
          <router-link to="/forgot" class="login__form-forgot">Forgot your password?</router-link>
        </div>
        <VButton theme="secondary" fluid>Log in</VButton>
      </form>
      <div class="login__login">Do not have an account?<router-link to="/registration" class="login__login-link">Sign Up</router-link>
      </div>
    </div>
  </Auth>
</template>

<script>
import Auth from "@/layouts/auth.vue";
import VButton from "@/components/VButton.vue";
import VInput from "@/components/VInput.vue";
import VCheckbox from "@/components/VCheckbox.vue";

export default {
  components: {
    Auth,
    VButton,
    VInput,
    VCheckbox,
  },
  data() {
    return {
      field: {
        email: "",
        password: "",
        application: true,
      },
    };
  },
  methods: {
    onSubmit() {
      this.$store.dispatch('auth/login', this.field)
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  text-align: center;
  &__title {
    margin-bottom: 60px;
    color: #2a364d;
  }
  &__form {
    margin-bottom: 40px;
  }
  &__form-row {
    margin-bottom: 35px;
  }
  &__form-bottom {
    margin-bottom: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__login {
    font-weight: 400;
    font-size: 15px;
    line-height: 25px;
    color: #9da3af;
  }
  &__login-link {
    color: #477eeb;
    text-decoration: none;
    margin-left: 5px;
  }
  &__form-forgot {
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
    color: #477eeb;
    text-decoration: none;
  }
  @media #{$lg} {
    &__title {
      margin-bottom: 40px;
    }
    &__form-row {
      margin-bottom: 20px;
    }
  }
  @media #{$sm} {
    &__title {
      margin-bottom: 70px;
    }
  }
  @media #{$xs} {
    &__title {
      margin-bottom: 30px;
      font-weight: 700;
      font-size: 27px;
      line-height: 32px;
    }
    &__form {
      margin-bottom: 30px;
    }
    &__form-bottom {
      justify-content: flex-start;
    }
    &__form-forgot {
      line-height: 25px;
    }
  }
}
</style>
