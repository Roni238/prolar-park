<template>
  <section class="catalog">
    <div class="catalog__container">
      <h2 class="catalog__title">КАТАЛОГ АВТО</h2>

      <div class="swiper-container">
        <Swiper
          :modules="[Navigation]"
          :space-between="20"
          :breakpoints="{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }"
          navigation
          pagination
        >
          <SwiperSlide
            v-for="(car, index) in cars"
            :key="`${car.model}-${index}`"
          >
            <header class="swiper-slide__header">
              <div>
                <h4 class="swiper-slide__title">{{ car.model }}</h4>
                <p class="swiper-slide__trim">{{ car.trim }}</p>
              </div>

              <p class="swiper-slide__schedule">
                график <br />
                {{ car.schedule }}
              </p>
            </header>
            <img
              :src="`/cars/${car.image}`"
              :alt="car.model"
              class="swiper-slide__image"
              @error="handleImageError"
            />
            <footer class="swiper-slide__footer">
              <mark class="swiper-slide__price-day">
                {{ car.price_per_day }} ₽ в сутки
              </mark>
              <p>от {{ car.price_per_week }} ₽ в неделю</p>
              <p class="swiper-slide__availability">{{ car.availability }}</p>
            </footer>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'

// Стили
import 'swiper/css'
import 'swiper/css/navigation'
import cars from 'public/cars.json'
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
  position: relative;
  white-space: pre-line;
  border: 2px solid transparent;

  &:hover {
    transition: border 0.3s ease;
    border-color: black;
  }
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
  }
  &__price-day {
    font-size: 1.2rem;
    background-color: #ffc600;
    padding: 2px 4px;
    border-radius: 4px;
  }
  &__schedule {
    text-align: end;
  }
}

:deep(.swiper-button-prev),
:deep(.swiper-button-next) {
  color: #000;
}
</style>
