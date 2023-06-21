export default defineNuxtConfig({
  ssr: true,

  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in',
    },
    head: {
      link: [
        {
          rel: 'preconnect',
          href: 'https://admin.frayednot.net',
          crossorigin: 'true',
        },
        {
          rel: 'preconnect',
          href: 'https://fast.fonts.net',
          crossorigin: 'true',
        },
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico',
        },
        {
          rel: 'apple-touch-icon',
          sizes: '57x57',
          href: '/apple-icon-57x57.png',
        },
        {
          rel: 'apple-touch-icon',
          sizes: '60x60',
          href: '/apple-icon-60x60.png',
        },
        {
          rel: 'apple-touch-icon',
          sizes: '72x72',
          href: '/apple-icon-72x72.png',
        },
        {
          rel: 'apple-touch-icon',
          sizes: '76x76',
          href: '/apple-icon-76x76.png',
        },
        {
          rel: 'apple-touch-icon',
          sizes: '114x114',
          href: '/apple-icon-114x114.png',
        },
        {
          rel: 'apple-touch-icon',
          sizes: '120x120',
          href: '/apple-icon-120x120.png',
        },
        {
          rel: 'apple-touch-icon',
          sizes: '144x144',
          href: '/apple-icon-144x144.png',
        },
        {
          rel: 'apple-touch-icon',
          sizes: '152x152',
          href: '/apple-icon-152x152.png',
        },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-icon-180x180.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '192x192',
          href: '/android-icon-192x192.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon-32x32.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '96x96',
          href: '/icons/favicon-96x96.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon-16x16.png',
        },
        {
          rel: 'manifest',
          href: '/manifest.json',
        },
      ],
    },
  },
  css: [
    {
      src: '~/assets/css/main.css',
      lang: 'postcss',
    },
  ],

  imports: {
    dirs: ['stores'],
  },

  buildModules: ['@vueuse/nuxt'],

  modules: [
    '@nuxt/devtools',
    '@nuxtjs/tailwindcss',
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', 'acceptHMRUpdate'],
      },
    ],
    [
      '@vee-validate/nuxt',
      {
        // disable or enable auto imports
        autoImports: true,
        // Use different names for components
        componentNames: {
          Form: 'VeeForm',
          Field: 'VeeField',
          ErrorMessage: 'VeeErrorMessage',
        },
      },
    ],
    'nuxt-directus',
    'nuxt-icons',
  ],

  devtools: {
    // Enable devtools (default: true)
    enabled: true,
    // VS Code Server options
    vscode: {
      
    },
    // ...other options
  },
  plausible: {
    domain: 'frayednot.net',
  },

  directus: {
    url: 'https://admin.frayednot.net',
  },

  runtimeConfig: {
    public: {
      directusUrl: 'https://admin.frayednot.net',
      plausible: {
        domain: 'frayednot.net',
      },
    },
  },

  postcss: {
    plugins: {
      'postcss-import': {},
      'tailwindcss/nesting': {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  build: {
    transpile: ['swiper', '@sendgrid/mail'],
  },

  vite: {
    optimizeDeps: {
      include: ['vue', 'pinia'],
    },
  },

  devtools: true,
  // plugins: ['~/plugins/socialShare.ts']
})
