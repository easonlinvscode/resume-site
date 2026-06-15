<script setup>
import { ref, watch, onUnmounted } from 'vue'
import { profile } from '../../data/profile'
import { useScrollSpy } from '../../composables/useScrollSpy'
import BaseButton from '../ui/BaseButton.vue'

const navItems = [
  { id: 'hero', label: '首頁' },
  { id: 'about', label: '關於我' },
  { id: 'skills', label: '技能' },
  { id: 'experience', label: '經歷' },
  { id: 'projects', label: '專案' },
  { id: 'portfolio', label: '作品集' },
  { id: 'education', label: '學歷' },
  { id: 'contact', label: '聯絡' },
]

const { activeId, isScrolled } = useScrollSpy(navItems.map((n) => n.id))
const mobileOpen = ref(false)

// 選單開啟時鎖定背景滾動
watch(mobileOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})

onUnmounted(() => {
  document.body.style.overflow = ''
})

function closeMobile() {
  mobileOpen.value = false
}
</script>

<template>
  <header
    class="fixed top-0 inset-x-0 z-50 transition-all duration-300"
    :class="isScrolled ? 'bg-cream/90 backdrop-blur-md shadow-[0_2px_12px_-6px_rgba(120,113,108,0.25)]' : 'bg-transparent'"
  >
    <nav class="mx-auto max-w-5xl px-6 flex items-center justify-between h-16 sm:h-20">
      <a href="#hero" class="font-display text-lg font-extrabold text-coffee">
        Eason<span class="text-orange">.</span>
      </a>

      <!-- 桌面版導覽 -->
      <ul class="hidden md:flex items-center gap-1">
        <li v-for="item in navItems" :key="item.id">
          <a
            :href="`#${item.id}`"
            class="relative px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-full"
            :class="activeId === item.id ? 'text-orange' : 'text-coffee hover:text-orange'"
          >
            {{ item.label }}
            <span
              class="absolute left-3 right-3 -bottom-0.5 h-0.5 rounded-full bg-orange transition-all duration-300"
              :class="activeId === item.id ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'"
            />
          </a>
        </li>
      </ul>

      <div class="hidden md:block">
        <BaseButton href="#contact" variant="primary">聯絡我</BaseButton>
      </div>

      <!-- 手機版漢堡按鈕 -->
      <button
        type="button"
        class="md:hidden flex h-10 w-10 items-center justify-center rounded-full text-coffee"
        aria-label="開啟選單"
        @click="mobileOpen = !mobileOpen"
      >
        <svg v-if="!mobileOpen" class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
          <path d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
        </svg>
        <svg v-else class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
          <path d="M6 18 18 6M6 6l12 12" />
        </svg>
      </button>
    </nav>

    <!-- 手機版選單 -->
    <div
      class="md:hidden relative z-10 overflow-hidden transition-all duration-300 ease-out bg-cream/95 backdrop-blur-md"
      :style="{ maxHeight: mobileOpen ? '420px' : '0px' }"
    >
      <ul class="px-6 pb-4 pt-2 space-y-1">
        <li v-for="item in navItems" :key="item.id">
          <a
            :href="`#${item.id}`"
            class="block rounded-xl px-4 py-3 text-sm font-medium transition-colors duration-200"
            :class="activeId === item.id ? 'bg-cream-deep text-orange' : 'text-coffee hover:bg-cream-deep'"
            @click="closeMobile"
          >
            {{ item.label }}
          </a>
        </li>
      </ul>
    </div>
  </header>

  <!-- 手機版選單背景遮罩 -->
  <div
    class="md:hidden fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ease-out"
    :class="mobileOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'"
    @click="closeMobile"
  />
</template>
