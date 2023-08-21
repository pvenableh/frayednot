<template>
  <div :class="pageStore.page">
    <!-- <VitePwaManifest /> -->
    <NuxtLoadingIndicator color="var(--black)" :height="4" />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup>
import { usePageStore } from '~~/store/PageStore'
const pageStore = usePageStore()
</script>