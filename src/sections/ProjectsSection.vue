<script setup>
import ProjectCard from '../components/ProjectCard.vue'
defineProps({ projects: { type: Array, required: true } })
</script>
<template>
  <section id="projects" class="space-y-6 rounded-3xl border border-slate-200 bg-white p-6 transition-colors duration-300 dark:border-gray-700 dark:bg-gray-800 sm:p-8 lg:p-10">
    <div class="flex items-end justify-between gap-4 border-b border-slate-200 pb-4 dark:border-gray-700">
      <h2 class="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-3xl">Projects</h2>
      <p class="hidden text-sm text-slate-500 dark:text-gray-400 sm:block">Selected work and case studies</p>
    </div>
    <div class="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
      <ProjectCard v-for="project in projects" :key="project.title" :project="project" />
    </div>
  </section>
</template>