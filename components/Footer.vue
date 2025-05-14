<template>
  <footer class="footer">
    <div class="footer__container">
      <UiLogo class="footer__logo" />

      <div class="footer__content">
        <div class="footer__contacts">
          <a
            href="tel:+79309993344"
            class="footer__link footer__link--phone"
            aria-label="Позвонить по номеру +7 930 999-33-44"
          >
            Телефон для связи: <br />
            +7-930-999-33-44
          </a>

          <ul class="footer__social">
            <li>
              <a
                class="footer__link"
                href="https://wa.me/79309993344"
                aria-label="Написать в WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  class="footer__link-icon"
                  aria-hidden="true"
                  focusable="false"
                >
                  <title>WhatsApp</title>
                  <use href="/icons.svg#whatsapp-icon" />
                </svg>
              </a>
            </li>
            <li>
              <a
                class="footer__link"
                href="https://t.me/Roni238000000"
                aria-label="Написать в Telegram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  class="footer__link-icon"
                  aria-hidden="true"
                  focusable="false"
                >
                  <title>Telegram</title>
                  <use href="/icons.svg#telegram-icon" />
                </svg>
              </a>
            </li>
          </ul>
        </div>

        <div class="footer__requisites">
          <p>
            Мы находимся: <br />
            г. Москва, ул. Шоссейная, д.90, стр.5
          </p>
          <p class="footer__address-title">
            Юридический адрес: <br />
            115035 г. Москва, ул. Космодамианская наб., д.52, к.Б, пом.8Н
          </p>
          <p>ИНН: 9705183857</p>
          <p>ОГРН: 1197746538560</p>
        </div>
      </div>
    </div>
    <p class="footer__copyright">© 2025 ООО «ПРОЛАР». Все права защищены.</p>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  padding-block: $section-padding;
  font-size: 0.875rem;
  line-height: 1.5;

  &__container {
    display: flex;
    flex-direction: column;
    @include container;
  }

  &__content {
    display: flex;
    flex-direction: column;
    @include tablet {
      flex-direction: row-reverse;
      justify-content: space-between;
    }
  }
  &__logo {
    margin-bottom: 12px;
    @include tablet {
      margin: 0px;
    }
  }

  &__contacts {
    padding-block: 12px;
    border-block: 1px solid $main-color;
    display: flex;
    gap: 0.5rem;

    @include tablet {
      border: none;
      flex-direction: column;
    }
  }
  &__social {
    justify-content: end;
    gap: 0.5rem;
  }
  &__link {
    &--phone {
      font-weight: bold;
      margin-right: auto;
    }
    &:hover {
      color: $main-color;
      fill: $main-color;
    }
  }
  &__link-icon {
    height: 35px;
    width: 35px;
  }
  &__requisites {
    padding: 12px 0px;
  }

  &__copyright {
    text-align: center;
    margin-top: 16px;
  }
}
</style>
