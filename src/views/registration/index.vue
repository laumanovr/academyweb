<template>
  <Auth>
    <div class="registration">
      <div class="registration__title h2">Sign up</div>
      <form @submit.prevent="onSubmit" class="registration__form">
        <div class="registration__form-row">
          <VInput type="email" placeholder="Email" v-model="field.email" />
        </div>
        <div class="registration__form-row">
          <VInput
            type="password"
            placeholder="Password"
            v-model="field.password"
          />
        </div>
        <div class="registration__form-row">
          <VInput
            type="password"
            placeholder="Confirm password"
            v-model="field.passwordConfirm"
          />
        </div>
        <div class="registration__form-agree">
          <VCheckbox v-model="field.application">
            I agree to receive emails from Bimi Boo</VCheckbox
          >
        </div>
        <VButton theme="secondary" fluid>Sign up</VButton>
      </form>
      <div class="registration__login">
        Have an account?
        <router-link to="/login" class="registration__login-link">Login</router-link>
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
			this.$store.dispatch('auth/signUp', this.field);
		},
	},
};
</script>

<style lang="scss" scoped>
.registration {
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
