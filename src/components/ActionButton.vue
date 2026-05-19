<script setup>
const props = defineProps({
  href: { type: String, default: '' },
  variant: { type: String, default: 'primary' },
})

const baseClasses = 'inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-medium transition duration-200 hover:-translate-y-0.5'

const variantClasses = {
  primary: 'bg-black text-white hover:bg-slate-800 dark:bg-gray-900 dark:hover:bg-black',
  secondary: 'border border-slate-300 text-slate-800 hover:bg-slate-100 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700',
}
</script>

<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="href || undefined"
    :class="[baseClasses, variantClasses[variant] || variantClasses.primary]"
  >
    <slot />
  </component>
</template>