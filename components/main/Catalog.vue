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
          @swiper="setSwiperInstance"
          @slide-change="updatePagination"
        >
          <SwiperSlide
            v-for="(car, index) in cars"
            :key="`${car.model}-${index}`"
          >
            <!-- Ваш контент слайдов -->
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
        <div class="pagination-wrapper">
          <div class="pagination">{{ currentSlide }} из {{ totalSlides }}</div>
          <div class="buttons">
            <button @click="slidePrev" class="pagination__button--left">
              <svg>
                <use xlink:href="/icons.svg#arrow"></use>
              </svg>
            </button>
            <button @click="slideNext" class="pagination__button">
              <svg>
                <use xlink:href="/icons.svg#arrow"></use>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'

// Стили
import 'swiper/css'
import 'swiper/css/navigation'
import cars from 'public/cars.json'

const swiperInstance = ref(null)
const currentSlide = ref(1)
const totalSlides = ref(0)

const setSwiperInstance = (swiper) => {
  swiperInstance.value = swiper
  totalSlides.value = swiper.slides.length
}

const updatePagination = () => {
  if (swiperInstance.value) {
    currentSlide.value = swiperInstance.value.activeIndex + 1
  }
}

const slidePrev = () => {
  if (swiperInstance.value) {
    swiperInstance.value.slidePrev()
  }
}

const slideNext = () => {
  if (swiperInstance.value) {
    swiperInstance.value.slideNext()
  }
}

const handleImageError = (event) => {
  console.error('Image failed to load:', event.target.src)
  event.target.src = '/path/to/placeholder.jpg'
}

onMounted(() => {
  if (swiperInstance.value) {
    totalSlides.value = swiperInstance.value.slides.length
  }
})
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

.pagination-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #e7e7e7;
  padding-top: $section-padding;
  gap: 20px;
  margin-top: $section-padding;
}

.pagination {
  font-size: 1.2rem;
  color: #fff;
  min-width: 60px;
  text-align: center;

  &__button {
    &--left {
      transform: rotate(180deg);
    }
  }
}

.buttons {
  display: flex;
  gap: 20px;

  button {
    width: 40px;
    height: 40px;
    border: 1px solid #fff;
    border-radius: 50%;
    background: #ffc600;
    fill: #fff;
    cursor: pointer;
    display: flex;

    svg {
      height: 100%;
    }
  }
}
</style>
