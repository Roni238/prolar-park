<template>
  <section class="banner">
    <div class="banner__container">
      <div class="banner__message-container">
        <div class="banner__text">
          <h1 class="banner__title">
            Аренда авто для работы <br />
            в Москве
          </h1>
          <p class="banner__discription">Ваш бизнес едет быстрее с нами</p>
        </div>
        <NuxtLink to="#catalog" class="banner__cta-bnt" aria-label="На главную"
          >Стать водителем</NuxtLink
        >
      </div>

      <div class="banner__image-container">
        <img
          src="/images/banner-bg.png"
          class="banner__image"
          alt="Баннер"
          loading="lazy"
        />
        <!-- <picture>
          <source
            srcset="
              /images/banner-bg.webp    1x,
              /images/banner-bg@2x.webp 2x,
              /images/banner-bg@3x.webp 3x
            "
            type="image/webp"
          />
          <img
            src="/images/banner-bg.png"
            class="banner__image"
            alt="Баннер"
            loading="lazy"
          />
        </picture> -->

        <picture>
          <img class="banner__image--car" src="/images/banner-car.png" alt="" />
        </picture>
        <img
          class="banner__image banner__image--pc"
          src="/images/banner-pc.png"
          alt=""
        />
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.banner {
  height: calc(100dvh - 60px);
  position: relative;
  overflow: hidden;
  @include tablet {
    height: calc(100dvh - 70px);
  }
  &__container {
    @include container;
  }

  &__message-container {
    display: flex;
    height: 100%;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: space-between;
    padding-block: $section-padding;
    @include tablet {
      padding-block: 50px;
    }
  }
  &__text {
    padding: 4px 12px;
    border-left: 3px solid $main-color;
    @include tablet {
      padding: 8px 20px;
    }
  }

  &__discription {
    font-size: 1.6rem;
  }
  &__cta-bnt {
    box-shadow: 0px 10px 10px 0px rgba(15, 16, 17, 0.1);
    background: $main-color;
    color: #fff;
    font-size: 24px;
    border: none;
    padding: 15px 30px;
    border-radius: 18px;
    text-align: center;
    @include tablet {
      width: max-content;
    }
  }
  &__image-container {
    position: absolute;
    height: 100%;
    width: 100%;
    inset: 0;
    z-index: -1;
    overflow: hidden;

    .banner__image {
      height: 100%;
      right: -80px;
      top: -120px;
      position: absolute;

      @include tablet {
        top: -50px;
        right: -40px;
      }

      &--pc {
        display: none;

        @include tablet-ori(landscape) {
          display: block;
        }
      }
      &--car {
        top: 55%;
        right: 50%;
        transform: translate(50%, -50%) scale(0.5);
        z-index: 100;
        position: absolute;
        @include tablet {
          transform: translate(50%, -50%) scale(1);
        }
        @include tablet-ori(portrait) {
          display: none;
          right: -5%;
          top: 25%;
          transform: translate(0%, 0%) scale(0.7);
        }
        @include laptop {
          top: 20%;
          right: 2%;
          transform: translate(0%, 0%) scale(1);
        }
      }
    }
  }
}
</style>
