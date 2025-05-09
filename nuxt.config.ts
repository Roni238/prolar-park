// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
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
  // app: {
  //   baseURL: '/nuxt-taxi/',
  // },
})
