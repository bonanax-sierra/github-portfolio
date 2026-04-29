<script setup>
const props = defineProps({
  src: { type: String, required: true },
  alt: { type: String, default: '' },
  size: { type: [String, Number], default: 128 },
})
</script>

<template>
  <div class="relative flex-shrink-0">
    <img
      :src="src"
      :alt="alt"
      :width="size"
      :height="size"
      class="h-32 w-32 rounded-full border border-slate-200 object-cover shadow-sm ring-4 ring-white dark:border-gray-700 dark:ring-gray-800 sm:h-36 sm:w-36"
      loading="lazy"
    />
  </div>
</template>
