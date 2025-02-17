import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  serverMiddleware: [
    {
      path: '/api',
      handler: '~/server/index.ts',
    },
  ],
  css: ['~/assets/style/common.less'],
  modules: ['@unocss/nuxt'],
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
})
