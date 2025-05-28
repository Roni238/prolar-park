<template>
  <a
    :class="$attrs.class || 'telegram'"
    href="https://t.me/ParkProlar"
    aria-label="Написать в Telegram"
    target="_blank"
    rel="noopener noreferrer"
  >
    <svg aria-hidden="true" focusable="false">
      <title>Telegram</title>
      <use href="/icons.svg#telegram-icon" />
    </svg>
  </a>
</template>

<script setup></script>

<style lang="scss" scoped>
svg {
  height: 40px;
  width: 40px;
}
</style>
