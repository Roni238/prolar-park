<template>
  <section class="advantages">
    <div class="advantages__container">
      <h2 class="advantages__title">НАШИ ПРЕИМУЩЕСТВА</h2>

      <div class="advantages__list">
        <div class="advantages__item" v-for="item in items" :key="item.title">
          <h3 class="advantages__item-title">{{ item.title }}</h3>
          <p class="advantages__item-discription">
            {{ item.discription }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const items = [
  {
    title: 'Официальный партнер Яндекс Go Такси',
    discription: `Мы сотрудничаем с Яндекс GO, чтобы обеспечить вам стабильные заказы, честные тарифы и прозрачные условия работы. Водите с уверенностью в завтрашнем дне!`,
  },
  {
    title: 'Первый день аренды — бесплатно!',
    discription: `Попробуйте наш авто без риска \n — первый день аренды за наш счет!
        \n Оцените комфорт и надежность, прежде чем принимать решение.`,
  },
  {
    title: '100% юридическая чистота',
    discription: `Все документы проверены, никаких скрытых штрафов или проблем с ГИБДД. \n\n Вы получаете машину с полным пакетом официальных бумаг.`,
  },
  {
    title: 'Без ограничений по пробегу',
    discription: `Ездите сколько нужно \n— мы не ограничиваем километраж.\n\n Ваша прибыль зависит только от вашей активности!`,
  },
  {
    title: 'Ремонт и обслуживание за счет парка',
    discription: `Все техническое обслуживание и ремонт мы берем на себя. \n\n Ваша задача — зарабатывать, а не переживать за состояние авто.`,
  },
  {
    title: 'Моментальный вывод средств',
    discription: `Получайте заработанное без задержек.\n\n Вывод денег на карту или электронный кошелек в течение нескольких минут.`,
  },
  {
    title: 'Никаких скрытых платежей',
    discription: `Честные условия без неожиданных доплат.\n\n Вы платите только за аренду — все остальные расходы уже включены.`,
  },
]
</script>

<style lang="scss" scoped>
.advantages {
  &__container {
    @include container;
  }
  &__title {
    margin-bottom: 1.5rem;
  }

  &__list {
    margin: auto;
    display: grid;
    gap: clamp(16px, 3.5vw, 40px);
    grid-template-columns: 1fr;
    @include tablet {
      grid-template-columns: repeat(2, 1fr);
    }
    @include laptop {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  &__item {
    padding: 14px;
    border-left: $main-color solid 5px;
    box-shadow: 0px 10px 10px 0px rgba(15, 16, 17, 0.1);
    border-radius: 10px;
    box-sizing: border-box;
    white-space: pre-line;

    @include tablet {
      padding: 18px;
    }
    @include laptop {
      padding: 18px 22px;
    }

    &-discription {
      margin-top: 1rem;
    }
    &:first-child {
      grid-column: 1 / -1;
      color: #fff;
      text-align: center;
      border-radius: 20px;
      border: none;
      background: radial-gradient(
        circle,
        rgba(255, 198, 0, 1) 30%,
        rgba(255, 213, 69, 1) 70%
      );
    }
  }
}
</style>
