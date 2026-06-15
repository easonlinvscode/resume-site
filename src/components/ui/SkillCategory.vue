<script setup>
import BaseCard from './BaseCard.vue'
import SkillTag from './SkillTag.vue'
import { useRevealOnScroll } from '../../composables/useRevealOnScroll'

const props = defineProps({
  category: { type: Object, required: true },
  delay: { type: Number, default: 0 },
})

const { target, isVisible } = useRevealOnScroll()

// 簡易線條 icon（依分類顯示）
const icons = {
  layout:
    'M3 5.25A2.25 2.25 0 0 1 5.25 3h13.5A2.25 2.25 0 0 1 21 5.25v13.5A2.25 2.25 0 0 1 18.75 21H5.25A2.25 2.25 0 0 1 3 18.75V5.25Z M3 9h18 M9 21V9',
  code: 'm6.75 7.5-3 4.5 3 4.5 M17.25 7.5l3 4.5-3 4.5 M14 4.5 10 19.5',
  api: 'M8.25 15.75 4.5 12l3.75-3.75 M15.75 8.25 19.5 12l-3.75 3.75 M12 4.5v15',
  image:
    'M3 16.5 8.25 11l3.75 4.5 2.25-3 4.75 5.5 M3 5.25A2.25 2.25 0 0 1 5.25 3h13.5A2.25 2.25 0 0 1 21 5.25v13.5A2.25 2.25 0 0 1 18.75 21H5.25A2.25 2.25 0 0 1 3 18.75V5.25Z',
}
</script>

<template>
  <div
    ref="target"
    class="reveal"
    :class="{ 'reveal-visible': isVisible }"
    :style="{ transitionDelay: `${delay}ms` }"
  >
    <BaseCard>
      <div class="flex items-center gap-3 mb-4">
        <span class="flex h-10 w-10 items-center justify-center rounded-xl bg-cream-deep text-orange">
          <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <path :d="icons[category.icon] || icons.code" />
          </svg>
        </span>
        <h3 class="text-base font-bold text-coffee">{{ category.title }}</h3>
      </div>
      <div class="flex flex-wrap gap-2">
        <SkillTag v-for="skill in category.skills" :key="skill" :label="skill" />
      </div>
    </BaseCard>
  </div>
</template>
