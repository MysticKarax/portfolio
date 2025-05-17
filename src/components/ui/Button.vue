<template>
  <button
    :class="[
      'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
      sizeClasses[size],
      variantClasses[variant],
      className
    ]"
    :disabled="disabled"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'outline'].includes(value)
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  },
  disabled: {
    type: Boolean,
    default: false
  },
  className: {
    type: String,
    default: ''
  }
})

const sizeClasses = {
  sm: 'h-8 px-3 text-sm',
  md: 'h-10 px-4 text-base',
  lg: 'h-12 px-6 text-lg'
}

const variantClasses = computed(() => ({
  primary:
    'bg-accent-primary text-white hover:bg-accent-primary/90 dark:bg-accent-primary dark:text-white dark:hover:bg-accent-primary/90',
  secondary:
    'bg-accent-secondary text-white hover:bg-accent-secondary/90 dark:bg-accent-secondary dark:text-white dark:hover:bg-accent-secondary/90',
  outline:
    'border-2 border-accent-primary text-accent-primary hover:bg-accent-primary hover:text-white dark:border-accent-primary dark:text-accent-primary dark:hover:bg-accent-primary dark:hover:text-white'
}))
</script>

