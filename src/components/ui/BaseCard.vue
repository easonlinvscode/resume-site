<script setup>
defineProps({
  hoverable: {
    type: Boolean,
    default: true,
  },
})
</script>

<template>
  <div
    class="rounded-2xl bg-white border border-cream-deep p-6 sm:p-8 shadow-[0_2px_12px_-4px_rgba(120,113,108,0.15)] transition-all duration-300"
    :class="hoverable ? 'hover:-translate-y-1 hover:shadow-[0_8px_24px_-6px_rgba(234,88,12,0.18)]' : ''"
  >
    <slot />
  </div>
</template>
