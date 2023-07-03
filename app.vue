<template>
  <div :class="pageStore.page">
    <NuxtLayout>
      <NuxtLoadingIndicator color="var(--black)" :height="8" />
      <NuxtPage />
    </NuxtLayout>
    <OgImage
    component="Default"
    title="Uncompromised sound. Unseen experience."
    description="At frayednot, we don’t just design systems, we create unique experiences. Our projects over the years have proven that a seamless, reliable and simplified design can be accomplished."
    image="7bbf9238-be79-4b88-80d0-042820415117"
  />
  </div>
</template>
<script setup>
import { usePageStore } from '~~/store/PageStore'
const pageStore = usePageStore()
</script>