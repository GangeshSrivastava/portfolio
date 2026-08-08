import { ref, onMounted, onUnmounted } from 'vue'

export function useScrollSpy(sectionIds) {
  const activeSection = ref(sectionIds[0] ?? 'home')

  const updateActive = () => {
    const scrollY = window.scrollY + 80
    let current = sectionIds[0]

    for (const id of sectionIds) {
      const el = document.getElementById(id)
      if (el && scrollY >= el.offsetTop) {
        current = id
      }
    }

    activeSection.value = current
  }

  onMounted(() => {
    updateActive()
    window.addEventListener('scroll', updateActive, { passive: true })
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', updateActive)
  })

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return { activeSection, scrollTo }
}
