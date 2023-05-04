<template>
  <div class="join-club">
    <h2 class="join-club__title h2">Join the <span>Club!</span></h2>
    <div class="join-club__form-block">
      <img src="@/assets/img/union-heart.svg" class="join-club__image" />
      <div class="join-club__text">
        We already have 7000 subscribers, don't miss the best offers, fresh
        episodes and new products from Bimi Boo.
      </div>
      <div class="join-club__input-block">
        <input type="text" class="join-club__input" placeholder="Your email" />
        <VButton class="join-club__btn">Join now!</VButton>
      </div>
    </div>
  </div>
</template>

<script>
import VButton from "@/components/VButton";
export default {
	components: {
		VButton,
	},
};
</script>

<style lang="scss">
.join-club {
  border-radius: 80px 80px 0 0;
  padding: 80px 120px 180px;
  background: $champagne;
  display: flex;
  align-items: flex-start;
  color: $dark-blue;
  @media #{$lg} {
    padding: 80px 40px 200px;
    justify-content: space-between;
  }
  @media #{$sm} {
    padding: 80px 23px 180px;
    flex-wrap: wrap;
    justify-content: center;
  }

  &__title {
    white-space: nowrap;
    margin-right: 160px;
    @media #{$lg} {
      margin: 0;
    }
    span {
      color: $lime-green;
    }
  }
  &__form-block {
    max-width: 633px;
    font-weight: 600;
    font-size: 28px;
    line-height: 38px;
    position: relative;
    @media #{$lg} {
      max-width: 460px;
    }
    @media #{$sm} {
      max-width: 100%;
    }
  }
  &__text {
    font-size: 28px;
    line-height: 38px;
    font-weight: 600;
    margin-bottom: 40px;
    @media #{$sm} {
      margin: 40px 0;
      text-align: center;
    }
    @media #{$xs} {
      margin: 50px 0;
    }
  }
  &__input-block {
    width: 530px;
    position: relative;
    @media #{$lg} {
      width: 460px;
    }
    @media #{$sm} {
      width: 100%;
    }
  }
  &__input {
    width: 100%;
    height: 73px;
    border: 1px solid $gray-white;
    border-radius: 200px;
    padding: 0 165px 0 32px;
    outline: none;
    @media #{$xs} {
      height: 58px;
    }
  }
  &__btn {
    position: absolute;
    top: 50%;
    right: 4px;
    transform: translateY(-50%);
    @media #{$xs} {
      width: 125px;
      height: 50px;
      white-space: nowrap;
    }
  }
  &__image {
    width: 137px;
    height: 104px;
    position: absolute;
    top: -65px;
    right: -110px;
    @media #{$lg} {
      width: 83px;
      height: 68px;
      top: -70px;
      right: 0;
    }
    @media #{$sm} {
      display: none;
    }
  }
}
</style>
