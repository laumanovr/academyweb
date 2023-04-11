<template>
  <div class="main-page">
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
  </div>
</template>

<script>
import Learning from "../../components/Learning";
export default {
  components: {
    Learning,
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/vars";

.main-page {
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
  &__love-us-image-wrap {
    margin: 0 auto 40px;
    width: 200px;
    height: 200px;
  }
  &__love-us-image {
    width: 100%;
    height: 100%;
    flex-shrink: 0;
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

  @media #{$lg} {
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
  }
  @media #{$xs} {
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
  }
}
</style>
