<template>
    <div class="w-full max-w-7xl relative overflow-hidden mt-20 project-portfolio">
        <h2>{{ title }}</h2>
        <div class="project-portfolio__nav">
            <div @click.prevent="changePanel('theater', 1)" class="project-portfolio__nav-item justify-start" :class="{'active' : panel === 'theater'}"><h5>Theater</h5></div>
            <div @click.prevent="changePanel('outdoor', 2)" class="project-portfolio__nav-item justify-center" :class="{'active' : panel === 'outdoor'}"><h5>Outdoor</h5></div>
            <div @click.prevent="changePanel('indoor', 3)" class="project-portfolio__nav-item justify-end" :class="{'active' : panel === 'indoor'}"><h5>Indoor</h5></div>
        </div>
        <div class="project-portfolio__container">
            <transition :name="animateName" mode="out-in" class="relative transition-container">
                <div v-if="panel === 'theater'" key="1"
                    class="w-full flex snap-x snap-mandatory overflow-scroll project-portfolio__panel">
                    <ProjectsProjectCard v-for="(project, index) in theater" :key="index" :project="project" size="large"
                        class="snap-start flex-shrink-0" />
                </div>
                <div v-else-if="panel === 'outdoor'" key="2"
                    class="w-full flex snap-x snap-mandatory overflow-scroll project-portfolio__panel">
                    <ProjectsProjectCard v-for="(project, index) in outdoor" :key="index" :project="project" size="large"
                        class="snap-start flex-shrink-0" />
                </div>
                <div v-else-if="panel === 'indoor'" key="3"
                    class="w-full flex snap-x snap-mandatory overflow-scroll project-portfolio__panel">
                    <ProjectsProjectCard v-for="(project, index) in indoor" :key="index" :project="project" size="large"
                        class="snap-start flex-shrink-0" />
                </div>
            </transition>
        </div>
    </div>
</template>

<script setup>
const imageUrl = 'https://admin.frayednot.net/assets/'
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination, Parallax } from 'swiper'
const modules = [Parallax, Pagination]
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
        @apply uppercase tracking-wide mb-8;

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
            @apply uppercase cursor-pointer mb-12 w-1/3 flex items-center relative;
            h5 {
                width: 80%;
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
        .project-portfolio__nav-item:hover::after, .project-portfolio__nav-item.active::after {
            width: 80%;
            left: 10%;
        }
        .project-portfolio__nav-item:nth-of-type(1):hover::after, .project-portfolio__nav-item:nth-of-type(1).active::after {
            width: 80%;
            left: 0%;
        }
        .project-portfolio__nav-item:nth-of-type(2):hover::after, .project-portfolio__nav-item:nth-of-type(2).active::after {
            width: 80%;
            left: 10%;
        }
        .project-portfolio__nav-item:nth-of-type(3):hover::after, .project-portfolio__nav-item:nth-of-type(3).active::after {
            width: 80%;
            left: 20%;
        }
         
    }

    &__container {
        height: 500px;
        @apply flex flex-col justify-center items-center w-full max-w-7xl overflow-hidden;
    }

    .transition-container {
        height: 500px;
        @apply max-w-7xl;
    }

    &__panel {
        -ms-overflow-style: none;
        scrollbar-width: none;
        @apply w-full max-w-7xl;
    }

    .project-portfolio__panel::-webkit-scrollbar {
        display: none;
    }
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
</style>