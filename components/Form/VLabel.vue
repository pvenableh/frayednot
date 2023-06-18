<template>
    <label :for="name" class="uppercase tracking-wider text-sm text-white-500 scale-50" style="transform: scale(0.5)">{{ label }}</label>
</template>

<script setup>
const props = defineProps({
    label: {
        type: String,
        default: '',
    },
    name: {
        type: String,
        default: '',
    },
})
</script>