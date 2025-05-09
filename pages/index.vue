<template>
  <main class="main">
    <MainBanner class="main__banner" />
    <MainAdvantages class="main__advantages" />
    <MainAbout class="main__about" />
    <MainCatalog class="main__catalog" />
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
}
</style>
