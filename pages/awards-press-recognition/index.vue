<template>
    <div class="page recognition">
        <LayoutPageHeader :page="page" :heading="heading" />
        <div class="page__body">
            <div class="page__body-header">
                <h2 class="page__body-header-title">{{ page.page_header }}</h2>
                <div v-html="page.page_intro"></div>
            </div>
            <div class="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 my-12">
                <a v-for="(article, index) in page.articles" :key="index" :href="article.link" target="_blank"
                    class="press-card">
                    <div v-if="article.image && article.title" class="press-card__image">
                        <img :src="imageUrl + article.image + '?key=small'" :alt="article.title">
                    </div>
                    <div class="press-card__content">
                        <h3 v-if="article.title" class="">{{ article.title }}</h3>
                        <p v-if="article.subtitle" class="">{{ article.subtitle }}</p>
                    </div>
                </a>
            </div>
            <div v-if="page.certified_intro" class="page__body-header flex items-center flex-col md:flex-row">
                <div class="md:flex-grow-0">
                    <h2 v-if="page.certified_intro.title" class="page__body-header-title">{{ page.certified_intro.title }}
                    </h2>
                    <div v-if="page.certified_intro.text" v-html="page.certified_intro.text" class="mb-4"></div>
                </div>
                <img v-if="page.certified_intro.images.length"
                    :src="imageUrl + page.certified_intro.images[0].directus_files_id + '?key=medium'" alt="HTA Logo"
                    class="w-full md:w-[200px] h-auto md:ml-20" />
            </div>
        </div>
        <div v-if="page.recognition_intro" class="w-full shadow-inner my-20 recognition-intro">
            <div class="page__body mx-auto">
                <div class="page__body-header">
                    <h2 v-if="page.recognition_intro.title" class="page__body-header-title">{{ page.recognition_intro.title
                    }}
                    </h2>
                    <h5 v-if="page.recognition_intro.subtitle">{{ page.recognition_intro.subtitle }}</h5>
                    <div v-if="page.recognition_intro.text" class="relative" v-html="page.recognition_intro.text"> </div>
                    <div v-if="page.recognition_intro.images.length" class="flex items-center justify-around mb-8">
                        <div v-for="(image, index) in page.recognition_intro.images" :key="index"
                            class="my-8 p-1 md:p-6 flex items-center justify-center"
                            :class="'w-1/' + page.recognition_intro.images.length">
                            <a v-if="image.directus_files_id.location" :href="image.directus_files_id.location"
                                target="_blank">
                                <img :src="imageUrl + image.directus_files_id.id + '?key=small'" :key="index"
                                    :alt="image.directus_files_id.title + ' Award'" class="inline-block" />
                            </a>
                            <img v-else :src="imageUrl + image.directus_files_id.id + '?key=small'" :key="index"
                                :alt="image.directus_files_id.title + ' Award'" class="inline-block" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const config = useRuntimeConfig()
const route = useRoute()
const heading = ref('Recognition')
const imageUrl = 'https://admin.frayednot.net/assets/'
const { $directus, $preview } = useNuxtApp();

if ($preview) {
    const { data: page, pending, error } = await useAsyncData('page', () => {
        return $directus.items('recognition').readOne(1, {
            fields: [
                'header_image,title,caption,page_header,page_intro,url,articles.title,articles.subtitle,articles.link,articles.image,certified_intro.title,certified_intro.subtitle,certified_intro.text,certified_intro.images.directus_files_id,recognition_intro.title,recognition_intro.subtitle,recognition_intro.text,recognition_intro.images.directus_files_id.id,recognition_intro.images.directus_files_id.title,recognition_intro.images.directus_files_id.location,seo.*',
            ],
        })
    })
}
const { data: page, pending, error } = await useAsyncData('page', () => {
    return $directus.items('recognition').readOne(1, {
        fields: [
            'header_image,title,caption,page_header,page_intro,url,articles.title,articles.subtitle,articles.link,articles.image,certified_intro.title,certified_intro.subtitle,certified_intro.text,certified_intro.images.directus_files_id,recognition_intro.title,recognition_intro.subtitle,recognition_intro.text,recognition_intro.images.directus_files_id.id,recognition_intro.images.directus_files_id.title,recognition_intro.images.directus_files_id.location,seo.*',
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
.page__body-header {
    p {
        a {
            color: var(--blue);
            @apply underline;
        }
    }
}

.recognition-intro {
    background: rgba(162, 162, 162, 0.15);
    background: rgba(216, 212, 199, 0.25);

    img {
        transition: all 0.4s var(--curve);
        filter: drop-shadow(3px 3px 5px rgba(0, 0, 0, 0.25));
    }



    img:hover {
        filter: drop-shadow(15px 15px 5px rgba(0, 0, 0, 0.5));
        transform: scale(1.1);

    }
}

.press-card {
    width: 100%;

    @apply mb-12;

    @media (min-width: theme('screens.sm')) {}

    &__image {

        height: 360px;
        border: thin solid var(--grey);
        @apply p-4 w-full h-auto;
    }

    &__content {
        height: 60px;

        h3 {
            line-height: 1em;
            @apply font-serif my-2;
        }

        p {
            font-size: 11px;
            @apply font-serif;
        }
    }
}
</style>