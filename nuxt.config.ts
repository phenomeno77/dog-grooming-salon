import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-01-01",
  devtools: { enabled: true },

  modules: ["@nuxtjs/seo"],

  css: ["@/assets/css/main.css"],

  vite: {
    plugins: [tailwindcss()],
  },

  site: {
    url: "https://dog-grooming-salon-flame.vercel.app", // no trailing slash; swap for real domain
    name: "Bei Momo",
    description:
      "Hundesalon Bei Momo in Musterstadt: Fellpflege ohne Zeitdruck, handgemachte Halsbänder und Leinen sowie das Momo-Programm für deinen Vierbeiner.",
    defaultLocale: "de",
  },

  sitemap: {
    exclude: ["/impressum", "/datenschutz", "/agb"],
  },

  //TODO: add real data (address, phone, country — check AT vs DE)
  schemaOrg: {
    identity: {
      type: "LocalBusiness",
      name: "Bei Momo",
      url: "https://dog-grooming-salon-flame.vercel.app",
      logo: "https://dog-grooming-salon-flame.vercel.app/icon-512.png",
      address: {
        streetAddress: "Musterstraße 1",
        addressLocality: "Musterstadt",
        postalCode: "12345",
        addressCountry: "AT",
      },
      telephone: "+43 ...",
    },
  },

  app: {
    head: {
      htmlAttrs: { lang: "de" },
      link: [
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.ico",
          sizes: "any",
        },
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
