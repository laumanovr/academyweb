<template>
  <div class="header">
    <div class="header__top">
      <div class="space-container">
        <div class="header__signup">
          <img :src="require('../../src/assets/img/panda.svg')" class="header__signup-icon" />
          <div class="header__signup-text"><b>Sign up</b> to avail <b>10% OFF</b> on all subscription plans</div>
          <button type="button" class="header__signup-btn">Sign up</button>
          <img :src="require('../../src/assets/img/close.svg')" class="header__close" />
        </div>
      </div>
    </div>
    <div class="space-container">
      <div class="header__content">
        <img :src="require('../../src/assets/img/menu.svg')" class="header__menu" @click="isShowMenu=true" />
        <div class="header__pages">
          <a href="#" class="header__link">Shop</a>
          <a href="#" class="header__link">About us</a>
          <a href="#" class="header__link">Contacts</a>
        </div>
        <img :src="require('../../src/assets/img/logo.svg')" class="header__logo" />
        <div class="header__login-block">
          <span class="header__login">Log in</span>
          <button type="button" class="header__try">Try for free</button>
        </div>
      </div>
    </div>
    <!--MENU WINDOW-->
    <div class="header__window-menu" :class="{'header__window-menu--show': isShowMenu}">
      <img :src="require('../../src/assets/img/close-round-transparent.svg')" class="header__window-close" @click="isShowMenu=false">
      <div class="header__window-logo">
        <img :src="require('../../src/assets/img/logo.svg')">
      </div>
      <div class="header__window-items">
        <div class="header__window-title">Menu</div>
        <a href="#" class="header__window-link">Shop</a>
        <a href="#" class="header__window-link">About us</a>
        <a href="#" class="header__window-link">Contacts</a>
        <img :src="require('../../src/assets/img/rocket.svg')" class="header__window-rocket">
        <img :src="require('../../src/assets/img/earth.svg')" class="header__window-earth">
      </div>
    </div>
  </div>
</template>

<script>
export default {
	data() {
		return {
			isShowMenu: false
		};
	}
};
</script>

<style lang="scss">
@import "../assets/styles/vars";

.header {
  border-bottom: 1px solid $gray-white;

  &__top {
    background: $champagne;
    height: 45px;
  }

  &__signup {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 100%;
    @media #{$sm} {
      justify-content: unset;
    }
  }

  &__signup-icon {
    position: relative;
    top: 2px;
    @media #{$xs} {
      left: -10px;
    }
  }

  &__signup-text {
    margin: 0 35px;
    color: $dark-blue;
    font-size: 16px;
    @media #{$sm} {
      margin: 0 10px 0 13px;
    }
    @media #{$xs} {
      margin: 0;
      font-weight: 600;
      font-size: 13px;
      max-width: 155px;
    }
  }

  &__signup-btn {
    font-weight: 400;
    font-size: 15px;
    color: $dark-blue;
    background: transparent;
    width: 112px;
    height: 35px;
    padding: 5px 30px;
    border: 1px solid $dark-blue;
    border-radius: 50px;
    white-space: nowrap;
    cursor: pointer;
    @media #{$xs} {
      width: 92px;
      height: 30px;
      padding: 5px 20px;
      text-transform: uppercase;
      font-size: 13px;
    }
  }

  &__close {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    cursor: pointer;
    @media #{$xs} {
      right: -5px;
    }
  }

  &__content {
    display: flex;
    justify-content: space-between;
    height: 92px;
    align-items: center;
    @media #{$sm} {
      position: relative;
      justify-content: unset;
    }
    @media #{$xs} {
      height: 64px;
    }
  }

  &__menu {
    display: none;
    @media #{$sm} {
      display: block;
      margin-right: 20px;
    }
    @media #{$xs} {
      margin-right: 15px;
    }
  }

  &__pages {
    @media #{$sm} {
      display: none;
    }
  }

  &__link {
    font-size: 15px;
    font-weight: 400;
    color: $dark-blue;
    text-decoration: none;

    &:not(:last-child) {
      margin-right: 40px;
    }
  }

  &__logo {
    width: 132px;
    height: 48px;
    @media #{$sm} {
      width: 110px;
      height: 40px;
    }
    @media #{$xs} {
      width: 82px;
      height: 30px;
    }
  }

  &__login-block {
    @media #{$sm} {
      position: absolute;
      right: 0;
    }
  }

  &__login {
    font-size: 15px;
    font-weight: 400;
    color: $dark-blue;
    margin-right: 40px;
    cursor: pointer;
    @media #{$xs} {
      display: none;
    }
  }

  &__try {
    font-weight: 700;
    font-size: 16px;
    color: #fff;
    text-transform: uppercase;
    width: 170px;
    height: 55px;
    line-height: 55px;
    background: $dark-blue;
    border-radius: 50px;
    cursor: pointer;
    border: 0;
    @media #{$xs} {
      width: 128px;
      height: 42px;
      line-height: 42px;
      font-weight: 400;
      font-size: 13px;
    }
  }

  &__window-menu {
    display: none;
    background: $dark-blue;
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;

    &--show {
      display: block;
    }
  }

  &__window-close {
    margin: 35px 0 0 20px;
    @media #{$xs} {
      margin: 0;
      position: absolute;
      top: 20px;
      left: 20px;
    }
  }

  &__window-items {
    text-align: center;
  }

  &__window-logo {
    text-align: center;
    margin-bottom: 80px;
    @media #{$xs} {
      margin: 27px 0 52px;
    }

    img {
      width: 250px;
      height: 90px;
      @media #{$xs} {
        width: 84px;
        height: 30px;
      }
    }
  }

  &__window-title {
    font-weight: 400;
    font-size: 20px;
    color: $cool-gray;
  }

  &__window-link {
    font-weight: 700;
    font-size: 40px;
    text-decoration: none;
    color: $ghost-white;
    display: block;
    margin-top: 40px;
    @media #{$xs} {
      font-size: 27px;
      margin-top: 35px;
    }
  }

  &__window-rocket {
    margin-top: 95px;
    @media #{$xs} {
      margin-top: 65px;
      width: 45px;
      height: 50px;
    }
  }

  &__window-earth {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 115px;
    margin: 40px auto 0;
  }
}
</style>
