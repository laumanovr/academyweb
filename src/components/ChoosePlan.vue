<template>
  <div class="choose-plan container">
    <h2 class="choose-plan__title h2">
      Choose your plan and start 7-Days <span>free trial</span>
    </h2>
    <div class="choose-plan__items">
      <TariffCard
        class="choose-plan__item"
        v-for="tariff in $options.tariffs"
        :key="tariff.id"
        :title="tariff.title"
        :items="tariff.items"
        :price="tariff.price"
        :best="tariff.best"
      />
    </div>
  </div>
</template>

<script>
import TariffCard from "@/components/TariffCard.vue";

export default {
	tariffs: [
		{
			id: 1,
			title: "Monthly plan",
			items: ["Unlimited access", "Cancel any time"],
			price: {
				main: "6.99",
				old: "9.99",
				time: "month",
			},
		},
		{
			id: 2,
			title: "Annual plan",
			items: ["Big savings", "Unlimited access", "Cancel any time"],
			price: {
				main: "49.99",
				old: "69.99",
				time: "year",
			},
			best: true,
		},
	],
	components: {
		TariffCard,
	},
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
