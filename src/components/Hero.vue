<script setup>
import ProfileCard from './ProfileCard.vue'
import ActionButton from './ActionButton.vue'
</script>

<template>
  <section id="home" class="grid gap-6 rounded-3xl border border-slate-200 bg-white p-5 transition-colors duration-300 dark:border-gray-700 dark:bg-gray-800 sm:gap-8 sm:p-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:items-stretch lg:p-10">
    <div class="space-y-4 sm:space-y-5 lg:space-y-6">
      <p class="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-gray-400 sm:text-sm">Software Engineer / WordPress UI UX Developer / AI Specialist</p>
      <h1 class="max-w-2xl text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl lg:leading-tight">Building sharp digital products with AI.</h1>
      <p class="max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-gray-400 sm:text-base lg:text-lg">I design and ship WordPress, Vue, Flutter, and Laravel experiences with a focus on usability, performance, and clear product flow.</p>
      <div class="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap">
        <ActionButton href="#projects" class="w-full sm:w-auto">View Projects</ActionButton>
        <ActionButton href="#contact" variant="secondary" class="w-full sm:w-auto">Contact Me</ActionButton>
      </div>
    </div>
    <div class="flex min-h-[240px] items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm dark:border-gray-700 dark:bg-gray-900 sm:min-h-[280px] sm:p-6 lg:min-h-full">
      <ProfileCard />
    </div>
  </section>
</template>