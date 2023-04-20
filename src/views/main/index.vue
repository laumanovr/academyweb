<template>
  <div class="main-page">
    <section class="main-page__header main-page__seaction">
      <div class="container">
        <img
          src="@/assets/img/icons/star.svg"
          alt="star"
          class="main-page__header-star-mobile"
        />
        <img
          src="@/assets/img/icons/books.svg"
          alt="books"
          class="main-page__header-overtitle"
        />
        <h1 class="main-page__header-title h1">
          Fun educational program <span>for your toddlers</span>
        </h1>
        <div class="main-page__header-items">
          <div class="main-page__header-item">
            <div class="main-page__header-item-title numbers-m">100%</div>
            <div class="main-page__header-item-subtitle">
              safe content without ads
            </div>
          </div>
          <div class="main-page__header-item">
            <div class="main-page__header-item-title numbers-m">1 700</div>
            <div class="main-page__header-item-subtitle">
              games, video, songs, and books
            </div>
          </div>
          <div class="main-page__header-item">
            <div class="main-page__header-item-title numbers-s">
              Flexible learning
            </div>
            <div class="main-page__header-item-subtitle">
              path and progress tracking
            </div>
          </div>
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
        </div>
        <img
          class="main-page__header-carrot"
          src="@/assets/img/icons/carrot.svg"
          alt="carrot"
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
    <section class="main-page__learning main-page__seaction">
      <div class="container">
        <h2 class="main-page__learning-title h2">Learning path</h2>
        <div class="main-page__learning-steps">
          <div class="main-page__learning-step">
            <img src="@/assets/img/kid-1.svg" />
            <div class="main-page__learning-info">
              <h3 class="main-page__learning-info-title h3">Preschool</h3>
              <div class="main-page__learning-info-text">Ages 3+</div>
              <div class="main-page__learning-info-sm-text">
                <span> Level 1:</span>
                410 Learning activities
              </div>
              <div class="main-page__learning-info-sm-text">
                <span> Level 2:</span>
                425 Learning activities
              </div>
            </div>
          </div>
          <div class="main-page__learning-step">
            <img src="@/assets/img/kid-2.svg" />
            <div class="main-page__learning-info">
              <h3 class="main-page__learning-info-title h3">Pre-K</h3>
              <div class="main-page__learning-info-text">Ages 4+</div>
              <div class="main-page__learning-info-sm-text">
                <span> Level 3:</span>
                452 Learning activities
              </div>
              <div class="main-page__learning-info-sm-text">
                <span> Level 4:</span>
                535 Learning activities
              </div>
            </div>
          </div>
          <div class="main-page__learning-step">
            <img src="@/assets/img/kid-3.svg" />
            <div class="main-page__learning-info">
              <h3 class="main-page__learning-info-title h3">Kindergarden</h3>
              <div class="main-page__learning-info-text">Ages 5+</div>
              <div class="main-page__learning-info-sm-text">
                <span> Level 5:</span>
                655 Learning activities
              </div>
              <div class="main-page__learning-info-sm-text">
                <span> Level 6:</span>
                631 Learning activities
              </div>
            </div>
          </div>
        </div>
        <VButton class="main-page__learning-btn-start"
          >Start free trial</VButton
        >
      </div>
    </section>
    <div class="main-page__love-us">
      <div class="container">
        <h2 class="main-page__love-us-title numbers-l">
          Parents <span>love us</span>
        </h2>
        <div class="main-page__love-us-image-wrap">
          <img
            src="@/assets/img/awards.png"
            alt="awards"
            class="main-page__love-us-image"
          />
        </div>
        <div class="main-page__love-us-subtitle text-l">
          Parents from all over the world choose our preschool app for kids
        </div>
        <p class="main-page__love-us-paragraph">
          Our application received #1 place a gold medal in the nomination of
          children's games.
        </p>
      </div>
    </div>
    <section class="main-page__with-academy main-page__seaction">
      <div class="container">
        <h2 class="main-page__with-academy-title h2">
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
            <h3 class="main-page__with-academy-item-title h3">Reading</h3>
          </div>
          <div class="main-page__with-academy-item">
            <div class="main-page__with-academy-image-wrap">
              <img
                src="@/assets/img/math.jpg"
                alt="Basic Math"
                class="main-page__with-academy-image"
              />
            </div>
            <h3 class="main-page__with-academy-item-title h3">Basic Math</h3>
          </div>
          <div class="main-page__with-academy-item">
            <div class="main-page__with-academy-image-wrap">
              <img
                src="@/assets/img/colors.jpg"
                alt="Shapes & colors"
                class="main-page__with-academy-image"
              />
            </div>
            <h3 class="main-page__with-academy-item-title h3">
              Shapes & colors
            </h3>
          </div>
          <div class="main-page__with-academy-item">
            <div class="main-page__with-academy-image-wrap">
              <img
                src="@/assets/img/creativity.jpg"
                alt="Creativity"
                class="main-page__with-academy-image"
              />
            </div>
            <h3 class="main-page__with-academy-item-title h3">Creativity</h3>
          </div>
          <div class="main-page__with-academy-item">
            <div class="main-page__with-academy-image-wrap">
              <img
                src="@/assets/img/social.jpg"
                alt="Social skills"
                class="main-page__with-academy-image"
              />
            </div>
            <h3 class="main-page__with-academy-item-title h3">Social skills</h3>
          </div>
        </div>
        <VButton class="main-page__with-academy-buttom"
          >Start free trial</VButton
        >
      </div>
    </section>
    <section class="main-page__why-academy main-page__seaction">
      <div class="container">
        <h2 class="main-page__why-academy-title h2">
          Why Bimi Boo <span>Academy</span>
        </h2>
        <div class="main-page__why-academy-items">
          <div class="main-page__why-academy-item-wrap">
            <div class="main-page__why-academy-item">
              <div class="main-page__why-academy-image-wrap">
                <img
                  src="@/assets/img/icons/panda.svg"
                  alt="panda"
                  class="main-page__why-academy-image"
                />
              </div>
              <h3 class="main-page__why-academy-item-title h3">
                No ads from third
              </h3>
            </div>
          </div>
          <div class="main-page__why-academy-item-wrap">
            <div class="main-page__why-academy-item">
              <div class="main-page__why-academy-image-wrap">
                <img
                  src="@/assets/img/icons/lion.svg"
                  alt="lion"
                  class="main-page__why-academy-image"
                />
              </div>
              <h3 class="main-page__why-academy-item-title h3">
                More than 1700 activities
              </h3>
            </div>
          </div>
          <div class="main-page__why-academy-item-wrap">
            <div class="main-page__why-academy-item">
              <div class="main-page__why-academy-image-wrap">
                <img
                  src="@/assets/img/icons/elephant.svg"
                  alt="elephant"
                  class="main-page__why-academy-image"
                />
              </div>
              <h3 class="main-page__why-academy-item-title h3">
                Parental control
              </h3>
            </div>
          </div>
          <div class="main-page__why-academy-item-wrap">
            <div class="main-page__why-academy-item">
              <div class="main-page__why-academy-image-wrap">
                <img
                  src="@/assets/img/icons/monkey.svg"
                  alt="monkey"
                  class="main-page__why-academy-image"
                />
              </div>
              <h3 class="main-page__why-academy-item-title h3">
                100% safe content
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="main-page__feedback main-page__seaction">
      <div class="container">
        <h2 class="main-page__feedback-title h2">
          What <span>happy parents</span> are saying about us
        </h2>
        <swiper
          class="swiper main-page__feedback-items"
          :options="swiperOption"
          slides-per-view="auto"
        >
          <swiper-slide v-for="item in $options.feedback" :key="item.id"
            ><FeedbackCard
              class="main-page__feedback-item"
              :name="item.name"
              :character="item.character"
              :raiting="item.raiting"
              :text="item.text"
              :time="item.time"
              :social="item.social"
          /></swiper-slide>
          <div
            class="main-page__swiper-pagination swiper-pagination"
            slot="pagination"
          ></div>
        </swiper>
      </div>
    </section>
    <section class="main-page__tariffs main-page__seaction">
      <div class="container">
        <h2 class="main-page__tariffs-title h2">
          Choose your plan and start 7-Days <span>free trial</span>
        </h2>
        <div class="main-page__tariffs-items">
          <TariffCard
            class="main-page__tariffs-item"
            v-for="tariff in $options.tariffs"
            :key="tariff.id"
            :title="tariff.title"
            :items="tariff.items"
            :price="tariff.price"
            :best="tariff.best"
          />
        </div>
      </div>
    </section>
    <section class="main-page__faq main-page__seaction">
      <div class="container">
        <h2 class="main-page__faq-title h2">FAQ</h2>
        <div class="main-page__faq-items">
          <VToggle>
            <template #default="{ onClick, isActive }">
              <div class="main-page__faq-item" @click="onClick">
                <div
                  class="main-page__collapse"
                  :class="{ 'main-page__collapse_active': isActive }"
                >
                  <div class="main-page__collapse-title">No ads from third</div>
                  <transition name="fade">
                    <div v-show="isActive" class="main-page__collapse-content">
                      Сложно сказать, почему реплицированные с зарубежных
                      источников, современные исследования освещают
                    </div>
                  </transition>
                </div>
              </div>
            </template>
          </VToggle>
          <VToggle>
            <template #default="{ onClick, isActive }">
              <div class="main-page__faq-item" @click="onClick">
                <div
                  class="main-page__collapse"
                  :class="{ 'main-page__collapse_active': isActive }"
                >
                  <div class="main-page__collapse-title">No ads from third</div>
                  <transition name="fade">
                    <div v-show="isActive" class="main-page__collapse-content">
                      Сложно сказать, почему реплицированные с зарубежных
                      источников, современные исследования освещают
                    </div>
                  </transition>
                </div>
              </div>
            </template>
          </VToggle>
          <VToggle>
            <template #default="{ onClick, isActive }">
              <div class="main-page__faq-item" @click="onClick">
                <div
                  class="main-page__collapse"
                  :class="{ 'main-page__collapse_active': isActive }"
                >
                  <div class="main-page__collapse-title">No ads from third</div>
                  <transition name="fade">
                    <div v-show="isActive" class="main-page__collapse-content">
                      Сложно сказать, почему реплицированные с зарубежных
                      источников, современные исследования освещают
                    </div>
                  </transition>
                </div>
              </div>
            </template>
          </VToggle>
          <VToggle>
            <template #default="{ onClick, isActive }">
              <div class="main-page__faq-item" @click="onClick">
                <div
                  class="main-page__collapse"
                  :class="{ 'main-page__collapse_active': isActive }"
                >
                  <div class="main-page__collapse-title">No ads from third</div>
                  <transition name="fade">
                    <div v-show="isActive" class="main-page__collapse-content">
                      Сложно сказать, почему реплицированные с зарубежных
                      источников, современные исследования освещают
                    </div>
                  </transition>
                </div>
              </div>
            </template>
          </VToggle>
          <VToggle>
            <template #default="{ onClick, isActive }">
              <div class="main-page__faq-item" @click="onClick">
                <div
                  class="main-page__collapse"
                  :class="{ 'main-page__collapse_active': isActive }"
                >
                  <div class="main-page__collapse-title">No ads from third</div>
                  <transition name="fade">
                    <div v-show="isActive" class="main-page__collapse-content">
                      Сложно сказать, почему реплицированные с зарубежных
                      источников, современные исследования освещают
                    </div>
                  </transition>
                </div>
              </div>
            </template>
          </VToggle>
        </div>
      </div>
    </section>
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
          Start an <span>amazing</span> <br />
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
        </div>
        <div class="main-page__amazing-hero main-page__amazing-hero_2">
          <img
            src="@/assets/img/heroes/choes.svg"
            alt="choes hero"
            class="main-page__amazing-hero-image"
          />
        </div>
        <div class="main-page__amazing-hero main-page__amazing-hero_3">
          <img
            src="@/assets/img/heroes/bimi.svg"
            alt="bimi hero"
            class="main-page__amazing-hero-image"
          />
        </div>
        <div class="main-page__amazing-hero main-page__amazing-hero_4">
          <img
            src="@/assets/img/heroes/hair.svg"
            alt="hair hero"
            class="main-page__amazing-hero-image"
          />
        </div>
        <div class="main-page__amazing-hero main-page__amazing-hero_5">
          <img
            src="@/assets/img/heroes/star.svg"
            alt="star hero"
            class="main-page__amazing-hero-image"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import VButton from "@/components/VButton.vue";
import VToggle from "@/components/VToggle.vue";
import FeedbackCard from "@/components/FeedbackCard.vue";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import TariffCard from "@/components/TariffCard.vue";

export default {
  feedback: [
    {
      id: 1,
      name: "Birgitte Albek Henriksen",
      character: "Speech Pathologist",
      raiting: 5,
      text: "As a speech pathologist, I’ve used Bimi Boo Coloring app with children of different ages, and it’s popular due to its numerous options for drawings and colors, providing hours of entertainment and learning. The app’s saving progress and redo features are great, although some children may be confused that they can’t paint outside the lines",
      time: 6,
      social: "Facebook",
    },
    {
      id: 2,
      name: "Sarah D.",
      character: "Speech Pathologist",
      raiting: 4,
      text: "As a parent, I know how important it is to find high-quality toys that provide a fun and educational experience for kids. That’s why I’m excited to share my love for Bimi Boo toys! These wooden toys are visually appealing and offer a unique learning experience that encourages exploration, problem-solving, and creativity.",
      time: 2,
      social: "Instagram",
    },
    {
      id: 3,
      name: "Speech Pathologist",
      character: "Speech Pathologist",
      raiting: 5,
      text: "Bimi Boo series is a wonderful kids’ show, my nephews and nieces love it. I don’t have to be looking at the TV to know they are watching it when I hear them singing along with the characters. I love how educational it is, but fun for the kids too. The background music is entertaining and fun, and there are a lot of positive messages in the songs. ",
      time: 6,
      social: "Facebook",
    },
  ],
  tariffs: [
    {
      id: 1,
      title: "Monthly plan",
      items: ["Unlimited access", "Cancel any time"],
      price: {
        main: "6.99",
        old: "9.99",
        time: "month",
      },
    },
    {
      id: 2,
      title: "Annual plan",
      items: ["Big savings", "Unlimited access", "Cancel any time"],
      price: {
        main: "49.99",
        old: "69.99",
        time: "year",
      },
      best: true,
    },
  ],
  components: {
    VButton,
    VToggle,
    FeedbackCard,
    Swiper,
    SwiperSlide,
    TariffCard,
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: "auto",
        spaceBetween: 20,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          bulletActiveClass: "main-page__swiper-pagination-item_active",
          enabled: true,
        },
      },
    };
  },
};
</script>

<style lang="scss">
.main-page {
  &__seaction {
    margin-bottom: 140px;
  }
  &__header {
    overflow: hidden;
    position: relative;
    padding: 50px 0 0;
    text-align: center;
    .container {
      position: relative;
    }
  }
  &__header-star-mobile {
    display: none;
  }
  &__header-overtitle {
    margin-bottom: 10px;
  }
  &__header-title {
    position: relative;
    margin-bottom: 51px;
    color: $dark-blue;
    span {
      display: block;
      color: $lime-green;
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
    position: relative;
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
    color: $dark-blue;
  }
  &__header-item-subtitle {
    font-weight: 700;
    font-size: 15px;
    line-height: 20px;
    color: $cool-gray;
  }
  &__header-harachters {
    position: relative;
    background: $ghost-white;
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
    background: $pumpkin;
    color: $white;
  }
  &__header-carrot {
    position: absolute;
    top: -11px;
    left: 78px;
    z-index: -1;
  }
  &__header-two {
    position: absolute;
    left: 19%;
    bottom: -140px;
    z-index: -1;
  }
  &__header-pyramid {
    position: absolute;
    right: 11%;
    bottom: -131px;
    z-index: -1;
  }
  &__learning {
    margin-top: 140px;
  }
  &__learning-title {
    color: $dark-blue;
    text-align: center;
    margin-bottom: 29px;
  }

  &__learning-steps {
    margin-bottom: 50px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    background-image: url("~@/assets/img/linear.svg"),
      url("~@/assets/img/linear.svg");
    background-position: 26% 40%, 73% 40%;
    background-repeat: no-repeat;
    background-size: 32%;
  }

  &__learning-step {
    text-align: center;
    position: relative;
    flex: 1;
    margin-right: 20px;
    &:last-child {
      margin-right: 0;
    }
  }
  &__learning-info {
    text-align: center;
    margin-top: 7px;
    @media #{$sm} {
      width: 173px;
    }
  }
  &__learning-info-title {
    color: $dark-blue;
    margin-bottom: 10px;
  }
  &__learning-info-text {
    font-weight: 400;
    font-size: 20px;
    line-height: 32px;
    color: $cool-gray;
  }
  &__learning-info-sm-text {
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
    color: $light-gray;
    white-space: nowrap;
    @media #{$sm} {
      white-space: unset;
    }
  }
  &__learning-btn-start {
    margin: 0 auto;
  }
  &__love-us {
    padding: 150px 0 140px;
    background: $ghost-white;
    border-radius: 100px 100px 0px 0px;
    text-align: center;
  }
  &__love-us-title {
    position: relative;
    z-index: 1;
    margin-bottom: 50px;
    color: $dark-blue;
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
      color: $lime-green;
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
    color: $dark-blue;
  }
  &__love-us-paragraph {
    margin: 0 auto;
    max-width: 386px;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: $cool-gray;
  }
  &__with-academy {
    &:before {
      content: "";
      display: block;
      height: 140px;
      background: $white;
      border-radius: 140px;
    }
    margin-top: -70px;
    text-align: center;
  }
  &__with-academy-title {
    margin-bottom: 50px;
    color: $dark-blue;
    span {
      display: block;
      color: $lime-green;
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
    color: $dark-blue;
  }
  &__with-academy-buttom {
    margin: 0 auto;
  }
  &__why-academy {
    text-align: center;
  }
  &__why-academy-title {
    margin-bottom: 50px;
    color: $dark-blue;
    span {
      color: $lime-green;
    }
  }
  &__why-academy-items {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
  &__why-academy-item-wrap {
    position: relative;
    padding-bottom: 100%;
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
  }
  &__why-academy-item {
    position: absolute;
    width: 100%;
    height: 100%;
    flex: 1;
    padding: 40px 27px 60px;

    border-radius: 400px;

    &:nth-child(1) {
      background: #f7f6f9;
    }
    &:nth-child(2) {
      background: #fbe8d8;
    }
    &:nth-child(3) {
      background: #e4e8f1;
    }
    &:nth-child(4) {
      background: $champagne;
    }
  }
  &__why-academy-image-wrap {
    margin-bottom: 21px;
  }
  &__why-academy-item-title {
    text-align: center;
    color: $dark-blue;
  }
  &__why-academy-buttom {
    margin: 0 auto;
  }
  &__feedback {
    text-align: center;
  }
  &__feedback-title {
    margin-bottom: 50px;
    color: $dark-blue;
    span {
      color: $lime-green;
    }
  }
  &__feedback-items {
    display: flex;
    align-items: center;
  }
  &__feedback-item {
    margin-right: 20px;
    &:last-child {
      margin-right: 0;
    }
  }
  &__swiper-pagination {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__swiper-pagination-item {
    &_active {
      width: 11px;
      height: 11px;
      background: $lime-green;
      opacity: 1;
    }
  }
  &__tariffs {
    text-align: center;
  }
  &__tariffs-title {
    position: relative;
    margin-bottom: 50px;
    color: $dark-blue;
    span {
      display: block;
      color: $lime-green;
    }
    &::after {
      content: "";
      position: absolute;
      bottom: -29px;
      left: 50%;
      transform: translateX(-50%);
      display: block;
      flex-shrink: 0;
      width: 317.39px;
      height: 40.73px;
      background-image: url("~@/assets/img/tariff-line.svg");
      background-repeat: no-repeat;
      background-position: 50%;
      background-size: contain;
      display: inline-block;
    }
  }
  &__tariffs-items {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__tariffs-item {
    margin-right: 20px;
    &:last-child {
      margin-right: 0;
    }
  }
  &__faq {
    margin-bottom: 126px;
    text-align: center;
  }
  &__faq-title {
    margin-bottom: 40px;
    color: $dark-blue;
  }
  &__faq-item {
    padding: 30px 0;
    cursor: pointer;
    border-bottom: 1px solid $gray-white;
  }
  &__collapse {
    position: relative;
    padding-right: 48px;
    text-align: left;

    &::after {
      position: absolute;
      top: 7px;
      right: 0;
      width: 24px;
      height: 24px;
      content: "";
      background: url("~@/assets/img/icons/plus.svg") no-repeat 50%;
    }
    &_active {
      &::after {
        background: url("~@/assets/img/icons/minus.svg") no-repeat 50%;
      }
    }
  }
  &__collapse-title {
    font-weight: 600;
    font-size: 28px;
    line-height: 38px;
    color: $dark-blue;
  }
  &__collapse-content {
    margin-top: 27px;
    font-weight: 400;
    font-size: 20px;
    line-height: 32px;
    color: $cool-gray;
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
  &__amazing {
    margin-bottom: -100px;
    padding: 58px 0 52px;
    overflow: hidden;
    background: #f7ece1;
    border-radius: 100px 100px 0px 0px;
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
    color: #2a364d;
    span {
      color: #7fcc4e;
    }
  }
  &__amazing-subtitle {
    margin-bottom: 40px;
  }
  &__amazing-buttom {
    margin: 0 auto;
  }
  &__amazing-heroes {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 1fr;
  }
  &__amazing-hero {
    &_1 {
      grid-area: 1 / 1 / 2 / 2;
      img {
        width: 183.53px;
        transform: translate(-70px, 50px) rotate(28deg);
      }
    }
    &_2 {
      grid-area: 1 / 2 / 2 / 3;
      img {
        width: 169px;
        transform: translateY(104px);
      }
    }
    &_3 {
      grid-area: 1 / 3 / 2 / 4;
      img {
        width: 157px;
        transform: translateY(80px);
      }
    }
    &_4 {
      grid-area: 1 / 4 / 2 / 5;
      img {
        width: 148px;
        transform: translateY(69px);
      }
    }
    &_5 {
      grid-area: 1 / 5 / 2 / 6;
      img {
        width: 232.3px;
        transform: translate(62px, 29px) rotate(330deg);
      }
    }
  }
  @media #{$lg} {
    &__seaction {
      margin-bottom: 120px;
    }
    &__header-star-mobile {
      display: block;
      position: absolute;
      top: -11px px;
      right: 78px;
      z-index: -1;
    }
    &__header-star {
      display: none;
    }
    &__header-two {
      width: 50px;
      height: 53px;
    }
    &__header-pyramid {
      width: 66.05px;
      height: 64.15px;
    }
    &__header-carrot {
      width: 74px;
      height: 50px;
    }
    &__header-buttom {
      margin-bottom: 62px;
    }
    &__love-us {
      padding: 130px 0 100px;
    }
    &__love-us-title {
      margin-bottom: 61px;
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
        img {
          width: 132.5px;
          transform: translate(-45px, 69px) rotate(28deg);
        }
      }
      &_2 {
        img {
          width: 124px;
          transform: translateY(111px);
        }
      }
      &_3 {
        img {
          width: 112px;
          transform: translateY(109px);
        }
      }
      &_4 {
        img {
          width: 103px;
          transform: translateY(89px);
        }
      }
      &_5 {
        grid-area: 1 / 5 / 2 / 6;
        img {
          width: 160.43px;
          transform: translate(37px, 66px) rotate(330deg);
        }
      }
    }
  }

  @media (max-width: 920px) {
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
    &__header-buttom {
      margin-bottom: 80px;
    }
    &__header-star {
      display: none;
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
  }
  @media #{$xs} {
    &__seaction {
      margin-bottom: 80px;
    }
    &__header-title {
      margin-bottom: 30px;
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
      padding-top: 80px;
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
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}

.swiper-slide {
  max-width: 386.67px !important;
}
</style>
