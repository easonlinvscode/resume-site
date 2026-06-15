<script setup>
import { useRevealOnScroll } from '../../composables/useRevealOnScroll'
import { useCountUp } from '../../composables/useCountUp'

const props = defineProps({
  value: { type: Number, required: true },
  suffix: { type: String, default: '' },
  label: { type: String, default: '' },
  description: { type: String, default: '' },
})

const { target, isVisible } = useRevealOnScroll({ threshold: 0.4 })
const count = useCountUp(isVisible, props.value)
</script>

<template>
  <div ref="target" class="text-center sm:text-left">
    <div class="font-display text-2xl sm:text-4xl md:text-5xl font-extrabold text-coffee whitespace-nowrap">
      {{ count }}<span class="text-orange">{{ suffix }}</span>
    </div>
    <div class="mt-1 text-xs sm:text-sm font-semibold text-coffee">{{ label }}</div>
    <div class="text-[11px] sm:text-xs text-warmgray leading-snug">{{ description }}</div>
  </div>
</template>
