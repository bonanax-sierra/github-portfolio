<script setup>
import profileImage from '../assets/images/profile.jpg'
import Avatar from './Avatar.vue'
import { useIntersect } from '../composables/useIntersect'

const props = defineProps({
  name: { type: String, default: 'Adrian Bona' },
  location: { type: String, default: 'Sagay City' },
  title: { type: String, default: 'Software Engineer / WordPress UI UX Developer / AI Specialist' },
  image: { type: String, default: profileImage },
  tags: { type: Array, default: () => ['WordPress', 'UI UX', 'AI', 'Laravel'] },
})

const { el, visible } = useIntersect({ threshold: 0.15 })
</script>

<template>
  <div ref="el" :class="['flex h-full flex-col items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center shadow-sm transition-all duration-300 dark:border-gray-700 dark:bg-gray-900 sm:p-8', visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4']">
    <div class="flex flex-col items-center gap-4">
      <Avatar :src="image" :alt="name" />
      <div class="space-y-1">
        <div class="text-lg font-semibold tracking-tight text-slate-900 dark:text-white sm:text-xl">{{ name }}</div>
        <div class="text-sm text-slate-600 dark:text-gray-400">{{ title }}</div>
        <div class="text-xs uppercase tracking-wide text-slate-500 dark:text-gray-500">{{ location }} • Open to remote</div>
      </div>
    </div>

    <div class="mt-6 flex flex-wrap justify-center gap-2">
      <span v-for="t in tags" :key="t" class="rounded-full border border-slate-300 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200">{{ t }}</span>
    </div>
  </div>
</template>
