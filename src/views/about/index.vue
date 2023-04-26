<template>
  <div class="about">
    <div class="about__banner">
      <Breadcrumbs :items="breadcrumbLinks"/>
      <div class="about__banner-hero">
        <img src="@/assets/img/heroes/bimi.svg" alt="bimi">
        <img src="@/assets/img/tariff-line.svg" alt="line">
      </div>
      <div class="about__banner-info">
        <div class="about__banner-title">We are Bimi Boo!</div>
        <div class="about__banner-description">A team of professionals creating safe educational products for children
          under 7 years old.
        </div>
        <VButton class="about__banner-btn">Our products</VButton>
      </div>
      <img src="@/assets/img/activities.svg" class="about__banner-activity" alt="icon">
    </div>
    <div class="about__info-container">
      <div class="about__info-block">
        <div class="about__info-text-block about__info-text-block--flex">
          <h2 class="about__info-title h2">Our mission</h2>
          <div class="about__info-desc">is to help kids discover that learning is fun and inspire them to keep learning
            throughout their lives. We hope that Bimi Boo will become a daily part of your child's education.
          </div>
        </div>
        <img src="@/assets/img/mission.svg" alt="img" class="about__info-mission-img">
      </div>
      <div class="about__info-block about__info-block--flex believe">
        <div class="about__info-text-block">
          <h2 class="about__info-title h2">We believe</h2>
          <div class="about__info-desc-block">
            <div class="about__info-desc believe">in the power of the children's sense of wonder and curiosity. We
              believe that having fun is the best way to learn new things.
            </div>
            <div class="about__info-desc-sm">That's why we strive to create high-quality
              cartoons and toys that are both fun and
              educational.
            </div>
          </div>
        </div>
        <img src="@/assets/img/believe.svg" alt="img" class="about__info-believe-img">
      </div>
      <div class="about__info-block about__info-block--flex">
        <h2 class="about__info-title h2">We are ready</h2>
        <div class="about__info-text-block">
          <div class="about__info-desc">to offer parents and their children safe application for the development of
            children. And create better solution for every child in the world.
          </div>
          <img src="@/assets/img/ready.svg" alt="img" class="about__info-ready-img">
        </div>
      </div>
    </div>
    <AmazingSection />
  </div>
</template>

<script>
import VButton from '@/components/VButton.vue';
import Breadcrumbs from '@/components/Breadcrumbs';
import AmazingSection from '@/components/AmazingSection';

export default {
	components: {
		VButton,
		Breadcrumbs,
    AmazingSection
	},
	data () {
		return {
			breadcrumbLinks: [
				{
					name: 'Home',
					route: '/'
				},
				{
					name: 'About us',
					route: '/about'
				}
			]
		};
	}
};
</script>

<style lang="scss">
.about {
  &__banner {
    position: relative;
    text-align: center;
    height: 950px;
    background: $whisper;
    padding-top: 40px;
    @media #{$sm} {
      padding: 20px 20px 0 20px;
      height: 880px;
    }
    @media #{$xs} {
      height: 580px;
    }
  }

  &__banner-hero {
    max-width: 330px;
    margin: 0 auto;
    @media #{$sm} {
      margin: 20px auto 0;
    }

    img {
      display: block;
      margin: 0 auto;

      &:first-child {
        width: 60px;
        height: 100px;
        @media #{$sm} {
          width: 50px;
          height: 87px;
        }
        @media #{$xs} {
          width: 35px;
          height: 60px;
        }
      }
    }
  }

  &__banner-info {
    text-align: center;
    max-width: 767px;
    margin: 0 auto;
  }

  &__banner-title {
    font-weight: 700;
    font-size: 75px;
    color: $dark-blue;
    margin: 25px 0 30px;
    @media #{$sm} {
      max-width: 420px;
      margin: 25px auto 30px;
      line-height: 82px;
    }
    @media #{$xs} {
      max-width: 220px;
      font-size: 40px;
      margin: 20px auto;
      line-height: 44px;
    }
  }

  &__banner-description {
    font-weight: 600;
    font-size: 28px;
    color: $dark-blue;
    line-height: 38px;
    @media #{$sm} {
      max-width: 580px;
      margin: 0 auto;
    }
    @media #{$xs} {
      max-width: 270px;
      font-weight: 400;
      font-size: 15px;
      line-height: 22px;
    }
  }

  &__banner-btn {
    width: 240px;
    margin: 30px auto 60px;
    @media #{$sm} {
      margin: 30px auto;
    }
    @media #{$xs} {
      width: 100%;
      margin: 20px auto 30px;
    }
  }

  &__banner-activity {
    @media #{$lg} {
      width: 100%;
      height: auto;
    }
  }

  &__info-container {
    color: $dark-blue;
    padding: 130px 120px 0;
    background: #fff;
    border-radius: 140px 140px 0 0;
    position: relative;
    top: -120px;
    @media #{$lg} {
      padding: 100px 40px 0;
    }
    @media #{$sm} {
      padding: 110px 20px 0;
      top: -90px;
    }
    @media #{$xs} {
      padding: 70px 20px 0;
      top: -40px;
      border-radius: 50px 50px 0 0;
    }
  }

  &__info-block {
    margin-bottom: 130px;
    @media #{$sm} {
      margin-bottom: 100px;
    }

    &:last-child {
      margin-bottom: 10px;
    }

    &--flex {
      display: flex;
      justify-content: space-between;
      @media #{$sm} {
        display: block;
      }
    }

    &.believe {
      @media #{$lg} {
        flex-wrap: wrap;
        .about__info-text-block {
          width: 100%;
        }
      }
    }

    img {
      width: 100%;
      height: auto;
    }
  }

  &__info-text-block {
    @media #{$sm} {
      text-align: right;
    }

    &--flex {
      display: flex;
      justify-content: space-between;
      @media #{$sm} {
        display: block;
      }
    }
  }

  &__info-title {
    min-width: 223px;
    text-align: left;
  }

  &__info-desc-block {
    @media #{$lg} {
      display: flex;
      justify-content: space-between;
    }
    @media #{$sm} {
      display: block;
    }
  }

  &__info-desc {
    font-weight: 600;
    font-size: 28px;
    line-height: 38px;
    max-width: 793px;
    margin-bottom: 50px;
    text-align: left;
    @media #{$lg} {
      max-width: 463px;
    }
    @media #{$sm} {
      max-width: 100%;
      margin: 30px 0;
    }
    @media #{$xs} {
      margin: 40px 0;
      font-size: 25px;
      line-height: 34px;
    }
  }

  &__info-desc.believe {
    margin: 40px 0 100px;
    @media (max-width: 1366px) {
      margin: 40px 0 50px;
    }
    @media #{$sm} {
      margin: 30px 0;
    }
    @media #{$xs} {
      margin: 40px 0;
    }
  }

  &__info-desc-sm {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-align: right;
    padding: 0 20px 0 75px;
    @media (max-width: 1366px) {
      padding: 0 20px 0 0;
    }
    @media #{$lg} {
      max-width: 310px;
      padding: 0;
      margin-top: 40px;
    }
    @media #{$sm} {
      margin: 0 0 30px 45%;
      max-width: 100%;
    }
    @media #{$xs} {
      margin: 0 0 40px 0;
    }
  }

  &__info-believe-img {
    @media #{$lg} {
      max-width: 793px;
    }
  }

  &__info-ready-img {
    @media #{$lg} {
      max-width: 386px;
    }
  }
}
</style>
