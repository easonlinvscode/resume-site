<script setup>
import { profile } from '../../data/profile'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="bg-coffee py-8">
    <div class="mx-auto max-w-5xl px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
      <p class="text-sm text-cream-deep/70">
        © {{ year }} {{ profile.enName }}.
      </p>
      <a :href="`mailto:${profile.contact.email}`" class="text-sm text-orange hover:text-orange-light transition-colors">
        {{ profile.contact.email }}
      </a>
    </div>
  </footer>
</template>
