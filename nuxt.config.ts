import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  devtools: { enabled: true },

  modules: [
    '@primevue/nuxt-module',
    '@nuxtjs/google-fonts'
  ],

  css: ['@/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()]
  },

    app: {
    head: {
      htmlAttrs: { lang: 'de' },
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/icon-192.png' },
        { rel: 'icon', type: 'image/png', sizes: '512x512', href: '/icon-512.png' }
      ]
    }
  },


  primevue: {
    options: {
      unstyled: true
    }
  },

  googleFonts: {
    families: {
      Fraunces: [400, 500, 600, 700],
      'Work Sans': [400, 500, 600, 700],
      'IBM Plex Mono': [500]
    },
    display: 'swap'
  }
})
