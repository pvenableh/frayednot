<template>
    <div class="page experiences">
        <LayoutPageHeader :page="page" :heading="heading" />
        <div class="page__body">
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

            <div class="mt-20 grid grid-cols-1 md:grid-cols-3 gap-1">
                <ProjectsProjectCard v-for="(project, index) in page.projects" :key="index" :project="project" size="small" />
            </div>
        </div>
        <div v-if="page.recognition_intro" class="w-full shadow-inner my-20 recognition-intro">
            <div class="page__body mx-auto">
                <div class="relative pb-20 page__body-header">
                    <h2 v-if="page.recognition_intro.title" class="page__body-header-title">{{ page.recognition_intro.title
                    }}
                    </h2>
                    <h5 v-if="page.recognition_intro.subtitle">{{ page.recognition_intro.subtitle }}</h5>
                    <div v-if="page.recognition_intro.text" class="relative" v-html="page.recognition_intro.text"> </div>
                    <div class="w-full text-right mt-4">
                        <UtilitiesLinkBtn v-if="page.recognition_intro.link" :link="page.recognition_intro.link.link">{{
                            page.recognition_intro.link.text }}
                        </UtilitiesLinkBtn>
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
                'header_image,title,caption,url,projects.status,projects.title,projects.description,projects.experience,projects.category,projects.images.directus_files_id,project_sections.project_sections_id.sort,project_sections.project_sections_id.title,project_sections.project_sections_id.sub_title,project_sections.project_sections_id.text,project_sections.project_sections_id.layout,project_sections.project_sections_id.projects.projects_id.sort,project_sections.project_sections_id.projects.projects_id.title,project_sections.project_sections_id.projects.projects_id.description,project_sections.project_sections_id.projects.projects_id.experience,project_sections.project_sections_id.projects.projects_id.category,project_sections.project_sections_id.projects.projects_id.images.directus_files_id,recognition_intro.title,recognition_intro.subtitle,recognition_intro.text,recognition_intro.images.directus_files_id,recognition_intro.link.link,recognition_intro.link.text',
            ],
        })
    })
}
const { data: page, pending, error } = await useAsyncData('page', () => {
    return $directus.items('experiences').readOne(1, {
        fields: [
            'header_image,title,caption,url,projects.status,projects.title,projects.description,projects.experience,projects.category,projects.images.directus_files_id,project_sections.project_sections_id.sort,project_sections.project_sections_id.title,project_sections.project_sections_id.sub_title,project_sections.project_sections_id.text,project_sections.project_sections_id.layout,project_sections.project_sections_id.projects.projects_id.sort,project_sections.project_sections_id.projects.projects_id.title,project_sections.project_sections_id.projects.projects_id.description,project_sections.project_sections_id.projects.projects_id.experience,project_sections.project_sections_id.projects.projects_id.category,project_sections.project_sections_id.projects.projects_id.images.directus_files_id,recognition_intro.title,recognition_intro.subtitle,recognition_intro.text,recognition_intro.images.directus_files_id,recognition_intro.link.link,recognition_intro.link.text'
        ],
    })
})



</script>
<style></style>