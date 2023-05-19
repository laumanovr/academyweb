<template>
    <ul class="breadcrumbs">
      <li v-for="(item, index) in items" :key="index" class="breadcrumbs__item">
        <router-link :to="item.route">{{ item.name }}</router-link>
        <img src="@/assets/img/icons/arrow-right-gray.svg" v-if="index < items.length - 1" class="breadcrumbs__arrow"/>
      </li>
    </ul>
</template>

<script>
export default {
	props: {
		items: {
			type: Array,
			default: () => ([])
		}
	}
};
</script>

<style lang="scss">
.breadcrumbs {
  display: none;
  @media #{$sm} {
    display: flex;
    align-items: center;
  }
  &__item {
    display: flex;
    align-items: center;
    a {
      text-decoration: none;
      font-size: 15px;
      font-weight: 400;
      color: $cool-gray;
      &.router-link-exact-active {
        color: $lime-green;
      }
    }
  }
  &__arrow {
    margin: 0 14px;
  }
}
</style>
