<script setup>
import { skillCategories } from '../../data/skills'
import SectionTitle from '../ui/SectionTitle.vue'
import SkillCategory from '../ui/SkillCategory.vue'
</script>

<template>
  <section id="skills" class="py-16 sm:py-24">
    <div class="mx-auto max-w-5xl px-6">
      <SectionTitle
        eyebrow="Skills"
        title="專長技能"
        description="從切版、互動到 API 串接與系統品質，涵蓋前端開發完整流程。"
      />

      <div class="grid gap-5 sm:grid-cols-2">
        <SkillCategory
          v-for="(category, idx) in skillCategories"
          :key="category.title"
          :category="category"
          :delay="idx * 80"
        />
      </div>
    </div>
  </section>
</template>
