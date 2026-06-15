<script setup>
import BaseCard from './BaseCard.vue'
import BaseBadge from './BaseBadge.vue'
import { useRevealOnScroll } from '../../composables/useRevealOnScroll'

const props = defineProps({
  project: { type: Object, required: true },
  delay: { type: Number, default: 0 },
})

const { target, isVisible } = useRevealOnScroll()
</script>

<template>
  <div
    ref="target"
    class="reveal"
    :class="{ 'reveal-visible': isVisible }"
    :style="{ transitionDelay: `${delay}ms` }"
  >
    <BaseCard class="h-full flex flex-col">
      <div class="flex items-start justify-between gap-4 mb-3">
        <h3 class="text-lg font-bold text-coffee">{{ project.name }}</h3>
        <span class="shrink-0 text-xs font-medium text-warmgray whitespace-nowrap">{{ project.period }}</span>
      </div>
      <p class="text-sm text-warmgray leading-relaxed mb-4">{{ project.description }}</p>

      <ul class="space-y-2 mb-5 flex-1">
        <li
          v-for="point in project.points"
          :key="point"
          class="flex items-start gap-2 text-sm text-coffee"
        >
          <span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange" />
          <span>{{ point }}</span>
        </li>
      </ul>

      <div class="flex flex-wrap gap-2">
        <BaseBadge v-for="tag in project.tags" :key="tag">{{ tag }}</BaseBadge>
      </div>
    </BaseCard>
  </div>
</template>
