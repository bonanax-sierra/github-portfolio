<script setup>
import SectionHeader from '../components/SectionHeader.vue'
import ActionButton from '../components/ActionButton.vue'
</script>

<template>
  <section id="contact" class="space-y-4 rounded-3xl border border-slate-200 bg-white p-5 transition-colors duration-300 dark:border-gray-700 dark:bg-gray-800 sm:p-8 lg:p-10">
    <SectionHeader eyebrow="Contact" title="Let’s connect" />
    <p class="text-sm leading-relaxed text-slate-600 dark:text-gray-400 sm:text-base">Open to frontend and full-stack opportunities.</p>
    <div class="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap">
      <ActionButton href="mailto:bonanaxbona@gmail.com" class="w-full sm:w-auto">Email Me</ActionButton>
      <ActionButton href="https://www.facebook.com/bonanax.bona.3" variant="secondary" class="w-full sm:w-auto">Facebook</ActionButton>
      <ActionButton href="https://www.linkedin.com/in/adrian-lylle-bona-540a3a242/" variant="secondary" class="w-full sm:w-auto">LinkedIn</ActionButton>
    </div>
  </section>
</template>