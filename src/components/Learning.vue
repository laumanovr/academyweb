<template>
  <div class="space-container">
    <div class="learning">
      <h2 class="learning__title">Learning path</h2>
      <div class="learning__steps">
        <div class="learning__step">
          <img :src="require('../../src/assets/img/kid-1.svg')">
          <div class="learning__info">
            <div class="learning__info--title">Preschool</div>
            <div class="learning__info--text">Ages 3+</div>
            <div class="learning__info--sm-text">Level 1: 410 Learning activities</div>
            <div class="learning__info--sm-text">Level 1: 425 Learning activities</div>
          </div>
        </div>
        <img :src="linearImgPath" class="learning__dash-line">
        <div class="learning__step">
          <img :src="require('../../src/assets/img/kid-2.svg')">
          <div class="learning__info">
            <div class="learning__info--title">Pre-K</div>
            <div class="learning__info--text">Ages 4+</div>
            <div class="learning__info--sm-text">Level 3: 452 Learning activities</div>
            <div class="learning__info--sm-text">Level 4: 535 Learning activities</div>
          </div>
        </div>
        <img :src="linearImgPath" class="learning__dash-line">
        <div class="learning__step">
          <img :src="require('../../src/assets/img/kid-3.svg')">
          <div class="learning__info">
            <div class="learning__info--title">Kindergarden</div>
            <div class="learning__info--text">Ages 5+</div>
            <div class="learning__info--sm-text">Level 5: 655 Learning activities</div>
            <div class="learning__info--sm-text">Level 6: 631 Learning activities</div>
          </div>
        </div>
      </div>
        <button class="learning__btn-start">Start free trial</button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    lg() {
      return window.innerWidth <= 1024;
    },
    sm() {
      return window.innerWidth <= 640;
    },
    linearImgPath() {
      if (this.sm) {
        return require('../../src/assets/img/linear-line-short.svg')
      }
      if (this.lg) {
        return require('../../src/assets/img/linear-line-middle.svg')
      }
      return require('../../src/assets/img/linear-line-long.svg');
    }
  }
}
</script>

<style lang="scss">
@import "src/assets/styles/vars";

.learning {
  position: relative;
  height: 490px;
  margin-top: 140px;
  @media #{$lg} {
    margin-top: 120px;
  }
  @media #{$sm} {
    margin-top: 100px;
    height: 510px;
  }
  @media #{$xs} {
    margin-top: 80px;
    height: auto;
    text-align: center;
  }
  &__title {
    font-weight: 700;
    font-size: 40px;
    color: $dark-blue;
    text-align: center;
    margin: 0 0 32px;
    @media #{$xs} {
      margin: 0 0 45px;
    }
  }

  &__steps {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    @media #{$xs} {
      flex-wrap: wrap;
    }
  }

  &__step {
    text-align: center;
    position: relative;
    @media #{$xs} {
      &:not(:last-child) {
        margin-bottom: 30px;
      }
    }
  }

  &__dash-line {
    max-width: 300px;
    height: 70px;
    @media #{$lg} {
      max-width: 220px;
      height: 54px;
      position: relative;
      bottom: 20px;
    }
    @media #{$sm} {
      max-width: 100px;
      height: 40px;
      bottom: 35px;
    }
    @media #{$xs} {
      display: none;
    }
  }
  &__info {
    text-align: center;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 5px;
    @media #{$sm} {
      width: 173px;
    }
    @media #{$xs} {
      width: auto;
      position: static;
      transform: translateX(0);
    }
    &--title {
      font-weight: 700;
      font-size: 27px;
      color: $dark-blue;
      margin-bottom: 10px;
      white-space: nowrap;
      @media #{$xs} {
        font-size: 24px;
      }
    }
    &--text {
      font-weight: 400;
      font-size: 20px;
      color: $cool-gray;
      @media #{$xs} {
        font-size: 18px;
      }
    }
    &--sm-text {
      font-weight: 400;
      font-size: 15px;
      color: $light-gray;
      white-space: nowrap;
      @media #{$sm} {
        white-space: unset;
      }
    }
  }
  &__btn-start {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 206px;
    height: 65px;
    border-radius: 50px;
    font-weight: 700;
    font-size: 16px;
    color: $dark-blue;
    text-transform: uppercase;
    border: 0;
    background: $lime-green;
    cursor: pointer;
    @media #{$xs} {
      position: static;
      transform: translateX(0);
      width: 197px;
      height: 60px;
      font-size: 15px;
      margin-top: 50px;
    }
  }
}
</style>
