<script setup>
import projectFallbackImage from '../assets/images/project1.png'

const props = defineProps({ project: { type: Object, required: true } })
const image = props.project.image || projectFallbackImage
</script>

<template>
  <article class="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-gray-700 dark:bg-gray-900">
    <div class="aspect-[16/10] w-full overflow-hidden bg-gray-200 dark:bg-gray-800">
      <img :src="image" alt="project screenshot" class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" loading="lazy" />
    </div>
    <div class="flex h-full flex-col gap-3 p-5">
      <h3 class="text-lg font-semibold tracking-tight text-slate-900 dark:text-white">{{ project.title }}</h3>
      <p class="text-sm leading-relaxed text-slate-600 dark:text-gray-400">{{ project.description }}</p>
      <div class="flex flex-wrap gap-2">
        <span v-for="t in project.tech" :key="t" class="rounded-full border border-slate-300 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-slate-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200">{{ t }}</span>
      </div>
      <div class="mt-auto flex gap-4 pt-2">
        <a :href="project.live" target="_blank" rel="noreferrer" class="text-sm font-medium text-slate-900 underline underline-offset-4 transition hover:opacity-70 dark:text-white">Live</a>
        <a :href="project.github" target="_blank" rel="noreferrer" class="text-sm font-medium text-slate-900 underline underline-offset-4 transition hover:opacity-70 dark:text-white">GitHub</a>
      </div>
    </div>
  </article>
</template>