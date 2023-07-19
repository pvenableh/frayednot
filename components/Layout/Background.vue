<template>
    <div class="background" :class="device"></div>
</template>
<script setup>
const device = ref('mobile')
onMounted(() => {
    if (navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)) {
        device.value = 'mobile';
    } else {
        device.value = 'desktop';
    }
})</script>
<style scoped>
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
background.desktop {.
    @media (min-width: theme('screens.lg')) {
        background-attachment: fixed;

    }
}
</style>