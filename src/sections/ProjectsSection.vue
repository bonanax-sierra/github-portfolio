<script setup>
import ProjectCard from '../components/ProjectCard.vue'
import SectionHeader from '../components/SectionHeader.vue'
defineProps({ projects: { type: Array, required: true } })
</script>
<template>
  <section id="projects" class="space-y-6 rounded-3xl border border-slate-200 bg-white p-6 transition-colors duration-300 dark:border-gray-700 dark:bg-gray-800 sm:p-8 lg:p-10">
    <SectionHeader eyebrow="Portfolio" title="Projects" subtitle="Selected work and case studies" />
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
      <ProjectCard v-for="project in projects" :key="project.title" :project="project" />
    </div>
  </section>
</template>