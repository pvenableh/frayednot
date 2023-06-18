<template>
  <div class="team-card-wrapper" @click.prevent="showProfile">
    <!-- @click="handleView($event)" -->
    <div class="flex flex-col items-start team-card">
      <div class="w-full flex flex-col items-start justify-start team-card__header">
        <div v-if="person.image" :style="'background-image: url(https://admin.rkcad.com/assets/' +
          person.image +
          'key=small)'
          " class="bg-repeat-none bg-center bg-cover team-card__header-image" />
        <div v-else class="flex items-center justify-center team-card__header-image">
          <LayoutRkc class="rkc-icon" />
        </div>
        <h3 class="w-full uppercase">{{ person.name }}</h3>
        <h5 class="w-full uppercase">{{ person.title }}</h5>
        <LayoutLinkBtn class="w-full">Bio</LayoutLinkBtn>
        <!-- <a class="w-full uppercase rkc-link">Bio <nuxt-icon name="arrow-right" class="ml-1 arrow-right-icon" /></a> -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { useProfileStore } from '~~/store/ProfileStore'
const profileStore = useProfileStore()
const props = defineProps({
  person: {
    type: Object,
    default: {},
  },
})
function showProfile() {
  profileStore.setProfile(props.person);
  const element = document.getElementById('profile-toggle')
  element.checked = true
}
</script>

<style >
.team-card-wrapper {
  margin-bottom: 20px;
  width: 100%;
  @media (min-width: theme('screens.sm')) {
    padding-right: 35px;
  }

  @media (min-width: theme('screens.lg')) {
    padding-right: 35px;
  }
  @apply w-full sm:w-1/2 lg:w-1/3;
}
.team-card-wrapper:nth-child(2n) {
  @media (min-width: theme('screens.sm')) {
    padding-right: 0px;
  }
  @media (min-width: theme('screens.lg')) {
    padding-right: 35px;
  }
}
.team-card-wrapper:nth-child(3n) {
  @media (min-width: theme('screens.lg')) {
    padding-right: 0px;
  }
}

.team-card {
  margin-bottom: 1rem;
  position: relative;
  width: 100%;
  /* max-width: 375px; */
  overflow: hidden;
  cursor: pointer;
  z-index: 1;
  transform-origin: center center;
  transition: all 0.35s var(--curve);

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    pointer-events: none;
    @apply tracking-wide;

    &-image {
      width: 100%;
      /* max-width: 375px; */
      height: 350px;
      background-color: var(--grey);
      margin-bottom: 0.1rem;

      @media (min-width: theme('screens.sm')) {
        height: 375px;
      }

      svg {
        fill: var(--white);
      }
    }

    h3 {
      font-size: 2rem;
      line-height: 1.5rem;
      margin-top: 15px;
      margin-bottom: 10px;
      @apply font-light;
    }

    h5 {
      font-size: 0.75rem;
      line-height: 1rem;
      @apply font-light;
    }

  }

}</style>
