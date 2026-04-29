import { ref, onMounted, onBeforeUnmount } from 'vue'

export function useIntersect(options = {}) {
  const el = ref(null)
  const visible = ref(false)
  let observer = null

  onMounted(() => {
    if (!el.value) return
    observer = new IntersectionObserver((entries) => {
      const entry = entries[0]
      if (entry && entry.isIntersecting) {
        visible.value = true
        if (observer && options.once !== false) observer.disconnect()
      }
    }, options)
    observer.observe(el.value)
  })

  onBeforeUnmount(() => {
    if (observer) observer.disconnect()
  })

  return { el, visible }
}
