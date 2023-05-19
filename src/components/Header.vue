<template>
  <div class="header">
    <SignupNotification />
    <div class="container">
      <div class="header__content">
        <img
          src="@/assets/img/menu.svg"
          class="header__menu"
          @click="isShowMenu = true"
        />
        <div class="header__pages">
          <router-link to="/shop" class="header__link">Shop</router-link>
          <router-link to="/about" class="header__link">About us</router-link>
          <router-link to="/contacts" class="header__link">Contacts</router-link>
        </div>
        <router-link to="/">
          <img src="@/assets/img/icons/logo.svg" class="header__logo" />
        </router-link>
        <div class="header__login-block">
          <span class="header__login">Log in</span>
          <VButton theme="secondary" @click="$router.push('/registration')">Try for free</VButton>
        </div>
      </div>
    </div>
    <!--MENU WINDOW-->
    <ModalMenu :visible="isShowMenu" @close="isShowMenu = false" />
  </div>
</template>

<script>
import VButton from "@/components/VButton.vue";
import SignupNotification from "@/components/SignupNotification.vue";
import ModalMenu from "@/components/ModalMenu.vue";

export default {
	components: {
		VButton,
		SignupNotification,
		ModalMenu,
	},
	data() {
		return {
			isShowMenu: false,
		};
	},
};
</script>

<style lang="scss">
.header {
  border-bottom: 1px solid $gray-white;

  &__content {
    display: flex;
    justify-content: space-between;
    height: 92px;
    align-items: center;
  }

  &__menu {
    display: none;
    cursor: pointer;
  }

  &__link {
    font-weight: 400;
    font-size: 15px;
    line-height: 25px;
    color: $dark-blue;
    text-decoration: none;
    margin-right: 40px;
    &:last-child {
      margin-right: 0;
    }
    &.router-link-exact-active {
      color: $lime-green;
    }
  }

  &__logo {
    width: 132px;
    height: 48px;
  }

  &__login-block {
    display: flex;
    align-items: center;
  }

  &__login {
    font-weight: 400;
    font-size: 15px;
    line-height: 25px;
    color: $dark-blue;
    margin-right: 40px;
    cursor: pointer;
  }

  @media (max-width: 675px) {
    &__link {
      margin-right: 20px;
      font-size: 13px;
    }
  }

  @media #{$sm} {
    &__logo {
      width: 110px;
      height: 40px;
    }
    &__pages {
      display: none;
    }
    &__menu {
      display: block;
      margin-right: 20px;
    }
    &__content {
      position: relative;
      justify-content: unset;
    }
    &__login-block {
      position: absolute;
      right: 0;
    }
  }
  @media (max-width: 430px) {
    &__login {
      display: none;
    }
  }
  @media #{$xs} {
    &__logo {
      width: 82px;
      height: 30px;
    }
    &__menu {
      margin-right: 15px;
    }
    &__content {
      height: 64px;
    }
  }
}
</style>
