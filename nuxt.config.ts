// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/google-fonts"],
  css: [
    "bootstrap/dist/css/bootstrap.min.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],
  googleFonts: {
    families: { "Readex Pro": true, Cairo: true },
    display: "swap",
  },
});
