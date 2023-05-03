<template>
  <div class="cabinet" :class="{'has-sub': hasSub}">
    <div class="cabinet__container space-container">
      <Breadcrumbs :items="links"/>
      <h3 class="cabinet__title h3">My account</h3>
      <div class="cabinet__account-info-wrapper">
        <div class="cabinet__profile-wrapper">
          <h4 class="cabinet__acc-info">Account Information</h4>
          <div class="cabinet__profile-info-block">
            <div class="cabinet__label-block">
              <div class="cabinet__label">Name</div>
              <div class="cabinet__label-value">Alice</div>
            </div>
            <div class="cabinet__label-block">
              <div class="cabinet__label">Email</div>
              <div class="cabinet__label-value">alice@bimiboo.com</div>
            </div>
            <div class="cabinet__label-block">
              <div class="cabinet__label">Mobile</div>
              <div class="cabinet__label-link">
                <span>Add mobile</span>
                <img src="@/assets/img/icons/add-circle-blue.svg">
              </div>
            </div>
            <div class="cabinet__label-block">
              <div class="cabinet__label">Linked</div>
              <div class="cabinet__label-value">999</div>
            </div>
          </div>
        </div>
        <div class="cabinet__profile-wrapper">
          <h4 class="cabinet__acc-info">Subscription Details</h4>
          <div class="cabinet__profile-info-block" v-if="hasSub">
            <div class="cabinet__label-block">
              <div class="cabinet__label">Plan</div>
              <div class="cabinet__label-value">Annual plan</div>
            </div>
            <div class="cabinet__label-block">
              <div class="cabinet__label">Price</div>
              <div class="cabinet__label-value">59.99 $</div>
            </div>
            <div class="cabinet__label-block">
              <div class="cabinet__label">Payment date</div>
              <div class="cabinet__label-value">October 24</div>
            </div>
            <div class="cabinet__label-block">
              <VButton class="cabinet__details-btn" theme="tertiary">Details</VButton>
            </div>
          </div>
          <div class="cabinet__no-sub" v-else>
            <div class="cabinet__no-sub-text">No subscription found</div>
            <VButton class="cabinet__no-sub-btn" theme="tertiary">Start Free Trial</VButton>
          </div>
        </div>
      </div>
    </div>
    <div class="cabinet__apps" v-if="hasSub">
      <h3 class="cabinet__apps-title h3"><span>Academy</span> in the AppStore Google Play and Amazon appstore</h3>
      <div class="cabinet__apps-links">
        <a href="#" class="cabinet__apps-icon"><img src="@/assets/img/store/app-store.svg"></a>
        <a href="#" class="cabinet__apps-icon"><img src="@/assets/img/store/google-play.svg"></a>
        <a href="#" class="cabinet__apps-icon"><img src="@/assets/img/store/amazon.svg"></a>
      </div>
    </div>
    <div class="cabinet__plan" v-else>
      <div class="cabinet__plan-image-wrapper">
        <img src="@/assets/img/heroes/bimi.svg" class="cabinet__plan-image-hero">
        <img src="@/assets/img/earth.svg" class="cabinet__plan-image-earth">
      </div>
      <div class="cabinet__plan-text-wrapper">
        <div class="cabinet__plan-trial-block">
          <h2 class="cabinet__plan-description h2">Choose your plan and start <span>7-Days free trial</span></h2>
          <VButton class="cabinet__plan-btn">Start free trial</VButton>
        </div>
        <img src="@/assets/img/union-heart.svg" class="cabinet__plan-heart-icon">
      </div>
    </div>
  </div>
</template>

<script>
import VButton from '@/components/VButton';
import Breadcrumbs from '@/components/Breadcrumbs';

export default {
	components: {
		VButton,
		Breadcrumbs
	},
	data () {
		return {
			hasSub: true,
			links: [
				{
					name: 'Home',
					route: '/'
				},
				{
					name: 'My account',
					route: '/cabinet'
				}
			]
		};
	}
};
</script>

<style lang="scss">
.cabinet {
  background: $ghost-white;
  margin-bottom: -100px;

  &.has-sub {
    padding-bottom: 240px;
    @media #{$sm} {
      padding-bottom: 200px;
    }
    @media #{$xs} {
      padding-bottom: 180px;
    }
  }

  @media #{$sm} {
    padding-top: 20px;
  }

  &__container {
    color: $dark-blue;
  }

  &__title {
    padding: 40px 0;
    @media #{$sm} {
      padding: 20px 0 40px;
    }
    @media #{$xs} {
      padding: 20px 0;
    }
  }

  &__account-info-wrapper {
    background: #fff;
    padding: 90px 60px;
    border: 1px solid $gray-white;
    border-radius: 80px;
    @media #{$sm} {
      border-radius: 50px;
      padding: 40px 20px;
    }
  }

  &__profile-wrapper {
    display: flex;
    @media #{$xs} {
      display: block;
    }

    &:not(:first-child) {
      border-top: 1px solid $gray-white;
      padding-top: 50px;
      margin-top: 50px;
      @media #{$xs} {
        padding-top: 30px;
        margin-top: 40px;
      }
    }
  }

  &__acc-info {
    margin-right: 160px;
    white-space: nowrap;
    @media #{$lg} {
      margin: 0;
      width: 50%;
    }
    @media #{$xs} {
      width: auto;
      margin: 0 0 20px 0;
    }
  }

  &__profile-info-block {
    display: flex;
    justify-content: space-between;
    width: 100%;
    @media #{$lg} {
      display: block;
      width: 50%;
    }
    @media #{$xs} {
      width: auto;
    }
  }

  &__label-block {
    &:not(:last-child) {
      @media #{$lg} {
        margin-bottom: 30px;
      }
    }
  }

  &__label {
    color: $cool-gray;
    font-size: 15px;
    font-weight: 400;
    margin-bottom: 5px;
  }

  &__label-value {
    font-size: 16px;
    font-weight: 400;
  }

  &__label-link {
    font-size: 15px;
    color: $blue-link;
    font-weight: 400;
    cursor: pointer;
    display: flex;
    align-items: center;

    img {
      margin-left: 10px;
    }
  }

  &__details-btn {
    width: 115px;
    height: 35px;
    font-weight: 400;
    font-size: 15px;
    @media #{$lg} {
      width: 128px;
    }
    @media #{$xs} {
      width: 100%;
    }
  }

  &__no-sub-text {
    font-size: 20px;
    font-weight: 400;
    color: $system-error;
    margin-bottom: 11px;
    @media #{$xs} {
      font-size: 18px;
    }
  }

  &__no-sub-btn {
    font-weight: 400;
    font-size: 15px;
    width: 160px;
    height: 35px;
  }

  &__plan {
    background: $champagne;
    border-radius: 80px 80px 0 0;
    display: flex;
    margin-top: 140px;
    padding: 70px 0 100px;
    color: $dark-blue;
    @media #{$sm} {
      justify-content: center;
      margin-top: 100px;
      padding: 70px 0 180px;
    }
    @media #{$xs} {
      padding: 70px 0 200px;
    }
  }

  &__plan-image-wrapper {
    position: relative;
    margin: 0 55px 0 155px;
    width: 320px;
    height: 330px;
    @media #{$lg} {
      margin: 0 100px;
      min-width: 310px;
      height: 355px;
    }
    @media #{$sm} {
      display: none;
    }
  }

  &__plan-image-hero {
    width: 180px;
    height: 300px;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 9;
  }

  &__plan-image-earth {
    width: 100%;
    height: 90px;
    position: absolute;
    bottom: 0;
  }

  &__plan-text-wrapper {
    display: flex;
    position: relative;
    @media #{$xs} {
      width: 100%;
    }
  }

  &__plan-trial-block {
    max-width: 528px;
    padding-top: 50px;
    @media #{$lg} {
      max-width: 415px;
      padding-top: 88px;
    }
    @media #{$sm} {
      max-width: 520px;
      padding-top: 94px;
    }
    @media #{$xs} {
      padding-top: 80px;
      max-width: 100%;
      width: 100%;
    }
  }

  &__plan-description {
    @media #{$sm} {
      text-align: center;
    }
    @media #{$xs} {
      max-width: 250px;
      margin: 0 auto;
    }

    span {
      color: $lime-green;
    }
  }

  &__plan-btn {
    width: 240px;
    height: 65px;
    margin-top: 40px;
    @media #{$sm} {
      margin: 40px auto 0;
    }
    @media #{$xs} {
      margin: 50px auto 0;
      width: calc(100% - 40px);
    }
  }

  &__plan-heart-icon {
    width: 137px;
    height: 104px;
    position: absolute;
    top: -35px;
    right: -125px;
    @media #{$lg} {
      top: -30px;
      right: -8px;
    }
    @media #{$sm} {
      right: auto;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  &__apps {
    border-radius: 80px;
    border: 1px solid $gray-white;
    padding: 60px;
    width: 793px;
    height: 320px;
    margin: 40px auto 0;
    display: flex;
    justify-content: space-between;
    color: $dark-blue;
    background: $light-green url("~@/assets/img/activities.svg") no-repeat -45% 153% / 70%;
    @media #{$sm} {
      width: calc(100% - 40px);
      background: $light-green url("~@/assets/img/activities.svg") no-repeat -43% 115% / 70%;
    }
    @media #{$xs} {
      display: block;
      margin: 30px auto 0;
      border-radius: 50px;
      height: auto;
      padding: 60px 40px;
      background: $light-green url("~@/assets/img/activities.svg") no-repeat -10px 105% / 100%;
    }
  }

  &__apps-title {
    max-width: 325px;
    @media #{$sm} {
      font-size: 20px;
      line-height: 25px;
    }
    @media #{$xs} {
      text-align: center;
      max-width: 210px;
      margin: 0 auto 50px;
    }

    span {
      color: $lime-green;
    }
  }

  &__apps-links {
    text-align: right;
    @media #{$xs} {
      text-align: center;
    }
  }

  &__apps-icon {
    display: inline-block;

    &:not(:last-child) {
      margin-bottom: 8px;
      @media #{$xs} {
        margin-bottom: 18px;
      }
    }
  }
}
</style>
