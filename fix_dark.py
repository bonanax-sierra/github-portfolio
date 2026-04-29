import os

files = {
'src/views/Home.vue': open('src/views/Home.vue', encoding='utf-8').read().replace(
    'class="min-h-screen bg-slate-50 text-slate-900"',
    'class="min-h-screen bg-slate-100 dark:bg-gray-900 text-slate-900 dark:text-white transition-colors duration-300"'
),

'src/components/Hero.vue': """<template>
  <section id="home" class="grid gap-8 rounded-3xl border border-slate-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 sm:p-8 lg:grid-cols-[1.2fr_0.8fr] lg:p-10 transition-colors duration-300">
    <div class="space-y-5">
      <p class="text-sm font-medium uppercase tracking-wide text-slate-500 dark:text-gray-400">Web Developer</p>
      <h1 class="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">Building fast, clean, and scalable web experiences.</h1>
      <p class="max-w-2xl text-base leading-relaxed text-slate-600 dark:text-gray-400 sm:text-lg">I design and ship modern frontend interfaces with clear systems, strong accessibility, and production-ready code quality.</p>
      <div class="flex flex-wrap gap-3 pt-2">
        <a href="#projects" class="rounded-2xl bg-black dark:bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white transition duration-200 hover:scale-[1.03] hover:bg-slate-900 dark:hover:bg-indigo-700">View Projects</a>
        <a href="#contact" class="rounded-2xl border border-slate-300 dark:border-gray-600 px-5 py-2.5 text-sm font-medium text-slate-800 dark:text-gray-300 transition duration-200 hover:scale-[1.03] hover:bg-slate-900 hover:text-white dark:hover:bg-gray-700">Contact Me</a>
      </div>
    </div>
    <div class="rounded-2xl border border-slate-200 dark:border-gray-700 bg-slate-50 dark:bg-gray-900 p-5 sm:p-6">
      <dl class="space-y-4">
        <div>
          <dt class="text-xs uppercase tracking-wide text-slate-500 dark:text-gray-500">Location</dt>
          <dd class="mt-1 text-sm font-medium text-slate-900 dark:text-white">Cebu, Philippines</dd>
        </div>
        <div>
          <dt class="text-xs uppercase tracking-wide text-slate-500 dark:text-gray-500">Specialty</dt>
          <dd class="mt-1 text-sm font-medium text-slate-900 dark:text-white">Vue, Flutter, UI Engineering</dd>
        </div>
        <div>
          <dt class="text-xs uppercase tracking-wide text-slate-500 dark:text-gray-500">Open To</dt>
          <dd class="mt-1 text-sm font-medium text-slate-900 dark:text-white">Full-time and contract work</dd>
        </div>
      </dl>
    </div>
  </section>
</template>""",

'src/sections/AboutSection.vue': """<template>
  <section id="about" class="space-y-4 rounded-3xl border border-slate-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 sm:p-8 lg:p-10 transition-colors duration-300">
    <h2 class="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-3xl">About</h2>
    <p class="max-w-3xl text-sm leading-relaxed text-slate-600 dark:text-gray-400 sm:text-base">I am a frontend-focused developer with strong product instincts and a clean code mindset. I build performant, accessible interfaces and collaborate across teams to ship reliable digital products.</p>
  </section>
</template>""",

'src/sections/ProjectsSection.vue': """<script setup>
import ProjectCard from '../components/ProjectCard.vue'
defineProps({ projects: { type: Array, required: true } })
</script>
<template>
  <section id="projects" class="space-y-6 rounded-3xl border border-slate-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 sm:p-8 lg:p-10 transition-colors duration-300">
    <h2 class="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-3xl">Projects</h2>
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
      <ProjectCard v-for="project in projects" :key="project.title" :project="project" />
    </div>
  </section>
</template>""",

'src/sections/SkillsSection.vue': """<script setup>
import SkillBadge from '../components/SkillBadge.vue'
defineProps({ groups: { type: Array, required: true } })
</script>
<template>
  <section class="space-y-6 rounded-3xl border border-slate-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 sm:p-8 lg:p-10 transition-colors duration-300">
    <h2 class="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-3xl">Skills</h2>
    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <article v-for="group in groups" :key="group.title" class="space-y-3">
        <h3 class="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-gray-400">{{ group.title }}</h3>
        <div class="flex flex-wrap gap-2">
          <SkillBadge v-for="skill in group.skills" :key="skill" :label="skill" />
        </div>
      </article>
    </div>
  </section>
</template>""",

'src/sections/ContactSection.vue': """<template>
  <section id="contact" class="space-y-4 rounded-3xl border border-slate-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 sm:p-8 lg:p-10 transition-colors duration-300">
    <h2 class="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-3xl">Contact</h2>
    <p class="text-sm text-slate-600 dark:text-gray-400 sm:text-base">Open to frontend and full-stack opportunities.</p>
    <div class="flex flex-wrap gap-3 pt-2">
      <a href="mailto:adrian@example.com" class="rounded-2xl bg-black dark:bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white transition duration-200 hover:scale-[1.03] hover:bg-slate-900 dark:hover:bg-indigo-700">Email Me</a>
      <a href="https://github.com" target="_blank" rel="noreferrer" class="rounded-2xl border border-slate-300 dark:border-gray-600 px-5 py-2.5 text-sm font-medium text-slate-800 dark:text-gray-300 transition duration-200 hover:scale-[1.03] hover:bg-slate-900 hover:text-white dark:hover:bg-gray-700">GitHub</a>
      <a href="https://linkedin.com" target="_blank" rel="noreferrer" class="rounded-2xl border border-slate-300 dark:border-gray-600 px-5 py-2.5 text-sm font-medium text-slate-800 dark:text-gray-300 transition duration-200 hover:scale-[1.03] hover:bg-slate-900 hover:text-white dark:hover:bg-gray-700">LinkedIn</a>
    </div>
  </section>
</template>""",

'src/components/Footer.vue': """<template>
  <footer class="border-t border-slate-200 dark:border-gray-700 py-8 transition-colors duration-300">
    <p class="text-center text-sm text-slate-500 dark:text-gray-400">2025 Adrian Bona. Built with Vue and Tailwind.</p>
  </footer>
</template>""",

'src/components/ProjectCard.vue': """<script setup>
defineProps({ project: { type: Object, required: true } })
</script>
<template>
  <article class="flex flex-col gap-3 rounded-2xl border border-slate-200 dark:border-gray-700 bg-slate-50 dark:bg-gray-900 p-5 transition-colors duration-300 hover:shadow-md">
    <h3 class="text-base font-semibold text-slate-900 dark:text-white">{{ project.title }}</h3>
    <p class="text-sm leading-relaxed text-slate-600 dark:text-gray-400">{{ project.description }}</p>
    <div class="flex flex-wrap gap-2">
      <span v-for="t in project.tech" :key="t" class="rounded-full bg-slate-200 dark:bg-gray-700 px-3 py-1 text-xs font-medium text-slate-700 dark:text-gray-300">{{ t }}</span>
    </div>
    <div class="mt-auto flex gap-4 pt-2">
      <a :href="project.live" target="_blank" class="text-xs font-medium text-slate-900 dark:text-white underline underline-offset-2 hover:text-indigo-500">Live</a>
      <a :href="project.github" target="_blank" class="text-xs font-medium text-slate-900 dark:text-white underline underline-offset-2 hover:text-indigo-500">GitHub</a>
    </div>
  </article>
</template>""",

'src/components/SkillBadge.vue': """<script setup>
defineProps({ label: { type: String, required: true } })
</script>
<template>
  <span class="rounded-full border border-slate-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-1 text-xs font-medium text-slate-700 dark:text-gray-300 transition-colors duration-300">{{ label }}</span>
</template>""",
}

for path, content in files.items():
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print('Written: ' + path)

print('All done!')