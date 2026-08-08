<script setup>
import { ref, onMounted } from 'vue'
import { Icon } from '@iconify/vue'

const props = defineProps({
  name: String,
  icon: String,
  level: Number,
})

const root = ref(null)
const width = ref(0)
const displayPct = ref(0)
const animated = ref(false)

const animate = () => {
  if (animated.value) return
  animated.value = true

  const duration = 1200
  const start = performance.now()

  const tick = (now) => {
    const progress = Math.min((now - start) / duration, 1)
    const eased = 1 - Math.pow(1 - progress, 3)
    width.value = props.level * eased
    displayPct.value = Math.round(props.level * eased)
    if (progress < 1) requestAnimationFrame(tick)
  }

  requestAnimationFrame(tick)
}

onMounted(() => {
  if (!root.value || !('IntersectionObserver' in window)) {
    width.value = props.level
    displayPct.value = props.level
    return
  }

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        animate()
        observer.disconnect()
      }
    },
    { threshold: 0.3 },
  )
  observer.observe(root.value)
})
</script>

<template>
  <div ref="root" class="skill-bar">
    <div class="skill-bar__header">
      <div class="skill-bar__name">
        <Icon :icon="icon" />
        <span>{{ name }}</span>
      </div>
      <span class="skill-bar__pct">{{ displayPct }}%</span>
    </div>
    <div class="skill-bar__track">
      <div class="skill-bar__fill" :style="{ width: `${width}%` }" />
    </div>
  </div>
</template>

<style scoped>
.skill-bar {
  padding: 1rem 1.1rem;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: 0.875rem;
  transition: border-color 0.25s, transform 0.25s, box-shadow 0.25s;
}

.skill-bar:hover {
  border-color: var(--accent-border);
  transform: translateY(-2px);
  box-shadow: var(--card-shadow);
}

.skill-bar__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.65rem;
  gap: 0.75rem;
}

.skill-bar__name {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  font-size: 0.92rem;
  min-width: 0;
}

.skill-bar__name span {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.skill-bar__name svg {
  font-size: 1.35rem;
  color: var(--accent);
  flex-shrink: 0;
}

.skill-bar__pct {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.8rem;
  color: var(--accent-cyan);
  flex-shrink: 0;
}

.skill-bar__track {
  height: 6px;
  background: var(--track-bg);
  border-radius: 3px;
  overflow: hidden;
}

.skill-bar__fill {
  height: 100%;
  width: 0;
  background: linear-gradient(90deg, var(--accent), var(--accent-purple));
  border-radius: 3px;
  transition: width 0.05s linear;
}
</style>
