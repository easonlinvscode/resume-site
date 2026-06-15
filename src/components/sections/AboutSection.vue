<script setup>
import { profile } from '../../data/profile'
import SectionTitle from '../ui/SectionTitle.vue'
import BaseCard from '../ui/BaseCard.vue'
import { useRevealOnScroll } from '../../composables/useRevealOnScroll'

const { target: textTarget, isVisible: textVisible } = useRevealOnScroll()
const { target: cardTarget, isVisible: cardVisible } = useRevealOnScroll()
</script>

<template>
  <section id="about" class="bg-cream-deep/60 py-16 sm:py-24">
    <div class="mx-auto max-w-5xl px-6">
      <SectionTitle eyebrow="About Me" title="關於我" />

      <div class="grid gap-10 md:grid-cols-5">
        <div
          ref="textTarget"
          class="reveal md:col-span-3 space-y-4"
          :class="{ 'reveal-visible': textVisible }"
        >
          <p
            v-for="(para, idx) in profile.about"
            :key="idx"
            class="text-sm sm:text-base text-warmgray leading-relaxed"
          >
            {{ para }}
          </p>
        </div>

        <div
          ref="cardTarget"
          class="reveal md:col-span-2"
          :class="{ 'reveal-visible': cardVisible }"
          style="transition-delay: 120ms"
        >
          <BaseCard :hoverable="false">
            <h3 class="text-sm font-bold text-coffee mb-4 tracking-wide">求職條件</h3>
            <dl class="space-y-3">
              <div
                v-for="item in profile.jobPreferences"
                :key="item.label"
                class="flex items-start justify-between gap-3 text-sm"
              >
                <dt class="text-warmgray shrink-0">{{ item.label }}</dt>
                <dd class="text-coffee font-medium text-right">{{ item.value }}</dd>
              </div>
            </dl>

            <h3 class="text-sm font-bold text-coffee mt-6 mb-4 tracking-wide">個人資料</h3>
            <dl class="space-y-3">
              <div
                v-for="item in profile.personalInfo"
                :key="item.label"
                class="flex items-start justify-between gap-3 text-sm"
              >
                <dt class="text-warmgray shrink-0">{{ item.label }}</dt>
                <dd class="text-coffee font-medium text-right">{{ item.value }}</dd>
              </div>
            </dl>
          </BaseCard>
        </div>
      </div>
    </div>
  </section>
</template>
