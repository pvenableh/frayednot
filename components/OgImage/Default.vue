<script setup lang="ts">
// inherited attrs can mess up the satori parser
defineOptions({
  inheritAttrs: false,
})

const props = defineProps({
  path: String,
  title: {
    type: String,
    default: 'frayednot | Residential Audio/Visual Automation Design and Integration |  Cranford, NJ',
  },
  description: {
    type: String,
    default: 'Set a description to change me.',
  },
  background: {
    type: String,
    default: 'linear-gradient(to bottom, #dbf4ff, #fff1f1)',
  },
  color: {
    type: String,
  },
  padding: {
    type: String,
    default: '0 50px',
  },
  titleFontSize: {
    type: String,
    default: '50px',
  },
  descriptionFontSize: {
    type: String,
    default: '35px',
  },
  icon: {
    type: [String, Boolean],
    default: 'logos:nuxt',
  },
  image: {
    type: String,
    required: false,
  },
  siteName: {
    type: String,
    required: false,
  },
  siteLogo: {
    type: String,
    required: false,
  },
})
const backgroundAttrs = computed(() => {
  // we want to make a
  // const isBackgroundTw = props.background?.startsWith('bg-')
  return {
    style: {
      display: 'flex',
      position: 'absolute',
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(5, 5, 5, 0.5)',
      backgroundBlendMode: 'darken',
    },
  }
})

const backgroundFlareAttrs = computed(() => {
  // we want to make a
  // const isBackgroundTw = props.background?.startsWith('bg-')
  return {
    style: {
      display: 'flex',
      position: 'absolute',
      right: '-50%',
      top: '0%',
      width: '200%',
      height: '200%',
      backgroundImage: 'radial-gradient(circle, rgba(0,220,130, 0.2) 0%,  rgba(5, 5, 5, 0.5) 50%, rgba(5, 5, 5,0) 70%)',
    },
  }
})

const backgroundFlareTwoAttrs = computed(() => {
  // we want to make a
  // const isBackgroundTw = props.background?.startsWith('bg-')
  return {
    style: {
      display: 'flex',
      position: 'absolute',
      left: '-5%',
      width: '150%',
      height: '150%',
      backgroundImage: 'radial-gradient(circle, rgba(0,123,220, 1) 0%,  rgba(5, 5, 5, 0.3) 50%, rgba(5, 5, 5,0) 70%)',
    },
  }
})

const titleAttrs = computed(() => {
  const classes = []
  const styles = {
    fontWeight: 'normal',
    marginBottom: '50px',
    lineHeight: '70px',
    fontSize: props.titleFontSize,
  }
  return { class: classes, style: styles }
})

const descriptionAttrs = computed(() => {
  const classes = []
  const styles = {
    fontSize: props.descriptionFontSize,
  }
  return { class: classes, style: styles }
})

const siteConfig = useSiteConfig()
const siteName = computed(() => {
  return props.siteName || siteConfig.name
})
const siteLogo = computed(() => {
  return props.siteLogo || siteConfig.logo || 'https://nuxt.com/assets/design-kit/logo/full-logo-green-light.png'
})
</script>

<template>
  <div v-if="image" class="w-full h-full bg-cover bg-no-repeat bg-center absolute items-end justify-center "
    :style="`background-image: url(https://admin.frayednot.net/assets/${image})`" />
  <div v-bind="backgroundAttrs" />
  <!-- <div v-bind="backgroundFlareAttrs" />
<div v-bind="backgroundFlareTwoAttrs" /> -->



  <div class="w-full h-full flex items-center justify-center relative p-20">
    <img src="/images/logo.png" class="absolute z-[1] opacity-50" />
    <div class="w-full flex flex-col h-full justify-end z-10">
      <div class="flex flex-col text-white">
        <div class="mb-6 text-2xl tracking-widest">frayednot, llc</div>
        <div class="serif-font uppercase tracking-wider text-2xl"
          style="font-family: 'Cinzel','Georgia','Cambria','Times New Roman','Times', 'serif'">
          {{ title }}
        </div>
        <div class="mt-6 leading-9 max-w-2xl">
          {{ description }}
        </div>
      </div>
    </div>

  </div>
</template>

<style>
.serif-font {
  font-family: var(--serif-font);
}

h1 {
  font-size: 70px;
}
</style>