import { ref, onMounted, onUnmounted } from 'vue'

export function useReveal(threshold = 0.15) {
  const el = ref(null)
  const visible = ref(false)
  let observer

  onMounted(() => {
    if (!el.value || !('IntersectionObserver' in window)) {
      visible.value = true
      return
    }

    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          visible.value = true
          observer?.disconnect()
        }
      },
      { threshold },
    )
    observer.observe(el.value)
  })

  onUnmounted(() => observer?.disconnect())

  return { el, visible }
}
