<template>
  <swiper :modules="[Thumbs, Navigation]"  :thumbs="{ swiper: thumbsSwiper }" :centeredSlides="true" :spaceBetween="20"
    :centeredInsuficientSlides="true" class="flex items-center justify-center flex-row gallery-swiper">
    <swiper-slide v-for="(slide, index) in slides" :key="index"><img v-if="slide.directus_files_id.id" :srcset="imageUrl +
      slide.directus_files_id.id +
      '?key=small 400w, ' +
      imageUrl +
      slide.directus_files_id.id +
      '?key=medium 1024w, ' +
      imageUrl +
      slide.directus_files_id.id +
      '?key=large 1920w'
      " :src="imageUrl + slide.directus_files_id.id + '?key=large'" class="shadow-lg" /></swiper-slide>
  </swiper>

  <swiper :modules="[Thumbs, Navigation]" watch-slides-progress watch-slides-visibility @swiper="setThumbsSwiper"
    class="thumb-swiper" 
    :slidesPerView="5"
    :centeredSlides="false" :centeredInsuficientSlides="true"
    :slideToClickedSlide="true"
    :navigation="{
      nextEl: '#slideshowSwiperThumbs__next-btn',
      prevEl: '#slideshowSwiperThumbs__prev-btn',
    }">
    <swiper-slide class="w-auto flex items-center justify-center" v-for="(slide, index) in slides" :key="index"><img
        v-if="slide.directus_files_id.id" :src="imageUrl + slide.directus_files_id.id + '?key=small'" /></swiper-slide>

    <div id="slideshowSwiperThumbs__prev-btn"
      class="flex items-center justify-center flex-row cursor-pointer px-2 md:px-4   py-2 slideshowSwiperThumbs__nav">
      <nuxt-icon name="arrow-left" class="mr-4 arrow-left-icon" />
    </div>
    <div id="slideshowSwiperThumbs__next-btn"
      class="flex items-center justify-center flex-row cursor-pointer px-2 md:px-4 py-2 slideshowSwiperThumbs__nav">
      <nuxt-icon name="arrow-right" class="ml-4 arrow-right-icon" />

    </div>
  </swiper>
</template>
<script setup>
const props = defineProps({
  slides: {
    type: Array,
    default: [],
  },
})
const images = computed(() => {
  return props.slides.filter((item) => {
    return item.directus_files_id.id
  })
})

const imageUrl = 'https://admin.rkcad.com/assets/'
import { Navigation, Thumbs } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
const modules = [Navigation, Thumbs]
const thumbsSwiper = ref(null)
const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper
}

</script>
<style >
.gallery-swiper {
  height: calc(100% - 110px);
  /* background: rgba(0,0,0,0.025); */
  /* -webkit-backdrop-filter: blur(4px) invert(0.015);
  backdrop-filter: blur(4px) invert(0.015); */
  @media (min-width: theme('screens.lg')) {
    background: none;
  }
  .swiper-slide {
    align-items: center;
    justify-content: center;
    display: flex;
    position: relative;

    img {
      max-height: 100%;
      max-width: 100%;
      width:auto;
    }
  }
}

.thumb-swiper {
  height: 100px;
  margin: 10px 0px;

  position: relative;

  @media (min-width: theme('screens.lg')) {
    /* align-items: center;
    justify-content: center;
    display: flex; */
  }

  .swiper-wrapper {

    position: relative;

    @media (min-width: theme('screens.lg')) {
      /* align-items: center;
    justify-content: center;
    display: flex; */
    }
  }

  .swiper-slide {
    width: auto !important;
    @apply px-2;

    img {
      height: 100px;
      width: auto;
    }
  }
}

.slideshowSwiperThumbs__nav {
  bottom: 0px;
  z-index: 10;
  height: 100px;
  background: rgba(255, 255, 255, 0.5);
  transition: all 0.4s var(--curve);
  @apply absolute;

  .nuxt-icon {
    height: 50px;
    fill: black;
    transition: 0.4s var(--curve);

    svg {
      height: 50px;
      display: inline-block !important;

      path {
        stroke-width: 5px;
        stroke: var(--grey) !important;
      }
    }
  }
}

#slideshowSwiperThumbs__prev-btn {
  left: 0px;
}

#slideshowSwiperThumbs__next-btn {
  right: 0px;
}

.swiper-button-disabled {
  opacity: 0.2;
  cursor: not-allowed;
}
</style>