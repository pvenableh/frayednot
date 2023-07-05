<template>
    <div class="page recognition">
        <LayoutPageHeader :page="page" :heading="heading" />
        <div class=" page__body">
            <div v-for="(section, index) in page.project_sections" :key="index" class="w-full">

                <div class="page__body-header">

                    <h2 v-if="section.project_sections_id.title" class="page__body-header-title">{{
                        section.project_sections_id.title }}</h2>
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
            <div class="w-full my-12 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                <ProjectsProjectCard v-for="(project, index) in page.projects" :key="index" :project="project" />
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
                'header_image,title,intro,url,projects.title,projects.description,projects.experience,projects.category,projects.images.directus_files_id,project_sections.project_sections_id.sort,project_sections.project_sections_id.title,project_sections.project_sections_id.sub_title,project_sections.project_sections_id.text,project_sections.project_sections_id.layout,project_sections.project_sections_id.projects.projects_id.sort,project_sections.project_sections_id.projects.projects_id.title,project_sections.project_sections_id.projects.projects_id.description,project_sections.project_sections_id.projects.projects_id.experience,project_sections.project_sections_id.projects.projects_id.category,project_sections.project_sections_id.projects.projects_id.images.directus_files_id',
            ],
        })
    })
}
const { data: page, pending, error } = await useAsyncData('page', () => {
    return $directus.items('experiences').readOne(1, {
        fields: [
            'header_image,title,intro,url,projects.title,projects.description,projects.experience,projects.category,projects.images.directus_files_id,project_sections.project_sections_id.sort,project_sections.project_sections_id.title,project_sections.project_sections_id.sub_title,project_sections.project_sections_id.text,project_sections.project_sections_id.layout,project_sections.project_sections_id.projects.projects_id.sort,project_sections.project_sections_id.projects.projects_id.title,project_sections.project_sections_id.projects.projects_id.description,project_sections.project_sections_id.projects.projects_id.experience,project_sections.project_sections_id.projects.projects_id.category,project_sections.project_sections_id.projects.projects_id.images.directus_files_id',
        ],
    })
})



</script>
<style></style>