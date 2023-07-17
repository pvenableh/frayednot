<template>
    <div class="w-full max-w-7xl relative overflow-hidden mt-20 project-portfolio">
        <h2>{{ title }}</h2>
        <div class="project-portfolio__nav">
            <div @click.prevent="changePanel('theater', 1)" class="project-portfolio__nav-item justify-start"
                :class="{ 'active': panel === 'theater' }">
                <h5>Theater</h5>
            </div>
            <div @click.prevent="changePanel('outdoor', 2)" class="project-portfolio__nav-item justify-center"
                :class="{ 'active': panel === 'outdoor' }">
                <h5>Outdoor</h5>
            </div>
            <div @click.prevent="changePanel('indoor', 3)" class="project-portfolio__nav-item justify-end"
                :class="{ 'active': panel === 'indoor' }">
                <h5>Indoor</h5>
            </div>
        </div>

        <div class="project-portfolio__container">
            <transition :name="animateName" mode="out-in" class="relative transition-container">
                <swiper v-if="panel === 'theater'" key="1" class="mySwiper swiper-h w-full project-portfolio__panel"
                    :spaceBetween="10" navigation :speed="700" :grabCursor="true" :effect="'creative'" :creativeEffect="{
                        prev: {
                            shadow: true,
                            translate: ['-120%', 0, -500],
                        },
                        next: {
                            shadow: true,
                            translate: ['120%', 0, -500],
                        },
                    }" :parallax="true" :observer="true" :observeParents="true" :modules="modules">
                    >
                    <swiper-slide v-for="(project, index) in theater" :key="index" class="w-full overflow-hidden relative">
                        <ProjectsProjectCardVertical :project="project" size="large" class="w-full" />
                    </swiper-slide>
                </swiper>
                <swiper v-else-if="panel === 'outdoor'" key="2" class="mySwiper swiper-h w-full project-portfolio__panel"
                    :spaceBetween="10" :speed="700" :effect="'creative'" :creativeEffect="{
                        prev: {
                            shadow: true,
                            translate: ['-120%', 0, -500],
                        },
                        next: {
                            shadow: true,
                            translate: ['120%', 0, -500],
                        },
                    }" navigation :observer="true" :observeParents="true" :parallax="true" :modules="modules">
                    >
                    <swiper-slide v-for="(project, index) in outdoor" :key="index" class="w-full overflow-hidden relative">
                        <ProjectsProjectCardVertical :project="project" size="large" class="w-full" />
                    </swiper-slide>
                </swiper>
                <swiper v-else-if="panel === 'indoor'" key="3" class="mySwiper swiper-h w-full project-portfolio__panel"
                    :spaceBetween="10" navigation :speed="700" :effect="'creative'" :creativeEffect="{
                        prev: {
                            shadow: true,
                            translate: ['-120%', 0, -500],
                        },
                        next: {
                            shadow: true,
                            translate: ['120%', 0, -500],
                        },
                    }" :observer="true" :observeParents="true" :parallax="true" :modules="modules">
                    >
                    <swiper-slide v-for="(project, index) in indoor" :key="index" class="w-full overflow-hidden relative">
                        <ProjectsProjectCardVertical :project="project" size="large" class="w-full" />
                    </swiper-slide>
                </swiper>
            </transition>
        </div>
    </div>
</template>

<script setup>
const imageUrl = 'https://admin.frayednot.net/assets/'
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-creative';
import 'swiper/css/navigation';
import { Parallax, EffectCreative, Navigation } from 'swiper'
const modules = [Parallax, EffectCreative, Navigation]
const props = defineProps({
    projects: {
        type: Array,
        default: [],
    },
    title: {
        type: String,
        default: 'Experience by Space.',
    },

})

const panel = ref('theater')
const previousPanelKey = ref(1)
const animateName = ref('slide-right')
function changePanel(newPanel, key) {
    if (previousPanelKey.value < key) {
        animateName.value = 'slide-left'
    } else {
        animateName.value = 'slide-right'
    }
    previousPanelKey.value = key;
    panel.value = newPanel;
}
const indoor = computed(() => {
    return props.projects.filter((item) => {
        return item.category === 'Indoor' && item.status === 'published'
    })
})
const outdoor = computed(() => {
    return props.projects.filter((item) => {
        return item.category === 'Outdoor' && item.status === 'published'
    })
})
const theater = computed(() => {
    return props.projects.filter((item) => {
        return item.category === 'Theater' && item.status === 'published'
    })
})
</script>
<style>
.project-portfolio {

    @media (min-width: theme('screens.lg')) {}

    h2 {
        font-size: 36px;
        line-height: 42px;
        font-family: var(--serif-font);
        letter-spacing: 0.05em;
        @apply uppercase mb-8;

        @media (min-width: theme('screens.lg')) {
            font-size: 42px;
            line-height: 46px;
        }
    }

    &__nav {
        @apply flex flex-row justify-around items-center;

        &-item {
            opacity: 0.5;
            transition: all .3s var(--curve);

            @apply tracking-wider uppercase cursor-pointer mb-12 w-1/3 flex items-center relative;

            h5 {
                width: 80%;
                font-size: 14px;
                @apply text-center;
            }
        }

        .project-portfolio__nav-item::after {
            content: '';
            display: block;
            width: 0%;
            height: 1px;
            bottom: -5px;
            left: 50%;
            background: var(--grey);
            transition: all .3s var(--curve);
            transform-origin: center;
            @apply absolute;
        }

        .project-portfolio__nav-item.active {
            opacity: 1;
        }

        .project-portfolio__nav-item:hover {
            opacity: 1;
        }

        .project-portfolio__nav-item:hover::after,
        .project-portfolio__nav-item.active::after {
            width: 80%;
            left: 10%;
        }

        .project-portfolio__nav-item:nth-of-type(1):hover::after,
        .project-portfolio__nav-item:nth-of-type(1).active::after {
            width: 80%;
            left: 0%;
        }

        .project-portfolio__nav-item:nth-of-type(2):hover::after,
        .project-portfolio__nav-item:nth-of-type(2).active::after {
            width: 80%;
            left: 10%;
        }

        .project-portfolio__nav-item:nth-of-type(3):hover::after,
        .project-portfolio__nav-item:nth-of-type(3).active::after {
            width: 80%;
            left: 20%;
        }

    }

    &__container {
        height: 315px;
        @apply flex flex-col justify-center items-center w-full max-w-7xl overflow-hidden;
        @media (min-width: theme('screens.md')) {
        }
        @media (min-width: theme('screens.md')) {
            height: 585px;
        }
    }

    .transition-container {
      
        @apply max-w-7xl;
    }

    &__panel {

        @apply w-full max-w-7xl;
        padding-bottom: 85px !important;

    }

    .swiper-wrapper {

        height:230px;
        @media (min-width: theme('screens.md')) {
            height: 500px;
        }
    }

    /* 
    .project-portfolio__panel::-webkit-scrollbar {
        display: none;
    } */
}

.slide-left-enter-active,
.slide-left-leave-active {
    transition: all 0.25s ease-out;
}

.slide-left-enter-from {
    opacity: 0;
    transform: translateX(30px);
}

.slide-left-leave-to {
    opacity: 0;
    transform: translateX(-30px);
}

.slide-right-enter-active,
.slide-right-leave-active {
    transition: all 0.25s ease-out;
}

.slide-right-enter-from {
    opacity: 0;
    transform: translateX(-30px);
}

.slide-right-leave-to {
    opacity: 0;
    transform: translateX(30px);
}

.swiper-button-next,
.swiper-button-prev {
    top: auto !important;
    bottom: 6px;
}

.swiper-button-next {
    right: -3px;
    font-family: 'icomoon' !important;

    &:after {
        content: '\e903' !important;
    }
}

.swiper-button-prev {
    left: -3px;
    font-family: 'icomoon' !important;

    &:after {
        content: '\e902' !important;
    }
}

.swiper-button-next:after,
.swiper-button-prev:after {
    font-family: 'icomoon' !important;
    font-size: 52px;
    line-height: 50px;
    color: var(--grey) !important;
    font-weight: bolder;
}
</style>