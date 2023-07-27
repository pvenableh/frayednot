<template>
    <div class="page philosophy">
        <LayoutPageHeader :page="page" :heading="heading" />
        <div class="page__body grid lg:grid-cols-3 gap-2 lg:gap-20 my-12">
            <div v-if="page.about" class="page__body-header">
                <h2 class="page__body-header-title">About</h2>
                <p>{{ page.about }}</p>
            </div>
            <div v-if="page.approach" class="page__body-header approach relative">
                <h2 class="page__body-header-title">Approach</h2>
                <p>{{ page.approach }}</p>
            </div>
            <div v-if="page.expertise" class="page__body-header">
                <h2 class="page__body-header-title">Expertise</h2>
                <p>{{ page.expertise }}</p>
            </div>
        </div>

        <div v-for="(section, index) in page.project_sections" :key="index" class="w-full page__body">

            <div class="page__body-header">

                <h2 v-if="section.project_sections_id.title" class="page__body-header-title">{{
                    section.project_sections_id.title
                }}</h2>
                <h3 class="uppercase page__body-header-subtitle">{{ section.project_sections_id.sub_title }}</h3>
                <!-- <h5 v-if="section.project_sections_id.sub_title" class="uppercase -mt-8 mb-2 page__body-header-subtitle"></h5> -->
                <p v-if="section.project_sections_id.text" class="mb-12">{{ section.project_sections_id.text }}</p>
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
        <div class="page__body">
            <div class="page__body-header">
                <h2 v-if="technology.title" class="page__body-header-title">{{ technology.title }}</h2>
                <h3 v-if="technology.subtitle" class="uppercase page__body-header-subtitle">{{ technology.subtitle }}</h3>
                <div v-if="technology.text" class="mb-6" v-html="technology.text"></div>
                <div class="w-full text-right mt-4">
                    <UtilitiesLinkBtn v-if="technology.link" :link="technology.link.link">{{ technology.link.text }}
                    </UtilitiesLinkBtn>
                </div>
            </div>
        </div>
        <div v-if="page.certifications.length"
            class="page__body w-full flex flex-row items-center justify-between my-32 certifications">
            <a :href="certification.link" target="_blank" v-for="(certification, index) in page.certifications" :key="index"
                class="flex items-center w-1/4 sm:w-1/5 md:w-1/6">
                <img :src="imageUrl + certification.logo" :alt="certification.name" class="w-full h-auto" />
            </a>
        </div>
    </div>
</template>

<script setup>
const config = useRuntimeConfig()
const route = useRoute()
const heading = ref('Philosophy')
const imageUrl = 'https://admin.frayednot.net/assets/'
const { $directus, $preview } = useNuxtApp();
const technology = ref({})
if ($preview) {
    const { data: page, pending, error } = await useAsyncData('page', () => {
        return $directus.items('philosophy').readOne(1, {
            fields: [
                'header_image,title,caption,url,about,approach,expertise,project_sections.project_sections_id.sort,project_sections.project_sections_id.title,project_sections.project_sections_id.sub_title,project_sections.project_sections_id.sub_title,project_sections.project_sections_id.text,project_sections.project_sections_id.layout,project_sections.project_sections_id.projects.projects_id.sort,project_sections.project_sections_id.projects.projects_id.title,project_sections.project_sections_id.projects.projects_id.description,project_sections.project_sections_id.projects.projects_id.experience,project_sections.project_sections_id.projects.projects_id.category,project_sections.project_sections_id.projects.projects_id.images.directus_files_id,technology_intro.title,technology_intro.subtitle,technology_intro.text,technology_intro.images.directus_files_id,technology_intro.link.link,technology_intro.link.text,certifications.name,certifications.link,certifications.logo,seo.*',
            ],
        })
    })
    technology.value = page.value.technology_intro
}
const { data: page, pending, error } = await useAsyncData('page', () => {
    return $directus.items('philosophy').readOne(1, {
        fields: [
            'header_image,title,caption,url,about,approach,expertise,project_sections.project_sections_id.sort,project_sections.project_sections_id.title,project_sections.project_sections_id.sub_title,project_sections.project_sections_id.text,project_sections.project_sections_id.layout,project_sections.project_sections_id.projects.projects_id.sort,project_sections.project_sections_id.projects.projects_id.title,project_sections.project_sections_id.projects.projects_id.description,project_sections.project_sections_id.projects.projects_id.experience,project_sections.project_sections_id.projects.projects_id.category,project_sections.project_sections_id.projects.projects_id.images.directus_files_id,technology_intro.title,technology_intro.subtitle,technology_intro.text,technology_intro.images.directus_files_id,technology_intro.link.link,technology_intro.link.text,certifications.name,certifications.link,certifications.logo,seo.*',
        ],
    })
})

technology.value = page.value.technology_intro
if (page.value.seo) {
    useHead({
        title: () => (page.value.seo.title ? page.value.seo.title : config.public.seo.title),
    })

    useSeoMeta({
        title: () => (page.value.seo.title ? page.value.seo.title : config.public.seo.title),
        description: () => (page.value.seo.meta_description ? page.value.seo.meta_description : config.public.seo.description),
        ogDescription: () =>
            (page.value.seo.meta_description ? page.value.seo.meta_description : config.public.seo.description),
        ogUrl: () => 'https://frayednot.net' + route.path,
        ogTitle: () => (page.value.seo.title ? page.value.seo.title : config.public.seo.title),
        ogImage: () => (page.value.seo.og_image ? imageUrl + page.value.seo.og_image : config.public.seo.image),
        ogType: 'website',
        ogSiteName: 'frayednot',
        twitterTitle: (page.value.seo.title ? page.value.seo.title : config.public.seo.title),
        twitterDescription: (page.value.seo ? page.value.seo.meta_description : config.public.seo.description),
        twitterImage: (page.value.seo.og_image ? imageUrl + page.value.seo.og_image : config.public.seo.image),
        twitterCard: 'summary',
    })
}
</script>
<style>
.approach::before {
    @media (min-width: theme('screens.lg')) {
        background: var(--grey);
        height: calc(100% - 80px);
        content: '';
        width: 1px;
        position: absolute;
        top: 80px;
        left: -2.5rem;
    }

}

.approach::after {
    @media (min-width: theme('screens.lg')) {
        background: var(--grey);
        height: calc(100% - 80px);
        content: '';
        width: 1px;
        position: absolute;
        top: 80px;
        right: -2.5rem;
    }

}

.certifications {

    a,
    a:link {
        img {
            transition: all 0.4s var(--curve);
            filter: drop-shadow(3px 3px 5px rgba(0, 0, 0, 0.25));
        }
    }

    a:hover {
        img {
            @media (min-width: theme('screens.lg')) {
                filter: drop-shadow(15px 15px 5px rgba(0, 0, 0, 0.5));
                transform: scale(1.1);
            }
        }
    }
}
</style>