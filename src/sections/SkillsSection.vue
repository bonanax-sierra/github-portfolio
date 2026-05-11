<script setup>
import SkillBadge from '../components/SkillBadge.vue'
defineProps({ groups: { type: Array, required: true } })
</script>
<template>
  <section class="space-y-5 rounded-3xl border border-slate-200 bg-slate-50 p-5 transition-colors duration-300 dark:border-gray-700 dark:bg-gray-900 sm:space-y-6 sm:p-8 lg:p-10">
    <div class="flex flex-col items-start gap-2 border-b border-slate-200 pb-4 dark:border-gray-700 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
      <h2 class="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-3xl">Skills</h2>
      <p class="text-sm text-slate-500 dark:text-gray-400">Core stack and tools</p>
    </div>
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <article v-for="group in groups" :key="group.title" class="space-y-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-5">
        <h3 class="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-gray-400">{{ group.title }}</h3>
        <div class="flex flex-wrap gap-2">
          <SkillBadge v-for="skill in group.skills" :key="skill" :label="skill" />
        </div>
      </article>
    </div>
  </section>
</template>