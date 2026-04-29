import { ref, onMounted } from 'vue'

export function useTheme() {
  const dark = ref(false)

  onMounted(() => {
    dark.value = document.documentElement.classList.contains('dark')
  })

  function toggleTheme() {
    dark.value = !dark.value
    if (dark.value) {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'light'
    }
  }

  return { dark, toggleTheme }
}
