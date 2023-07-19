<template>
  <div class="relative w-full flex items-center justify-center flex-col home">
    <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-1 home__intro">
      <nuxt-link v-for="(section, index) in page.featured_sections" :key="index" :to="'/' + section.url"
        :style="'background-image: url(' + imageUrl + section.background_image + ')'"
        class="bg-cover bg-center bg-no-repeat w-full home__intro-sections">
        <h1 class="font-serif uppercase">{{ section.title }}</h1>
        <h5 class="uppercase">{{ section.subtitle }}</h5>
      </nuxt-link>
    </div>
    <div v-if="page.philosophy_intro" class="page__body mt-8 philosophy-intro">
      <div class="page__body-header">
        <h2 v-if="page.philosophy_intro.title" class="page__body-header-title">{{ page.philosophy_intro.title }}</h2>
        <h5 v-if="page.philosophy_intro.subtitle">{{ page.philosophy_intro.subtitle }}</h5>
        <div class="grid md:grid-cols-2 gap-10 md:gap-20 relative" v-html="page.philosophy_intro.text"> </div>
      </div>
    </div>
    <div v-if="projects.data.length" class="page__body">
      <ProjectsProjectPortfolioSlider :projects="projects.data" />
    </div>
    <div v-for="(section, index) in page.project_sections" :key="index" class="w-full page__body">

      <div class="page__body-header">

        <h2 v-if="section.project_sections_id.title" class="page__body-header-title">{{ section.project_sections_id.title
        }}</h2>
        <h5 v-if="section.project_sections_id.subtitle" class="mb-6">{{ section.project_sections_id.subtitle }}</h5>
        <p v-if="section.project_sections_id.text" class="mb-8">{{ section.project_sections_id.text }}</p>
      </div>

      <div v-if="section.project_sections_id.layout === 'small'" class="grid sm:grid-cols-3 gap-2 sm:gap-4">
        <ProjectsProjectCard v-for="(project, index) in section.project_sections_id.projects" :key="index"
          :project="project.projects_id" :size="section.project_sections_id.layout" />
      </div>
      <ProjectsProjectCard v-else v-for="(project, index) in section.project_sections_id.projects" :key="index"
        :project="project.projects_id" :size="section.project_sections_id.layout" />
      <div class="w-full text-right mt-4">
        <UtilitiesLinkBtn link="/automated-audio-video-experiences">Get Inspired
        </UtilitiesLinkBtn>
      </div>
    </div>
    <div v-if="page.recognition_intro" class="page__body mt-12 mb-28 recognition-intro" style="background: none;">
      <div class="page__body-header">
        <h2 v-if="page.recognition_intro.title" class="page__body-header-title">{{ page.recognition_intro.title }}</h2>
        <h5 v-if="page.recognition_intro.subtitle">{{ page.recognition_intro.subtitle }}</h5>
        <div v-if="page.recognition_intro.text" class="relative" v-html="page.recognition_intro.text"> </div>
        <div class="w-full text-right mt-4">
          <UtilitiesLinkBtn v-if="page.recognition_intro.link" :link="page.recognition_intro.link.link">{{ page.recognition_intro.link.text }}
          </UtilitiesLinkBtn>
        </div>
      </div>
    </div>
    <div v-if="page.partners_intro" class="w-full shadow-inner mb-20 partners-intro">
      <div class="page__body mx-auto">
        <div class="page__body-header">
          <h2 v-if="page.partners_intro.title" class="page__body-header-title">{{ page.partners_intro.title }}</h2>
          <h5 v-if="page.partners_intro.subtitle" class="uppercase page__body-header-subtitle">{{
            page.partners_intro.subtitle }}</h5>
          <div class="relative" v-if="page.partners_intro.text" v-html="page.partners_intro.text"> </div>
          <div v-if="page.partners_intro.partners.length" class="w-full grid grid-cols-3 md:grid-cols-6 gap-6 sm:gap-8 mt-6 mb-20 ">
            <a v-for="(partner, index) in page.partners_intro.partners" :key="index" :href="partner.partners_id.link" target="_blank"
              class="flex items-center justify-center partner">
              <img :src="imageUrl + partner.partners_id.logo" :alt="partner.partners_id.name" class="drop-shadow-md" />
          </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const imageUrl = 'https://admin.frayednot.net/assets/'
const { $directus, $preview } = useNuxtApp();

if ($preview) {
  const { data: page, pending, error } = await useAsyncData('page', () => {
    return $directus.items('home').readOne(1, {
      fields: [
        'featured_sections.background_image,featured_sections.title,featured_sections.subtitle,featured_sections.url,project_sections.project_sections_id.sort,project_sections.project_sections_id.title,project_sections.project_sections_id.sub_title,project_sections.project_sections_id.text,project_sections.project_sections_id.layout,project_sections.project_sections_id.projects.projects_id.sort,project_sections.project_sections_id.projects.projects_id.title,project_sections.project_sections_id.projects.projects_id.description,project_sections.project_sections_id.projects.projects_id.experience,project_sections.project_sections_id.projects.projects_id.category,project_sections.project_sections_id.projects.projects_id.images.directus_files_id,philosophy_intro.title,philosophy_intro.subtitle,philosophy_intro.text,recognition_intro.title,recognition_intro.subtitle,recognition_intro.text,recognition_intro.images.directus_files_id,recognition_intro.link.link,recognition_intro.link.text,partners_intro.title,partners_intro.subtitle,partners_intro.text,partners.partners_id.name,partners_intro.partners.partners_id.link,partners_intro.partners.partners_id.name,partners_intro.partners.partners_id.logo',
      ],
    })
  })
}

const { data: page, pending, error } = await useAsyncData('page', () => {
  return $directus.items('home').readOne(1, {
    fields: [
      'featured_sections.background_image,featured_sections.title,featured_sections.subtitle,featured_sections.url,project_sections.project_sections_id.sort,project_sections.project_sections_id.title,project_sections.project_sections_id.sub_title,project_sections.project_sections_id.text,project_sections.project_sections_id.layout,project_sections.project_sections_id.projects.projects_id.sort,project_sections.project_sections_id.projects.projects_id.title,project_sections.project_sections_id.projects.projects_id.description,project_sections.project_sections_id.projects.projects_id.experience,project_sections.project_sections_id.projects.projects_id.category,project_sections.project_sections_id.projects.projects_id.images.directus_files_id,philosophy_intro.title,philosophy_intro.subtitle,philosophy_intro.text,recognition_intro.title,recognition_intro.subtitle,recognition_intro.text,recognition_intro.images.directus_files_id,recognition_intro.link.link,recognition_intro.link.text,partners_intro.title,partners_intro.subtitle,partners_intro.text,partners.partners_id.name,partners_intro.partners.partners_id.link,partners_intro.partners.partners_id.name,partners_intro.partners.partners_id.logo',
    ],
  })
})
const { data: projects, pending2, error2 } = await useAsyncData('projects', () => {
  return $directus.items('projects').readByQuery({
    fields: [
      'status,title,description,experience,category,images.directus_files_id',
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
    padding-right: 0.25rem;
    padding-left: 0.25rem;

    &-sections {
      color: var(--white);

      background-color: rgba(0, 0, 0, 0.25);
      background-blend-mode: darken;
      box-shadow: inset 0 20px 25px 5px rgba(0, 0, 0, 0.5);
      @apply flex items-center justify-center flex-col;

      h1 {
        font-size: 24px;
        line-height: 30px;
        font-family: var(--serif-font);
        letter-spacing: 0.05em;
        text-shadow: 3px 3px 8px rgba(0, 0, 0, 0.75);
        margin-top: 12px;
        @apply uppercase mb-0;

        @media (min-width: theme('screens.sm')) {
          font-size: 26px;
          line-height: 30px;
          margin-top: 22px;
        }

        @media (min-width: theme('screens.md')) {
          font-size: 30px;
          line-height: 42px;
        }

        @media (min-width: theme('screens.lg')) {
          font-size: 46px;
          line-height: 50px;

        }

        @media (min-width: theme('screens.xl')) {
          font-size: 52px;
          line-height: 60px;
        }
      }

      h5 {
        font-size: 12px;
        text-shadow: 3px 3px 8px rgba(0, 0, 0, 0.75);
        @apply tracking-wider;
      }
    }
  }

  .philosophy-intro {
    @apply relative mb-12;

    p {}

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

  .recognition-intro {
    img {
      /* height: 100px; */
      /* width: auto; */
      height: auto;
      width: 100%;
      max-height: 120px;
    }
  }

  .partners-intro {
    background: rgba(216, 212, 199, 0.25);

    a,
    a:link {
      img {
        transition: all 0.4s var(--curve);
        filter: drop-shadow(3px 3px 5px rgba(0, 0, 0, 0.25));
      }
    }

    a:hover {
      img {
        filter: drop-shadow(15px 15px 5px rgba(0, 0, 0, 0.5));
        transform: scale(1.1);
      }
    }
  }
}
</style>