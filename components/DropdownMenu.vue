<template>
  <div
    v-if="isOpen"
    class="dropdown"
    role="dialog"
    aria-modal="true"
    :aria-hidden="!isOpen"
    @keydown.esc="closeDropdown"
  >
    <transition name="dropdown" appear>
      <div class="dropdown__content">
        <nav class="nav" aria-label="Основное меню">
          <ul class="nav__list">
            <li>
              <NuxtLink to="/#about" @click="closeDropdown"> О нас </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/#catalog" @click="closeDropdown">
                Каталог авто
              </NuxtLink>
            </li>
          </ul>
        </nav>

        <div class="contacts">
          <a
            class="contacts__link"
            href="https://wa.me/79309993344"
            aria-label="Написать в WhatsApp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              class="contacts__link-icon"
              aria-hidden="true"
              focusable="false"
            >
              <title>WhatsApp</title>
              <use href="/icons.svg#whatsapp-icon" />
            </svg>
          </a>

          <a
            class="contacts__link"
            href="https://t.me/Roni238000000"
            aria-label="Написать в Telegram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              class="contacts__link-icon"
              aria-hidden="true"
              focusable="false"
            >
              <title>Telegram</title>
              <use href="/icons.svg#telegram-icon" />
            </svg>
          </a>

          <a
            href="tel:+79309993344"
            class="contacts__link--phone"
            aria-label="Позвонить по номеру +7 930 999-33-44"
          >
            +7-930-999-33-44
          </a>
        </div>
      </div>
    </transition>
    <div class="dropdown__overlay" @click="closeDropdown" aria-hidden="true" />
  </div>
</template>

<script setup>
const props = defineProps({
  isOpen: Boolean,
})

const emit = defineEmits(['close'])

const closeDropdown = () => emit('close')
</script>

<style scoped lang="scss">
.dropdown {
  width: 100%;
  font-weight: 600;
  font-size: 1.25rem;

  @include tablet {
    display: none;
  }
  &__overlay {
    position: fixed;
    inset: 60px 0 0 0;
    z-index: -1;
    background-color: rgba(0, 0, 0, 0.5);
  }

  &__content {
    background: white;
    box-shadow: 0px 10px 10px 0px rgba(15, 16, 17, 0.1);
    padding: 20px;
  }
}

.contacts {
  display: flex;
  align-items: center;
  gap: 16px;
  padding-top: 16px;
  border-top: 1px solid #eee;

  &__link-icon {
    height: 35px;
    width: 35px;
    flex-shrink: 0;
  }
  &__link {
    &--phone {
      margin-left: auto;
    }
  }
}

.nav {
  margin-bottom: 24px;
  &__list {
    flex-direction: column;
    gap: 16px;
  }
}

.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.3s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
