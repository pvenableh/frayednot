<template>
  <swiper
    :style="{
      '--swiper-navigation-color': '#fff',
      '--swiper-pagination-color': '#fff',
    }"
    :speed="600"
    :parallax="true"
    :pagination="{
      type: 'fraction',
    }"
    :navigation="{
      nextEl: '#slideshowSwiper__next-btn',
      prevEl: '#slideshowSwiper__prev-btn',
    }"
    :modules="modules"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    class="h-full flex items-center justify-center flex-col slideshowSwiper"
  >
    <!-- <div
      slot="container-start"
      class="bg-cover bg-center bg-no-repeat grayscale blur-lg opacity-25 parallax-bg"
      :style="
        'background-image: url(' +
        imageUrl +
        slides[0].directus_files_id.id +
        '?key=small)'
      "
      data-swiper-parallax="-200"
    ></div> -->
    <swiper-slide
      class="w-full flex items-center justify-center"
      v-for="(slide, index) in slides"
      :key="index"
    >
      <!-- <div class="title" data-swiper-parallax="-300" v-if="slide.description">{{ slide.description }}</div>
     
       -->
      <!-- <picture>
        <source
          media="(max-width: 400px)"
          :srcset="imageUrl + slide.directus_files_id.id + '?key=small'"
        />
        <source
          media="(min-width: 401px)"
          :srcset="imageUrl + slide.directus_files_id.id + '?key=large'"
        />
        <img
          :src="imageUrl + slide.directus_files_id.id + '?key=large'"
          alt="Chris standing up holding his daughter Elva"
        />
      </picture> -->
      <div class="relative w-full h-full flex items-center justify-center">
        <!-- <div
          class="absolute w-full h-full bg-cover bg-center bg-no-repeat grayscale blur-2xl opacity-50"
          :style="
            'background-image: url(' +
            imageUrl +
            slide.directus_files_id.id +
            '?key=small)'
          "
        ></div> -->
        <transition name="fade">
          <img
            v-if="slide.directus_files_id.id"
            class="absolute"
            data-swiper-parallax="-250"
            :srcset="
              imageUrl +
              slide.directus_files_id.id +
              '?key=small 400w, ' +
              imageUrl +
              slide.directus_files_id.id +
              '?key=medium 1024w, ' +
              imageUrl +
              slide.directus_files_id.id +
              '?key=large 1920w'
            "
            :src="imageUrl + slide.directus_files_id.id + '?key=large'"
          />
        </transition>
      </div>
    </swiper-slide>

    <div
      class="w-full flex items-center justify-between flex-row relative slideshowSwiper__nav"
    >
      <h5
        id="slideshowSwiper__prev-btn"
        class="flex items-center justify-center flex-row cursor-pointer px-2 md:px-4 py-2"
      >
        <nuxt-icon name="arrow-left" class="mr-4 arrow-left-icon" /> PREV
      </h5>
      <h5
        id="slideshowSwiper__next-btn"
        class="flex items-center justify-center flex-row cursor-pointer px-2 md:px-4 py-2"
      >
        NEXT <nuxt-icon name="arrow-right" class="ml-4 arrow-right-icon" />
      </h5>
    </div>
  </swiper>
</template>

<script setup>
// import { url } from 'inspector'

const props = defineProps({
  slides: {
    type: Array,
    default: [],
  },
})
const imageUrl = 'https://admin.rkcad.com/assets/'
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Navigation, Pagination, Parallax } from 'swiper'
const modules = [Parallax, Pagination, Navigation]
const onSwiper = (swiper) => {
  // console.log(swiper)
}
const onSlideChange = () => {
  console.log('slide change')
}
</script>
<style>
.slideshowSwiper {
  .swiper-slide {
    img {
      max-height: 100%;
      max-width: 100%;
    }
  }
  &__nav {
    height: 30px;
    bottom: 0px;
    max-width: 800px;
    z-index: 10;
    @apply w-full absolute;
    @media (min-width: 800px) {
      left: calc(50% - 400px);
    }
    h5 {
      font-size: 14px;
      line-height: 14px;
      letter-spacing: 0.2em;
      transition: 0.4s var(--curve);
      .nuxt-icon {
        height: 16px;
        fill: black;
        transition: 0.4s var(--curve);
        svg {
          height: 16px;
          display: inline-block !important;
          line {
            stroke-width: 3px;
            stroke: var(--blue) !important;
          }
        }
      }
    }
    .swiper-button-disabled {
      opacity: 0.25;
    }
    #slideshowSwiper__next-btn:hover {
      .nuxt-icon {
        @apply ml-2 -mr-2;
      }
    }
    #slideshowSwiper__prev-btn:hover {
      .nuxt-icon {
        @apply mr-2 -ml-2;
      }
    }
  }
}
</style>