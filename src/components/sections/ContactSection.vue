<script setup>
import { profile } from '../../data/profile'
import SectionTitle from '../ui/SectionTitle.vue'
import BaseButton from '../ui/BaseButton.vue'
import { useRevealOnScroll } from '../../composables/useRevealOnScroll'

const { target, isVisible } = useRevealOnScroll()

const contactItems = [
  {
    label: 'Email',
    value: profile.contact.email,
    href: `mailto:${profile.contact.email}`,
    icon: 'M3 6.75A2.25 2.25 0 0 1 5.25 4.5h13.5A2.25 2.25 0 0 1 21 6.75v10.5A2.25 2.25 0 0 1 18.75 19.5H5.25A2.25 2.25 0 0 1 3 17.25V6.75Z M3.75 6.75 12 13.5l8.25-6.75',
  },
  {
    label: '電話',
    value: `${profile.contact.phone}（${profile.contact.contactTime}）`,
    href: `tel:${profile.contact.phone}`,
    icon: 'M2.25 6.75c0 8.284 6.716 15 15 15h1.5a1.5 1.5 0 0 0 1.5-1.5v-2.026a1.5 1.5 0 0 0-1.206-1.472l-3.07-.614a1.5 1.5 0 0 0-1.516.59l-.5.7a11.25 11.25 0 0 1-5.176-5.176l.7-.5a1.5 1.5 0 0 0 .59-1.516l-.614-3.07A1.5 1.5 0 0 0 6.776 2.25H4.75a1.5 1.5 0 0 0-1.5 1.5v3Z',
  }
]
</script>

<template>
  <section id="contact" class="py-16 sm:py-24">
    <div class="mx-auto max-w-3xl px-6">
      <SectionTitle
        eyebrow="Contact"
        title="聯絡我"
        description="若您對我的經歷感興趣，歡迎透過以下方式與我聯繫。"
        align="center"
      />

      <div
        ref="target"
        class="reveal"
        :class="{ 'reveal-visible': isVisible }"
      >
        <div class="rounded-3xl bg-coffee px-6 sm:px-10 py-10 sm:py-12 text-center">
          <h3 class="text-xl sm:text-2xl font-bold text-white">期待與您聊聊合作機會</h3>
          <p class="mt-2 text-sm text-cream-deep/80 max-w-md mx-auto">
            可上班日：錄取後一週，歡迎隨時與我聯繫。
          </p>

          <div class="mt-8 grid gap-4 sm:grid-cols-2">
            <component
              :is="item.href ? 'a' : 'div'"
              v-for="item in contactItems"
              :key="item.label"
              :href="item.href || undefined"
              class="flex flex-col items-center gap-2 rounded-2xl bg-white/5 px-4 py-5 text-center transition-colors duration-200 hover:bg-white/10"
            >
              <span class="flex h-10 w-10 items-center justify-center rounded-xl bg-orange/20 text-orange">
                <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <path :d="item.icon" />
                </svg>
              </span>
              <span class="text-xs font-semibold uppercase tracking-wide text-orange">{{ item.label }}</span>
              <span class="text-sm text-white break-all">{{ item.value }}</span>
            </component>
          </div>

          <div class="mt-8">
            <BaseButton :href="`mailto:${profile.contact.email}`" variant="primary">
              寄信給我
            </BaseButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
