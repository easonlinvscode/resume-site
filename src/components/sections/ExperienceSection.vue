<script setup>
import { experience } from '../../data/experience'
import SectionTitle from '../ui/SectionTitle.vue'
import TimelineItem from '../ui/TimelineItem.vue'
</script>

<template>
  <section id="experience" class="bg-cream-deep/60 py-16 sm:py-24">
    <div class="mx-auto max-w-3xl px-6">
      <SectionTitle
        eyebrow="Experience"
        title="工作經歷"
        description="前端相關工作經歷"
      />

      <div>
        <TimelineItem
          v-for="(item, idx) in experience"
          :key="item.company + item.period"
          :item="item"
          :is-last="idx === experience.length - 1"
        />
      </div>
    </div>
  </section>
</template>
