<script setup>
import { Icon } from '@iconify/vue'
import { useReveal } from '@/composables/useReveal'

const { el, visible } = useReveal()

const services = [
  { icon: 'mdi:web', label: 'Web Development' },
  { icon: 'mdi:server', label: 'Backend Systems' },
  { icon: 'mdi:cog-outline', label: 'Product Engineering' },
]
</script>

<template>
  <section id="services" ref="el" class="services section" :class="{ 'is-visible': visible }">
    <div class="container">
      <div class="services__card reveal" :style="{ '--delay': '0.1s' }">
        <div class="services__glow" aria-hidden="true" />
        <div class="services__content">
          <p class="eyebrow"><Icon icon="mdi:handshake-outline" /> Development services</p>
          <h2 class="section-heading">Need a thoughtful engineering partner?</h2>
          <p class="services__text">
            For web development, backend systems, and product engineering support, visit GoQua to learn more about how we can work together.
          </p>
          <div class="services__icons">
            <div v-for="s in services" :key="s.label" class="services__icon-item">
              <Icon :icon="s.icon" />
              <span>{{ s.label }}</span>
            </div>
          </div>
        </div>
        <a href="http://goqua.org.in" class="btn btn--primary btn--lg" target="_blank" rel="noreferrer">
          Visit GoQua
          <Icon icon="mdi:open-in-new" />
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services {
  position: relative;
  z-index: 1;
}

.services__card {
  position: relative;
  display: grid;
  gap: 2rem;
  padding: 2rem;
  border-radius: 1.25rem;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  backdrop-filter: blur(16px);
  overflow: hidden;
}

.services__glow {
  position: absolute;
  top: -50%;
  right: -20%;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(99, 102, 241, 0.2), transparent 70%);
  pointer-events: none;
  animation: pulse-glow 5s ease-in-out infinite alternate;
}

.services__text {
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 1.5rem;
  max-width: 36rem;
}

.services__icons {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.services__icon-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1rem;
  background: var(--accent-soft);
  border: 1px solid var(--accent-border);
  border-radius: 0.625rem;
  font-size: 0.88rem;
  color: var(--text-secondary);
}

.services__icon-item svg {
  font-size: 1.25rem;
  color: var(--accent);
}

.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.65s ease var(--delay, 0s), transform 0.65s ease var(--delay, 0s);
}

.is-visible .reveal {
  opacity: 1;
  transform: translateY(0);
}

@keyframes pulse-glow {
  from { opacity: 0.6; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1.05); }
}

@media (min-width: 768px) {
  .services__card {
    grid-template-columns: 1fr auto;
    align-items: center;
    padding: 2.5rem 3rem;
  }
}
</style>
