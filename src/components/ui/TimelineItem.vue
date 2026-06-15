<script setup>
import { ref } from 'vue'
import BaseBadge from './BaseBadge.vue'
import { useRevealOnScroll } from '../../composables/useRevealOnScroll'

const props = defineProps({
  item: { type: Object, required: true },
  isLast: { type: Boolean, default: false },
})

const { target, isVisible } = useRevealOnScroll({ threshold: 0.1 })
const expanded = ref(props.item.isLatest)
</script>

<template>
  <div ref="target" class="relative pl-10 sm:pl-14" :class="{ 'pb-10 sm:pb-12': !isLast }">
    <!-- 時間軸線 -->
    <span
      v-if="!isLast"
      class="absolute left-[11px] sm:left-[15px] top-6 bottom-0 w-px bg-cream-deep origin-top transition-transform duration-700 ease-out"
      :class="isVisible ? 'scale-y-100' : 'scale-y-0'"
    />
    <!-- 節點 -->
    <span
      class="absolute left-0 top-1.5 flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center rounded-full border-2 transition-all duration-500"
      :class="[
        item.isLatest ? 'border-orange bg-orange' : 'border-orange-light bg-white',
        isVisible ? 'scale-100 opacity-100' : 'scale-50 opacity-0',
      ]"
    >
      <span
        class="h-2 w-2 rounded-full"
        :class="item.isLatest ? 'bg-white' : 'bg-orange-light'"
      />
    </span>

    <div
      class="reveal"
      :class="{ 'reveal-visible': isVisible }"
    >
      <div class="rounded-2xl bg-white border border-cream-deep p-5 sm:p-6 shadow-[0_2px_12px_-4px_rgba(120,113,108,0.15)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_-6px_rgba(234,88,12,0.18)]">
        <div class="flex flex-wrap items-start justify-between gap-2 mb-1">
          <h3 class="text-lg sm:text-xl font-bold text-coffee">{{ item.company }}</h3>
          <BaseBadge v-if="item.isLatest" variant="solid">最近經歷</BaseBadge>
        </div>
        <p class="text-sm font-semibold text-orange mb-1">{{ item.title }}</p>
        <p class="text-xs text-warmgray mb-3">
          {{ item.period }}（{{ item.duration }}）｜{{ item.industry }}
        </p>

        <p class="text-sm text-warmgray leading-relaxed">{{ item.summary }}</p>

        <button
          type="button"
          class="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-orange hover:text-orange-light transition-colors"
          @click="expanded = !expanded"
        >
          {{ expanded ? '收合詳情' : '展開詳情' }}
          <svg
            class="h-4 w-4 transition-transform duration-300"
            :class="expanded ? 'rotate-180' : ''"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        <div
          class="overflow-hidden transition-all duration-500 ease-out"
          :style="{ maxHeight: expanded ? '600px' : '0px', opacity: expanded ? 1 : 0 }"
        >
          <ul class="mt-3 space-y-2 border-t border-cream-deep pt-3">
            <li
              v-for="point in item.highlights"
              :key="point"
              class="flex items-start gap-2 text-sm text-coffee"
            >
              <span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange" />
              <span>{{ point }}</span>
            </li>
          </ul>
          <div class="flex flex-wrap gap-2 mt-4">
            <BaseBadge v-for="tag in item.tags" :key="tag">{{ tag }}</BaseBadge>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
