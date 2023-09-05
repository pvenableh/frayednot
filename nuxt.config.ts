export default defineNuxtConfig({
  ssr: true,
  nitro: {
    preset: "vercel",
  },
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
    '@nuxtjs/plausible',
    '@nuxtjs/tailwindcss',
    // '@vite-pwa/nuxt',
    '@vueuse/nuxt',
    '@vueuse/motion/nuxt',
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
  // pwa: {
  //   registerType: 'autoUpdate',
  //   manifest: {
  //     name: 'frayednot',
  //     short_name: 'frayednot',
  //     theme_color: '#ffffff',
  //     display: 'standalone',
  //     id: '/?source=pwa',
  //     start_url: '/?source=pwa',
  //     icons: [
  //       {
  //         src: 'android-icon-192x192.png',
  //         sizes: '192x192',
  //         type: 'image/png',
  //       },
  //       {
  //         src: 'apple-icon-180x180.png',
  //         sizes: '180x180',
  //         type: 'image/png',
  //       },
  //       {
  //         src: 'apple-icon-180x180.png',
  //         sizes: '180x180',
  //         type: 'image/png',
  //         purpose: 'any maskable',
  //       },
  //     ],
  //   },
  //   workbox: {
  //     navigateFallback: '/',
  //     globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
  //   },
  //   client: {
  //     installPrompt: true,
  //     periodicSyncForUpdates: 20,
  //   },
  //   devOptions: {
  //     enabled: true,
  //     suppressWarnings: true,
  //     navigateFallbackAllowlist: [/^\/$/],
  //     type: 'module',
  //   },
  // },
  devtools: {
    // Enable devtools (default: true)
    enabled: true,
    // VS Code Server options
    vscode: {
      
    },
  },
  plausible: {
    domain: 'frayednot.net',
  },

  // pk_test_51NYWsGF0lK6IMCafXWFA8Ehh0Zg2cr8N0jDToR7Bx4o6xgdJptmH62VaY20kzU3p0uS4U0jnMJZAay2oA51ncHNN00DGYG68sc
  // sk_test_51NYWsGF0lK6IMCafZk3rSLVAqCUA9HS7c3tG3XNF7kcs1uhbI9wGDNgyZoPcWiFnHitALS4qa2k5Pt3iaAxTf8LW00kEbGEx8s
  runtimeConfig: {
    stripeSecret:'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',
    public: {
      stripePublic: 'pk_live_51NYWsGF0lK6IMCafvXu0klUufe29TqQKWOJoF2XeDSwKFXoZ3B6AKTwChfI7hy9ZC7dZbhgk2G0hLHheZOS8BGuN00PQ99Sz4o',
      directusUrl: 'https://admin.frayednot.net',
      plausible: {
        domain: 'frayednot.net',
      },
      seo: {
        title: 'frayednot | Residential Audio/Visual Automation Design and Integration |  Cranford, NJ',
        description: 'frayednot strives to create custom, sophisticated, seamless yet simple-to-use, integrated home audio/video systems. No project has been the same, it is always custom to fit the experience you envision.',
        image: 'https://admin.frayednot.net/assets/c8815096-10a9-4613-b948-177069deb786',
        url: 'https://frayednot.net',
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
    transpile: ['swiper', '@vueuse/core', 'vue-toastification', '@sendgrid/mail'],
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
