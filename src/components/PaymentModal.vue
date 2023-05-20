<template>
  <modal
    class="payment-modal"
    name="payment-detail-modal"
    :height="$xs ? '95%' : '100%'"
    :width="$xs ? '100%' : '500px'"
    :shiftX="$xs ? 0.5 : 1"
    :shiftY="$xs ? 1 : 0.5"
  >
    <div class="payment-modal__container">
      <div class="payment-modal__title-block">
        <h4 class="payment-modal__title h4">Payment details</h4>
        <img
          src="@/assets/img/close-round-blue.svg"
          alt="close"
          class="payment-modal__close"
          @click="togglePaymentModal"
        >
      </div>
      <div class="payment-modal__method-block">
        <div class="payment-modal__method-title">Payment method</div>
        <div class="payment-modal__card-info">
          <div class="payment-modal__current-card">
            <div class="payment-modal__card-actions">
              <img src="@/assets/img/card-tick.svg" alt="card">
              <img src="@/assets/img/trash-small.svg" alt="trash">
            </div>
            <div class="payment-modal__card-number">8080 main</div>
          </div>
          <div class="payment-modal__add-card">
            <img src="@/assets/img/card-add.svg" alt="card">
            <div class="payment-modal__card-add-text">Add card</div>
          </div>
        </div>
      </div>
      <div class="payment-modal__subscription-block">
        <div class="payment-modal__top-block">
          <div class="payment-modal__method-title">Your subscription</div>
          <div class="payment-modal__date">Payment date: {{selectedSub?.start_date?.slice(0, 10)}}</div>
        </div>
        <div class="payment-modal__bottom-block">
          <img :src="selectedSub?.images[0]" class="payment-modal__app-image" v-if="selectedSub?.images">
          <div class="payment-modal__info-block">
            <div class="payment-modal__name">{{selectedSub?.name}}</div>
            <div class="payment-modal__description">{{selectedSub?.description}}</div>
          </div>
          <div class="payment-modal__price-block">
            <div class="payment-modal__price">{{selectedSub?.extra?.price}} $</div>
            <div class="payment-modal__year">{{selectedSub?.extra?.interval}}</div>
          </div>
        </div>
      </div>
      <VButton class="payment-modal__unsubscribe" theme="outline">Unsubscribe</VButton>
    </div>
  </modal>
</template>

<script>
import VButton from '@/components/VButton';

export default {
  props: {
    selectedSub: {
      type: Object,
      default: () => ({})
    }
  },
	components: {
		VButton
	},
	computed: {
		$xs () {
			return window.innerWidth <= 360;
		}
	},
	methods: {
		togglePaymentModal () {
			this.$modal.toggle('payment-detail-modal');
		}
	}
};
</script>

<style lang="scss">
.payment-modal {
  &__container {
    height: 100%;
    padding: 45px 30px 30px;
    background: $ghost-white;
    border-left: 1px solid $gray-white;
    color: $dark-blue;
    position: relative;
    @media #{$xs} {
      padding: 20px;
    }
  }

  &__title-block {
    display: flex;
    justify-content: space-between;
    margin-bottom: 36px;
    @media #{$xs} {
      margin-bottom: 10px;
    }
  }

  &__close {
    cursor: pointer;
  }

  &__method-block {
    border: 1px solid $gray-white;
    border-radius: 20px;
    background: $white;
    padding: 15px;
  }

  &__method-title {
    font-weight: 600;
    font-size: 16px;
    margin-bottom: 10px;
    @media #{$xs} {
      font-size: 15px;
    }
  }

  &__card-info {
    display: flex;
  }

  &__current-card {
    width: 142px;
    height: 79px;
    border-radius: 10px;
    background: $ghost-white;
    margin-right: 10px;
    padding: 10px;
  }

  &__card-actions {
    display: flex;
    justify-content: space-between;
    margin-bottom: 17px;

    img:last-child {
      cursor: pointer;
    }
  }

  &__card-number {
    font-weight: 400;
    font-size: 15px;
    color: $cool-gray;
  }

  &__add-card {
    width: 102px;
    height: 79px;
    border-radius: 10px;
    background: $ghost-white;
    padding: 15px 20px;
    cursor: pointer;
    text-align: center;
  }

  &__card-add-text {
    color: $blue-link;
    font-size: 15px;
    font-weight: 400;
    margin-top: 8px;
  }

  &__subscription-block {
    border: 1px solid $gray-white;
    border-radius: 20px;
    background: $white;
    padding: 20px 15px;
    margin-top: 20px;
    @media #{$xs} {
      margin-top: 15px;
    }
  }

  &__top-block {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid $gray-white;
    margin-bottom: 20px;
    @media #{$xs} {
      display: block;
      padding-bottom: 10px;
    }
  }

  &__date {
    font-weight: 400;
    font-size: 13px;
    color: $cool-gray;
    @media #{$xs} {
      font-size: 12px;
      margin-top: -5px;
    }
  }

  &__bottom-block {
    display: flex;
    align-items: center;
  }

  &__app-image {
    width: 60px;
    height: 60px;
    border-radius: 10px;
    margin-right: 10px;
    @media #{$xs} {
      width: 40px;
      height: 40px;
      border-radius: 5px;
    }
  }

  &__info-block {
    width: 67%;
  }

  &__name {
    font-weight: 400;
    font-size: 20px;
    margin-bottom: 8px;
    overflow: hidden;
    @media #{$xs} {
      font-size: 14px;
      margin-bottom: 5px;
    }
  }

  &__description {
    font-weight: 400;
    font-size: 16px;
    color: $cool-gray;
    @media #{$xs} {
      font-size: 12px;
    }
  }

  &__price {
    font-weight: 400;
    font-size: 20px;
    margin-bottom: 8px;
    white-space: nowrap;
    @media #{$xs} {
      font-size: 14px;
      margin-bottom: 5px;
    }
  }

  &__year {
    font-weight: 400;
    font-size: 16px;
    color: $cool-gray;
    text-align: right;
    @media #{$xs} {
      font-size: 12px;
    }
  }

  &__unsubscribe {
    font-weight: 400;
    font-size: 15px;
    width: 106px;
    position: absolute;
    bottom: 30px;
    right: 30px;
    text-transform: capitalize;
    @media #{$xs} {
      bottom: 20px;
      right: 20px;
    }
  }

  .vm--modal {
    @media #{$xs} {
      border-radius: 20px 20px 0 0;
    }
  }
}
</style>
