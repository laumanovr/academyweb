<template>
  <div class="auth-layout">
    <div class="auth-layout__left">
      <div class="auth-layout__logo-wrapper">
        <img src="@/assets/img/icons/logo.svg" class="auth-layout__logo" />
      </div>
      <div class="auth-layout__rocket-wrapper">
        <img src="@/assets/img/rocket.svg" class="auth-layout__rocket" />
      </div>
    </div>
    <div class="auth-layout__content-wrapper">
      <div class="auth-layout__close" @click="onClose">
        <img src="@/assets/img/icons/close-circle.svg" />
      </div>
      <div class="auth-layout__content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AuthLayout",
  methods: {
    onClose() {
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss">
.auth-layout {
  display: flex;
  justify-content: space-between;
  min-height: 100vh;
  background-color: #f7f6f9;
  background-image: url("~@/assets/img/earth-auth.svg");
  background-repeat: no-repeat;
  background-position: 0 100%;
  &__left {
    flex: 1;
    padding-top: 156px;
    text-align: center;
  }
  &__logo-wrapper {
    margin-bottom: 86px;
  }
  &__logo {
    width: 270px;
  }
  &__rocket {
    width: 124px;
  }
  &__content-wrapper {
    position: relative;
    display: flex;
    justify-content: center;
    max-width: 730px;
    width: 100%;
    padding: 140px 20px 20px;
    background: #ffffff;
    border-radius: 100px 0px 0px 100px;
  }
  &__content {
    max-width: 386px;
    width: 100%;
  }
  &__close {
    position: absolute;
    top: 60px;
    right: 60px;
    width: 44px;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ffffff;
    border: 1px solid #e9ebec;
    border-radius: 50px;
    cursor: pointer;
  }
  @media #{$lg} {
    &__left {
      display: none;
    }
    &__content-wrapper {
      max-width: none;
      padding-top: 72px;
      border-radius: 0;
    }
  }
  @media #{$sm} {
    &__content-wrapper {
      padding-top: 170px;
    }
  }
  @media #{$xs} {
    &__content-wrapper {
      padding-top: 60px;
    }
    &__close {
      top: 20px;
      right: 20px;
      width: 38px;
      height: 38px;
    }
  }
}
</style>
