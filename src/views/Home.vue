<script setup>
import Navbar from '../components/Navbar.vue'
import Hero from '../components/Hero.vue'
import Footer from '../components/Footer.vue'
import AboutSection from '../sections/AboutSection.vue'
import ProjectsSection from '../sections/ProjectsSection.vue'
import SkillsSection from '../sections/SkillsSection.vue'
import ContactSection from '../sections/ContactSection.vue'
import { projects, skillGroups } from '../data/portfolio'
</script>

<template>
  <div class="min-h-screen bg-white text-slate-900 transition-colors duration-300 dark:bg-gray-900 dark:text-white">
    <Navbar />

    <main class="mx-auto flex w-full max-w-6xl flex-col gap-16 px-4 py-6 sm:gap-20 sm:px-6 sm:py-8 lg:gap-24 lg:px-10 lg:py-12">
      <Hero />
      <AboutSection />
      <SkillsSection :groups="skillGroups" />
      <ProjectsSection :projects="projects" />
      <ContactSection />
    </main>

    <div class="mx-auto w-full max-w-6xl px-4 pb-6 sm:px-6 sm:pb-8 lg:px-10 lg:pb-10">
      <Footer />
    </div>
  </div>
</template>
