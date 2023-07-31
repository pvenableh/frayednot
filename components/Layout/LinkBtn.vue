<template>
    <nuxt-link v-if="link" :to="link" class="uppercase f-link">
        <slot></slot>
        <nuxt-icon name="arrow-right" class="ml-1 arrow-right-icon" />
    </nuxt-link>
    <a v-else href="#" class="uppercase f-link">
        <slot></slot>
        <nuxt-icon name="arrow-right" class="ml-1 arrow-right-icon" />
    </a>
</template>

<script setup>
const props = defineProps({
    link: {
        type: String,
        default: null,
    },
})

</script>
<style>
.f-link {
    font-size: 0.75rem;
    line-height: 1rem;
    font-weight: 900;
    @apply inline-block tracking-wider;

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

.f-link:hover {
    .nuxt-icon {
        transform: translateX(10px)
    }
}
</style>