<script setup>
import TheNavbar from './components/layout/TheNavbar.vue'
import TheFooter from './components/layout/TheFooter.vue'
import BackToTopButton from './components/layout/BackToTopButton.vue'

import HeroSection from './components/sections/HeroSection.vue'
import AboutSection from './components/sections/AboutSection.vue'
import SkillsSection from './components/sections/SkillsSection.vue'
import ExperienceSection from './components/sections/ExperienceSection.vue'
import ProjectsSection from './components/sections/ProjectsSection.vue'
import PortfolioSection from './components/sections/PortfolioSection.vue'
import EducationSection from './components/sections/EducationSection.vue'
import ContactSection from './components/sections/ContactSection.vue'
</script>

<template>
  <div class="min-h-screen bg-cream text-coffee">
    <TheNavbar />

    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <PortfolioSection />
      <EducationSection />
      <ContactSection />
    </main>

    <TheFooter />
    <BackToTopButton />
  </div>
</template>
