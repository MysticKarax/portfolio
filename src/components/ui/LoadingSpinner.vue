<template>
  <svg
    :style="sizeStyle"
    :class="['spinner', colorClass]"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <circle
      class="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      stroke-width="4"
    ></circle>
    <path
      class="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    ></path>
  </svg>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  // Size can be a number of pixels or a string with units
  size: {
    type: [String, Number],
    default: 24,
    validator: (value) => {
      if (typeof value === 'number') return value > 0;
      return true; // If it's a string, we'll assume it's valid
    }
  },
  // Color can be a Tailwind color class or a custom color
  color: {
    type: String,
    default: 'text-accent-primary',
    validator: (value) => {
      return value.startsWith('text-') || value.startsWith('#') || value.startsWith('rgb');
    }
  },
  // Animation duration in milliseconds
  duration: {
    type: Number,
    default: 1000,
    validator: (value) => value > 0
  }
});

// If color starts with 'text-', use it as a class, otherwise set it as a style
const colorClass = computed(() => {
  if (props.color.startsWith('text-')) {
    return props.color;
  }
  return '';
});

// Set the size either in pixels or as provided
const sizeStyle = computed(() => {
  const sizeValue = typeof props.size === 'number' ? `${props.size}px` : props.size;
  const colorStyle = !props.color.startsWith('text-') ? { color: props.color } : {};
  
  return {
    width: sizeValue,
    height: sizeValue,
    animationDuration: `${props.duration}ms`,
    ...colorStyle
  };
});
</script>

<style scoped>
.spinner {
  animation: spin linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>

