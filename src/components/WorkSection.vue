<script setup>
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import { projects } from '@/data/portfolio'
import { useReveal } from '@/composables/useReveal'

const { el, visible } = useReveal()

const featured = computed(() => projects.find((p) => p.featured))
const rest = computed(() => projects.filter((p) => !p.featured))
</script>

<template>
  <section id="work" ref="el" class="work section" :class="{ 'is-visible': visible }">
    <div class="container">
      <div class="work__header reveal" :style="{ '--delay': '0.1s' }">
        <p class="section-kicker">Selected work</p>
        <h2 class="section-heading section-heading--center">Products I've helped bring to life</h2>
      </div>

      <article
        v-if="featured"
        class="work__card work__card--featured reveal"
        :style="{ '--delay': '0.15s' }"
      >
        <div class="work__card-top">
          <Icon :icon="featured.icon" class="work__icon" />
          <span class="work__meta">{{ featured.meta }}</span>
        </div>
        <h3 class="work__title">{{ featured.title }}</h3>
        <p class="work__text">{{ featured.text }}</p>
        <div v-if="featured.tags" class="work__tags">
          <span v-for="tag in featured.tags" :key="tag">{{ tag }}</span>
        </div>
      </article>

      <div class="work__grid">
        <article
          v-for="(project, i) in rest"
          :key="project.title"
          class="work__card reveal"
          :style="{ '--delay': `${0.2 + i * 0.06}s` }"
        >
          <div class="work__card-top">
            <Icon :icon="project.icon" class="work__icon" />
            <span class="work__meta">{{ project.meta }}</span>
          </div>
          <h3 class="work__title">{{ project.title }}</h3>
          <p class="work__text">{{ project.text }}</p>
          <div v-if="project.tags" class="work__tags">
            <span v-for="tag in project.tags" :key="tag">{{ tag }}</span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.work {
  position: relative;
  z-index: 1;
}

.work__header {
  text-align: center;
  margin-bottom: 2.5rem;
}

.work__card {
  padding: 1.5rem;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: 1rem;
  backdrop-filter: blur(10px);
  transition: transform 0.3s, border-color 0.3s, box-shadow 0.3s;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.work__card:hover {
  transform: translateY(-4px);
  border-color: var(--accent-border);
  box-shadow: var(--card-shadow);
}

.work__card--featured {
  background: var(--featured-bg);
  border-color: var(--accent-border);
  margin-bottom: 1.25rem;
}

.work__grid {
  display: grid;
  gap: 1.25rem;
  grid-template-columns: 1fr;
}

.work__card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.85rem;
}

.work__icon {
  font-size: 1.75rem;
  color: var(--accent-light);
}

.work__meta {
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--text-muted);
  font-weight: 600;
}

.work__title {
  font-size: 1.15rem;
  font-weight: 700;
  margin-bottom: 0.65rem;
}

.work__text {
  color: var(--text-secondary);
  font-size: 0.92rem;
  line-height: 1.65;
  margin-bottom: 1rem;
  flex: 1;
}

.work__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin-top: auto;
}

.work__tags span {
  padding: 0.25rem 0.65rem;
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: 2rem;
  background: var(--accent-soft);
  color: var(--accent-light);
  border: 1px solid var(--accent-border);
}

.reveal {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.6s ease var(--delay, 0s), transform 0.6s ease var(--delay, 0s);
}

.is-visible .reveal {
  opacity: 1;
  transform: translateY(0);
}

@media (min-width: 640px) {
  .work__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .work__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
