import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-01-01",
  devtools: { enabled: true },

  modules: ["@nuxtjs/seo"],

  css: ["@/assets/css/main.css"],

  vite: {
    plugins: [tailwindcss()],
  },

  site: {
    url: "https://manga-umber-rho.vercel.app/", // the real domain when you have it
    name: "InQu",
    description:
      "Custom anime character illustrations, portraits, and reference sheets by InQu — commissions and the webtoon Nutcases.",
    defaultLocale: "en",
  },

  // nuxt.config.ts
  robots: {
    blockAiBots: true, // blocks GPTBot, ClaudeBot, PerplexityBot, etc. — keeps Google/Bing
  },

  app: {
    head: {
      htmlAttrs: { lang: "de" },
      link: [
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        { rel: "icon", type: "image/x-icon", href: "/favicon", sizes: "any" },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "192x192",
          href: "/icon-192.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "512x512",
          href: "/icon-512.png",
        },
      ],
    },
  },
});
