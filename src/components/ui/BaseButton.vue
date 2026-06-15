<script setup>
defineProps({
  variant: {
    type: String,
    default: 'primary', // primary | secondary | ghost
  },
  href: {
    type: String,
    default: '',
  },
  tag: {
    type: String,
    default: 'a', // a | button
  },
})

const variants = {
  primary:
    'bg-orange text-white shadow-sm hover:bg-orange-light hover:shadow-md hover:-translate-y-0.5',
  secondary:
    'bg-white text-coffee border border-cream-deep hover:border-orange hover:text-orange hover:-translate-y-0.5',
  ghost:
    'bg-transparent text-coffee hover:text-orange',
}
</script>

<template>
  <component
    :is="tag"
    :href="href || undefined"
    class="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 ease-out"
    :class="variants[variant]"
  >
    <slot />
  </component>
</template>
