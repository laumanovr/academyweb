<template>
  <Auth>
    <div class="forgot">
      <div class="forgot__title h2">Password recovery</div>
      <form @submit.prevent="onSumbit" class="forgot__form">
        <div class="forgot__form-row">
          <VInput type="email" placeholder="Email" v-model="field.email" />
        </div>
        <div class="forgot__form-row">
          <VInput
            type="password"
            placeholder="New password"
            v-model="field.password"
          />
        </div>
        <div class="forgot__form-row">
          <VInput
            type="password"
            placeholder="Confirm password"
            v-model="field.passwordConfirm"
          />
        </div>
        <VButton theme="secondary" fluid>Update password</VButton>
      </form>
      <div class="forgot__login">
        Have an account?
        <router-link to="/login" class="forgot__login-link">Login</router-link>
      </div>
    </div>
  </Auth>
</template>

<script>
import Auth from "@/layouts/auth.vue";
import VButton from "@/components/VButton.vue";
import VInput from "@/components/VInput.vue";

export default {
  components: {
    Auth,
    VButton,
    VInput,
  },
  data() {
    return {
      field: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    onSumbit() {},
  },
};
</script>

<style lang="scss" scoped>
.forgot {
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
  &__form-agree {
    margin-bottom: 40px;
    display: flex;
    justify-content: center;
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
    &__form-agree {
      justify-content: flex-start;
    }
  }
}
</style>
