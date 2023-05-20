<template>
  <Default>
    <div class="cabinet" :class="{'has-sub': hasSub}">
      <div class="cabinet__container space-container">
        <Breadcrumbs :items="links"/>
        <h3 class="cabinet__title h3">My account</h3>
        <div class="cabinet__account-info-wrapper">
          <div class="cabinet__profile-wrapper">
            <h4 class="cabinet__acc-info">Account Information</h4>
            <div class="cabinet__profile-info-block">
              <div class="cabinet__label-block">
                <div class="cabinet__label">First Name</div>
                <div class="cabinet__label-value" v-if="currentUser?.first_name && !isEditName">
                  {{ currentUser?.first_name }}
                  <img src="@/assets/img/pencil-edit.svg" alt="edit"
                       @click="onEditField('isEditName','first_name','firstName')">
                </div>
                <div class="cabinet__label-link" @click="onInputFocus('isEditName')" v-else>
                  <input
                    ref="isEditName"
                    type="text"
                    class="cabinet__label-input"
                    v-model="currentUser.firstName"
                    @blur="updateProfile('isEditName')"
                    v-if="isEditName"
                  >
                  <template v-else>
                    <span>Add Name</span>
                    <img src="@/assets/img/icons/add-circle-blue.svg">
                  </template>
                </div>
              </div>
              <div class="cabinet__label-block">
                <div class="cabinet__label">Last Name</div>
                <div class="cabinet__label-value" v-if="currentUser?.last_name && !isEditLastName">
                  {{ currentUser?.last_name }}
                  <img src="@/assets/img/pencil-edit.svg" alt="edit"
                       @click="onEditField('isEditLastName','last_name','lastName')">
                </div>
                <div class="cabinet__label-link" @click="onInputFocus('isEditLastName')" v-else>
                  <input
                    ref="isEditLastName"
                    type="text"
                    class="cabinet__label-input"
                    v-model="currentUser.lastName"
                    @blur="updateProfile('isEditLastName')"
                    v-if="isEditLastName"
                  >
                  <template v-else>
                    <span>Add Last Name</span>
                    <img src="@/assets/img/icons/add-circle-blue.svg">
                  </template>
                </div>
              </div>
              <div class="cabinet__label-block">
                <div class="cabinet__label">Email</div>
                <div class="cabinet__label-value">{{ currentUser?.email }}</div>
              </div>
              <div class="cabinet__label-block">
                <div class="cabinet__label">Mobile</div>
                <div class="cabinet__label-value" v-if="currentUser?.phone && !isEditPhone">
                  {{ currentUser?.phone }}
                  <img src="@/assets/img/pencil-edit.svg" alt="edit"
                       @click="onEditField('isEditPhone','phone','phone')">
                </div>
                <div class="cabinet__label-link" @click="onInputFocus('isEditPhone')" v-else>
                  <input
                    ref="isEditPhone"
                    type="text"
                    class="cabinet__label-input"
                    v-model="currentUser.phone"
                    @blur="updateProfile('isEditPhone')"
                    v-if="isEditPhone"
                  >
                  <template v-else>
                    <span>Add Mobile</span>
                    <img src="@/assets/img/icons/add-circle-blue.svg">
                  </template>
                </div>
              </div>
              <div class="cabinet__label-block">
                <div class="cabinet__label">Linked</div>
                <div class="cabinet__label-value"></div>
              </div>
            </div>
          </div>
          <template v-if="hasSub">
            <div class="cabinet__profile-wrapper" v-for="(sub, i) in activeSubscriptions" :key="i">
              <h4 class="cabinet__acc-info">Subscription Details</h4>
              <div class="cabinet__profile-info-block">
                <div class="cabinet__label-block">
                  <div class="cabinet__label">Plan</div>
                  <div class="cabinet__label-value">{{sub?.extra?.interval}}</div>
                </div>
                <div class="cabinet__label-block">
                  <div class="cabinet__label">Price</div>
                  <div class="cabinet__label-value">{{sub?.extra?.price}} $</div>
                </div>
                <div class="cabinet__label-block">
                  <div class="cabinet__label">Payment date</div>
                  <div class="cabinet__label-value">{{sub?.start_date?.slice(0, 10)}}</div>
                </div>
                <div class="cabinet__label-block">
                  <VButton class="cabinet__details-btn" theme="tertiary" @click="openPaymentModal(sub)">Details</VButton>
                </div>
              </div>
            </div>
          </template>
          <div class="cabinet__profile-wrapper" v-else>
            <h4 class="cabinet__acc-info">Subscription Details</h4>
            <div class="cabinet__no-sub">
              <div class="cabinet__no-sub-text">No subscription found</div>
              <VButton class="cabinet__no-sub-btn" theme="tertiary" @click="goToShop">Start Free Trial</VButton>
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
      <PaymentModal :selectedSub="selectedSub" ref="paymentDetail"/>
    </div>
  </Default>
</template>

<script>
import VButton from '@/components/VButton';
import Breadcrumbs from '@/components/Breadcrumbs';
import PaymentModal from '@/components/PaymentModal';
import SubscriptionApi from '@/api/subscription.api';
import AccountApi from '@/api/account.api';
import Default from '@/layouts/default.vue';
import {mapState} from 'vuex';

export default {
	components: {
		VButton,
		Breadcrumbs,
		PaymentModal,
		Default
	},
	data () {
		return {
			links: [
				{
					name: 'Home',
					route: '/'
				},
				{
					name: 'My account',
					route: '/cabinet'
				}
			],
			currentUser: {},
      selectedSub: {},
			subscriptions: [],
      activeSubscriptions: [],
			stripeProducts: [],
			hasSub: false,
			isEditName: false,
			isEditLastName: false,
			isEditPhone: false,
		};
	},
	computed: {
	  ...mapState('auth', ['user'])
	},
	watch: {
	  user(updatedUser) {
	    this.currentUser = updatedUser;
		}
	},
	async mounted () {
	  if (!Object.values(this.user).length) {
	    await this.$store.dispatch('auth/getCurrentUser');
		}
		await this.getSubscriptions();
		await this.getStripeProducts();
	},
	methods: {
		openPaymentModal(sub) {
		  this.selectedSub = sub;
			this.$refs.paymentDetail.togglePaymentModal();
		},
		async getSubscriptions () {
			try {
			  let subs = [];
				await this.$store.dispatch('loader/setLoader', true);
				subs = await SubscriptionApi.fetchSubscriptions();
				// subs = subs.map((sub) => ({...sub, state: 'active'})); // TEMP
				this.subscriptions = subs.filter((item) => item.state === 'active');
				this.hasSub = this.subscriptions.length;
				await this.$store.dispatch('loader/setLoader', false);
			} catch (err) {
				alert(err);
				await this.$store.dispatch('loader/setLoader', false);
			}
		},
		async getStripeProducts() {
		  try {
				await this.$store.dispatch('loader/setLoader', true);
				this.stripeProducts = await SubscriptionApi.fetchStripeProducts();
				if (this.hasSub) {
          this.activeSubscriptions = this.subscriptions.filter(item1 => this.stripeProducts.some(item2 => item1.product_sku === item2.id))
            .map((item1) => {
              const matchingItem = this.stripeProducts.find(item2 => item2.id === item1.product_sku);
              return {...item1, ...matchingItem};
            });
        }
        await this.$store.dispatch('loader/setLoader', false);
			} catch (err) {
				alert(err);
				await this.$store.dispatch('loader/setLoader', false);
			}
		},
		async updateProfile (isEditMode) {
			try {
				await this.$store.dispatch('loader/setLoader', true);
				await AccountApi.updateCurrentUser(this.currentUser);
				await this.$store.dispatch('auth/getCurrentUser');
				this[isEditMode] = false;
				await this.$store.dispatch('loader/setLoader', false);
			} catch (err) {
				alert(err);
				await this.$store.dispatch('loader/setLoader', false);
			}
		},
		onEditField (isEdit, value, input) {
			this[isEdit] = true;
			this.currentUser[input] = this.currentUser[value];
			this.onInputFocus(isEdit);
		},
		onInputFocus (inputField) {
			this[inputField] = true;
			this.$nextTick(() => {
				this.$refs[inputField].focus();
			});
		},
		goToShop () {
			this.$router.push('/shop');
		}
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
    display: flex;
    align-items: center;
    height: 20px;

    img {
      margin-left: 10px;
      cursor: pointer;
    }
  }

  &__label-link {
    font-size: 14px;
    color: $blue-link;
    font-weight: 400;
    cursor: pointer;
    display: flex;
    align-items: center;
    height: 20px;

    img {
      margin-left: 10px;
    }
  }

  &__label-input {
    max-width: 110px;
    border: none;
    border-bottom: 1px solid $cool-gray;
    outline: none;
    color: $dark-blue;
    font-size: 14px;
    font-weight: 400;
    margin-top: -1px;
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
    background: $light-green url("~@/assets/img/activities.svg") no-repeat;
    background-position: -45% 153%;
    background-size: 70%;
    @media #{$sm} {
      width: calc(100% - 40px);
      background-position: -43% 115%;
    }
    @media #{$xs} {
      display: block;
      margin: 30px auto 0;
      border-radius: 50px;
      height: auto;
      padding: 60px 40px;
      background-position: -10px 105%;
      background-size: 100%;
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
