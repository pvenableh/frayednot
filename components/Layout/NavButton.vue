<template>
  <div id="nav-btn" @click.prevent="sideMenuToggle()">
    <div id="nav-icon"><span></span> <span></span> <span></span></div>
  </div>
</template>
<script setup>
import { openScreen, toggleScreen } from '~~/composables/useScreen'
function sideMenuToggle() {
  const element = document.getElementById('nav-btn')
  const navToggle = document.getElementById('nav-drawer-toggle')
  if (element.classList.contains('open')) {
    element.classList.remove('open')
    console.log('nav btn remove')
  } else {
    console.log('nav btn add')
    element.classList.add('open')
    navToggle.checked = true
    // openScreen()
  }
  // navToggle.checked = !navToggle.checked
  // toggleScreen()
}
</script>
<style scoped>
#nav-btn {
  left: 0px;
  bottom: 0px;
  z-index: 20;
  display: block;
  position: fixed;
 
  width: 100%;
  text-align: center;
  cursor: pointer;
  transition: 0.65s var(--curve);
  background: rgba(255,255,255,0.25);
  transform: translateY(0px);
  backdrop-filter: blur(10px);

  @media (min-width: theme('screens.md')) {
    /* position: absolute; */
    left: auto;
    bottom: auto;
    top: 22px;
    top: 6px;
    width: 80px;
    right:15px;
    /* background: none; */
    border-radius: 0px;
    height: 50px;
    @apply flex items-center justify-center;
  }
  #nav-icon {
    width: 80px;
    height: 30px;
    position: relative;
    margin: 16px auto 14px;
    cursor: pointer;
    @media (min-width: theme('screens.md')) {
      width: 65%;
      height: 30px;
      margin: 0px;
    }
    span {
      display: block;
      position: absolute;
      height: 1px;
      width: 100%;
      background: var(--lightGrey);
      border-radius: 1px;
      opacity: 1;
      left: 0;
      transform: rotate(0deg);
      transition: 0.65s var(--curve);
      backdrop-filter: blur(10px);
    }

    span:nth-child(1) {
      top: 5px;
      transform-origin: left center;
      /* @media (min-width: theme('screens.lg')) {
        top: 9px;
      } */
    }

    span:nth-child(2) {
      top: 15px;
      transform-origin: left center;
 
    }

    span:nth-child(3) {
      top: 25px;
      transform-origin: left center;
      /* @media (min-width: theme('screens.lg')) {
        top: 22px;
      } */
    }
  }
}
#nav-btn.open {

  /* transform: translateY(-50px); */
  opacity: 0;

  bottom: 0px;
  @media (min-width: theme('screens.md')) {
    bottom: auto;
    transform: translateY(150px);
  }

  #nav-icon {
    /* width: 55px; */

    span {
      background: var(--white);
    }

    span:nth-child(1) {
      /* transform: rotate(40deg); */
      top: 12px;
      /* left: 8px;
      width: 80%; */
      /* @media (min-width: theme('screens.lg')) {
        top: 0;
        width: 100%;
      } */
    }

    span:nth-child(2) {
      /* width: 0; */
      opacity: 0;
    }

    span:nth-child(3) {
      /* transform: rotate(-40deg); */
      top: 14px;
      /* left: 8px;
      width: 80%; */
      /* @media (min-width: theme('screens.lg')) {
        top: 35px;
        width: 100%;
      } */
    }
  }
}
</style>
