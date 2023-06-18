<template>
  <div class="mb-6 md:mb-12 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 article-card-wrapper" :class="category">
    <nuxt-link :to="'/architecture-design-press-awards/' + article.url"
      class="relative flex flex-col items-start article-card">
      <div v-if="article.images.length > 0" :style="'background-image: url(https://admin.rkcad.com/assets/' +
        article.images[0].directus_files_id +
        'key=small)'
        " class="bg-no-repeat bg-center bg-cover article-card__image" />
      <div v-else class="flex items-center justify-center article-card__image">
        <LayoutRkc class="rkc-icon" />
      </div>
      <h3 class="w-full uppercase article-card__title">{{ article.title }}</h3>
      <h5 v-if="article.project">{{ article.project.title }}</h5>
    </nuxt-link>
  </div>
</template>

<script setup>
const props = defineProps({
  article: {
    type: Object,
    default: {},
  },

})
const category = props.article.category.toLowerCase()
</script>

<style>
.article-card-wrapper {
  margin-bottom: 15px;
  overflow: hidden;
  padding-right: 15px;
  @media (min-width: theme('screens.sm')) {
    padding-right: 35px;margin-bottom: 35px;
  }

  @media (min-width: theme('screens.lg')) {
    padding-right: 35px;
  }
}
/* .article-card-wrapper:nth-child(3n) {
  padding-right: 0px;
  @media (min-width: theme('screens.sm')) {
    
  }
  @media (min-width: theme('screens.lg')) {
    padding-right: 35px;
  }
} */
/* .article-card__wrapper:nth-child(3n) {
  @media (min-width: theme('screens.lg')) {
    padding-right: 0px;
  }
} */
/* .article-card-wrapper:nth-child(6n) {
  @media (min-width: theme('screens.lg')) {
    padding-right: 0px;
  }
} */
.article-card {

  position: relative;
  overflow: hidden;
  height: 250px;
  cursor: pointer;
  z-index: 1;
  transition: all 0.35s var(--curve);
  @media (min-width: 500px) {
    height: 275px;
  }
  @media (min-width: 575px) {
    height: 325px;
  }
  /* @media (min-width: theme('screens.sm')) {
    height: 225px;
  } */

  @media (min-width: theme('screens.md')) {
    height: 250px;
  }

  @media (min-width: theme('screens.lg')) {
    /* height: 300px; */
    height: 250px;
  }

  @media (min-width: theme('screens.xl')) {
    height: 275px;
  }

  @media (min-width: theme('screens.2xl')) {}

  &__image {
    width: 100%;
    height: 100%;
    background-color: rgba(167, 169, 172, 0.05);
    transform: scale(1);
    transition: all 0.5s var(--curve);
    background-blend-mode: darken;

    svg {

      padding: 0 20px;
      fill: rgba(255, 255, 255, 0.5);
    }
  }


  &__title {
    bottom: 20px;
    left: 0px;
    padding-left: 20px;
    padding-right: 20px;
    color: var(--white);
    line-height: 16px;
    font-size: 14px;
    font-weight: 900 !important;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.5s var(--curve);
    @apply w-full z-10 absolute uppercase tracking-wider font-body;

  }

  h5 {
    bottom: -20px;
    left: 0px;
    line-height: 16px;
    font-size: 10px;
    font-weight: 900 !important;
    transform: translateY(20px);
    transition: all 0.5s var(--curve);
    @apply w-full z-10 absolute uppercase tracking-wider font-body;
  }
}

.article-card:hover>.article-card__image {
  transform: scale(1.1);
  background-color: rgba(0,0,0, 0.4);
}

.article-card:hover>.article-card__title {
  opacity: 1;
  transform: translateY(0px);
}

</style>
