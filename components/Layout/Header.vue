<template>
  <div class="w-full mx-auto relative flex items-center justify-center flex-col lg:flex-row w-full py-4 header">
    <nuxt-link to="/test" class="absolute -mt-5 lg:mt-0 lg:left-0 name"><h1 class="uppercase opacity-30 text-sm lg:opacity-40 tracking-wider">Frayednot</h1></nuxt-link>
    <nuxt-link to="/test" class="inline-block w-full text-center mt-3 lg:mt-0 pt-1 lg:pb-1 logo-link">
      <h3 class="font-serif uppercase sm:tracking-wide">Uncompromised Sound. Unseen Experience.&trade;</h3>
    </nuxt-link>

  </div>
</template>

<script setup>

</script>
<style>
.header {

  padding-left: 15px;
  padding-right: 15px;

  @media (min-width: theme('screens.sm')) {
    /* padding-left: 35px;
    padding-right: 35px; */

  }
  .name {
    /* margin-top: -30px;
    left: calc(50% - 30px); */
    
    @apply absolute;
    @media (min-width: theme('screens.md')) {
      margin-left: 15px;
    }
  }
  /* @media (min-width: 1280px) {
    left: calc(50% - 640px);
  } */

  .logo-link {
    img {
      height: 65px;
      width: auto;
    }
  }

  h3 {
    font-size: 13px;

    @media (min-width: theme('screens.sm')) {
      font-size: 13px;
    }
  }
}</style>
