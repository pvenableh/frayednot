<template>
    <div class="page contact">
        <LayoutPageHeader :page="page" :heading="heading" />
    </div>
</template>

<script setup>
const config = useRuntimeConfig()
const route = useRoute()
const heading = ref('Contact')
const imageUrl = 'https://admin.frayednot.net/assets/'
const { $directus, $preview } = useNuxtApp();

if ($preview) {
    const { data: page, pending, error } = await useAsyncData('page', () => {
        return $directus.items('contact').readOne(1, {
            fields: [
                'header_image,title,caption,url,seo.*',
            ],
        })
    })
}
const { data: page, pending, error } = await useAsyncData('page', () => {
    return $directus.items('contact').readOne(1, {
        fields: [
            'header_image,title,caption,url,seo.*',
        ],
    })
})

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
.contact {
    .page__header {
        height: 96vh;
    }
}
</style>