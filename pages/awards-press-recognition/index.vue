<template>
    <div class="page recognition">
        <LayoutPageHeader :page="page" :heading="heading" />
        <div class="page__body">
            <div class="page__body-header">
                <h2 class="page__body-header-title">Recognition</h2>
                <p>frayednot has won prestigious awards over the years. frayednot was featured in several articles within
                    the audio/video integration industry over the years.</p>
            </div>
            <div class="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 my-12">
                <a v-for="(article, index) in page.articles" :key="index" :href="article.link" target="_blank"
                    class="press-card">
                    <div class="press-card__image">
                        <img :src="imageUrl + article.image + '?key=small'" :alt="article.title">
                    </div>
                    <div class="press-card__content">
                        <h3 class="">{{ article.title }}</h3>
                        <p class="">{{ article.subtitle }}</p>
                    </div>
                </a>
            </div>
            <div class="page__body-header flex items-center flex-col md:flex-row">
                <div class="md:flex-grow-0">
                    <h2 class="page__body-header-title">{{ page.certified_intro.title }}</h2>
                    <div v-html="page.certified_intro.text" class="mb-4"></div>
                </div>
                <img v-if="page.certified_intro.images.length" :src="imageUrl + page.certified_intro.images[0].directus_files_id" alt="HTA Logo" class="w-full md:w-[200px] h-auto md:ml-20"/>
            </div>
        </div>
    </div>
</template>

<script setup>
const heading = ref('Recognition')
const imageUrl = 'https://admin.frayednot.net/assets/'
const { $directus, $preview } = useNuxtApp();

if ($preview) {
    const { data: page, pending, error } = await useAsyncData('page', () => {
        return $directus.items('recognition').readOne(1, {
            fields: [
                'header_image,title,intro,url,articles.title,articles.subtitle,articles.link,articles.image,certified_intro.title,certified_intro.subtitle,certified_intro.text,certified_intro.images.directus_files_id',
            ],
        })
    })
}
const { data: page, pending, error } = await useAsyncData('page', () => {
    return $directus.items('recognition').readOne(1, {
        fields: [
            'header_image,title,intro,url,articles.title,articles.subtitle,articles.link,articles.image,certified_intro.title,certified_intro.subtitle,certified_intro.text,certified_intro.images.directus_files_id',
        ],
    })
})



</script>
<style>
.press-card {
    width: 100%;
  
    @apply mb-12;

    @media (min-width: theme('screens.sm')) {
  
    }

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
}</style>