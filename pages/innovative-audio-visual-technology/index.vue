<template>
    <div class="page recognition">
        <LayoutPageHeader :page="page" :heading="heading" />
        <div class="page__body">
            <div class="page__body-header">
                <h2 class="page__body-header-title">Innovative Experience.</h2>
                <p class="mb-6">At frayednot, LLC, we work with the top of the line and most advanced technology on the market. We do
                    this in order to create the latest and most outstanding network and sound/audio design experiences.</p>
                <p>Our partners are the leaders in this market and together with our expertise, we create the most amazing
                    solutions for each client.</p>
            </div>
            <div class="w-full grid grid-cols-3 md:grid-cols-6 gap-6 sm:gap-12 md:gap-12 lg:gap-12 mt-12">
                <nuxt-link v-for="(partner, index) in page.partners" :key="index" :to="partner.url" class="flex items-center justify-center partner">
                    <img :src="imageUrl + partner.logo" :alt="partner.name" />
                </nuxt-link>
            </div>
            <div class="page__body-header">
                <h2 class="page__body-header-title">UNSEEN EXPERIENCE</h2>
                <h3 class="uppercase mb-12 -mt-6 tracking-wider">Tech Design & Products</h3>
                <p class="mb-6">Known as the nervous system of the home technology, tech rooms are planned out from the beginning stages of the project. frayednot works hand in hand with contractor and architects in carving out this space so the unseen experience can be built on.</p>
                <div class="grid grid-cols-3 gap-2 md:gap-16 mt-12">
                    <img src="/images/technology/tech-stack-1.jpg" alt="" />
                    <img src="/images/technology/tech-stack-2.jpg" alt="" />
                    <img src="/images/technology/tech-stack-3.jpg" alt="" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const heading = ref('Technology')
const imageUrl = 'https://admin.frayednot.net/assets/'
const { $directus, $preview } = useNuxtApp();

if ($preview) {
    const { data: page, pending, error } = await useAsyncData('page', () => {
        return $directus.items('technology').readOne(1, {
            fields: [
                'header_image,title,intro,url,partners.name,partners.link,partners.logo',
            ],
        })
    })
}
const { data: page, pending, error } = await useAsyncData('page', () => {
    return $directus.items('technology').readOne(1, {
        fields: [
            'header_image,title,intro,url,partners.name,partners.link,partners.logo',
        ],
    })
})



</script>
<style></style>