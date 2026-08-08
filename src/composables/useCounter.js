import { ref, onMounted, onUnmounted } from 'vue'

export function useCounter(target, suffix = '', duration = 1200) {
  const display = ref('0')
  const hasAnimated = ref(false)
  let observer

  const animate = () => {
    if (hasAnimated.value) return
    hasAnimated.value = true

    const isDecimal = target % 1 !== 0
    const start = performance.now()

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const value = target * eased
      display.value = `${isDecimal ? value.toFixed(1) : Math.floor(value)}${suffix}`
      if (progress < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }

  const observe = (el) => {
    if (!el || !('IntersectionObserver' in window)) {
      animate()
      return
    }

    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate()
          observer?.disconnect()
        }
      },
      { threshold: 0.35 },
    )
    observer.observe(el)
  }

  onUnmounted(() => observer?.disconnect())

  return { display, observe, animate }
}
