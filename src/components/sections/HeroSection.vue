<script setup>
import { profile } from '../../data/profile'
import { coreSkillTags } from '../../data/skills'
import BaseButton from '../ui/BaseButton.vue'
import AnimatedCounter from '../ui/AnimatedCounter.vue'
</script>

<template>
  <section id="hero" class="relative overflow-hidden pt-28 sm:pt-36 pb-16 sm:pb-24">
    <!-- 背景裝飾 -->
    <div
      class="pointer-events-none absolute -top-24 -right-24 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-cream-deep opacity-70 blur-3xl"
    />
    <div
      class="pointer-events-none absolute top-1/3 -left-20 h-56 w-56 rounded-full bg-orange/10 blur-3xl"
    />

    <div class="relative mx-auto max-w-5xl px-6">
      <p
        class="animate-fade-up font-display text-sm font-semibold uppercase tracking-[0.3em] text-orange"
        style="animation-delay: 0ms"
      >
        Frontend Engineer
      </p>

      <h1
        class="animate-fade-up mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold text-coffee tracking-tight"
        style="animation-delay: 120ms"
      >
        {{ profile.name }}
        <span class="block text-2xl sm:text-3xl md:text-4xl font-bold text-warmgray mt-3">
          {{ profile.fullTitle }}
        </span>
      </h1>

      <p
        class="animate-fade-up mt-6 max-w-2xl text-base sm:text-lg text-warmgray leading-relaxed"
        style="animation-delay: 240ms"
      >
        {{ profile.tagline }}
      </p>

      <div class="animate-fade-up mt-6 flex flex-wrap gap-2" style="animation-delay: 320ms">
        <span
          v-for="tag in coreSkillTags"
          :key="tag"
          class="rounded-full bg-white border border-cream-deep px-3 py-1 text-xs font-medium text-coffee"
        >
          {{ tag }}
        </span>
      </div>

      <div class="animate-fade-up mt-8 flex flex-wrap gap-3" style="animation-delay: 400ms">
        <BaseButton href="#experience" variant="primary">查看經歷</BaseButton>
        <BaseButton href="#contact" variant="secondary">聯絡我</BaseButton>
      </div>

      <div
        class="animate-fade-up mt-14 grid grid-cols-3 gap-4 sm:gap-10 max-w-full sm:max-w-xl"
        style="animation-delay: 480ms"
      >
        <AnimatedCounter
          v-for="item in profile.heroHighlights"
          :key="item.label"
          :value="item.value"
          :suffix="item.suffix"
          :label="item.label"
          :description="item.description"
        />
      </div>
    </div>
  </section>
</template>
