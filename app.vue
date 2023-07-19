<template>
  <div :class="pageStore.page">
    <NuxtLayout>
      <NuxtLoadingIndicator color="var(--black)" :height="4" />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup>
import { usePageStore } from '~~/store/PageStore'
const pageStore = usePageStore()
</script>