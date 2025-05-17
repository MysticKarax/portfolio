<template>
  <div
    :class="[
      'rounded-lg transition-shadow',
      padding[size],
      {
        'hover:shadow-lg': hover,
        'border border-gray-200 dark:border-gray-700': bordered,
        'bg-white dark:bg-background-alt': !transparent,
        'shadow-sm': !flat
      },
      className
    ]"
  >
    <div v-if="$slots.header" class="mb-4">
      <slot name="header" />
    </div>
    <div>
      <slot />
    </div>
    <div v-if="$slots.footer" class="mt-4">
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  },
  hover: {
    type: Boolean,
    default: false
  },
  bordered: {
    type: Boolean,
    default: false
  },
  transparent: {
    type: Boolean,
    default: false
  },
  flat: {
    type: Boolean,
    default: false
  },
  className: {
    type: String,
    default: ''
  }
})

const padding = {
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8'
}
</script>

