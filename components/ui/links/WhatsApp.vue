<template>
  <a
    :class="$attrs.class || 'whatsapp'"
    href="https://wa.me/79309993344"
    aria-label="Написать в WhatsApp"
    target="_blank"
    rel="noopener noreferrer"
  >
    <svg aria-hidden="true" focusable="false">
      <title>WhatsApp</title>
      <use href="/icons.svg#whatsapp-icon" />
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
