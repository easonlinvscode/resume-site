<script setup>
import { projects } from '../../data/projects'
import SectionTitle from '../ui/SectionTitle.vue'
import ProjectCard from '../ui/ProjectCard.vue'
</script>

<template>
  <section id="projects" class="py-16 sm:py-24">
    <div class="mx-auto max-w-5xl px-6">
      <SectionTitle
        eyebrow="Projects"
        title="專案"
      />

      <div class="grid gap-5 sm:grid-cols-2">
        <ProjectCard
          v-for="(project, idx) in projects"
          :key="project.name"
          :project="project"
          :delay="idx * 100"
        />
      </div>
    </div>
  </section>
</template>
