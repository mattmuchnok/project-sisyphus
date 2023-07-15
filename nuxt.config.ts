// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  modules: [
    '@sidebase/nuxt-auth',
    '@pinia/nuxt'
  ],
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    example: 'example',
    public: {
      github: {
        clientId: 'undefined',
        clientSecret: 'undefined'
      }
    }
  },
  pinia: {
    autoImports: [
      'defineStore'
    ],
  },
})
