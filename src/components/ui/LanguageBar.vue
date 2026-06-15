<script setup>
import { useRevealOnScroll } from '../../composables/useRevealOnScroll'

const props = defineProps({
  skill: { type: String, required: true },
  level: { type: Number, required: true }, // 1~5
  max: { type: Number, default: 5 },
})

const { target, isVisible } = useRevealOnScroll({ threshold: 0.4 })
</script>

<template>
  <div ref="target" class="flex items-center gap-3">
    <span class="w-10 shrink-0 text-sm font-medium text-warmgray">{{ skill }}</span>
    <div class="flex flex-1 gap-1.5">
      <span
        v-for="i in max"
        :key="i"
        class="h-2 flex-1 rounded-full bg-cream-deep overflow-hidden"
      >
        <span
          class="block h-full rounded-full bg-orange transition-all duration-700 ease-out"
          :style="{
            width: isVisible && i <= level ? '100%' : '0%',
            transitionDelay: `${i * 80}ms`,
          }"
        />
      </span>
    </div>
  </div>
</template>
