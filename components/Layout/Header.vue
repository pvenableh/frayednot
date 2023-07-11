<template>
  <div class="w-full mx-auto relative flex items-center justify-start flex-col md:flex-row w-full py-4 header">
    <!-- <img src="/assets/images/logo.png" alt="frayednot Logo" class="mt-4 md:mt-0 logo"/> -->
    <nuxt-link to="/test" class="inline-block w-full text-center pt-2 pb-1 logo-link">
      <h3 class="font-serif uppercase sm:tracking-wider">Uncompromised Sound. Unseen Experience.&trade;</h3>
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
