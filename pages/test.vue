<template>
  <div class="relative w-full flex items-center justify-center flex-col home">
    <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-6 home__intro">
      <nuxt-link v-for="(section, index) in page.featured_sections" :key="index" :to="'/' + section.url"
        :style="'background-image: url(' + imageUrl + section.background_image + ')'"
        class="bg-cover bg-center bg-no-repeat w-full home__intro-sections">
        <h1 class="font-serif tracking-wide uppercase">{{ section.title }}</h1>
        <h5 class="uppercase">{{ section.subtitle }}</h5>
      </nuxt-link>
    </div>
    <div class="page__body philosophy-intro">
      <div class="page__body-header">
        <h2 v-if="page.philosophy_intro.title" class="page__body-header-title">{{ page.philosophy_intro.title }}</h2>
        <h5 v-if="page.philosophy_intro.subtitle">{{ page.philosophy_intro.subtitle }}</h5>
        <div class="grid md:grid-cols-2 gap-10 md:gap-20 relative" v-html="page.philosophy_intro.text"> </div>
      </div>
    </div>
    <div v-for="(section, index) in page.project_sections" :key="index" class="w-full page__body">
    
      <div class="page__body-header">

      <h2 v-if="section.project_sections_id.title" class="page__body-header-title">{{ section.project_sections_id.title }}</h2>
      <h5 v-if="section.project_sections_id.subtitle">{{ section.project_sections_id.subtitle }}</h5>
      <p v-if="section.project_sections_id.text" class="mb-12">{{ section.project_sections_id.text }}</p>
      </div>

      <div v-if="section.project_sections_id.layout === 'small'" class="grid grid-cols-3 gap-4">
        <ProjectsProjectCard v-for="(project, index) in section.project_sections_id.projects" :key="index"
          :project="project.projects_id" :size="section.project_sections_id.layout" />
      </div>
      <ProjectsProjectCard v-else v-for="(project, index) in section.project_sections_id.projects" :key="index"
        :project="project.projects_id" :size="section.project_sections_id.layout" />
    </div>
  </div>
</template>

<script setup>
const imageUrl = 'https://admin.frayednot.net/assets/'
const { $directus } = useNuxtApp()
const { data: page, pending, error } = await useAsyncData('page', () => {
  return $directus.items('home').readOne(1, {
    fields: [
      'featured_sections.background_image,featured_sections.title,featured_sections.subtitle,featured_sections.url,project_sections.project_sections_id.sort,project_sections.project_sections_id.title,project_sections.project_sections_id.sub_title,project_sections.project_sections_id.text,project_sections.project_sections_id.layout,project_sections.project_sections_id.projects.projects_id.sort,project_sections.project_sections_id.projects.projects_id.title,project_sections.project_sections_id.projects.projects_id.description,project_sections.project_sections_id.projects.projects_id.experience,project_sections.project_sections_id.projects.projects_id.category,project_sections.project_sections_id.projects.projects_id.images.directus_files_id,philosophy_intro.title,philosophy_intro.subtitle,philosophy_intro.text',
    ],
  })
})
if (error.value) throw createError({
  statusCode: 404,
  statusMessage: 'Page Not Found'
})

import { usePageStore } from '~~/store/PageStore'
const pageStore = usePageStore()


</script>
<style>
.home {
  &__intro {
    height: calc(100vh - 140px);
    padding-right: 15px;
    padding-left: 15px;

    &-sections {
      color: var(--white);

      background-color: rgba(0, 0, 0, 0.25);
      background-blend-mode: darken;

      @apply flex items-center justify-center flex-col;
      h1 {
        font-size: 36px;
        line-height: 42px;
        font-family: var(--serif-font);
        @apply uppercase tracking-wide mb-1;

        @media (min-width: theme('screens.lg')) {
          font-size: 42px;
          line-height: 46px;
        }
      }
    }
  }
  .philosophy-intro {
    @apply relative mb-12;
    p {

    }
    div::before {
      @media (min-width: theme('screens.md')) {
      content: '';
      background: var(--grey);
      position: absolute;
      top: 140px;
      height: calc(100% - 140px);
      width: 1px;
      left: calc(50% - 1px);
      }
    }
  }

}
</style>