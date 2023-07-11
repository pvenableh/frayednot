<template>
    <div class="page contact">
        <LayoutPageHeader :page="page" :heading="heading" />
    </div>
</template>

<script setup>
const heading = ref('Contact')
const imageUrl = 'https://admin.frayednot.net/assets/'
const { $directus, $preview } = useNuxtApp();

if ($preview) {
    const { data: page, pending, error } = await useAsyncData('page', () => {
        return $directus.items('contact').readOne(1, {
            fields: [
                'header_image,title,intro,url',
            ],
        })
    })
}
const { data: page, pending, error } = await useAsyncData('page', () => {
    return $directus.items('contact').readOne(1, {
        fields: [
            'header_image,title,intro,url',
        ],
    })
})



</script>
<style>
</style>