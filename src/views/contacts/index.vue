<template>
  <div class="contacts">
    <div class="contacts__info-container">
      <Breadcrumbs :items="breadcrumbLinks" />
      <div class="contacts__info-blocks">
        <div class="contacts__info-block">
          <h3 class="contacts__info-title">General inquiries <br> & comments</h3>
          <a href="#" class="contacts__info-link">info@bimiboo.com</a>
        </div>
        <div class="contacts__info-block">
          <h3 class="contacts__info-title">Post mail</h3>
          <div class="contacts__info-description">
            Bimi Boo Kids Inc., <br> 410 Hauser Blvd, Apt 4C, Los Angeles, <br> CA, 90036</div>
          <a href="" class="contacts__info-link">View on Google Maps</a>
        </div>
        <div class="contacts__info-block">
          <h3 class="contacts__info-title">Business opportunities</h3>
          <div class="contacts__info-description">For partnerships and new business enquiries:</div>
          <a href="" class="contacts__info-link">dmitry@bimiboo.com</a>
          <div class="contacts__info-description">For partners</div>
          <a href="" class="contacts__info-link">Guideline and corporate resources</a>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
import Breadcrumbs from '@/components/Breadcrumbs';
export default {
	components: {
		Breadcrumbs
	},
	data() {
		return {
			breadcrumbLinks: [
				{name: 'Home', route: '/'},
				{name: 'Contacts', route: '/contacts'}
			]
		};
	}
};
</script>

<style lang="scss">
.contacts {
  color: $dark-blue;
  &__info-container {
    background: $ghost-white;
    height: 505px;
    @media #{$sm} {
      padding: 20px 20px 0;
      height: 750px;
    }
  }
  &__info-blocks {
    display: flex;
    justify-content: center;
    padding-top: 100px;
    @media #{$lg} {
      padding: 100px 40px 0;
      flex-wrap: wrap;
      justify-content: flex-start;
    }
    @media #{$sm} {
      padding: 0;
      margin-top: 55px;
      justify-content: space-between;
    }
  }
  &__info-block {
    &:first-child {
      .contacts__info-title {
        margin-bottom: 20px;
      }
    }
    &:nth-child(2) {
      margin: 0 135px 0 195px;
      @media #{$lg} {
        margin: 0 0 80px 280px;
      }
      @media #{$sm} {
        margin: 0 0 80px 0;
      }
      @media #{$xs} {
        margin: 40px 0;
      }
    }
  }
  &__info-link {
    text-decoration: none;
    color: $blue-link;
    font-weight: 400;
    font-size: 15px;
    line-height: 25px;
  }
  &__info-description {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    margin: 20px 0 10px;
    @media #{$xs} {
      font-size: 15px;
      line-height: 22px;
    }
  }
  //&__
  //&__
  //&__
  //&__
  //&__
  //&__
}
</style>
