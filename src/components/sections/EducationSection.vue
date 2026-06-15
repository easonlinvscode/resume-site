<script setup>
import { education, certifications } from '../../data/education'
import { languages } from '../../data/languages'
import SectionTitle from '../ui/SectionTitle.vue'
import BaseCard from '../ui/BaseCard.vue'
import LanguageBar from '../ui/LanguageBar.vue'
import { useRevealOnScroll } from '../../composables/useRevealOnScroll'

const { target: eduTarget, isVisible: eduVisible } = useRevealOnScroll()
const { target: certTarget, isVisible: certVisible } = useRevealOnScroll()
const { target: langTarget, isVisible: langVisible } = useRevealOnScroll()
</script>

<template>
  <section id="education" class="py-16 sm:py-24">
    <div class="mx-auto max-w-5xl px-6">
      <SectionTitle eyebrow="Education" title="學歷、證照與語言能力" />

      <div class="grid gap-5 md:grid-cols-2">
        <!-- 學歷 -->
        <div ref="eduTarget" class="reveal" :class="{ 'reveal-visible': eduVisible }">
          <BaseCard :hoverable="false" class="h-full">
            <h3 class="text-sm font-bold text-coffee mb-4 tracking-wide">學歷</h3>
            <div class="flex items-start gap-4">
              <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cream-deep text-orange">
                <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 3 2 8l10 5 10-5-10-5Z M6 10.5V16c0 1 2.5 3 6 3s6-2 6-3v-5.5" />
                </svg>
              </span>
              <div>
                <p class="font-bold text-coffee">{{ education.school }}</p>
                <p class="text-sm text-warmgray">{{ education.department }}</p>
                <p class="text-sm text-warmgray mt-1">{{ education.degree }}｜{{ education.period }}</p>
              </div>
            </div>
          </BaseCard>
        </div>

        <!-- 語言能力 -->
        <div ref="langTarget" class="reveal" :class="{ 'reveal-visible': langVisible }" style="transition-delay: 100ms">
          <BaseCard :hoverable="false" class="h-full">
            <h3 class="text-sm font-bold text-coffee mb-4 tracking-wide">語言能力</h3>
            <div class="space-y-4">
              <div v-for="lang in languages" :key="lang.name">
                <div class="flex items-center justify-between mb-2">
                  <span class="text-sm font-semibold text-coffee">{{ lang.name }}</span>
                  <span class="text-xs text-warmgray">{{ lang.levelLabel }}</span>
                </div>
                <div v-if="lang.details.length" class="space-y-2">
                  <LanguageBar
                    v-for="d in lang.details"
                    :key="d.skill"
                    :skill="d.skill"
                    :level="d.level"
                  />
                </div>
                <LanguageBar v-else :skill="lang.name" :level="lang.level" />
              </div>
            </div>
          </BaseCard>
        </div>

        <!-- 證照 -->
        <div ref="certTarget" class="reveal md:col-span-2" :class="{ 'reveal-visible': certVisible }" style="transition-delay: 180ms">
          <BaseCard :hoverable="false">
            <h3 class="text-sm font-bold text-coffee mb-4 tracking-wide">資格認證</h3>
            <ul class="grid gap-3 sm:grid-cols-2">
              <li
                v-for="cert in certifications"
                :key="cert.name"
                class="flex items-start gap-2 text-sm"
              >
                <span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange" />
                <span class="text-coffee">
                  {{ cert.name }}
                  <span class="text-warmgray"> · {{ cert.issuer }}</span>
                </span>
              </li>
            </ul>
          </BaseCard>
        </div>
      </div>
    </div>
  </section>
</template>
