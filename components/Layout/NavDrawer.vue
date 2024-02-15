<template>
  <div
    id="nav-drawer"
    class="flex items-center justify-center flex-col nav-drawer"
    ref="navDrawerRef"
  >
    <div class="nav-drawer__bg"></div>
    <div class="nav-drawer__menu-box p-4 relative">
      <nuxt-icon
        @click="closeNavDrawer"
        name="close"
        class="close-icon close-btn"
      />

      <ul
        @click="closeNavDrawer"
        tabindex="0"
        class="w-full nav-drawer__menu text-center"
      >
        <li><nuxt-link to="/">Home</nuxt-link></li>
        <li>
          <nuxt-link to="/automated-audio-video-experiences"
            >Experiences</nuxt-link
          >
        </li>
        <li>
          <nuxt-link to="/audio-video-design-philosophy">Philosophy</nuxt-link>
        </li>

        <li>
          <nuxt-link to="/awards-press-recognition">Recognition</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/innovative-audio-visual-technology"
            >Technology</nuxt-link
          >
        </li>
        <li><nuxt-link to="/payment">Payment</nuxt-link></li>
        <li>
          <a
            href="https://htacertified.org/home-technology-installation-budget-tool/4413"
            target="_blank"
            >Budget Calculator</a
          >
        </li>
        <li><nuxt-link to="/contact">Contact</nuxt-link></li>
        <li class="admin-link">
          <a href="https://admin.frayednot.net" target="_blank">Admin</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import { closeScreen, toggleScreen } from '~~/composables/useScreen'
const navDrawerRef = ref(null)
import { useSwipe } from '@vueuse/core'
function enableScroll() {
  console.log('enable scroll')
  window.onscroll = function () {}
}
function closeNavDrawer() {
  const element = document.getElementById('nav-drawer-toggle')
  element.checked = false
  const navBtn = document.getElementById('nav-btn')
  navBtn.classList.remove('open')
  enableScroll()
}
const windowWidth = ref(null)

const handleResize = () => {
  windowWidth.value = window.innerWidth
}
onMounted(() => {
  windowWidth.value = window.innerWidth
  window.addEventListener('resize', handleResize)
  const { direction } = useSwipe(navDrawerRef, {
    onSwipe() {
      if (direction.value === 'DOWN' && windowWidth.value < 768) {
        closeNavDrawer()
      } else if (direction.value === 'UP' && windowWidth.value >= 768) {
        closeNavDrawer()
      }
    },
  })
})
onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>
<style>
.nav-drawer {
  min-height: 100vh;
  max-height: 100vh;
  width: 100%;
  position: fixed;
  right: 0px;
  top: 0px;
  z-index: 30;
  background: rgba(255, 255, 255, 0.95);
  transform: translateY(110%);
  transition: 0.55s var(--curve);
  @apply flex items-center justify-center flex-col;

  @media (min-width: theme('screens.md')) {
    transform: translateY(-110%);
  }

  @apply shadow-lg;

  .close-btn {
    /* right: 0px;
    top: 0px;
    @apply absolute; */
  }

  &__bg {
    /* background: rgba(255,255,255, 0.5); */
    /* backdrop-filter: blur(2px); */
    /* background-color: rgba(48, 54, 64, 0.4);
    background: rgb(123,145,163);
    background: linear-gradient(90deg, rgba(123,145,163,0) 0%, rgba(123,145,163,1) 90%); */
    /* background: rgba(123, 145, 163, 0.75); */
    /* filter: blur(4px); */
    right: -10vw;
    top: 0px;
    width: 8vw;
    transition: all 0.6s var(--curve);
    display: none;
    @apply fixed h-screen;
  }

  &__menu-box {
    width: 350px;
    @apply flex items-center justify-center flex-col;
    .close-btn {
      transform: translateY(50px);
      opacity: 0;
      transition: 0.65s var(--curve);
      transition-delay: 0.075s;
      @media (min-width: theme('screens.md')) {
        transform: translateY(-50px);
      }
      @apply absolute -top-20;
    }
  }

  &__menu {
    li {
      transform: translateY(50px);
      opacity: 0;
      transition: 0.65s var(--curve);

      @media (min-width: theme('screens.md')) {
        transform: translateY(-50px);
      }

      @apply my-1;

      a {
        color: var(--grey);
        font-size: 13px;
        letter-spacing: 0.3em;
        @apply block uppercase py-1 font-serif;
      }

      a.router-link-exact-active {
        color: var(--black);
        letter-spacing: 0.6em;
        @apply cursor-default;
      }
    }
    .admin-link {
      a {
        font-size: 11px;
        @apply block uppercase py-1 font-bold tracking-widest mt-6 opacity-50;
      }
    }
    a:hover {
      letter-spacing: 0.6em;
    }

    li:nth-of-type(1) {
      transition-delay: 0.1s;
    }

    li:nth-of-type(2) {
      transition-delay: 0.125s;
    }

    li:nth-of-type(3) {
      transition-delay: 0.15s;
    }

    li:nth-of-type(4) {
      transition-delay: 0.175s;
    }

    li:nth-of-type(5) {
      transition-delay: 0.19s;
    }

    li:nth-of-type(6) {
      transition-delay: 0.202s;
    }

    li:nth-of-type(7) {
      transition-delay: 0.21s;
    }

    li:nth-of-type(8) {
      transition-delay: 0.215s;
    }
    li:nth-of-type(9) {
      transition-delay: 0.225s;
    }
  }
}

#nav-drawer-toggle:checked ~ .nav-drawer {
  transform: translateX(0%);

  .nav-drawer__bg {
    right: 0px;
    width: 110vw;
  }
  .nav-drawer__menu-box {
    .close-btn {
      transform: translateY(0px);
      opacity: 1;
    }
  }
  .nav-drawer__menu {
    li {
      transform: translateY(0px);
      opacity: 1;
      @apply my-1;
    }
  }
}

#nav-drawer-toggle:checked ~ .page__content {
  /* transform: matrix(1, 0, 0, 1, 8, 0); */
  /* transform: translateY(10px); */
  filter: blur(2px) grayscale(0.5);
}

/* #nav-drawer-toggle:checked ~ .nav-drawer > .nav-drawer-overlay {
  background: rgba(48, 54, 64, 0.4);
  opacity: 0.999999;
  visibility: visible;
} */
</style>
