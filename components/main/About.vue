<template>
  <section class="about">
    <div class="about__container">
      <h2 class="about__title">О НАС</h2>
      <div class="about__content">
        <p class="about__discription">
          Компания Пролар работает на рынке в сфере аренды авто с 2019 года. За
          это время мы смогли заслужить доверие и уважение среди водителей.
          Подтверждением тому является большое количество не сменяемых
          водителей, которые работают с нами уже долгие годы, а многие и со дня
          открытия. Автопарк Пролар гарантирует профессиональный и строгий
          подход к своей работе, что позволяет водителям ездить на надежных,
          своевремменно и качественно обслуживанных автомобилях. Все это в
          комплексе обеспечивает водителю и пассажиру спокойные, комфортные
          поездки. Вместе с тем, мы выстраиваем человеческие отношения с
          водителями и создаем комфортные условия труда и заработка. Автопарк
          Пролар - мы ценим и держимся за каждого водителя!
        </p>

        <div class="about__stats">
          <div class="stat">
            <strong class="stat__title">5+</strong>
            <p class="stat__discription">Лет на рынке</p>
          </div>
          <div class="stat">
            <strong class="stat__title">1500+</strong>
            <p class="stat__discription">
              Довольных <br />
              клиентов
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.about {
  &__container {
    @include container;
  }

  &__content {
    display: flex;
    flex-direction: column-reverse;
    gap: 1.5rem;
    @include laptop {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }

  &__title {
    margin-bottom: 1.5rem;
  }

  &__discription {
    text-align: center;
  }
  &__stats {
    display: flex;
    justify-content: space-evenly;
    @include tablet {
      align-items: center;
    }
  }
}

.stat {
  text-align: center;

  &__title {
    color: $main-color;
    font-size: 1.5rem;
    margin-bottom: 10px;
  }

  &__discription {
    font-weight: bold;
  }
}
</style>
