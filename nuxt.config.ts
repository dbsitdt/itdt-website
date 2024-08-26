// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  components: [
    { path: "~/components/landing", pathPrefix: false },
    { path: "~/components/ui", pathPrefix: false },
    { path: "~/components/layout", pathPrefix: false },
    { path: "~/components/credits", pathPrefix: false },

    "~/components",
  ],

  app: {
    head: {
      title: "IT Development Team",
      meta: [
        {
          name: "description",
          content:
            "Official Site of Diocesan Boys' School's IT Development Team",
        },
      ],
      link: [
        { rel: "icon", type: "image/svg+xml", href: "favicon.svg" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap",
        },
      ],
    },
  },

  modules: ["@pinia/nuxt", "nuxt-api-shield"],
  compatibilityDate: "2024-08-25",
  runtimeConfig: {
    dbURL: process.env.MONGODB_URL,
    dbPassword: process.env.MONGODB_PASSWORD,
  },
});
