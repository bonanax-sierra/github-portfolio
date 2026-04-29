<script setup>
import ProfileCard from './ProfileCard.vue'
</script>

<template>
  <section id="home" class="grid gap-8 rounded-3xl border border-slate-200 bg-white p-6 transition-colors duration-300 dark:border-gray-700 dark:bg-gray-800 sm:p-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch lg:p-10">
    <div class="space-y-5 lg:space-y-6">
      <p class="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-gray-400">Software Engineer / WordPress UI UX Developer / AI Specialist</p>
      <h1 class="max-w-2xl text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">Building sharp digital products with AI.</h1>
      <p class="max-w-2xl text-base leading-relaxed text-slate-600 dark:text-gray-400 sm:text-lg">I design and ship WordPress, Vue, Flutter, and Laravel experiences with a focus on usability, performance, and clear product flow.</p>
      <div class="flex flex-wrap gap-3 pt-2">
        <a href="#projects" class="rounded-2xl bg-black px-5 py-2.5 text-sm font-medium text-white transition duration-200 hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-gray-900 dark:hover:bg-black">View Projects</a>
        <a href="#contact" class="rounded-2xl border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-800 transition duration-200 hover:-translate-y-0.5 hover:bg-slate-100 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700">Contact Me</a>
      </div>
    </div>
    <div class="flex min-h-[320px] items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm dark:border-gray-700 dark:bg-gray-900 sm:p-6 lg:min-h-full">
      <ProfileCard />
    </div>
  </section>
</template>