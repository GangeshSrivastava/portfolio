<script setup>
import { Icon } from '@iconify/vue'
import { impactStats } from '@/data/portfolio'
import { useReveal } from '@/composables/useReveal'
import StatItem from '@/components/StatItem.vue'

const { el, visible } = useReveal()
</script>

<template>
  <section id="impact" ref="el" class="impact section" :class="{ 'is-visible': visible }">
    <div class="container">
      <div class="impact__header reveal" :style="{ '--delay': '0.1s' }">
        <div>
          <p class="eyebrow"><Icon icon="mdi:chart-line" /> Selected impact</p>
          <h2 class="section-heading">Engineering work measured by outcomes.</h2>
        </div>
        <p class="impact__copy">
          From high-volume communication platforms to data privacy products, I build the dependable foundations teams rely on.
        </p>
      </div>

      <div class="impact__grid">
        <StatItem
          v-for="(stat, i) in impactStats"
          :key="stat.label"
          :stat="stat"
          class="reveal"
          :style="{ '--delay': `${0.15 + i * 0.1}s` }"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.impact {
  background: var(--impact-bg);
  border-top: 1px solid var(--glass-border);
  border-bottom: 1px solid var(--glass-border);
  position: relative;
  z-index: 1;
}

.impact__header {
  display: grid;
  gap: 1rem;
  margin-bottom: 2.5rem;
}

.impact__copy {
  color: var(--text-secondary);
  line-height: 1.7;
  max-width: 36rem;
}

.impact__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
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

@media (min-width: 768px) {
  .impact__header {
    grid-template-columns: 1.2fr 1fr;
    align-items: end;
  }

  .impact__grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
