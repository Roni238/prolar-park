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
      title: 'Prolar: аренда авто',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Аренда такси в вашем городе' },
        { name: 'theme-color', content: '#ffc600' },
        { name: 'lang', content: 'ru' },
      ],
      link: [
        // Пример добавления favicon
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },

  compatibilityDate: '2025-05-09',
})