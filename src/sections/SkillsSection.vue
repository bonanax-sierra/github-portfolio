<script setup>
import SkillBadge from '../components/SkillBadge.vue'
import SectionHeader from '../components/SectionHeader.vue'
defineProps({ groups: { type: Array, required: true } })
</script>
<template>
  <section class="space-y-5 rounded-3xl border border-slate-200 bg-slate-50 p-5 transition-colors duration-300 dark:border-gray-700 dark:bg-gray-900 sm:space-y-6 sm:p-8 lg:p-10">
    <SectionHeader eyebrow="Capabilities" title="Skills" subtitle="Core stack and tools" />
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