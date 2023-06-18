<template>
  <nuxt-link class="next-project-btn" v-if="!pending && nextProject.data.length"
    :to="nextProject.data[0].url + '?direction=next'">Next Project <nuxt-icon name="arrow-right"
      class="ml-2 arrow-right-icon" /></nuxt-link>
  <a v-else class="opacity-40 next-project-btn" href="#" @click.prevent>Next Project <nuxt-icon name="arrow-right"
      class="ml-2 arrow-right-icon" /></a>
</template>

<script setup>
const props = defineProps({
  sort: {
    type: [String, Number],
    default: '',
  },
})
const { data: nextProject, pending } = await useLazyFetch(
  `https://admin.rkcad.com/items/projects?filter[sort][_gt]=${props.sort}&filter[status][_eq]=published&fields=title,url,sort,id&meta=*`
)
</script>
<style>
.next-project-btn,
.prev-project-btn {
  .nuxt-icon {
    height: 12px;
    fill: black;
    transition: 0.4s var(--curve);
    display: inline-block !important;
    transform: translateX(0px);

    svg {
      margin-top: -2px;
      height: 12px;
      display: inline-block !important;

      path {
        stroke-width: 10px;
        stroke: var(--blue) !important;
      }
    }
  }
}
</style>