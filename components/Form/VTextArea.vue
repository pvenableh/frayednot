<template>
  <div class="relative w-full input-container">
    <FormVLabel :label="label" :name="name" />
    <VeeField
    v-slot="{ field }"
      :name="name"
      :id="name"
      class="
        block
        py-2.5
        px-0
        w-full
        text-sm text-gray-900
        bg-transparent
        border-0 border-b-2 border-gray-300
        appearance-none
       
        focus:outline-none focus:ring-0 focus:border-gray-900
        peer
      "
      :rules="required"
      placeholder=" "
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    >
    <textarea v-bind="field" :name="name" class="bg-transparent border-white w-full focus:outline-none focus:ring-0 focus:border-gray-900"/>
    </VeeField>

    <transition name="page">
      <VeeErrorMessage :name="name" as="div" class="error" />
    </transition>
  </div>
</template>
<script setup>
defineEmits(['update:modelValue'])
const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: '',
  },
  required: {
    type: Boolean,
    default: false,
  },
  name: {
    type: String,
    default: null,
  },
  label: {
    type: String,
    default: null,
  },
  placeholder: {
    type: String,
    default: null,
  },
})
function required(value) {
      if(!props.required) {
        return true;
      }
      if (!value && props.required) {
        return 'This field is required';
      }
      return true;
    }
</script>
<style>
.input-container {
  .input {
    @apply block w-full dark:bg-gray-800 dark:text-white text-lg md:text-base border-gray-300 dark:border-gray-700 rounded-md shadow-sm placeholder:text-gray-400 dark:placeholder:text-gray-600;
  }
  .error {
    font-size: 8px;
    line-height: 10px;

    right: 0px;
    bottom: -12px;
    color: var(--gray);
    @apply absolute uppercase tracking-wide font-bold;
  }
}
</style>
