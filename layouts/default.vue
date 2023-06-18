<template>
  <div
    class="min-h-screen w-full transition duration-150 bg-white overflow-hidden flex items-center justify-start flex-col relative">
    <input id="nav-drawer-toggle" type="checkbox" class="hidden" />
    <input id="profile-toggle" type="checkbox" class="hidden" />
    <input id="application-toggle" type="checkbox" class="hidden" />
    <div class="w-full flex items-center justify-center flex-col min-h-screen page__content">
      <LayoutHeader />
      <div class="w-full mx-auto min-h-screen relative">
        <slot />
      </div>
      <LayoutFooter />
    </div>
    <transition name="screen">
      <LayoutScreen v-if="screen" />
    </transition>
    <LayoutNavDrawer />
    <TeamProfile />
    <Application />
  </div>
</template>
<script>
import { screen } from '~~/composables/useScreen'
useSeoMeta({
  title: 'Rosen Kelly Conway Architecture & Design Firm | Residential / Commercial | Summit NJ',
  ogTitle: 'Rosen Kelly Conway Architecture & Design Firm | Residential / Commercial | Summit NJ',
  description: 'Rosen Kelly Conway Architecture & Design: Embracing design heritage with a modern vision.',
  ogDescription: 'Rosen Kelly Conway Architecture & Design: Embracing design heritage with a modern vision.',
  ogImage: 'https://rkcad.com/images/fb-image.jpg',
  ogUrl: 'https://rkcad.com',
  twitterCard: 'summary_large_image',
})
</script>

<style>
.page__header-placeholder {
  height: 550px;
   
    overflow: hidden !important;
    @apply  w-full flex items-end justify-center overflow-hidden relative;

    @media (min-width: theme('screens.sm')) {
      height: 550px;
    }

    @media (min-width: theme('screens.md')) {
      height: 600px;
    }

    @media (min-width: theme('screens.lg')) {
      height: calc(100vh);
   
    }
}
.page {
  overflow: hidden;
  width: 100%;

  &__content {
    transition: all 0.65s var(--curve);

  }

  &__header {
    height: 550px;
    background-color: rgba(0, 0, 0, 0.35);
    background-blend-mode: darken;
    overflow: hidden !important;
    @apply bg-cover bg-center bg-no-repeat w-full flex items-end justify-center overflow-hidden relative;

    @media (min-width: theme('screens.sm')) {
      height: 550px;
    }

    @media (min-width: theme('screens.md')) {
      height: 600px;
    }

    @media (min-width: theme('screens.lg')) {
      height: calc(100vh);
   
    }

    #rkc-bg-icon-2 {
      top: 0px;
      left: calc(50% - 48vw);
      height: 96vh;
      width: 96vw;
      transition: all 0.35s var(--curve);
      /* fill: rgba(167, 169, 172, 0.075); */
      fill: rgba(255, 255, 255, 0.075);
      @apply fixed;

      path {
        /* fill: rgba(167, 169, 172, 0.1); */
        fill: rgba(255, 255, 255, 0.05);

        @media (min-width: theme('screens.lg')) {
          fill: rgba(255, 255, 255, 0.025);
        }
      }
    }

    h1 {
      font-size: 36px;
      line-height: 46px;
      color: var(--white);
      /* margin-bottom: 50px; */
      font-family: var(--light-font);
      transition: all 0.4s var(--curve) 0.1s;
      letter-spacing: 0.1em;
      padding-left: 15px;
      padding-right: 15px;

      @media (min-width: theme('screens.sm')) {
        padding-left: 35px;
        padding-right: 35px;
      }

      @apply max-w-7xl w-full uppercase py-4;

      @media (min-width: theme('screens.md')) {
        font-size: 66px;
        line-height: 66px;
      }

      @media (min-width: theme('screens.lg')) {
        font-size: 78px;
        line-height: 76px;
      }
    }
  }

  &__body {
    z-index: 10;
    /* background: var(--white); */
    padding-left: 15px;
    padding-right: 15px;

    @media (min-width: theme('screens.sm')) {
      padding-left: 35px;
      padding-right: 35px;
    }

    @apply max-w-7xl;

    &-header {
      @apply mt-20;
      &-subtitle {
        font-size: 10px;
        line-height: 2rem;
        @apply font-bold tracking-wider;
      }

      &-title {

        font-size: 36px;
        line-height: 42px;
        font-family: var(--light-font);
        @apply font-light tracking-wide mb-8;

        @media (min-width: theme('screens.lg')) {
          font-size: 42px;
          line-height: 46px;
        }

        @media (min-width: theme('screens.xl')) {
          /* font-size: 50px;
          line-height: 58px; */
        }
      }
      .rkc-link {
        @apply inline-block;
      }

      &-intro {
        width: 100%;
        max-width: 375px;
      }
    }

  }
}



.rkc-bg-icon {
  height: 96vh;
  width: 96vw;
  transition: all 0.35s var(--curve);
  /* fill: rgba(167, 169, 172, 0.125);
  fill: rgba(167, 169, 172, 1); */
  @apply fixed;

  path {
    fill: rgba(167, 169, 172, 0.025);
    animation: icon-animation 10s ease-in-out infinite;

    @media (min-width: theme('screens.lg')) {
      fill: rgba(167, 169, 172, 0.05);
    }
  }

  /* path:nth-of-type(1) {
    animation-delay: 0.1s;
  } */
  path:nth-of-type(2) {
    animation-delay: 0.4s;
  }

  path:nth-of-type(3) {
    animation-delay: 0.8s;
  }
}

@keyframes icon-animation {
  0% {
    fill: rgba(167, 169, 172, 0.05);
  }

  50% {
    fill: rgba(167, 169, 172, 0.015);
  }

  100% {
    fill: rgba(167, 169, 172, 0.05);
  }
}

#rkc-bg-icon.colored {
  fill: rgba(98, 121, 132, 0.025);
}

.screen-enter-from {
  opacity: 0;
}

.screen-enter-active,
.screen-leave-active {
  transition: all 0.45s var(--curve);
}

.screen-enter,
.screen-leave-to {
  opacity: 0;
}
</style>
