<template>
  <div class="main-page">
    <section class="main-page__header">
      <div class="container">
        <img
          src="@/assets/img/icons/books.svg"
          alt="books"
          class="main-page__header-overtitle"
        />
        <h1 class="main-page__header-title">
          Fun educational program <span>for your toddlers</span>
        </h1>
        <div class="main-page__header-items">
          <div class="main-page__header-item">
            <div class="main-page__header-item-title">100%</div>
            <div class="main-page__header-item-subtitle">
              safe content without ads
            </div>
          </div>
          <div class="main-page__header-item">
            <div class="main-page__header-item-title">1 700</div>
            <div class="main-page__header-item-subtitle">
              games, video, songs, and books
            </div>
          </div>
          <div class="main-page__header-item">
            <div
              class="main-page__header-item-title main-page__header-item-title_small"
            >
              Flexible learning
            </div>
            <div class="main-page__header-item-subtitle">
              path and progress tracking
            </div>
          </div>
        </div>
        <img
          class="main-page__header-carrot"
          src="@/assets/img/icons/carrot.svg"
          alt="carrot"
        />
        <img
          class="main-page__header-two"
          src="@/assets/img/icons/two.svg"
          alt="two"
        />
        <img
          class="main-page__header-pyramid"
          src="@/assets/img/icons/pyramid.svg"
          alt="pyramid"
        />
        <VButton class="main-page__header-buttom">Start free trial</VButton>
        <div class="main-page__header-harachters">
          <img
            class="main-page__header-harachters-image"
            src="@/assets/img/icons/harachters.svg"
            alt="harachters"
          />
        </div>
      </div>
      <div class="main-page__header-star main-page__header-star_left">
        <img
          class="main-page__header-star-image"
          src="@/assets/img/star.png"
          alt="star"
        />
      </div>
      <div class="main-page__header-star main-page__header-star_right">
        <div>
          <img
            class="main-page__header-star-image"
            src="@/assets/img/star.png"
            alt="star"
          />
        </div>
      </div>
    </section>
    <Learning />
    <section class="main-page__love-us">
      <div class="container">
        <h2 class="main-page__love-us-title">Parents <span>love us</span></h2>
        <div class="main-page__love-us-image-wrap">
          <img
            src="@/assets/img/awards.png"
            alt="awards"
            class="main-page__love-us-image"
          />
        </div>
        <div class="main-page__love-us-subtitle">
          Parents from all over the world choose our preschool app for kids
        </div>
        <p class="main-page__love-us-paragraph">
          Our application received #1 place a gold medal in the nomination of
          children's games.
        </p>
      </div>
    </section>
    <section class="main-page__with-academy">
      <div class="container">
        <h2 class="main-page__with-academy-title">
          With Bimi Boo Academy <span>your child will learn</span>
        </h2>
        <div class="main-page__with-academy-items">
          <div class="main-page__with-academy-item">
            <div class="main-page__with-academy-image-wrap">
              <img
                src="@/assets/img/reading.jpg"
                alt="Reading"
                class="main-page__with-academy-image"
              />
            </div>
            <div class="main-page__with-academy-item-title">Reading</div>
          </div>
          <div class="main-page__with-academy-item">
            <div class="main-page__with-academy-image-wrap">
              <img
                src="@/assets/img/math.jpg"
                alt="Basic Math"
                class="main-page__with-academy-image"
              />
            </div>
            <div class="main-page__with-academy-item-title">Basic Math</div>
          </div>
          <div class="main-page__with-academy-item">
            <div class="main-page__with-academy-image-wrap">
              <img
                src="@/assets/img/colors.jpg"
                alt="Shapes & colors"
                class="main-page__with-academy-image"
              />
            </div>
            <div class="main-page__with-academy-item-title">
              Shapes & colors
            </div>
          </div>
          <div class="main-page__with-academy-item">
            <div class="main-page__with-academy-image-wrap">
              <img
                src="@/assets/img/creativity.jpg"
                alt="Creativity"
                class="main-page__with-academy-image"
              />
            </div>
            <div class="main-page__with-academy-item-title">Creativity</div>
          </div>
          <div class="main-page__with-academy-item">
            <div class="main-page__with-academy-image-wrap">
              <img
                src="@/assets/img/social.jpg"
                alt="Social skills"
                class="main-page__with-academy-image"
              />
            </div>
            <div class="main-page__with-academy-item-title">Social skills</div>
          </div>
        </div>
        <VButton class="main-page__with-academy-buttom"
          >Start free trial</VButton
        >
      </div>
    </section>
  </div>
</template>

<script>
import Learning from "../../components/Learning";
import VButton from "@/components/VButton.vue";

export default {
  components: {
    Learning,
    VButton,
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/vars";

.main-page {
  &__header {
    position: relative;
    margin-bottom: 140px;
    padding: 50px 0 0;
    text-align: center;
    .container {
      position: relative;
    }
  }
  &__header-overtitle {
    margin-bottom: 10px;
  }
  &__header-title {
    position: relative;
    margin-bottom: 51px;
    font-weight: 700;
    font-size: 75px;
    line-height: 110%;
    color: #2a364d;
    span {
      display: block;
      color: #7fcc4e;
    }
    &::after {
      content: "";
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: -50px;
      display: block;
      flex-shrink: 0;
      width: 422.47px;
      height: 54.21px;
      background-image: url("~@/assets/img/icons/line-green.svg");
      background-repeat: no-repeat;
      background-position: 50%;
      background-size: contain;
      display: inline-block;
      vertical-align: top;
    }
  }
  &__header-items {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;
  }
  &__header-item {
    margin-right: 40px;
    &:last-child {
      margin-right: 0;
    }
  }
  &__header-item-title {
    font-weight: 400;
    font-size: 30px;
    line-height: 40px;
    color: #2a364d;
    &_small {
      font-size: 24px;
    }
  }
  &__header-item-subtitle {
    font-weight: 700;
    font-size: 15px;
    line-height: 20px;
    color: #9da3af;
  }
  &__header-harachters {
    position: relative;
    background: #f8f8f9;
    border-radius: 60px;
    padding-bottom: 20.5%;
  }
  &__header-harachters-image {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 18px;
    width: 92%;
  }
  &__header-buttom {
    margin: 0 auto 140px;
    font-weight: 900;
    font-size: 20px;
    line-height: 25px;
    letter-spacing: 0.05em;
    background: #ff7529;
    color: #ffffff;
  }
  &__header-carrot {
    position: absolute;
    top: -11px;
    left: 78px;
  }
  &__header-two {
    position: absolute;
    left: 20%;
    bottom: 44%;
  }
  &__header-pyramid {
    position: absolute;
    right: 12%;
    bottom: 46%;
  }
  &__love-us {
    padding: 150px 0 140px;
    background: #f8f8f9;
    border-radius: 100px 100px 0px 0px;
    text-align: center;
  }
  &__love-us-title {
    position: relative;
    z-index: 1;
    margin-bottom: 50px;
    font-weight: 700;
    font-size: 70px;
    line-height: 110%;
    color: #2a364d;
    span {
      margin-left: -55px;
      &::before {
        content: "";
        flex-shrink: 0;
        width: 158px;
        height: 120px;
        background-image: url("~@/assets/img/icons/heart.svg");
        background-repeat: no-repeat;
        background-position: 50%;
        background-size: contain;
        display: inline-block;
        vertical-align: top;
        margin-top: -51px;
        margin-right: -27px;
        z-index: -1;
        position: relative;
      }
      color: #7fcc4e;
    }
  }
  &__header-star {
    position: absolute;
    &_left {
      -webkit-transform: scaleX(-1);
      transform: scaleX(-1);
      left: 15px;
      bottom: -80px;
    }
    &_right {
      right: 0px;
      bottom: 50px;
    }
  }
  &__love-us-image-wrap {
    margin: 0 auto 40px;
    width: 200px;
    height: 200px;
  }
  &__love-us-image {
    width: 100%;
    height: 100%;
  }
  &__love-us-subtitle {
    margin: 0 auto 30px;
    max-width: 504px;
    font-weight: 600;
    font-size: 28px;
    line-height: 38px;
    color: #2a364d;
  }
  &__love-us-paragraph {
    margin: 0 auto;
    max-width: 386px;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: #9da3af;
  }
  &__with-academy {
    &:before {
      content: "";
      display: block;
      height: 140px;
      background: #ffffff;
      border-radius: 140px;
    }
    margin-top: -70px;
    text-align: center;
  }
  &__with-academy-title {
    margin-bottom: 50px;
    font-weight: 700;
    font-size: 40px;
    line-height: 110%;
    color: #2a364d;
    span {
      display: block;
      color: #7fcc4e;
    }
  }
  &__with-academy-items {
    margin-bottom: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 17px;
  }
  &__with-academy-item {
    width: auto;
    &:nth-child(1) {
      grid-area: 1 / 1 / 2 / 2;
    }
    &:nth-child(2) {
      grid-area: 1 / 2 / 2 / 3;
    }
    &:nth-child(3) {
      grid-area: 1 / 3 / 2 / 4;
    }
    &:nth-child(4) {
      grid-area: 1 / 4 / 2 / 5;
    }
    &:nth-child(5) {
      grid-area: 1 / 5 / 2 / 6;
    }
  }
  &__with-academy-image-wrap {
    margin-bottom: 30px;
    width: 226.8px;
    height: 226px;
    border-radius: 60px;
  }
  &__with-academy-image {
    width: 100%;
    height: 100%;
    border-radius: 60px;
  }
  &__with-academy-item-title {
    font-weight: 700;
    font-size: 27px;
    line-height: 32px;
    color: #2a364d;
  }
  &__with-academy-buttom {
    margin: 0 auto;
  }
  @media #{$xl} {
    &__with-academy-items {
      flex-wrap: wrap;
    }
  }
  @media #{$lg} {
    &__header-buttom {
      margin-bottom: 62px;
    }
    &__love-us {
      padding: 130px 0 100px;
    }
    &__love-us-title {
      margin-bottom: 61px;
      font-size: 60px;
      line-height: 110%;
    }
    &__love-us-image-wrap {
      margin-bottom: 50px;
      width: 250px;
      height: 250px;
    }
    &__love-us-subtitle {
      margin-bottom: 40px;
    }
    &__love-us-paragraph {
      max-width: 276px;
    }
    &__with-academy {
    }
    &__with-academy-items {
    }
    &__with-academy-item {
      &:nth-child(1) {
        grid-area: 1 / 1 / 2 / 2;
      }
      &:nth-child(2) {
        grid-area: 1 / 3 / 2 / 4;
      }
      &:nth-child(3) {
        grid-area: 1 / 5 / 2 / 6;
      }
      &:nth-child(4) {
        grid-area: 2 / 2 / 3 / 3;
      }
      &:nth-child(5) {
        grid-area: 2 / 4 / 3 / 5;
      }
    }
  }
  @media #{$sm} {
    &__header-title {
      margin-bottom: 70px;
      span {
        display: inline;
      }
    }
    &__header-buttom {
      margin-bottom: 80px;
    }
    &__header-star {
      display: none;
    }
  }
  @media #{$xs} {
    &__header-title {
      margin-bottom: 30px;
      font-size: 40px;
      &::after {
        width: 100%;
      }
    }
    &__header-items {
      flex-direction: column;
      margin-bottom: 30px;
    }
    &__header-item {
      margin-right: 0;
      margin-bottom: 20px;
      &:last-child {
        margin-bottom: 0;
      }
    }
    &__header-buttom {
      margin-bottom: 40px;
    }
    &__love-us {
      padding: 102px 0 80px;
      border-radius: 80px 80px 0px 0px;
    }
    &__love-us-title {
      margin-bottom: 45px;
      font-size: 35px;
      span {
        margin-left: -35px;
        &:before {
          width: 84px;
          height: 64px;
          margin-top: -33px;
          margin-right: -18px;
        }
      }
    }
    &__love-us-image-wrap {
      margin-bottom: 40px;
      width: 180px;
      height: 180px;
    }
    &__love-us-subtitle {
      width: 100%;
      font-size: 25px;
      line-height: 34px;
    }
    &__love-us-paragraph {
      width: 100%;
      font-size: 15px;
      line-height: 150%;
    }
    &__with-academy-title {
      font-size: 30px;
    }
  }
}
</style>
