<template>
    <div class="page__header" :style="'background-image: url(' + imageUrl + page.header_image + '?key=xlarge)'">
        <div class="page__header-caption">
            <h1>{{ heading }}</h1>
            <h4>{{ page.title }}</h4>
            <p v-html="replaceNewlinesWithBreaks(page.caption) "></p>
        </div>
    </div>
</template>

<script setup>
import { replaceNewlinesWithBreaks } from '~/utils/strings'
const props = defineProps({
    heading: {
        type: String,
        default: '',
    },
    page: {
        type: Object,
        default: {},
    },
})
const imageUrl = 'https://admin.frayednot.net/assets/'
</script>
<style>
.page__header {
    height: 550px;
    background-color: rgba(0, 0, 0, 0.35);
    background-blend-mode: darken;
   
    box-shadow: inset 0 20px 25px -5px rgba(0, 0, 0, 0.5);
    @apply bg-cover bg-center bg-no-repeat overflow-hidden relative w-full flex items-center justify-center flex-col;

    @media (min-width: theme('screens.sm')) {
        height: 550px;
    }

    @media (min-width: theme('screens.md')) {
        height: 600px;
    }

    @media (min-width: theme('screens.lg')) {
        background-attachment: fixed;
        height: calc(100vh - 95px);
    }

    &-caption {
        color: var(--white);
        padding-left: 15px;
        padding-right: 15px;
        @apply max-w-7xl py-4 text-center w-full flex items-center justify-center flex-col;

        @media (min-width: theme('screens.sm')) {
            padding-left: 35px;
            padding-right: 35px;
        }

        h1 {
            font-size: 8vw;
            line-height: 1.2em;
            color: var(--white);

            font-family: var(--serif-font);
            transition: all 0.4s var(--curve) 0.1s;
            letter-spacing: 0.05em;
            @apply w-full font-serif uppercase mb-2;

            @media (min-width: theme('screens.md')) {
                font-size: 7vw;
            }

            @media (min-width: theme('screens.lg')) {
                font-size: 6.5vw;
            }
        }

        h4 {
            font-size: 2.5vw;
            line-height: 1.2em;
            transition: all 0.4s var(--curve) 0.2s;
            letter-spacing: 0.05em;
            @apply w-full font-serif uppercase mb-20;
            @media (min-width: theme('screens.sm')) {
                font-size: 1.8vw;
            }
            @media (min-width: theme('screens.md')) {
                font-size: 1.25vw;
            }
        }

        p {
            font-size: 12px;
            transition: all 0.4s var(--curve) 0.25s;
            @apply w-full font-body max-w-4xl;
            @media (min-width: theme('screens.md')) {
                font-size: 14px;
            }
        }
    }
}
</style>
