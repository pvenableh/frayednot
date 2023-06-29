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

  </div>
</template>
<script>
import { screen } from '~~/composables/useScreen'
useSeoMeta({
  title: 'frayednot | Residential Audio/Visual Automation Design and Integration |  Crandall NJ',
  ogTitle: 'frayednot | Residential Audio/Visual Automation Design and Integration |  Crandall NJ',
  description: 'frayednot strives to create custom, sophisticated, seamless yet simple-to-use, integrated home audio/video systems. No project has been the same, it is always custom to fit the experience you envision.',
  ogDescription: 'frayednot strives to create custom, sophisticated, seamless yet simple-to-use, integrated home audio/video systems. No project has been the same, it is always custom to fit the experience you envision.',
  ogImage: 'https://frayednot.net/images/fb-image.jpg',
  ogUrl: 'https://frayednot.net',
  twitterCard: 'summary_large_image',
})
</script>

<style>
.page__header-placeholder {
  height: 550px;

  overflow: hidden !important;
  @apply w-full flex items-end justify-center overflow-hidden relative;

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
  @apply relative w-full flex items-center justify-center flex-col overflow-hidden;
  &__content {
    transition: all 0.65s var(--curve);
  }
  

  &__body {
    z-index: 10;
    padding-left: 15px;
    padding-right: 15px;
    @media (min-width: theme('screens.sm')) {
      padding-left: 35px;
      padding-right: 35px;
    }

    @apply w-full max-w-7xl;

    &-header {
      @apply mt-20;
      &-title {

        font-size: 36px;
        line-height: 42px;
        font-family: var(--serif-font);
        @apply uppercase tracking-wide mb-8;

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
