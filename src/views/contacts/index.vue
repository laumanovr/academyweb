<template>
  <Default>
    <div class="contacts">
      <div class="contacts__info-container">
        <Breadcrumbs :items="breadcrumbLinks"/>
        <div class="contacts__info-blocks">
          <div class="contacts__info-block">
            <h3 class="contacts__info-title h3">General inquiries <br> & comments</h3>
            <a href="#" class="contacts__info-link">info@bimiboo.com</a>
          </div>
          <div class="contacts__info-block">
            <h3 class="contacts__info-title h3">Post mail</h3>
            <div class="contacts__info-description">
              Bimi Boo Kids Inc., <br> 410 Hauser Blvd, Apt 4C, Los Angeles, <br> CA, 90036
            </div>
            <a href="" class="contacts__info-link">View on Google Maps</a>
          </div>
          <div class="contacts__info-block">
            <h3 class="contacts__info-title h3">Business opportunities</h3>
            <div class="contacts__info-description">For partnerships and new business enquiries:</div>
            <a href="" class="contacts__info-link">dmitry@bimiboo.com</a>
            <div class="contacts__info-description">For partners</div>
            <a href="" class="contacts__info-link">Guideline and corporate resources</a>
          </div>
        </div>
      </div>
      <div class="contacts__form-container">
        <div class="contacts__form-block">
          <div class="contacts__form-text-block">
            <h2 class="contacts__form-title h2">Have some questions?</h2>
            <div class="contacts__form-hint">We are always ready to answer</div>
          </div>
          <form class="contacts__form">
            <div class="contacts__form-input">
              <input type="text" placeholder="Name">
            </div>
            <div class="contacts__form-input email">
              <input type="text" placeholder="Email">
            </div>
            <div class="contacts__form-textarea">
              <textarea placeholder="Message"></textarea>
            </div>
            <VButton theme="secondary" class="contacts__form-btn">Submit</VButton>
          </form>
        </div>
      </div>
      <JoinClub/>
    </div>
  </Default>
</template>

<script>
import Breadcrumbs from '@/components/Breadcrumbs.vue';
import VButton from '@/components/VButton.vue';
import JoinClub from '@/components/JoinClub';
import Default from '@/layouts/default.vue';

export default {
	components: {
		Breadcrumbs,
		VButton,
		JoinClub,
		Default
	},
	data () {
		return {
			breadcrumbLinks: [
				{
					name: 'Home',
					route: '/'
				},
				{
					name: 'Contacts',
					route: '/contacts'
				}
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
    height: 465px;
    @media #{$lg} {
      height: 705px;
    }
    @media #{$sm} {
      padding: 20px 20px 0;
      height: 670px;
    }
    @media #{$xs} {
      height: 752px;
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

  &__form-container {
    padding: 100px 120px 0;
    border-radius: 100px 100px 0 0;
    background: #fff;
    position: relative;
    top: -80px;
    margin-bottom: 10px;
    @media #{$lg} {
      padding: 130px 40px 0;
    }
    @media #{$sm} {
      padding: 100px 20px 0;
    }
    @media #{$xs} {
      padding: 80px 20px 0;
      border-radius: 50px 50px 0 0;
    }
  }

  &__form-block {
    display: flex;
    @media #{$sm} {
      display: block;
    }
  }

  &__form-text-block {
    margin-right: 180px;
    @media #{$lg} {
      margin-right: 250px;
    }
    @media #{$sm} {
      margin: 0;
    }
  }

  &__form-title {
    color: $dark-blue;
    margin-bottom: 30px;
    max-width: 225px;
    @media #{$sm} {
      max-width: 100%;
      margin-bottom: 10px;
    }
  }

  &__form-hint {
    color: $cool-gray;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    @media #{$sm} {
      margin-bottom: 40px;
    }
  }

  &__form {
    width: 386px;
    @media #{$lg} {
      width: 380px;
    }
    @media #{$sm} {
      width: 100%;
    }
  }

  &__form-input {
    input {
      width: 100%;
      height: 65px;
      background: $ghost-white;
      border-radius: 12px;
      border: 0;
      outline: none;
      padding: 20px;
    }

    &.email {
      margin: 30px 0;
    }
  }

  &__form-textarea {
    textarea {
      width: 100%;
      height: 160px;
      background: $ghost-white;
      border-radius: 12px;
      border: 0;
      padding: 20px;
      outline: none;
      resize: none;
    }
  }

  &__form-btn {
    width: 165px;
    margin-top: 30px;
    @media #{$sm} {
      height: 50px;
    }
  }
}
</style>
