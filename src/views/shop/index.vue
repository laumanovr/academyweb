<template>
  <div class="shop-page">
    <section class="shop-page__choose-plan">
      <ChoosePlan />
    </section>
    <JoinClub />
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
  background: #f8f8f9;
  &__choose-plan {
    margin-bottom: 130px;
  }
  @media #{$sm} {
    margin-bottom: 100px;
  }
  @media #{$xs} {
    padding-top: 80px;
    &__choose-plan {
      margin-bottom: 80px;
    }
  }
}
</style>
