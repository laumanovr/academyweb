<template>
  <div class="product-rating">
    <div v-for="el in 5" :key="el" class="product-rating__el-wrap">
      <div
        :class="[
          'product-rating__el',
          {
            'product-rating__el_active': count >= el,
          },
        ]"
      />
    </div>
  </div>
</template>

<script>
export default {
	name: "ProductRating",
	props: {
		count: {
			type: Number,
			default: 0,
		},
	},
};
</script>

<style lang="scss" scoped>
.product-rating {
  display: flex;
  width: fit-content;
  &__el-wrap {
    flex-shrink: 0;
    padding-right: 8px;
    &:last-child {
      padding-right: 0;
    }
  }
  &__el {
    width: 20px;
    height: 20px;
    -webkit-mask: url("~@/assets/img/icons/rating.svg") no-repeat 50% 50%;
    mask: url("~@/assets/img/icons/rating.svg") no-repeat 50% 50%;
    background-color: #e9ebec;
    flex-shrink: 0;
    box-sizing: content-box;
    &_active {
      -webkit-mask: url("~@/assets/img/icons/rating.svg") no-repeat 50% 50%;
      mask: url("~@/assets/img/icons/rating.svg") no-repeat 50% 50%;
      background-color: #fab36b;
    }
  }
  @media (max-width: 800px) {
    &__el-wrap:last-child {
      padding-right: 0;
    }
  }
}
</style>
