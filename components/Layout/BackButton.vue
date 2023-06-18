<template>
  <a class="relative back-btn" @click.prevent="goBack()" @mouseenter="hover = true" @mouseleave="hover = false">
    <span class="arrow" :class="{ hide: hover }">
      <nuxt-icon name="arrow-left" class="mr-2 arrow-left-icon" />
    </span>
    <span class="absolute text" :class="{ show: hover }"><nuxt-icon name="arrow-left" class="mr-2 arrow-left-icon" />Back
      to
      {{ page }}</span>
  </a>
</template>
<script setup>
const props = defineProps({
  page: {
    type: String,
    default: '',
  },
})
const hover = ref(false)
const router = useRouter()
function goBack() {
  if (props.page === 'Work') {
    router.push({ path: '/interior-design-architecture-portfolio/' });
  } else if (props.page === 'Press') {
    router.push({ path: '/architecture-design-press-awards/' });
  }
}
</script>
<style>
.back-btn {
  transition: all 0.4s var(--curve);
  @apply w-auto flex items-center justify-center uppercase cursor-pointer;

  @media (min-width: theme('screens.xl')) {}

  .arrow {
    height: 65px;
    padding-left: 20px;
    padding-right: 20px;
    color: var(--white);
    background: var(--blue);
    transition: all 0.4s var(--curve);
    @apply w-auto flex items-center justify-center uppercase;

    .arrow-left-icon {
      height: 30px;

      transition: 0.4s var(--curve);

      color: var(--white);
      @apply inline-block;

      svg {
        height: 30px;
        display: inline-block !important;

        path {
          stroke-width: 5px;
          stroke: var(--white) !important;
        }
      }
    }
  }

  .arrow.hide {
    opacity: 0;
    transform: translateX(60px);

    .arrow-left-icon {
      opacity: 0;
      transform: translateX(120px);
    }
  }

  .text {
    opacity: 0;
    transform: translateX(-80px);
    transition: all 0.4s var(--curve);
    background: var(--blue);
    color: var(--white);
    font-size: 10px;
    height: 65px;
    width: 160px;
    left: 0px;
    @apply block uppercase font-bold flex items-center justify-center uppercase;

    .arrow-left-icon {
      height: 30px;

      transition: 0.1s var(--curve);

      color: var(--white);
      @apply inline-block;

      svg {
        height: 30px;
        display: inline-block !important;

        path {
          stroke-width: 5px;
          stroke: var(--white) !important;
        }
      }
    }
  }

  .text.show {
    opacity: 1;
    transform: translateX(0px);
  }
}
</style>
