<template>
  <div class="relative w-full min-h-screen flex items-center justify-center flex-col home">
   <h1 class="font-serif">Hello</h1>
  </div>
</template>

<script setup>

const imageUrl = 'https://admin.frayednot.net/assets/'

import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Parallax, EffectFade } from 'swiper'
import 'swiper/css'
import 'swiper/css/effect-fade'
const modules = [Parallax, Autoplay, EffectFade]
// const { getItems } = useDirectusItems()
// const home = await getItems({
//   collection: 'home',
//   params: {
//     fields: [
//       'featured_images.directus_files_id,about_intro,team_intro,team_image,featured_profile.*,featured_project.title,featured_project.intro,featured_project.url,featured_project.category,featured_project.images.directus_files_id,featured_profile.featured_projects.project.title,featured_profile.featured_projects.project.url,featured_profile.featured_projects.image',
//     ],
//   },
// })

import { usePageStore } from '~~/store/PageStore'
const pageStore = usePageStore()


</script>
<style>
.home {
  .page__header {
    padding-left: 0px;
    padding-right: 0px;

  }

  #animation {
    position: absolute;
    z-index: 10;
    height: 550px;
    margin-bottom: 50px;
    overflow: hidden !important;
    @apply bg-cover bg-center bg-no-repeat w-full flex items-center justify-center px-4 overflow-hidden relative;

    @media (min-width: theme('screens.sm')) {
      height: 550px;
    }

    @media (min-width: theme('screens.md')) {
      height: 600px;
    }

    @media (min-width: theme('screens.lg')) {
      height: calc(100vh);
    }

    img {
      width: 100%;
      height: auto;
      max-width: 400px;
    }
  }

  .slideshowSwiperHome {
    height: 100vh;
    width: 100vw;

  }

  /* a {
    font-size: 10px;

    @apply uppercase tracking-wider py-4 px-6 font-bold;
  } */

  #rkc-bg-icon-2 {
    z-index: 5;
  }

  .rkc-name {
    max-width: 400px;
    opacity: 0.85;
    position: absolute;
    height: 80px;
    bottom: -60px;
    right: -120px;
    display: none;

    @media (min-width: theme('screens.sm')) {
      bottom: -100px;
      height: 100px;
      display: flex;
    }

    @media (min-width: theme('screens.lg')) {
      position: relative;
      max-width: 400px;
      height: auto;
      right: auto;
      bottom: auto;
    }
  }

  &-section {

    /* margin-top: 100px;
    margin-bottom: 100px; */
    /* img {
      width: 55%;
      height: auto;
    } */
    &__images {
      img {
        height: 250px;
        width: auto;
      }

      img.profile-pic {
        height: auto;
        width: 100%;

        @media (min-width: theme('screens.sm')) {
          height: 250px;
          width: auto;
        }
      }
    }

    &__quote {
      background: var(--blue);
      height: 250px;
      color: var(--white);
      font-size: 14px;
      font-weight: 400;

      @apply p-4 uppercase tracking-wide flex-grow;

      p {

        @apply mt-4;
      }

    }


  }

}

.featured-projects {
  p {
    font-size: 10px;
    @apply uppercase tracking-wider font-bold;
  }
}


.home-section__quote {
  p:last-of-type {
    font-size: 7px;
    @apply italic;
  }
}

.home-section____intro {
  width: 100%;

  @media (min-width: theme('screens.md')) {
    max-width: 450px;
  }
}
</style>