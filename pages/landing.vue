<template>
  <div class="relative w-full flex items-center justify-center flex-col landing">
    <swiper :speed="2000" :effect="'fade'" :loop="true" :parallax="true" :modules="modules" :autoplay="true"
      class="w-full h-screen flex items-center justify-center flex-col slideshowSwiperHome">

      <swiper-slide v-for="(section, index) in home.featured_sections" :key="index"
        :style="'background-image: url(' + imageUrl + section.background_image + ')'"
        class="bg-cover bg-center bg-no-repeat w-full flex items-end justify-end relative">
        <h4 class="font-serif tracking-wide uppercase absolute bottom-0 left-0 pl-4">{{ section.title }}</h4>
      </swiper-slide>
    </swiper>
    <div class="absolute z-10 flex items-center justify-center flex-col">
      <img src="/assets/images/logo2.png" alt="frayednot Logo" class="mt-4 md:mt-0 logo" />

      <h3 class="font-serif uppercase mt-6 text-center">Uncompromised Sound. <span class="block sm:inline-block">Unseen
          Experience.</span></h3>
      <h1 class="uppercase mt-12 mb-6">a new digital experience coming soon.</h1>
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Parallax, EffectFade } from 'swiper'
import 'swiper/css'
import 'swiper/css/effect-fade'
const modules = [Parallax, Autoplay, EffectFade]

const { $directus } = useNuxtApp()
const { data: home, pending, error } = await useAsyncData('page', () => {
  return $directus.items('home').readOne(1, {
    fields: [
      'featured_sections.background_image,featured_sections.title,featured_sections.subtitle',
    ],
  })
})
// const { getItems } = useDirectusItems()
// const home = await getItems({
//   collection: 'home',
//   params: {
//     fields: [
//       'featured_sections.background_image,featured_sections.title,featured_sections.subtitle',
//     ],
//   },
// })
const imageUrl = 'https://admin.frayednot.net/assets/'
definePageMeta({
  layout: "blank",
});


</script>
<style>
.landing {
  color: var(--white);

  @media (min-width: theme('screens.md')) {}

  .swiper-slide {
    background-color: rgba(0, 0, 0, 0.35);
    background-blend-mode: darken;
    animation: bg-animation 9s ease-in-out infinite;

    h4 {
      font-size: 8vw;
      opacity: 0.1;
    }
  }

  .logo {
    width: 250px;

    @media (min-width: theme('screens.md')) {
      width: 300px;
    }
  }

  h1 {
    font-size: 10px;
  }
}

@keyframes bg-animation {
  0% {
    background-color: rgba(0, 0, 0, 0.35);
  }

  50% {
    background-color: rgba(0, 0, 0, 0.65);
  }

  100% {
    background-color: rgba(0, 0, 0, 0.35);
  }
}</style>