<template>
  <div class="relative w-full input-container">
    <VeeField
      :name="name"
      :id="name"
      class="
        block
        py-2.5
        px-0
        w-full
        text-sm text-white
        bg-transparent
        border-0 border-b-2 border-gray-300
        appearance-none
        dark:text-white dark:border-gray-600 dark:focus:border-gray-900
        focus:outline-none focus:ring-0 focus:border-gray-900
        peer
      "
      :type="type"
      :rules="required"
      placeholder=" "
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <label
      v-if="label"
      :label="label"
      :for="name"
      class="
        uppercase
        tracking-wider
        absolute
        text-sm text-white-500
        dark:text-gray-400
        duration-300
        transform
        -translate-y-6
        scale-75
        top-3
        origin-[0]
        peer-focus:left-0
        peer-focus:text-gray-100
        peer-focus:dark:text-gray-500
        peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
        peer-focus:scale-75 peer-focus:-translate-y-6
      "
      >{{ label }}</label
    >
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
  type: {
    type: String,
    default: 'text',
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
