import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-01-01",
  devtools: { enabled: true },

  modules: ["@nuxtjs/seo", "@nuxt/image"],

  css: ["@/assets/css/main.css"],

  vite: {
    plugins: [tailwindcss()],
  },

  //TODO: add real data (address, phone, country — check AT vs DE)

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

  ogImage: { enabled: false },

  schemaOrg: {
    identity: {
      type: "PetGroomer", // more specific sub-type of LocalBusiness — tells Google exactly what kind of business
      name: "Bei Momo",
      url: "https://dog-grooming-salon-flame.vercel.app",
      logo: "https://dog-grooming-salon-flame.vercel.app/icon-512.png",
      image: "https://dog-grooming-salon-flame.vercel.app/icon-512.png",
      address: {
        streetAddress: "Musterstraße 1",
        addressLocality: "Musterstadt",
        postalCode: "12345",
        addressCountry: "AT",
      },
      telephone: "+43 ...",
      priceRange: "€€",
      openingHoursSpecification: [
        {
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "18:00",
        },
      ],
    },
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