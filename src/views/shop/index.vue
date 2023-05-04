<template>
  <div class="shop-page">
    <section class="shop-page__choose-plan">
      <ChoosePlan />
    </section>
    <section class="shop-page__join-club">
      <JoinClub />
    </section>
  </div>
</template>

<script>
import JoinClub from "@/components/JoinClub";
import ChoosePlan from "@/components/ChoosePlan.vue";

export default {
	components: {
		JoinClub,
		ChoosePlan,
	},
};
</script>

<style lang="scss">
.shop-page {
  padding-top: 100px;
  background: $ghost-white;
  &__choose-plan {
    margin-bottom: 130px;
  }
  &__join-club {
    margin-bottom: -100px;
  }
  @media #{$sm} {
    &__choose-plan {
      margin-bottom: 100px;
    }
  }
  @media #{$xs} {
    padding-top: 80px;
    &__choose-plan {
      margin-bottom: 80px;
    }
  }
}
</style>
