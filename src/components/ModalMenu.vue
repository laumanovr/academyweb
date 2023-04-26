<template>
  <div class="modal-menu" :class="{ 'modal-menu_visible': visible }">
    <img
      src="@/assets/img/close-round-transparent.svg"
      class="modal-menu__close"
      @click="$emit('close')"
    />
    <div class="modal-menu__logo">
      <img src="@/assets/img/icons/logo.svg" />
    </div>
    <div class="modal-menu__items">
      <div class="modal-menu__title">Menu</div>
      <a href="#" class="modal-menu__link">Shop</a>
      <a href="#" class="modal-menu__link">About us</a>
      <a href="#" class="modal-menu__link">Contacts</a>
      <img src="@/assets/img/rocket.svg" class="modal-menu__rocket" />
      <img src="@/assets/img/earth.svg" class="modal-menu__earth" />
    </div>
  </div>
</template>

<script>
export default {
	props: {
		visible: {
			type: Boolean,
			default: false,
		},
	},
};
</script>

<style lang="scss" scoped>
.modal-menu {
  display: none;
  background: $dark-blue;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 999;

  &_visible {
    display: block;
  }

  &__close {
    margin: 35px 0 0 20px;
    cursor: pointer;
  }

  &__items {
    text-align: center;
  }

  &__logo {
    text-align: center;
    margin-bottom: 80px;

    img {
      width: 250px;
      height: 90px;
    }
  }

  &__title {
    font-weight: 400;
    font-size: 20px;
    line-height: 32px;
    color: $cool-gray;
  }

  &__link {
    font-weight: 700;
    font-size: 40px;
    line-height: 110%;
    text-decoration: none;
    color: $ghost-white;
    display: block;
    margin-top: 40px;
  }

  &__rocket {
    margin-top: 95px;
  }

  &__earth {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 115px;
    margin: 40px auto 0;
  }

  @media #{$xs} {
    &__close {
      margin: 0;
      position: absolute;
      top: 20px;
      left: 20px;
    }
    &__logo {
      margin: 27px 0 52px;

      img {
        width: 84px;
        height: 30px;
      }
    }
    &__link {
      font-size: 27px;
      margin-top: 35px;
    }
    &__rocket {
      margin-top: 65px;
      width: 45px;
      height: 50px;
    }
  }
}
</style>
