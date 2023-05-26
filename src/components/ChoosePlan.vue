<template>
  <div class="choose-plan container">
    <h2 class="choose-plan__title h2">
      Choose your plan and start 7-Days <span>free trial</span>
    </h2>
    <div class="choose-plan__items">
      <TariffCard
        class="choose-plan__item"
        v-for="tariff in tariffPrices"
        :key="tariff.id"
        :tariff="tariff"
      />
    </div>
  </div>
</template>

<script>
import TariffCard from "@/components/TariffCard.vue";
import Subscription from '@/api/subscription';

export default {
	components: {
		TariffCard,
	},
	data() {
		return {
			tariffPrices: [],
			yearItems: ["Big savings", "Unlimited access", "Cancel any time"],
			monthItems: ["Unlimited access", "Cancel any time"]
		};
	},
	mounted () {
		this.getStripeProducts();
	},
	methods: {
		async getStripeProducts() {
			try {
				await this.$store.dispatch('loader/setLoader', true);
				const products = await Subscription.fetchStripeProducts();
				this.tariffPrices = products[0]?.prices.map((priceObj) => {
					const yearly = priceObj?.recurring?.interval === 'year';
					priceObj.title = yearly ? 'Annual plan' : 'Monthly plan';
					priceObj.textItems = yearly ? this.yearItems : this.monthItems;
					priceObj.bestOffer = yearly;
					return priceObj;
				});
				await this.$store.dispatch('loader/setLoader', false);
			} catch (err) {
				alert(err);
				await this.$store.dispatch('loader/setLoader', false);
			}
		}
	}
};
</script>

<style lang="scss" scoped>
.choose-plan {
  text-align: center;
  &__title {
    position: relative;
    margin-bottom: 50px;
    color: $dark-blue;
    span {
      display: block;
      color: $lime-green;
    }
    &::after {
      content: "";
      position: absolute;
      bottom: -29px;
      left: 50%;
      transform: translateX(-50%);
      display: block;
      flex-shrink: 0;
      width: 317.39px;
      height: 40.73px;
      background-image: url("~@/assets/img/tariff-line.svg");
      background-repeat: no-repeat;
      background-position: 50%;
      background-size: contain;
      display: inline-block;
    }
  }
  &__items {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__item {
    margin-right: 20px;
    &:last-child {
      margin-right: 0;
    }
  }
  @media (max-width: 920px) {
    &__items {
      flex-direction: column;
    }
    &__item {
      margin-right: 0;
      margin-bottom: 20px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>
