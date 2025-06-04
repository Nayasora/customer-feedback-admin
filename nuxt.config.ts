// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  css: ['~/assets/css/tailwind.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  shadcn: {
    prefix: '',
    componentDir: './components/ui'
  },

  modules: [
    '@nuxt/ui',
    '@nuxt/test-utils',
    '@nuxt/scripts',
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxt/fonts',
    '@nuxt/eslint',
    '@nuxt/content',
    'shadcn-nuxt',
    '@nuxt/content'
  ]
})