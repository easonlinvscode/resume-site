<script setup>
import { ref } from 'vue'
import BaseBadge from './BaseBadge.vue'
import { useRevealOnScroll } from '../../composables/useRevealOnScroll'

const props = defineProps({
  project: { type: Object, required: true },
  delay: { type: Number, default: 0 },
  reverse: { type: Boolean, default: false },
})

const { target, isVisible } = useRevealOnScroll()
const expanded = ref(false)
</script>

<template>
  <div
    ref="target"
    class="reveal"
    :class="{ 'reveal-visible': isVisible }"
    :style="{ transitionDelay: `${delay}ms` }"
  >
    <div
      class="flex flex-col overflow-hidden rounded-2xl bg-white border border-cream-deep shadow-[0_2px_12px_-4px_rgba(120,113,108,0.15)] transition-all duration-300 hover:shadow-[0_8px_24px_-6px_rgba(234,88,12,0.18)] md:flex-row"
      :class="reverse ? 'md:flex-row-reverse' : ''"
    >
      <!-- 縮圖 -->
      <a
        :href="project.link"
        target="_blank"
        rel="noopener noreferrer"
        class="block aspect-video w-full overflow-hidden bg-cream-deep md:aspect-auto md:w-2/5 md:min-h-[260px] md:shrink-0"
      >
        <img
          v-if="project.image"
          :src="project.image"
          :alt="project.name"
          class="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
        <div
          v-else
          class="flex h-full w-full items-center justify-center bg-gradient-to-br from-orange-light/30 via-cream-deep to-orange/20"
        >
          <span class="font-display text-2xl sm:text-3xl font-extrabold tracking-wide text-orange/70">
            {{ project.accent }}
          </span>
        </div>
      </a>

      <div class="flex flex-1 flex-col p-6 sm:p-8">
        <div class="flex items-start justify-between gap-3 mb-1">
          <h3 class="text-lg sm:text-xl font-bold text-coffee">{{ project.name }}</h3>
          <a
            :href="project.link"
            target="_blank"
            rel="noopener noreferrer"
            class="shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-cream-deep text-orange transition-colors duration-200 hover:bg-orange hover:text-white"
            aria-label="查看作品"
          >
            <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M7 17 17 7M9 7h8v8" />
            </svg>
          </a>
        </div>
        <p class="text-xs font-semibold uppercase tracking-wide text-orange mb-3">{{ project.enName }}</p>

        <p class="text-sm text-warmgray leading-relaxed">{{ project.summary }}</p>

        <div
          class="overflow-hidden transition-all duration-500 ease-out"
          :style="{ maxHeight: expanded ? '400px' : '0px', opacity: expanded ? 1 : 0 }"
        >
          <p class="mt-3 text-sm text-warmgray leading-relaxed border-t border-cream-deep pt-3">
            {{ project.description }}
          </p>
        </div>

        <button
          type="button"
          class="mt-3 inline-flex items-center gap-1 self-start text-sm font-semibold text-orange hover:text-orange-light transition-colors"
          @click="expanded = !expanded"
        >
          {{ expanded ? '收合說明' : '完整說明' }}
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

        <div class="flex-1"></div>

        <div class="flex flex-wrap gap-2 mt-4 pt-4 border-t border-cream-deep">
          <BaseBadge v-for="tag in project.tags" :key="tag">{{ tag }}</BaseBadge>
        </div>

        <a
          :href="project.link"
          target="_blank"
          rel="noopener noreferrer"
          class="mt-5 inline-flex items-center justify-center gap-2 self-start rounded-full bg-orange px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 ease-out hover:bg-orange-light hover:shadow-md hover:-translate-y-0.5"
        >
          查看作品
          <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M7 17 17 7M9 7h8v8" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>
