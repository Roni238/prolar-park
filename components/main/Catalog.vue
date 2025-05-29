<template>
  <section class="catalog" aria-labelledby="catalog-title">
    <div class="catalog__container">
      <h2 id="catalog-title" class="catalog__title">КАТАЛОГ АВТО</h2>

      <Swiper
        :modules="[Navigation]"
        :space-between="20"
        :breakpoints="{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }"
        @swiper="setSwiperInstance"
        @slide-change="updatePagination"
        id="car-gallery"
      >
        <SwiperSlide
          v-for="(car, index) in cars"
          :key="`${car.model}-${index}`"
          :aria-label="`Модель ${car.model}, комплектация ${car.trim}`"
          role="group"
          aria-roledescription="slide"
        >
          <article class="swiper-slide__content">
            <header class="swiper-slide__header">
              <div>
                <h3>{{ car.model }}</h3>
                <p>{{ car.trim }}</p>
              </div>
              <p class="swiper-slide__schedule">
                график <br />
                {{ car.schedule }}
              </p>
            </header>
            <img
              :src="`/cars/${car.image}`"
              :alt="`${car.model} ${car.trim}`"
              class="swiper-slide__image"
              loading="lazy"
              @error="handleImageError"
            />
            <footer class="swiper-slide__footer">
              <mark class="swiper-slide__price-day">
                {{ car.price_per_day }} ₽ в сутки
              </mark>
              <p class="swiper-slide__availability">* возможна аренда 6/1</p>
            </footer>
          </article>
        </SwiperSlide>
      </Swiper>

      <div class="navigation" aria-controls="car-gallery">
        <div class="navigation__counter" aria-live="polite">
          {{ swiperState.currentSlide }} из {{ maxSwipes }}
        </div>

        <div class="navigation__buttons">
          <button
            @click="slidePrev"
            class="navigation__button navigation__button--left"
            :class="{ 'navigation__button--disabled': isBeginning }"
            :disabled="isBeginning"
            aria-label="Предыдущий слайд"
          >
            <svg aria-hidden="true" focusable="false">
              <use xlink:href="/icons.svg#arrow"></use>
            </svg>
          </button>

          <button
            @click="slideNext"
            class="navigation__button"
            :class="{ 'navigation__button--disabled': isEnd }"
            :disabled="isEnd"
            aria-label="Следующий слайд"
          >
            <svg aria-hidden="true" focusable="false">
              <use xlink:href="/icons.svg#arrow"></use>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'

import 'swiper/css'
import cars from 'public/cars.json'

const swiperState = ref({
  instance: null,
  currentSlide: 1,
  totalSlides: 0,
  slidesPerView: 1,
})

const maxSwipes = computed(() =>
  Math.max(
    swiperState.value.totalSlides - swiperState.value.slidesPerView + 1,
    1
  )
)

const isBeginning = computed(() => swiperState.value.currentSlide === 1)
const isEnd = computed(() => swiperState.value.currentSlide >= maxSwipes.value)

const setSwiperInstance = (swiper) => {
  swiperState.value = {
    ...swiperState.value,
    instance: swiper,
    totalSlides: swiper.slides.length,
    slidesPerView: swiper.params.slidesPerView,
  }

  swiper.on('resize', () => {
    swiperState.value.slidesPerView = swiper.params.slidesPerView
  })
}

const updatePagination = () => {
  if (swiperState.value.instance) {
    swiperState.value.currentSlide = swiperState.value.instance.activeIndex + 1
  }
}

const slidePrev = () => swiperState.value.instance?.slidePrev()
const slideNext = () => swiperState.value.instance?.slideNext()
</script>

<style lang="scss" scoped>
.catalog {
  background-color: $main-color;
  &__container {
    @include container;
  }
  &__title {
    color: #fff;
    margin-bottom: 1.5rem;
  }
}

.swiper-slide {
  background: #f0f0f0;
  padding: 16px 16px 4px 16px;
  box-sizing: border-box;
  border-radius: 20px;
  white-space: pre-line;

  &__header {
    display: flex;
    justify-content: space-between;
    font-size: 1.25rem;
    height: 50px;
  }

  &__image {
    width: 100%;
  }

  &__availability {
    text-align: center;
    margin-top: 5px;
  }

  &__price-day {
    font-size: 1.2rem;
    background-color: #ffc600;
    padding: 2px 4px;
    border-radius: 4px;
    margin-bottom: 2px;
    display: block;
    width: max-content;
  }

  &__schedule {
    text-align: end;
  }
}

.navigation {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #e7e7e7;
  padding-top: $section-padding;
  gap: 20px;
  margin-top: $section-padding;

  &__counter {
    font-size: 1.2rem;
    color: #fff;
    min-width: 60px;
    text-align: center;
  }

  &__buttons {
    display: flex;
    gap: 20px;
  }

  &__button {
    width: 40px;
    height: 40px;
    border: 1px solid #fff;
    border-radius: 50%;
    background: #ffc600;
    fill: #fff;
    cursor: pointer;
    display: flex;
    transition: opacity 0.3s ease;

    svg {
      height: 100%;
      width: 100%;
    }

    &--left {
      transform: rotate(180deg);
    }

    &--disabled {
      opacity: 0.6;
    }
  }
}
</style>
