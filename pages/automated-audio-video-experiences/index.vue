<template>
    <div class="page recognition">
        <LayoutPageHeader :page="page" :heading="heading" />
        <div class="page__body">
            <div class="page__body-header">
                <h2 class="page__body-header-title">Feel the Experience.</h2>
                <p>Projects that inspire.</p>
            </div>
            <div class="w-full my-12 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                <ProjectsProjectCard v-for="(project, index) in page.projects" :key="index" :project="project"/>
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
                'header_image,title,intro,url,projects.title,projects.description,projects.experience,projects.category,projects.images.directus_files_id',
            ],
        })
    })
}
const { data: page, pending, error } = await useAsyncData('page', () => {
    return $directus.items('experiences').readOne(1, {
        fields: [
            'header_image,title,intro,url,projects.title,projects.description,projects.experience,projects.category,projects.images.directus_files_id',
        ],
    })
})



</script>
<style>
</style>