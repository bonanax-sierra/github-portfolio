<script setup>
defineProps({ label: { type: String, required: true } })
</script>
<template>
  <span class="inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-400 hover:shadow dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200">{{ label }}</span>
</template>