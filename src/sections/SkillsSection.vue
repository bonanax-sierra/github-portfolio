<script setup>
import SkillBadge from '../components/SkillBadge.vue'
defineProps({ groups: { type: Array, required: true } })
</script>
<template>
  <section class="space-y-6 rounded-3xl border border-slate-200 bg-slate-50 p-6 transition-colors duration-300 dark:border-gray-700 dark:bg-gray-900 sm:p-8 lg:p-10">
    <div class="flex items-end justify-between gap-4 border-b border-slate-200 pb-4 dark:border-gray-700">
      <h2 class="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-3xl">Skills</h2>
      <p class="hidden text-sm text-slate-500 dark:text-gray-400 sm:block">Core stack and tools</p>
    </div>
    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <article v-for="group in groups" :key="group.title" class="space-y-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <h3 class="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-gray-400">{{ group.title }}</h3>
        <div class="flex flex-wrap gap-2">
          <SkillBadge v-for="skill in group.skills" :key="skill" :label="skill" />
        </div>
      </article>
    </div>
  </section>
</template>