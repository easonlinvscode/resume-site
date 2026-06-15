<script setup>
defineProps({
  label: { type: String, required: true },
})
</script>

<template>
  <span
    class="inline-flex items-center rounded-full bg-cream-deep px-4 py-2 text-sm font-medium text-coffee transition-all duration-200 ease-out cursor-default hover:bg-orange hover:text-white hover:scale-105 hover:shadow-md"
  >
    {{ label }}
  </span>
</template>
