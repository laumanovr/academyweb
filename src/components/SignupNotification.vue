<template>
  <div class="signup-notification">
    <div class="container">
      <div class="signup-notification__wrapper">
        <img
          src="@/assets/img/panda-small.svg"
          class="signup-notification__icon"
        />
        <div class="signup-notification__text">
          <b>Sign up</b> to avail <b>10% OFF</b> on all subscription plans
        </div>
        <VButton theme="outline" class="signup-notification__btn" @click="$router.push('/registration')">Sign up</VButton>
        <img
          src="@/assets/img/icons/close.svg"
          class="signup-notification__close"
        />
      </div>
    </div>
  </div>
</template>

<script>
import VButton from "@/components/VButton.vue";

export default {
	components: {
		VButton,
	},
};
</script>

<style lang="scss" scoped>
.signup-notification {
  background: $champagne;
  overflow: hidden;
  &__wrapper {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 45px;
    padding: 5px 32px 5px 0;
  }

  &__icon {
    position: relative;
    bottom: -14px;
  }

  &__text {
    margin: 0 35px;
    color: $dark-blue;
    font-weight: 400;
    font-size: 16px;
    line-height: 140%;
    b {
      font-weight: 800;
    }
  }

  &__close {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    cursor: pointer;
  }
  @media #{$sm} {
    &__wrapper {
      justify-content: unset;
    }
    &__icon {
      left: -10px;
      width: 38px;
      height: 48px;
    }
    &__text {
      margin: 0 10px 0 13px;
      font-weight: 600;
      font-size: 13px;
      line-height: 120%;
      b {
        font-weight: 600;
      }
    }
  }
  @media #{$xs} {
    &__text {
      margin: 0 5px 0 -5px;
      font-weight: 600;
      font-size: 13px;
      max-width: 155px;
    }
  }
}
</style>
