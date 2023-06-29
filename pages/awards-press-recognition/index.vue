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
                    <h2 class="page__body-header-title">Certified Luxury</h2>
                    <p class="mb-4">HTA Certified Luxury is the official standard for the elite category. Less than 8% of
                        companies in the custom audio/video integration industry is certified by HTA standards. frayednot,
                        LLC
                        has been awarded the HTA certification for its unique luxury designs and seamless solutions. See our
                        HTA
                        profile <a
                            href="https://htacertified.org/app/company/Smart-home-theater-design-installation-by-frayednot-summit-nj/"
                            target="_blank" class="underline">here</a>.
                    </p>
                    <p>See what it means to be HTA Certified luxury company <a
                            href="https://htacertified.org/app/articles/hta-certification-defined/" target="_blank"
                            class="underline">here</a>.
                    </p>
                </div>
                <img src="/images/technology/HTA.png" alt="HTA Logo" class="w-full md:w-[200px] h-auto md:ml-20"/>
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
                'header_image,title,intro,url,articles.title,articles.subtitle,articles.link,articles.image',
            ],
        })
    })
}
const { data: page, pending, error } = await useAsyncData('page', () => {
    return $directus.items('recognition').readOne(1, {
        fields: [
            'header_image,title,intro,url,articles.title,articles.subtitle,articles.link,articles.image',
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