<template>
  <div class="relative w-full flex items-center justify-center flex-col home">
    <div class="w-full flex items-center justify-center flex-col md:flex-row flex-wrap home__intro">
      <div v-for="(section, index) in home.featured_sections" :key="index" :style="'background-image: url(' + imageUrl + section.background_image + ')'" class="bg-cover bg-center bg-no-repeat w-full md:w-1/2 home__intro-sections">
        <h1 class="font-serif tracking-wide uppercase">{{ section.title }}</h1>
        <h5 calss="uppercase">{{ section.subtitle }}</h5>
      </div>
    </div>
  </div>
</template>

<script setup>

const imageUrl = 'https://admin.frayednot.net/assets/'

const { getItems } = useDirectusItems()
const home = await getItems({
  collection: 'home',
  params: {
    fields: [
      'featured_sections.background_image,featured_sections.title,featured_sections.subtitle',
    ],
  },
})

import { usePageStore } from '~~/store/PageStore'
const pageStore = usePageStore()


</script>
<style>
.home {
  &__intro {
    height: calc(100vh - 110px);
    &-sections {
      color: var(--white);
      height: 25%;
      background-color: rgba(0,0,0,0.25);
      background-blend-mode: darken;
      border-color: var(--white);
      border-style: solid;
      border-left-width: 15px;
      border-right-width: 15px;
      border-bottom-width: 15px;
      @apply flex items-center justify-center flex-col h-1/4 md:h-1/2;
    }
  }
  .home__intro-sections:nth-of-type(odd) {
    @media (min-width: theme('screens.md')) {
      border-right-width: 7.5px;
    }
  }
  .home__intro-sections:nth-of-type(even) {
    @media (min-width: theme('screens.md')) {
 
      border-left-width: 7.5px;
    }
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