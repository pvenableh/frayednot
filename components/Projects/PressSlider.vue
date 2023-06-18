<template>
  <swiper
    :slidesPerView="'auto'"
    :spaceBetween="30"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
    class="h-full flex items-center justify-center flex-col slidershowSwiper"
  >
    <swiper-slide
      class="w-full flex items-center justify-center"
      v-for="(slide, index) in formattedSlides"
      :key="index"
    >
      <div class="relative h-full flex items-center justify-center">
        <img :src="imageUrl + slide.image + '?key=small'" />
      </div>
    </swiper-slide>
  </swiper>
</template>

<script setup>
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
import { Pagination, Parallax } from 'swiper'
const modules = [Parallax, Pagination]
const formattedSlides = ref([])
props.slides.map((slide) => {
  if (slide.press_id.images.length) {
    slide.press_id.images.map((image) => {
      formattedSlides.value.push({
        title: slide.press_id.title,
        description: slide.press_id.description,
        category: slide.press_id.category,
        link: slide.press_id.link,
        url: slide.press_id.url,
        image: image.directus_files_id.id,
      })
    })
  } else {
    return
  }
})
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