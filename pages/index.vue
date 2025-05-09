<template>
  <main class="main">
    <MainBanner id="banner" class="main__banner" />
    <MainAdvantages class="main__advantages" />
    <MainAbout id="about" class="main__about" />
    <MainCatalog id="catalog" class="main__catalog" />
  </main>
</template>

<script setup></script>

<style lang="scss" scoped>
.main {
  &__banner {
    margin-bottom: 30px;
  }
  &__advantages,
  &__about,
  &__catalog {
    padding-block: 30px;
    //margin-bottom: 60px;
  }
  &__about {
    margin-bottom: 30px;
  }
}
#about,
#catalog,
#banner {
  scroll-margin-top: 70px;
}
</style>
