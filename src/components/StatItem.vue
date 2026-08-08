<script setup>
import { ref, onMounted } from 'vue'
import { Icon } from '@iconify/vue'
import { useCounter } from '@/composables/useCounter'

const props = defineProps({
  stat: { type: Object, required: true },
})

const root = ref(null)
const { display, observe } = useCounter(props.stat.target, props.stat.suffix)

onMounted(() => {
  if (root.value) observe(root.value)
})
</script>

<template>
  <article ref="root" class="impact__item">
    <Icon :icon="stat.icon" class="impact__icon" />
    <strong class="impact__value">{{ display }}</strong>
    <span class="impact__label">{{ stat.label }}</span>
  </article>
</template>

<style scoped>
.impact__item {
  padding: 1.5rem 1.25rem;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: 1rem;
  backdrop-filter: blur(12px);
  transition: transform 0.3s, border-color 0.3s, box-shadow 0.3s;
}

.impact__item:hover {
  transform: translateY(-4px);
  border-color: rgba(99, 102, 241, 0.35);
  box-shadow: 0 12px 40px rgba(99, 102, 241, 0.12);
}

.impact__icon {
  font-size: 1.75rem;
  color: var(--accent);
  margin-bottom: 0.75rem;
}

.impact__value {
  display: block;
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 800;
  background: linear-gradient(135deg, var(--accent-light), var(--accent-cyan));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.35rem;
}

.impact__label {
  font-size: 0.88rem;
  color: var(--text-secondary);
  line-height: 1.4;
}
</style>
