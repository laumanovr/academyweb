<template>
  <section class="main-page__amazing">
    <div class="container">
      <div class="main-page__amazing-koala">
        <img
          src="@/assets/img/koala.svg"
          alt=""
          class="main-page__amazing-koala-icon"
        />
      </div>
      <div class="main-page__amazing-title">
        Start an <span>amazing</span> <br/>
        preschool adventure
      </div>
      <div class="main-page__amazing-subtitle text-l">
        with Bimi Boo and his friends
      </div>
      <VButton class="main-page__amazing-buttom">Start free trial</VButton>
    </div>

    <div class="main-page__amazing-heroes">
      <div class="main-page__amazing-hero main-page__amazing-hero_1">
        <img
          src="@/assets/img/heroes/mustache.svg"
          alt="mustache hero"
          class="main-page__amazing-hero-image"
        />
        <img
          class="main-page__amazing-pyramid"
          src="@/assets/img/pyramid.svg"
          alt="pyramid"
        />
        <img
          class="main-page__amazing-flower"
          src="@/assets/img/flower.svg"
          alt="flower"
        />
        <img
          class="main-page__amazing-carrot"
          src="@/assets/img/carrot.svg"
          alt="carrot"
        />
        <img
          class="main-page__amazing-elephant"
          src="@/assets/img/elephant.svg"
          alt="elephant"
        />
      </div>
      <div class="main-page__amazing-hero main-page__amazing-hero_2">
        <img
          src="@/assets/img/heroes/choes.svg"
          alt="choes hero"
          class="main-page__amazing-hero-image"
        />
        <img
          class="main-page__amazing-two"
          src="@/assets/img/two.svg"
          alt="two"
        />
        <img
          class="main-page__amazing-tassel"
          src="@/assets/img/tassel.svg"
          alt="tassel"
        />
      </div>
      <div class="main-page__amazing-hero main-page__amazing-hero_3">
        <img
          src="@/assets/img/heroes/bimi.svg"
          alt="bimi hero"
          class="main-page__amazing-hero-image"
        />
        <img
          class="main-page__amazing-pencil"
          src="@/assets/img/pencil.svg"
          alt="pencil"
        />
        <img
          class="main-page__amazing-drum"
          src="@/assets/img/drum.svg"
          alt="drum"
        />
      </div>
      <div class="main-page__amazing-hero main-page__amazing-hero_4">
        <img
          src="@/assets/img/heroes/hair.svg"
          alt="hair hero"
          class="main-page__amazing-hero-image"
        />
        <img
          class="main-page__amazing-apple"
          src="@/assets/img/apple.svg"
          alt="apple"
        />
        <img
          class="main-page__amazing-ball"
          src="@/assets/img/ball.svg"
          alt="ball"
        />
      </div>
      <div class="main-page__amazing-hero main-page__amazing-hero_5">
        <img
          src="@/assets/img/heroes/star.svg"
          alt="star hero"
          class="main-page__amazing-hero-image"
        />
        <img
          class="main-page__amazing-panda"
          src="@/assets/img/panda.svg"
          alt="panda"
        />
        <img
          class="main-page__amazing-cloud"
          src="@/assets/img/cloud.svg"
          alt="cloud"
        />
        <img
          class="main-page__amazing-star"
          src="@/assets/img/star.svg"
          alt="star"
        />
      </div>
    </div>
  </section>
</template>

<script>
import VButton from '@/components/VButton.vue';

export default {
	components: {
		VButton
	}
};
</script>

<style lang="scss">
.main-page {
  &__amazing {
    margin-bottom: -100px;
    padding: 58px 0 52px;
    overflow: hidden;
    background: $champagne;
    border-radius: 100px 100px 0 0;
    text-align: center;
  }

  &__amazing-koala {
    position: relative;
    margin-bottom: 47px;

    &::after {
      content: "";
      position: absolute;
      bottom: -29px;
      left: 50%;
      transform: translateX(-50%);
      display: block;
      flex-shrink: 0;
      width: 329.51px;
      height: 42.28px;
      background-image: url("~@/assets/img/green-line.svg");
      background-repeat: no-repeat;
      background-position: 50%;
      background-size: contain;
      display: inline-block;
    }
  }

  &__amazing-title {
    margin-bottom: 40px;
    font-weight: 700;
    font-size: 75px;
    line-height: 110%;
    color: $dark-blue;

    span {
      color: $lime-green;
    }
  }

  &__amazing-subtitle {
    margin-bottom: 40px;
    color: $dark-blue;
  }

  &__amazing-carrot {
    position: absolute;
    left: 86px;
    top: -70%;
  }

  &__amazing-elephant {
    position: absolute;
    left: 52%;
    top: -130%;
  }

  &__amazing-buttom {
    margin: 0 auto;
    padding: 20px 47px 19px;
  }

  &__amazing-pyramid {
    position: absolute;
    bottom: 22%;
    right: -30px;
  }

  &__amazing-flower {
    position: absolute;
    left: 78px;
    top: -21%;
  }

  &__amazing-two {
    position: absolute;
    left: 15px;
    top: -40px;
  }

  &__amazing-drum {
    position: absolute;
    bottom: 16%;
  }

  &__amazing-pencil {
    position: absolute;
    right: -38px;
    top: 14%;
  }

  &__amazing-ball {
    position: absolute;
    bottom: 22%;
    right: -40px;
  }

  &__amazing-apple {
    position: absolute;
    right: -43px;
    top: 6%;
  }

  &__amazing-tassel {
    position: absolute;
    bottom: 41%;
    right: -21px;
  }

  &__amazing-panda {
    position: absolute;
    bottom: 123%;
    right: 105px;
  }

  &__amazing-cloud {
    position: absolute;
    top: -111%;
    right: 29%;
  }

  &__amazing-star {
    position: absolute;
    top: -142%;
    right: 74%;
  }

  &__amazing-heroes {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 1fr;
  }

  &__amazing-hero {
    position: relative;

    &_1 {
      grid-area: 1 / 1 / 2 / 2;

      .main-page__amazing-hero-image {
        width: 183.53px;
        transform: translate(-70px, 50px) rotate(28deg);
      }
    }

    &_2 {
      grid-area: 1 / 2 / 2 / 3;

      .main-page__amazing-hero-image {
        width: 169px;
        transform: translateY(104px);
      }
    }

    &_3 {
      grid-area: 1 / 3 / 2 / 4;

      .main-page__amazing-hero-image {
        width: 157px;
        transform: translateY(80px);
      }
    }

    &_4 {
      grid-area: 1 / 4 / 2 / 5;

      .main-page__amazing-hero-image {
        width: 148px;
        transform: translateY(69px);
      }
    }

    &_5 {
      grid-area: 1 / 5 / 2 / 6;

      .main-page__amazing-hero-image {
        width: 232.3px;
        transform: translate(62px, 29px) rotate(330deg);
      }
    }
  }

  @media #{$xl} {
    &__header-star {
      &_right {
        right: -72px;
        bottom: 50px;
      }
    }
    &__with-academy-items {
      flex-wrap: wrap;
    }
  }
  @media (max-width: 1250px) {
    &__header-star {
      &_left {
        left: -151px;
        bottom: -143px;
      }

      &_right {
        right: -100px;
        bottom: -80px;
      }
    }
  }
  @media #{$lg} {
    &__seaction {
      margin-bottom: 120px;
    }
    &__header-star {
      &_left {
        left: -160px;
        bottom: -250px;
      }

      &_right {
        right: -178px;
        bottom: -170px;
      }
    }
    &__header-two {
      top: 56%;
      left: 16%;
      width: 50px;
      height: 53px;
    }
    &__header-carrot {
      top: -38px;
      left: 0;
      width: 74px;
      height: 50px;
    }
    &__header-pyramid {
      right: 9%;
      top: 48.5%;
      width: 87px;
    }
    &__header-button {
      margin-bottom: 62px;
    }
    &__header-hero {
      &_1 {
        img {
          width: 126.53px;
        }
      }

      &_2 {
        img {
          width: 112.3px;
        }
      }

      &_3 {
        img {
          width: 117.54px;
        }
      }

      &_4 {
        img {
          width: 114.55px;
        }
      }

      &_5 {
        img {
          width: 135.51px;
        }
      }
    }
    &__love-us {
      padding: 130px 0 125px;
    }
    &__love-us-title {
      margin-bottom: 61px;
      font-size: 60px !important;
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
    &__why-academy-items {
      grid-template-columns: repeat(2, 2fr);
    }
    &__why-academy-item-wrap {
      &:nth-child(1) {
        grid-area: 1 / 1 / 2 / 2;
      }

      &:nth-child(2) {
        grid-area: 1 / 2 / 2 / 3;
      }

      &:nth-child(3) {
        grid-area: 2 / 1 / 3 / 2;
      }

      &:nth-child(4) {
        grid-area: 2 / 2 / 3 / 3;
      }
    }
    &__why-academy-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 42px 30px 63px;
    }
    &__why-academy-item-title {
      max-width: 231px;
    }
    &__amazing {
      padding-bottom: 124px;
    }
    &__amazing-hero {
      &_1 {
        .main-page__amazing-hero-image {
          width: 132.5px;
          transform: translate(-45px, 69px) rotate(28deg);
        }
      }

      &_2 {
        .main-page__amazing-hero-image {
          width: 124px;
          transform: translateY(111px);
        }
      }

      &_3 {
        .main-page__amazing-hero-image {
          width: 112px;
          transform: translateY(109px);
        }
      }

      &_4 {
        .main-page__amazing-hero-image {
          width: 103px;
          transform: translateY(89px);
        }
      }

      &_5 {
        grid-area: 1 / 5 / 2 / 6;

        .main-page__amazing-hero-image {
          width: 160.43px;
          transform: translate(37px, 66px) rotate(330deg);
        }
      }
    }
    &__amazing-star,
    &__amazing-cloud,
    &__amazing-elephant,
    &__amazing-apple {
      display: none;
    }
    &__amazing-carrot {
      left: 56px;
      top: -185%;
      width: 83.8px;
    }
    &__amazing-flower {
      left: 25px;
      top: -97%;
    }
    &__amazing-two {
      top: -20px;
    }
    &__amazing-panda {
      bottom: 97%;
      right: 86px;
    }
    &__amazing-pyramid {
      bottom: -10%;
      right: -5px;
      width: 60px;
    }
    &__amazing-tassel {
      bottom: 26%;
      right: -21px;
      width: 40px;
    }
    &__amazing-drum {
      bottom: -4%;
      width: 77px;
      right: -42px;
    }
    &__amazing-pencil {
      right: -20px;
      top: 26%;
      width: 34px;
    }
    &__amazing-ball {
      bottom: -5%;
      right: -62px;
    }
  }

  @media (max-width: 920px) {
    &__header-star-mobile {
      display: block;
      position: absolute;
      width: 72px;
      top: -48px;
      right: 31px;
      z-index: -1;
    }
    &__header-carrot {
      top: -41px;
      left: 37px;
      width: 64px;
      height: 50px;
    }
    &__header-star {
      display: none;
    }
    &__header-hero {
      &_1 {
        img {
          width: 89.26px;
        }
      }

      &_2 {
        img {
          width: 79.22px;
        }
      }

      &_3 {
        img {
          width: 82.92px;
        }
      }

      &_4 {
        img {
          width: 80.81px;
        }
      }

      &_5 {
        img {
          width: 95.6px;
        }
      }
    }
    &__tariffs-items {
      flex-direction: column;
    }
    &__tariffs-item {
      margin-bottom: 20px;

      &:last-child {
        margin-bottom: 0;
      }
    }
    &__amazing {
      margin-bottom: -90px;
    }
    &__amazing-heroes {
      grid-template-columns: repeat(3, 1fr);
    }
    &__amazing-hero {
      &_1,
      &_5 {
        display: none;
      }

      &_2 {
        grid-area: 1 / 1 / 2 / 2;

        img {
          transform: translateY(90px);
        }
      }

      &_3 {
        grid-area: 1 / 2 / 2 / 3;

        img {
          transform: translateY(84px);
        }
      }

      &_4 {
        grid-area: 1 / 3 / 2 / 4;

        img {
          transform: translateY(80px);
        }
      }
    }
    &__amazing-pencil,
    &__amazing-two,
    &__amazing-tassel,
    &__amazing-drum {
      display: none;
    }
  }
  @media #{$sm} {
    &__seaction {
      margin-bottom: 100px;
    }
    &__header-title {
      margin-bottom: 70px;

      span {
        display: inline;
      }
    }
    &__header-item {
      &:last-child {
        min-width: 180px;
      }
    }
    &__header-button {
      margin-bottom: 80px;
    }
    &__header-star {
      display: none;
    }
    &__header-pyramid {
      right: 7%;
      top: 30.5%;
      width: 61px;
    }
    &__header-two {
      top: 33%;
      left: 3%;
      width: 41px;
      height: auto;
    }
    &__learning-title {
      margin-bottom: 49px;
    }
    &__learning-steps {
      display: block;
      background: none;
    }
    &__learning-step {
      margin: 0;

      &:not(:last-child) {
        margin-bottom: 30px;
      }
    }
    &__learning-info {
      width: auto;
    }
    &__learning-info-text {
      font-size: 18px;
      line-height: 30px;
    }
    &__with-academy-image-wrap {
      margin-bottom: 10px;
    }
    &__why-academy-items {
      display: flex;
      flex-direction: column;
      align-items: normal;
    }
    &__why-academy-item-title {
      font-weight: 700;
      font-size: 24px;
      line-height: 32px;
    }
    &__amazing-title {
      font-size: 60px;
    }
    &__amazing-hero {
      .main-page__amazing-hero-image {
        transform: translateY(80px);
      }
    }
  }
  @media (max-width: 540px) {
    &__header-items {
      align-items: center;
      flex-direction: column;
    }
    &__header-item {
      flex: 1;
      margin: 0 0 20px 0;

      &:last-child {
        margin-bottom: 0;
      }
    }
    &__header-pyramid,
    &__header-two {
    }
    &__header-button {
      margin-bottom: 40px;
    }
    &__header-heroes-wrapper {
      height: 150px;
      padding-bottom: 0;
    }
    &__header-heroes {
      grid-template-columns: repeat(3, 1fr);
    }
    &__header-hero {
      &_1,
      &_5 {
        display: none;
      }

      &_2 {
        grid-area: 1 / 1 / 2 / 2;
      }

      &_3 {
        grid-area: 1 / 2 / 2 / 3;
      }

      &_4 {
        grid-area: 1 / 3 / 2 / 4;
      }
    }
    &__love-us-image-wrap {
      margin-bottom: 40px;
    }
    &__amazing {
      border-radius: 80px 80px 0 0;
    }
  }
  @media #{$xs} {
    &__seaction {
      margin-bottom: 80px;
    }
    &__header {
      padding-top: 20px;
    }
    &__header-star-mobile {
      width: 43.41px;
      top: -14px;
      right: 13px;
    }
    &__header-carrot {
      width: 44.17px;
      height: auto;
      top: -12px;
      left: 13px;
    }
    &__header-pyramid {
      top: 27.5%;
    }
    &__header-two {
      width: 33px;
      top: 30.5%;
    }
    &__header-title {
      margin-bottom: 30px;

      &::after {
        width: 100%;
      }
    }
    &__header-items {
      margin-bottom: 30px;
    }
    &__header-button {
      width: 100%;
      font-size: 17px;
      line-height: 25px;
    }
    &__love-us {
      padding: 102px 0 80px;
      border-radius: 80px 80px 0 0;
    }
    &__love-us-title {
      margin-bottom: 45px;

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
    }
    &__love-us-paragraph {
      width: 100%;
      font-size: 15px;
      line-height: 150%;
    }
    &__collapse-title {
      font-size: 25px;
    }
    &__amazing {
      padding: 80px 0 190px;
    }
    &__amazing-title {
      margin-bottom: 30px;
      font-size: 35px;
    }
    &__amazing-subtitle {
      margin-bottom: 30px;
    }
    &__amazing-heroes {
      display: none;
    }
    &__amazing-buttom {
      width: 100%;
    }
  }
}
</style>
