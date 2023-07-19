<template>
    <div class="w-full project-card-v" :class="classes">
        <div class="project-card-v__image-container">
            <swiper v-if="project.images.length" class="h-full flex items-center justify-center flex-col swiper-v"
                :speed="600" :parallax="true" :pagination="{
                    type: 'bullets',
                    clickable: true,
                }" :direction="'vertical'" :grabCursor="true" :modules="modules">
                <swiper-slide class="w-full flex items-center justify-center relative overflow-hidden"
                    v-for="(slide, index) in project.images" :key="index">
                    <div :style="'background-image: url(' + imageUrl + slide.directus_files_id + '?key=medium)'"
                        class="project-card-v__image"></div>
                </swiper-slide>
            </swiper>
        </div>

        <div class="project-card-v__body">
            <h3 class="project-card-v__body-title">{{ project.title }}</h3>

            <p class="project-card-v__body-experience" data-swiper-parallax="-100">{{ project.experience }}</p>

            <h4 class="hidden">{{ project.title + ' - ' + project.experience + ' Expreience designed by frayednot' }}</h4>

        </div>
        <div v-if="project.description" class="cursor-pointer project-card-v__description-button"
            @click.prevent="toggleDescription()">
            <span></span><span></span>
        </div>
        <div v-if="project.description" @click.prevent="toggleDescription()" class="project-card-v__description"
            v-html="replaceNewlinesWithBreaks(project.description)">
        </div>
    </div>
</template>

<script setup>
import { replaceNewlinesWithBreaks } from '~/utils/strings'
const imageUrl = 'https://admin.frayednot.net/assets/'
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
// import 'swiper/css/effect-creative';
import { Pagination } from 'swiper'
const modules = [Pagination]
const props = defineProps({
    project: {
        type: Object,
        default: {
            "title": "Project Title",
            "description": "Project Description",
            "experience": "Project Experience",
            "category": "Project Category",
            "images": {
                "directus_files_id": "Project Image"
            }
        },
    },
    size: {
        type: String,
        default: 'small',
    },

})
const showDescription = ref(false);
const classes = computed(() => {
    if (showDescription.value)
        return props.size + ' open'
    return props.size

})
function toggleDescription() {
    showDescription.value = !showDescription.value;
}
</script>
<style>
.project-card-v.small {
    height: 230px;

    .project-card-v__body {

        &-experience {
            font-size: 24px;
            line-height: 30px;

            @media (min-width: theme('screens.sm')) {
                font-size: 18px;
                line-height: 30px;
            }

            @media (min-width: theme('screens.md')) {
                font-size: 20px;
                line-height: 32px;
            }

            /* @media (min-width: theme('screens.lg')) {
                font-size: 42px;
                line-height: 46px;
            } */

        }
    }
}

.project-card-v.large {
    height: 230px;

    @media (min-width: theme('screens.md')) {
        height: 500px;
    }

    .project-card-v__body {

        &-experience {
            font-size: 24px;
            line-height: 30px;

            @media (min-width: theme('screens.sm')) {
                font-size: 26px;
                line-height: 30px;
            }

            @media (min-width: theme('screens.md')) {
                font-size: 36px;
                line-height: 42px;
            }

            @media (min-width: theme('screens.lg')) {
                font-size: 42px;
                line-height: 46px;
            }

        }
    }

    .project-card-v__description {
        
        @apply md:p-20;
        @media (min-width: theme('screens.md')) {
            font-size: 14px;
        }
    }
}

/* .project-card.screen {
    height: 600px;

    .project-card__body {

        &-experience {
            font-size: 36px;
        }
    }

    .project-card__description {
        font-size: 14px;
        @apply p-20;
    }
} */

.project-card-v {
    @apply flex items-center justify-center relative overflow-hidden;

    &__image-container {
        width: 100%;
        height: 100%;
        @apply relative z-0;
    }

    .swiper-v {
        .swiper-slide {
            img {
                max-height: 100%;
                max-width: 100%;
            }
        }

        .swiper-pagination {
            z-index: 10;
            bottom: 0px;
            height: 30px;
        }

        .swiper-pagination-bullet {
            background-color: var(--white);
            width: 20px;
            border-radius: 1px;
            height: 2px;
            opacity: 0.5;
        }

        .swiper-pagination-vertical {
            .swiper-pagination-bullet {
                background-color: var(--white);
                width: 2px;
                border-radius: 1px;
                height: 20px;
                opacity: 0.5;


            }

            .swiper-pagination-bullet-active {
                background-color: var(--white);
                opacity: 1;
            }

        }

        .swiper-pagination-bullet-active {
            background-color: var(--white);
            opacity: 1;
        }
    }

    &__image-slide {
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.25);
        background-blend-mode: darken;
        transition: all 0.6s var(--curve);
        @apply bg-cover bg-no-repeat bg-center z-0;
    }

    &__image {
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.25);
        background-blend-mode: darken;
        transition: all 0.6s var(--curve);

        @apply absolute bg-cover bg-no-repeat bg-center z-0 overflow-hidden;
    }

    &__body {
        @apply z-10 absolute;

        &-title {
            @apply hidden;
        }

        &-experience {
            transition: all 0.6s var(--curve);


            @apply uppercase font-serif text-white;
        }
    }

    &__description {
        background: rgba(255, 255, 255, 0.15);
        color: var(--white);
        font-size: 12px;
        line-height: 1.2em;
        z-index: 20;
        backdrop-filter: blur(10px);
        transition: all 0.5s 0.1s var(--curve);
        transform: translate(-100%, 25px);
        bottom: 0px;
        @apply w-full opacity-0 absolute p-6 left-0;
    }

    &__description-button {
        z-index: 20;
        width: 45px;
        height: 40px;
        background: rgba(255, 255, 255, 0.15);

        transition: all 0.6s var(--curve);
        backdrop-filter: blur(10px);
        bottom: 0px;
        @apply absolute left-0 flex items-center justify-center text-center;

        @media (min-width: theme('screens.lg')) {
            transform: translate(-50px, 0px);
        }

        span {
            height: 1px;
            background: rgba(255, 255, 255, 0.5);
            width: 20px;
            @apply block absolute;
            transition: all 0.4s var(--curve);
        }

        span:nth-of-type(2) {
            width: 20px;
            transform: rotate(-90deg);

        }
    }
}

.project-card-v:hover {

    .project-card-v__image,
    .project-card-v__image-slide {
        @media (min-width: theme('screens.lg')) {
            transform: scale(1.1);
        }
    }

    .project-card-v__body-experience {
        @media (min-width: theme('screens.lg')) {
            /* letter-spacing: 0.7em; */
        }
    }

    .project-card-v__description-button {
        @media (min-width: theme('screens.lg')) {
            transform: translate(0px, 0px);
        }
    }
}

.project-card-v.open {
    .project-card-v__description-button {
        opacity: 0;
        width: 200px;
        height: 50%;
    }

    .project-card-v__image {
        background-color: rgba(0, 0, 0, 0.75);
    }

    .project-card-v__description {
        transform: translate(0px, 0px);
        opacity: 1;
    }

    .project-card-v__body-experience {
        transform: translate(0px, -75px)
    }

}
</style>