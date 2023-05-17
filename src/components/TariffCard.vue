<template>
  <div class="tariff-card">
    <img
      v-if="best"
      src="@/assets/img/best-offer.svg"
      alt="Best"
      class="tariff-card__best-icon"
    />
    <div class="tariff-card__title">{{ title }}</div>
    <ul class="tariff-card__items">
      <li class="tariff-card__item" v-for="(item, index) in items" :key="index">
        {{ item }}
      </li>
    </ul>
    <div class="tariff-card__price-wrapper">
      <div class="tariff-card__price-main">${{ price.main }}</div>
      <div class="tariff-card__price-right">
        <div class="tariff-card__price-old">${{ price.old }}</div>
        <div class="tariff-card__price-time">/{{ price.time }}</div>
      </div>
    </div>
    <VButton fluid>Buy</VButton>
  </div>
</template>

<script>
import VButton from "@/components/VButton.vue";

export default {
	name: "FeedbackCard",
	components: {
		VButton,
	},
	props: {
		title: {
			type: String,
			required: true,
		},
		items: {
			type: Array,
			default: () => [],
		},
		price: {
			type: Object,
			default: () => ({}),
		},
		best: {
			type: Boolean,
			default: false,
		},
	},
};
</script>

<style lang="scss" scoped>
.tariff-card {
  position: relative;
  max-width: 386px;
  width: 100%;
  padding: 60px;
  background: #ffffff;
  border: 1px solid #e9ebec;
  border-radius: 80px;
  text-align: left;
  &__best-icon {
    position: absolute;
    top: -11px;
    right: -52px;
    z-index: 1;
  }
  &__title {
    margin-bottom: 40px;
    font-weight: 700;
    font-size: 40px;
    line-height: 110%;
  }
  &__items {
    height: 160px;
    list-style: disc;
    text-align: left;
    padding-left: 21px;
  }
  &__item {
    font-weight: 400;
    font-size: 20px;
    line-height: 150%;
    color: #9da3af;
  }
  &__price-wrapper {
    display: flex;
    align-items: center;
    margin-bottom: 40px;
  }
  &__price-main {
    font-weight: 700;
    font-size: 40px;
    line-height: 110%;
    color: #2a364d;
  }
  &__price-right {
    margin-left: 8px;
  }
  &__price-old {
    font-weight: 400;
    font-size: 16px;
    line-height: 120%;
    text-decoration-line: line-through;
    color: #f02d3a;
  }
  &__price-time {
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    color: #2a364d;
    opacity: 0.3;
  }
  @media #{$sm} {
    padding: 30px;
    &__best-icon {
      top: -12px;
      right: -13px;
      width: 71.18px;
      height: 71.18px;
    }
    &__title {
      font-size: 30px;
    }
    &__items {
      height: 150px;
    }
    &__item {
      font-size: 18px;
      line-height: 30px;
    }
  }
}
</style>
