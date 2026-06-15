<script setup>
import { portfolio } from '../../data/portfolio'
import SectionTitle from '../ui/SectionTitle.vue'
import PortfolioCard from '../ui/PortfolioCard.vue'
</script>

<template>
  <section id="portfolio" class="bg-cream-deep/60 py-16 sm:py-24">
    <div class="mx-auto max-w-5xl px-6">
      <SectionTitle
        eyebrow="Portfolio"
        title="個人作品集"
        description="業餘時間獨立開發的 side project，涵蓋表單系統、媒合平台與後台管理系統，皆已部署上線。"
      />

      <div class="flex flex-col gap-6 sm:gap-8">
        <PortfolioCard
          v-for="(project, idx) in portfolio"
          :key="project.name"
          :project="project"
          :delay="idx * 100"
          :reverse="idx % 2 === 1"
        />
      </div>
    </div>
  </section>
</template>
