<script setup>
defineProps({
  eyebrow: { type: String, required: true },
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
})
</script>

<template>
  <div class="flex flex-col items-start gap-2 border-b border-slate-200 pb-4 dark:border-gray-700 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
    <div class="space-y-1">
      <p class="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-gray-400">{{ eyebrow }}</p>
      <h2 class="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-3xl">{{ title }}</h2>
    </div>
    <p v-if="subtitle" class="text-sm text-slate-500 dark:text-gray-400">{{ subtitle }}</p>
  </div>
</template>