<template>
    <div class="page experiences">
        <LayoutPageHeader :page="page" :heading="heading" />
        <div class=" page__body">
            <div v-for="(section, index) in page.project_sections" :key="index" class="w-full">

                <div class="page__body-header">

                    <h2 v-if="section.project_sections_id.title" class="page__body-header-title">{{
                        section.project_sections_id.title }}</h2>
                    <h5 v-if="section.project_sections_id.subtitle">{{ section.project_sections_id.subtitle }}</h5>
                    <p v-if="section.project_sections_id.text" class="mb-12">{{ section.project_sections_id.text }}</p>
                </div>

                <div v-if="section.project_sections_id.layout === 'small'" class="grid sm:grid-cols-3 gap-2 sm:gap-4">
                    <ProjectsProjectCard v-for="(project, index) in section.project_sections_id.projects" :key="index"
                        :project="project.projects_id" :size="section.project_sections_id.layout" />
                </div>
                <ProjectsProjectCard v-else v-for="(project, index) in section.project_sections_id.projects" :key="index"
                    :project="project.projects_id" :size="section.project_sections_id.layout" />
            </div>
            <ProjectsProjectPortfolio :projects="page.projects" />
        </div>
        <div class="page__body mb-20 recognition-intro">
            <div class="page__body-header">
                <h2 v-if="page.recognition_intro.title" class="page__body-header-title">{{ page.recognition_intro.title }}
                </h2>
                <h5 v-if="page.recognition_intro.subtitle">{{ page.recognition_intro.subtitle }}</h5>
                <div class="relative" v-html="page.recognition_intro.text"> </div>
                <div v-if="page.recognition_intro.images.length" class="flex items-center justify-around">
                    <div v-for="(image, index) in page.recognition_intro.images" :key="index"
                        class="my-8 p-1 md:p-6 flex items-center justify-center"
                        :class="'w-1/' + page.recognition_intro.images.length">
                        <img :src="imageUrl + image.directus_files_id + '?key=small'" :key="index" alt="Award"
                            class="inline-block" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const heading = ref('Experiences')
const imageUrl = 'https://admin.frayednot.net/assets/'
const { $directus, $preview } = useNuxtApp();

if ($preview) {
    const { data: page, pending, error } = await useAsyncData('page', () => {
        return $directus.items('experiences').readOne(1, {
            fields: [
                'header_image,title,intro,url,projects.status,projects.title,projects.description,projects.experience,projects.category,projects.images.directus_files_id,project_sections.project_sections_id.sort,project_sections.project_sections_id.title,project_sections.project_sections_id.sub_title,project_sections.project_sections_id.text,project_sections.project_sections_id.layout,project_sections.project_sections_id.projects.projects_id.sort,project_sections.project_sections_id.projects.projects_id.title,project_sections.project_sections_id.projects.projects_id.description,project_sections.project_sections_id.projects.projects_id.experience,project_sections.project_sections_id.projects.projects_id.category,project_sections.project_sections_id.projects.projects_id.images.directus_files_id,recognition_intro.title,recognition_intro.subtitle,recognition_intro.text,recognition_intro.images.directus_files_id',
            ],
        })
    })
}
const { data: page, pending, error } = await useAsyncData('page', () => {
    return $directus.items('experiences').readOne(1, {
        fields: [
            'header_image,title,intro,url,projects.status,projects.title,projects.description,projects.experience,projects.category,projects.images.directus_files_id,project_sections.project_sections_id.sort,project_sections.project_sections_id.title,project_sections.project_sections_id.sub_title,project_sections.project_sections_id.text,project_sections.project_sections_id.layout,project_sections.project_sections_id.projects.projects_id.sort,project_sections.project_sections_id.projects.projects_id.title,project_sections.project_sections_id.projects.projects_id.description,project_sections.project_sections_id.projects.projects_id.experience,project_sections.project_sections_id.projects.projects_id.category,project_sections.project_sections_id.projects.projects_id.images.directus_files_id,recognition_intro.title,recognition_intro.subtitle,recognition_intro.text,recognition_intro.images.directus_files_id',
        ],
    })
})



</script>
<style></style>