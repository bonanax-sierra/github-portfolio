<script setup>
import project1Image from '../assets/images/project1.png'
import project2Image from '../assets/images/project2.jpg'
import project3Image from '../assets/images/project3.jpg'
import Navbar from '../components/Navbar.vue'
import Hero from '../components/Hero.vue'
import Footer from '../components/Footer.vue'
import AboutSection from '../sections/AboutSection.vue'
import ProjectsSection from '../sections/ProjectsSection.vue'
import SkillsSection from '../sections/SkillsSection.vue'
import ContactSection from '../sections/ContactSection.vue'

const projects = [
  {
    title: 'E-commerce Premium Accounts',
    description: 'A premium accounts e-commerce platform focused on clear browsing, smooth checkout, and dependable user flows.',
    tech: ['WordPress', 'WooCommerce', 'PHP', 'UI UX'],
    live: 'https://example.com',
    github: 'https://github.com',
    image: project1Image,
  },
  {
    title: 'Risk Analytics for Adolescents',
    description: 'A capstone analytics dashboard for identifying adolescent risk patterns through clear charts and actionable insights.',
    tech: ['Python', 'Data Analytics', 'Dashboard', 'Research'],
    live: 'https://example.com',
    github: 'https://github.com',
    image: project2Image,
  },
  {
    title: 'Netflix Device Verification',
    description: 'A verification flow concept for validating household devices and simplifying access control for streaming users.',
    tech: ['Vue', 'UX Flow', 'Verification', 'Responsive UI'],
    live: 'https://example.com',
    github: 'https://github.com',
    image: project3Image,
  },
]

const skillGroups = [
  {
    title: 'Core',
    skills: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Git'],
  },
  {
    title: 'Frameworks',
    skills: ['Laravel', 'WordPress', 'Vue', 'Flutter', 'Bootstrap'],
  },
  {
    title: 'UI, DevOps, AI',
    skills: ['Tailwind', 'Docker', 'Python', 'UI UX', 'AI'],
  },
]
</script>

<template>
  <div class="min-h-screen bg-white text-slate-900 transition-colors duration-300 dark:bg-gray-900 dark:text-white">
    <Navbar />

    <main class="mx-auto flex w-full max-w-6xl flex-col gap-20 px-4 py-8 sm:gap-24 sm:px-6 sm:py-10 lg:gap-28 lg:px-10 lg:py-12">
      <Hero />
      <AboutSection />
      <SkillsSection :groups="skillGroups" />
      <ProjectsSection :projects="projects" />
      <ContactSection />
    </main>

    <div class="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-10">
      <Footer />
    </div>
  </div>
</template>
