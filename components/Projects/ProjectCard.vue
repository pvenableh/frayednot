<template>
    <div class="project-card" :class="size">
        <div class="project-card__image-container">
            <div :style="'background-image: url(' + imageUrl + project.images[0].directus_files_id + '?key=medium)'"
                class="project-card__image"></div>
        </div>
       
        <div class="project-card__body">
            <h3 class="project-card__body-title">{{ project.title }}</h3>

            <p class="project-card__body-experience">{{ project.experience}}</p>

            <h4 class="hidden">{{ project.title + ' - ' + project.experience + ' Expreience designed by frayednot' }}</h4>

        </div>
        <div class="project-card__description" v-html="replaceNewlinesWithBreaks(project.description)"></div>
    </div>
</template>

<script setup>
import { replaceNewlinesWithBreaks } from '~/utils/strings'
const imageUrl = 'https://admin.frayednot.net/assets/'
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
        default: '',
    },

})

</script>
<style>
.project-card {
    height: 200px;
    @apply flex items-center justify-center relative overflow-hidden ;
    &__image-container {
        width: 100%;
        height: 100%;
        @apply  relative z-0 ;
    }
    &__image {
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        background-blend-mode: darken;
        @apply absolute bg-cover bg-no-repeat bg-center z-0;
    }

    &__body {
        @apply z-10 absolute;
        &-title {
            @apply hidden;
        }
        &-experience {
            @apply uppercase font-serif tracking-wider text-white;
        }
    }
    &__description {
        left: -100%;
        bottom: -100%;
        @apply opacity-0 absolute;
    }
}
</style>