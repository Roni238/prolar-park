// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/styles/global.scss'],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "~/styles/variables.scss" as *;
            @use "~/styles/mixins.scss" as *;
          `,
        },
      },
    },
  },

  app: {
    head: {
      title: 'Prolar: аренда авто в Москве',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Аренда авто для работы в такси в Москве. Первый день аренды — бесплатно!',
        },
        { name: 'theme-color', content: '#ffc600' },
        { name: 'lang', content: 'ru' },

        { property: 'og:site_name', content: 'Prolar: аренда авто в Москве' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'ru_RU' },

        // Динамические теги будут переопределены на конкретных страницах
        { property: 'og:title', content: 'Prolar: аренда авто в Москве' },
        {
          property: 'og:description',
          content: 'Первый день аренды — бесплатно!',
        },
        { property: 'og:image', content: 'https://site.com/default-image.jpg' },
        { property: 'og:url', content: 'https://prolar.ru' },
      ],
      link: [
        // Пример добавления favicon
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },

  compatibilityDate: '2025-05-09',
})
