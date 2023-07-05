<template>

    <div class="w-full grid grid-cols-4 social-share">
      <ShareNetwork
        network="linkedin"
        :url="url"
        :title="title"
        :description="description"
        :quote="quote"
      >
     
      <span>Share on Twitter</span>
    </ShareNetwork>
    <ShareNetwork
        network="instagram"
        :url="url"
        :title="title"
        :description="description"
        :quote="quote"
      >
   
      <span>Share on Twitter</span>
    </ShareNetwork>
      <ShareNetwork
        network="facebook"
        :url="url"
        :title="title"
        :description="description"
        :quote="quote"
      >
      
      <span>Share on Twitter</span>
    </ShareNetwork>
    </div>
    
</template>
  <script setup>
const props = defineProps({
  url: {
    type: String,
    default: 'https://www.frayednot.net',
  },
  title: {
    type: String,
    default: 'frayednot | Residential Audio/Visual Automation Design and Integration |  Cranford, NJ',
  },
  description: {
    type: String,
    default: 'frayednot strives to create custom, sophisticated, seamless yet simple-to-use, integrated home audio/video systems. No project has been the same, it is always custom to fit the experience you envision.',
  },
  quote: {
    type: String,
    default: 'Uncompromised sound.  Unseen experience.',
  }
})
 
</script>


<style>
.social-share {
 
    @media (min-width: theme('screens.md')) {
    }
}</style>
