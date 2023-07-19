<template>
  <div
    class="min-h-screen w-full transition duration-150 bg-white overflow-hidden flex items-center justify-start flex-col relative">
    <input id="nav-drawer-toggle" type="checkbox" class="hidden" />
    <input id="profile-toggle" type="checkbox" class="hidden" />
    <input id="application-toggle" type="checkbox" class="hidden" />
    <div class="background"></div>
    <LayoutNavButton />
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
  title: 'frayednot | Residential Audio/Visual Automation Design and Integration |  Cranford, NJ',
  ogTitle: 'frayednot | Residential Audio/Visual Automation Design and Integration |  Cranford, NJ',
  description: 'frayednot strives to create custom, sophisticated, seamless yet simple-to-use, integrated home audio/video systems. No project has been the same, it is always custom to fit the experience you envision.',
  ogDescription: 'frayednot strives to create custom, sophisticated, seamless yet simple-to-use, integrated home audio/video systems. No project has been the same, it is always custom to fit the experience you envision.',
  ogUrl: 'https://frayednot.net',
  twitterCard: 'summary_large_image',
})
</script>

<style>
.background {
  background: rgba(162, 162, 162, 0.15);
  background: linear-gradient(#f5f1ec, #dddcdb);
  background-image: url(/assets/images/background.webp);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  @apply min-h-screen w-full fixed top-0 left-0 z-0;
}
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
        font-size: 24px;
        line-height: 30px;
        font-family: var(--serif-font);
        letter-spacing: 0.05em;
        @apply uppercase mb-2;
        @media (min-width: theme('screens.sm')) {
          font-size: 26px;
          line-height: 30px;
        }
        @media (min-width: theme('screens.md')) {
          font-size: 36px;
          line-height: 42px;
        }
        @media (min-width: theme('screens.lg')) {
          font-size: 42px;
          line-height: 46px;
        }

        @media (min-width: theme('screens.xl')) {
          /* font-size: 50px;
          line-height: 58px; */
        }
      }
      &-subtitle {
        font-size: 12px;
        @apply tracking-wide mb-6;
      }
    }

  }
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
