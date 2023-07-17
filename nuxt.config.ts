export default defineNuxtConfig({
  ssr: true,

  app: {
    pageTransition: {
      name: 'fade',
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
    '@vueuse/nuxt',
    '@vueuse/motion/nuxt',
    // 'nuxt-og-image',
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
  // ogImage: {
  //   fonts: [
  //     {
  //       name: 'Avenir',
  //       weight: 400,
  //       // path must point to a public font file
  //       path: '/fonts/670c4af6-0f8f-4dfa-89d7-0213a1f77b7d.woff2',
  //     },
  //     {
  //       name: 'Cinzel',
  //       weight: 400,
  //       // path must point to a public font file
  //       path: '/fonts/Cinzel-Regular.woff2',
  //     }
  //   ],
  // },
  plausible: {
    domain: 'frayednot.net',
  },

  runtimeConfig: {
    public: {
      directusUrl: 'https://admin.frayednot.net',
      plausible: {
        domain: 'frayednot.net',
      },
      motion: {
        directives: {
          'pop-bottom': {
            initial: {
              scale: 0,
              opacity: 0,
              y: 100,
            },
            visible: {
              scale: 1,
              opacity: 1,
              y: 0,
            }
          }
        }
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
    transpile: ['swiper', '@vueuse/core', '@sendgrid/mail'],
  },

  vite: {
    optimizeDeps: {
      include: ['vue', 'pinia'],
    },
  },

  // plugins: ['~/plugins/socialShare.ts']
  devtools: true,

  plugins: [
    '~/plugins/socialShare.ts',
    '~/plugins/preview.js',
    '~/plugins/directus.js'
  ]
})
