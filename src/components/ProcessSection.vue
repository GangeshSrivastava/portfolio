<script setup>
import { Icon } from '@iconify/vue'
import { processSteps } from '@/data/portfolio'
import { useReveal } from '@/composables/useReveal'

const { el, visible } = useReveal()
</script>

<template>
  <section id="process" ref="el" class="process section" :class="{ 'is-visible': visible }">
    <div class="container">
      <div class="process__header reveal" :style="{ '--delay': '0.1s' }">
        <p class="eyebrow"><Icon icon="mdi:cog-sync-outline" /> How I work</p>
        <h2 class="section-heading section-heading--center">From idea to production</h2>
        <p class="process__intro">A structured approach to building systems that are reliable, observable, and easy to evolve.</p>
      </div>

      <div class="process__grid">
        <article
          v-for="(step, i) in processSteps"
          :key="step.title"
          class="process__step reveal"
          :style="{ '--delay': `${0.15 + i * 0.08}s` }"
        >
          <span class="process__num">{{ String(i + 1).padStart(2, '0') }}</span>
          <Icon :icon="step.icon" class="process__icon" />
          <h3 class="process__title">{{ step.title }}</h3>
          <p class="process__text">{{ step.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.process {
  position: relative;
  z-index: 1;
  background: var(--section-alt-bg);
  border-top: 1px solid var(--glass-border);
  border-bottom: 1px solid var(--glass-border);
}

.process__header {
  text-align: center;
  margin-bottom: 2.5rem;
}

.process__intro {
  max-width: 36rem;
  margin: 0 auto;
  color: var(--text-secondary);
  line-height: 1.7;
}

.process__grid {
  display: grid;
  gap: 1.25rem;
  grid-template-columns: 1fr;
}

.process__step {
  position: relative;
  padding: 1.75rem 1.5rem;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: 1rem;
  transition: transform 0.3s, border-color 0.3s, box-shadow 0.3s;
  overflow: hidden;
}

.process__step:hover {
  transform: translateY(-4px);
  border-color: var(--accent-border);
  box-shadow: var(--card-shadow);
}

.process__num {
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--text-muted);
  opacity: 0.6;
}

.process__icon {
  font-size: 2rem;
  color: var(--accent);
  margin-bottom: 1rem;
}

.process__title {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.process__text {
  color: var(--text-secondary);
  font-size: 0.92rem;
  line-height: 1.65;
}

.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.6s ease var(--delay, 0s), transform 0.6s ease var(--delay, 0s);
}

.is-visible .reveal {
  opacity: 1;
  transform: translateY(0);
}

@media (min-width: 640px) {
  .process__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .process__grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
