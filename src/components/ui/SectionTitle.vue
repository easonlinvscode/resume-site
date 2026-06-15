<script setup>
defineProps({
  eyebrow: { type: String, default: '' }, // 英文小標
  title: { type: String, required: true },
  description: { type: String, default: '' },
  align: { type: String, default: 'left' }, // left | center
})
</script>

<template>
  <div :class="align === 'center' ? 'text-center mx-auto' : ''" class="mb-10 sm:mb-14 max-w-2xl">
    <p
      v-if="eyebrow"
      class="font-display text-sm font-semibold uppercase tracking-[0.2em] text-orange mb-2"
    >
      {{ eyebrow }}
    </p>
    <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-coffee tracking-tight">
      {{ title }}
    </h2>
    <p v-if="description" class="mt-3 text-warmgray leading-relaxed">
      {{ description }}
    </p>
    <div
      class="mt-4 h-1 w-12 rounded-full bg-orange"
      :class="align === 'center' ? 'mx-auto' : ''"
    />
  </div>
</template>
