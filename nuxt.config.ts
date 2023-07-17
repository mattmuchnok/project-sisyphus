// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    // pageTransition: { name: 'page', mode: 'out-in' }
    head: {
      link: [{ rel: 'stylesheet', href: 'https://rsms.me/inter/inter.css' }]
    }
  },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/supabase',
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
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
