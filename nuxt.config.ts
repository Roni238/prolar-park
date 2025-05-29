export default defineNuxtConfig({
  devtools: { enabled: false },
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
      htmlAttrs: {
        lang: 'ru',
        dir: 'ltr',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Аренда авто для работы в такси в Москве. Первый день аренды — бесплатно!',
        },
        { name: 'theme-color', content: '#ffc600' },

        { property: 'og:site_name', content: 'Prolar: аренда авто в Москве' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'ru_RU' },
        { property: 'og:title', content: 'Prolar: аренда авто в Москве' },
        {
          property: 'og:description',
          content: 'Первый день аренды — бесплатно!',
        },
        {
          property: 'og:image',
          content: 'https://taxi-swart.vercel.app/ad.jpg',
        },
        { property: 'og:url', content: 'https://prolar.ru' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },
  experimental: {
    payloadExtraction: false,
  },

  compatibilityDate: '2025-05-09',
})
