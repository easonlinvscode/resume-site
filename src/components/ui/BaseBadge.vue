<script setup>
defineProps({
  variant: {
    type: String,
    default: 'soft', // soft | outline | solid
  },
})

const variants = {
  soft: 'bg-cream-deep text-coffee',
  outline: 'border border-orange text-orange bg-transparent',
  solid: 'bg-orange text-white',
}
</script>

<template>
  <span
    class="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium tracking-wide"
    :class="variants[variant]"
  >
    <slot />
  </span>
</template>
