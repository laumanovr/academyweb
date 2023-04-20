<template>
  <div class="footer">
    <div class="footer__title">Bimi Boo kids®</div>
    <div class="footer__subtitle">
      Read our Privacy policy and Children's Online Privacy Policy
    </div>
    <div class="footer__social">
      <div class="footer__social-title">Follow us</div>
      <div class="footer__items">
        <a href="#" class="footer__item">
          <img src="@/assets/img/icons/social/youtube.svg" alt="youtube" />
        </a>
        <a href="#" class="footer__item">
          <img src="@/assets/img/icons/social/instagram.svg" alt="instagram" />
        </a>
        <a href="#" class="footer__item">
          <img src="@/assets/img/icons/social/twitter.svg" alt="twitter" />
        </a>
        <a href="#" class="footer__item">
          <img src="@/assets/img/icons/social/tiktok.svg" alt="tiktok" />
        </a>
        <a href="#" class="footer__item">
          <img src="@/assets/img/icons/social/facebook.svg" alt="facebook" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 40px;
  background: $dark-blue;
  border-radius: 100px 100px 0px 0px;
  &__title {
    margin-bottom: 10px;
    font-weight: 700;
    font-size: 27px;
    line-height: 32px;
    color: $white;
  }
  &__subtitle {
    margin-bottom: 40px;
    font-weight: 400;
    font-size: 15px;
    line-height: 25px;
    text-align: center;
    color: $white;
    opacity: 0.7;
  }
  &__social {
    text-align: center;
  }
  &__social-title {
    margin-bottom: 10px;
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
    color: $white;
    opacity: 0.7;
  }
  &__items {
    display: flex;
    align-items: center;
  }
  &__item {
    margin-right: 10px;
    &:last-child {
      margin-right: 0;
    }
  }
  @media #{$xs} {
    &__title {
      font-size: 24px;
    }
  }
}
</style>
