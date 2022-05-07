import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  runtimeConfig: {
    // strapiApiKey: process.env.NUXT_STRAPI_API_KEY,
    public: {
      strapiUrl: process.env.STRAPI_URL || "http://localhost:1337",
    },
  },
  buildModules: ["@nuxtjs/tailwindcss"],
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300&family=Prompt:wght@200;300;400;800&display=swap",
        },
      ],
    },
  },
});
