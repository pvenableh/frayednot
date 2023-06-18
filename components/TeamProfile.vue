<template>
  <div id="team-profile" class="flex items-center justify-center md:justify-center flex-col team-profile"
    @click="closeProfile">
    <div class="absolute close-btn cursor-pointer"><nuxt-icon name="close" /></div>
    <div id="team-content"
      class="flex items-start justify-center relative flex-col md:flex-row md:items-center team-profile__content">

      <transition name="fade" mode="out-in">
        <div v-if="profileStore.profile.image" class="team-profile__content-image" :style="'background-image: url(https://admin.rkcad.com/assets/' +
          profileStore.profile.image + '?key=medium'">

        </div>
        <div v-else class="flex items-center justify-center team-profile__content-image">
          <LayoutRkc class="rkc-icon" />
        </div>
      </transition>

      <div class="team-profile__content-body">
        <h1>{{ replaceSpaceWithNewlines(profileStore.profile.name) }}</h1>
        <h5>{{ profileStore.profile.title }}</h5>
        <p v-if="profileStore.profile.bio" v-html="replaceNewlinesWithBreaks(profileStore.profile.bio)"></p>
        <div v-if="profileStore.profile.quote" v-html="profileStore.profile.quote" class="team-profile__quote"></div>
        <h5 v-if="profileStore.profile.education" :class="{ 'mt-10': !profileStore.profile.quote }">Education</h5>
        <p v-html="replaceNewlinesWithBreaks(profileStore.profile.education)"></p>
      </div>

    </div>

  </div>
</template>

<script setup>
import { replaceNewlinesWithBreaks, replaceSpaceWithNewlines } from '~~/utils/strings'
import { useProfileStore } from '~~/store/ProfileStore'
const profileStore = useProfileStore()
function closeProfile() {
  const element = document.getElementById('profile-toggle')
  element.checked = false
  // setTimeout(profileStore.clearProfile(), 3000);
  const profile = document.getElementById('team-content');
  // profile.scrollTop = 0;
  console.log(profile)
  profile.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })
}

</script>

<style >
.team-profile {
  height: 100vh;
  position: fixed;
  bottom: 0px;
  left: 0px;
  background: var(--blue);
  color: var(--white);
  width: 100%;
  z-index: 50;
  transform: translateY(100%);
  transition: 0.65s var(--curve);

  @media (min-width: theme('screens.lg')) {
    top: 0px;
    bottom: auto;
    transform: translateX(100%) translateY(0%);
  }

  .close-btn {
    top: 20px;
    right: 10px;
    width: 40px;
    height: 40px;
    z-index: 100;

    .nuxt-icon {
      width: 40px;
      height: 40px;
      transition: 0.4s var(--curve);
      transform: translateX(0px);
      @apply block;

      svg {
        width: 25px;
        height: 25px;
        @apply block;

        path {
          stroke-width: 1px;
          stroke: var(--white) !important;
        }
      }
    }
  }

  &__content {

    &-image {
      width: 100%;
      height: 350px;
      transition: 0.65s var(--curve);
      transform: translateY(200px);
      z-index: 10;
      overflow: scroll;
      @apply bg-center bg-cover bg-no-repeat;

      @media (min-width: theme('screens.md')) {}

      @media (min-width: theme('screens.lg')) {
        width: 500px;
        height: 500px;

        transform: translateX(200px) translateY(0px);

      }

      svg {
        width: 300px;

        path {
          opacity: 0.4;
          fill: var(--grey);
          animation-duration: 6s;
          animation-timing-function: var(--curve);
          animation-iteration-count: infinite;
          animation-name: example;
        }

        path:nth-of-type(2) {
          animation-delay: 0.1s;

        }

        path:nth-of-type(1) {
          animation-delay: 0.4s;
        }

        path:nth-of-type(3) {
          animation-delay: 0.8s;
        }

        @keyframes example {
          0% {
            opacity: 0.4;
            fill: var(--grey);

          }

          50% {
            opacity: 1;
            fill: var(--white);
          }

          100% {
            opacity: 0.4;
            fill: var(--grey);
          }
        }
      }
    }

    .team-profile__content-body::-webkit-scrollbar {
      display: none;
      /* Safari and Chrome */
    }

    .team-profile__content-body {
      width: 100%;
      max-height: calc(100vh - 350px);
      overflow-y: scroll;
      -ms-overflow-style: none;
      /* Internet Explorer 10+ */
      scrollbar-width: none;
      @apply p-6 mb-12 md:mb-0;

      @media (min-width: theme('screens.md')) {
        max-height: calc(100vh - 3rem);
      }

      @media (min-width: theme('screens.lg')) {
        width: 500px;
        padding-top: 0px;

      }

      h1 {
        font-size: 2rem;
        line-height: 2.2rem;
        margin-top: 10px;
        margin-bottom: 10px;

        transition: 0.65s var(--curve) 0.05s;
        transform: translateY(100px);
        opacity: 0;
        @apply uppercase tracking-wider font-light;

        @media (min-width: theme('screens.lg')) {
          margin-top: 0px;
          transform: translateX(100px) translateY(0px);
        }
      }

      h5 {
        transition: 0.65s var(--curve) 0.1s;
        transform: translateY(100px);
        opacity: 0;
        font-size: 0.75rem;
        line-height: 0.75rem;
        @apply tracking-wider mb-8 uppercase font-bold;

        @media (min-width: theme('screens.lg')) {

          transform: translateX(100px) translateY(0px);
        }
      }

      p {
        margin-bottom: 0.5rem;
        transition: 0.65s var(--curve) 0.12s;
        transform: translateY(100px);
        opacity: 0;
        font-size: 13px;
        line-height: 24px;

        @media (min-width: theme('screens.lg')) {

          transform: translateX(100px) translateY(0px);
        }
      }

      .team-profile__quote {
        margin-bottom: 0.5rem;
        transition: 0.65s var(--curve) 0.14s;
        transform: translateY(100px);
        opacity: 0;
        @apply uppercase mt-4 p-10;

        @media (min-width: theme('screens.lg')) {
          transform: translateX(100px) translateY(0px);
        }

        p {

          /* @media (min-width: theme('screens.lg')) {
            font-size: 20px;
          line-height: 30px;
          } */
        }

        p:last-of-type {
          text-align: right;
          font-size: 10px;
          @apply italic uppercase;
        }
      }

      h5:nth-of-type(2) {
        transition-delay: 0.16s;
        border-top: thin solid var(--white);
        @apply pt-4;
      }

      p:nth-of-type(2) {
        transition-delay: 0.15s;
      }



      p:nth-of-type(3) {
        transition-delay: 0.17s;
      }
    }
  }
}

#profile-toggle:checked~.page__content {
  /* transform: matrix(1, 0, 0, 1, -80, 0); */
  transform: translateY(-80px);
  filter: blur(2px) grayscale(1);

  @media (min-width: theme('screens.lg')) {
    transform: translateX(-80px);
  }
}

#profile-toggle:checked~.team-profile {
  transform: translateY(0%);

  @media (min-width: theme('screens.lg')) {

    transform: translateX(0%) translateY(0%);
  }

  .team-profile__content-image {
    transform: translateY(0px);

    @media (min-width: theme('screens.lg')) {

      transform: translateX(0%) translateY(0%);
    }
  }

  .team-profile__content-body {
    h1 {
      transform: translateY(0px);
      opacity: 1;

      @media (min-width: theme('screens.lg')) {

        transform: translateX(0%) translateY(0%);
      }
    }

    h5 {
      transform: translateY(0px);
      opacity: 1;

      @media (min-width: theme('screens.lg')) {

        transform: translateX(0%) translateY(0%);
      }
    }

    p {
      transform: translateY(0px);
      opacity: 1;

      @media (min-width: theme('screens.lg')) {

        transform: translateX(0%) translateY(0%);
      }
    }

    .team-profile__quote {
      transform: translateY(0px);
      opacity: 1;

      @media (min-width: theme('screens.lg')) {

        transform: translateX(0%) translateY(0%);
      }
    }
  }

}</style>
