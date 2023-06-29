<template>
    <div class="page philosophy">
        <LayoutPageHeader :page="page" :heading="heading" />
        <div class="page__body grid lg:grid-cols-3 gap-2 lg:gap-20">
            <div class="page__body-header">
                <h2 class="page__body-header-title">About</h2>
                <p>{{ page.about }}</p>
            </div>
            <div class="page__body-header approach relative">
                <h2 class="page__body-header-title">Approach</h2>
                <p>{{ page.approach }}</p>
            </div>
            <div class="page__body-header">
                <h2 class="page__body-header-title">Expertise</h2>
                <p>{{ page.expertise }}</p>
            </div>
        </div>
        <div class="page__body w-full flex flex-row items-center justify-center justify-center mt-32">
            <img src="/images/technology/HTA.png" alt="HTA" class="w-1/4 sm:w-1/5 md:w-1/6 max-w-xs h-auto" />
            <img src="/images/technology/CEDIA-CERTIFIED.png" alt="Cedia Certified" class="w-1/4 mx-6 sm:mx-12 md:mx-20 sm:w-1/5 md:w-1/6 max-w-xs h-auto" />
            <img src="/images/technology/CEDIA-MEMBER.png" alt="Cedia Member" class="w-1/4 sm:w-1/5 md:w-1/6 max-w-xs h-auto" />
        </div>
    </div>
</template>

<script setup>
const heading = ref('Philosophy')
const imageUrl = 'https://admin.frayednot.net/assets/'
const { $directus, $preview } = useNuxtApp();

if ($preview) {
    const { data: page, pending, error } = await useAsyncData('page', () => {
        return $directus.items('philosophy').readOne(1, {
            fields: [
                'header_image,title,intro,url,about,approach,expertise',
            ],
        })
    })
}
const { data: page, pending, error } = await useAsyncData('page', () => {
    return $directus.items('philosophy').readOne(1, {
        fields: [
            'header_image,title,intro,url,about,approach,expertise',
        ],
    })
})



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
</style>