// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],

  nitro: {
    preset: 'vercel-edge', // you can use 'vercel' or other providers here
  },

  runtimeConfig: {
    deepseekApiKey: process.env.DEEPSEEK_API_KEY || '',
    assistantId: process.env.ASSISTANT_ID || '',
  },

  compatibilityDate: '2024-07-05',
  telemetry: false,
});
