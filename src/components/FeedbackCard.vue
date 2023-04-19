<template>
  <div class="feedback-card">
    <div class="feedback-card__name">{{ name }}</div>
    <div class="feedback-card__character">{{ character }}</div>
    <ProductRating :count="raiting" class="feedback-card__raiting" />
    <div class="feedback-card__text">{{ text }}</div>
    <div class="feedback-card__bottom">
      <div class="feedback-card__social">
        <img
          src="@/assets/img/icons/facebook.svg"
          alt="facebook"
          class="feedback-card__social-icon"
        />
        <div class="feedback-card__social-name">{{ social }}</div>
      </div>
      <div class="feedback-card__time">{{ time }} days ago</div>
    </div>
  </div>
</template>

<script>
import ProductRating from "@/components/ProductRating.vue";

export default {
  name: "FeedbackCard",
  components: {
    ProductRating,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    character: {
      type: String,
      required: true,
    },
    raiting: {
      type: Number,
      default: 0,
    },
    text: {
      type: String,
      required: true,
    },
    social: {
      type: String,
      required: true,
    },
    time: {
      type: [String, Number],
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.feedback-card {
  max-width: 386.67px;
  padding: 30px;
  background: #ffffff;
  border: 1px solid #e9ebec;
  border-radius: 60px;
  text-align: center;
  &__name {
    margin-bottom: 5px;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    color: #2a364d;
  }
  &__character {
    margin-bottom: 15px;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #9da3af;
  }
  &__raiting {
    margin: 0 auto 30px;
  }
  &__text {
    height: 192px;
    overflow: hidden;
    margin-bottom: 35px;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: #9da3af;
  }
  &__bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__social {
    display: flex;
    align-items: center;
  }
  &__social-icon {
    margin-right: 10px;
  }
  &__bottom {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #9da3af;
  }
  @media #{$sm} {
    max-width: 377.67px;
    &__text {
      height: 144px;
    }
  }
  @media #{$xs} {
    &__text {
      height: 207px;
      font-size: 15px;
      line-height: 150%;
    }
    &__bottom {
      font-size: 15px;
      line-height: 20px;
    }
  }
}
</style>
