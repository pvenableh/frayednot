<template>
  <div class="relative w-full flex items-center justify-center flex-col min-h-screen payment">
   
   
      <h1 class="uppercase mt-12 mb-6 tracking-widest">coming soon.</h1>
  </div>
</template>

<script setup>


const { $directus } = useNuxtApp()
const { data: home, pending, error } = await useAsyncData('page', () => {
  return $directus.items('payment').readOne(1, {
    fields: [
      'featured_sections.background_image,featured_sections.title,featured_sections.subtitle',
    ],
  })
})

const imageUrl = 'https://admin.frayednot.net/assets/'


</script>
<style>
</style>