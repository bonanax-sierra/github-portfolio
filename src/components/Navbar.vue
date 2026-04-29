<script setup>
import { ref } from 'vue'
import { useTheme } from '../composables/useTheme'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#projects', label: 'Projects' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

const isOpen = ref(false)
const { dark, toggleTheme } = useTheme()

function toggleMenu() { isOpen.value = !isOpen.value }
function closeMenu() { isOpen.value = false }
</script>

<template>
  <header class="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur dark:border-gray-700 dark:bg-gray-900/95">
    <nav class="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-10">
      <a href="#home" class="text-sm font-semibold tracking-tight text-slate-900 transition hover:opacity-70 dark:text-white">Adrian Bona</a>
      <div class="flex items-center gap-3">
        <button @click="toggleTheme" class="rounded-full p-2 transition hover:bg-slate-100 dark:hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400">
          <span v-if="dark">☀️</span>
          <span v-else>🌙</span>
        </button>
        <button @click="toggleMenu" type="button" class="rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-100 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 lg:hidden">
          Menu
        </button>
        <ul class="hidden items-center gap-1 lg:flex">
          <li v-for="link in links" :key="link.href">
            <a :href="link.href" class="block rounded-xl px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white">
              {{ link.label }}
            </a>
          </li>
        </ul>
      </div>
    </nav>
    <div :class="['border-t border-slate-200 bg-white px-4 py-3 dark:border-gray-700 dark:bg-gray-900 lg:hidden', isOpen ? 'block' : 'hidden']">
      <ul class="space-y-1">
        <li v-for="link in links" :key="'m' + link.href">
          <a :href="link.href" @click="closeMenu" class="block rounded-xl px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-100 hover:text-slate-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white">
            {{ link.label }}
          </a>
        </li>
      </ul>
    </div>
  </header>
</template>