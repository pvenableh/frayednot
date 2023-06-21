<template>
  <div class="w-full mx-auto relative flex items-center justify-start flex-col md:flex-row max-w-7xl w-full md:py-4 header">
    <nuxt-link to="/" class="inline-block logo-link">
      <img src="/assets/images/logo.png" alt="frayednot Logo" class="mt-4 md:mt-0 logo"/>
    </nuxt-link>
    <h3 class="font-serif uppercase md:ml-6 mb-4 md:mb-0">Uncompromised Sound. Unseen Experience.</h3>
    <!-- <LayoutNavButton class="lg:pr-6" /> -->
  </div>
</template>

<script setup>

</script>
<style>
.header {

  padding-left: 15px;
  padding-right: 15px;

  @media (min-width: theme('screens.sm')) {
    padding-left: 35px;
    padding-right: 35px;

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
    font-size: 10px;
    @media (min-width: theme('screens.sm')) {
      font-size: 13px;
    }
  }
}
</style>
