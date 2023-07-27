<template>
  <div @click="closeNavDrawer" id="nav-drawer" class="flex items-center justify-center flex-col nav-drawer"
    ref="navDrawerRef">
    <div class="nav-drawer__bg"></div>
    <div class="w-full nav-drawer__menu-box p-4 relative">
      <!-- <XIcon class="cursor-pointer h-8 heroicon-sw-1.2 close-btn" /> -->
      <ul tabindex="0" class="w-full nav-drawer__menu text-center">
        <li><nuxt-link to="/">Home</nuxt-link></li>
        <li>
          <nuxt-link to="/automated-audio-video-experiences">Experiences</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/audio-video-design-philosophy">Philosophy</nuxt-link>
        </li>

        <li>
          <nuxt-link to="/awards-press-recognition">Recognition</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/innovative-audio-visual-technology">Technology</nuxt-link>
        </li>
        <!-- <li><nuxt-link to="/payment">Payment</nuxt-link></li> -->
        <li><a href="https://htacertified.org/home-technology-installation-budget-tool" target="_blank">Budget Calculator</a></li>
        <li><nuxt-link to="/contact">Contact</nuxt-link></li>
        
      </ul>
    </div>
  </div>
</template>
<script setup>
import { onClickOutside } from '@vueuse/core'
import { closeScreen, toggleScreen } from '~~/composables/useScreen'
const navDrawerRef = ref(null)
function closeNavDrawer() {
  const element = document.getElementById('nav-drawer-toggle')
  element.checked = false
  const navBtn = document.getElementById('nav-btn')
  navBtn.classList.remove('open')
  // closeScreen()
}
function toggleNavDrawer() {
  const element = document.getElementById('nav-drawer-toggle')
  if (element.checked) {
    element.checked = false
  } else {
    element.checked = true
  }
  // toggleScreen()
}
onClickOutside(navDrawerRef, (event) => {
  console.log('outside')
  closeNavDrawer()
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

  &__menu-box {}

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
      transition-delay: 0.190s;
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
  }
}

#nav-drawer-toggle:checked~.nav-drawer {
  transform: translateX(0%);

  .nav-drawer__bg {
    right: 0px;
    width: 110vw;
  }

  .nav-drawer__menu {
    li {
      transform: translateY(0px);
      opacity: 1;
      @apply my-1;
    }
  }
}

#nav-drawer-toggle:checked~.page__content {
  /* transform: matrix(1, 0, 0, 1, 8, 0); */
  /* transform: translateY(10px); */
  filter: blur(2px) grayscale(0.5);
}

/* #nav-drawer-toggle:checked ~ .nav-drawer > .nav-drawer-overlay {
  background: rgba(48, 54, 64, 0.4);
  opacity: 0.999999;
  visibility: visible;
} */</style>
