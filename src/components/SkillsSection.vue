<script setup>
import { Icon } from '@iconify/vue'
import { skillCategories, techIcons } from '@/data/portfolio'
import { useReveal } from '@/composables/useReveal'
import SkillBar from '@/components/SkillBar.vue'

const { el, visible } = useReveal()
</script>

<template>
  <section id="skills" ref="el" class="skills section" :class="{ 'is-visible': visible }">
    <div class="container">
      <div class="skills__header reveal" :style="{ '--delay': '0.1s' }">
        <p class="eyebrow"><Icon icon="mdi:toolbox-outline" /> Technical toolkit</p>
        <h2 class="section-heading section-heading--center">Professional skills</h2>
      </div>

      <div class="skills__marquee reveal" :style="{ '--delay': '0.15s' }">
        <div class="skills__marquee-track">
          <span v-for="(icon, i) in [...techIcons, ...techIcons]" :key="i" class="skills__tech-icon">
            <Icon :icon="icon" />
          </span>
        </div>
      </div>

      <div class="skills__grid">
        <div
          v-for="(cat, ci) in skillCategories"
          :key="cat.title"
          class="skills__category reveal"
          :style="{ '--delay': `${0.2 + ci * 0.08}s` }"
        >
          <h3 class="skills__cat-title">
            <Icon icon="mdi:folder-outline" />
            {{ cat.title }}
          </h3>
          <div class="skills__list">
            <SkillBar
              v-for="skill in cat.skills"
              :key="skill.name"
              v-bind="skill"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills {
  position: relative;
  z-index: 1;
}

.skills__header {
  text-align: center;
  margin-bottom: 2rem;
}

.skills__marquee {
  overflow: hidden;
  margin-bottom: 2.5rem;
  border-radius: 1rem;
  border: 1px solid var(--glass-border);
  background: var(--glass-bg);
  mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
}

.skills__marquee-track {
  display: flex;
  gap: 1.25rem;
  padding: 1.1rem 0;
  width: max-content;
  animation: marquee 30s linear infinite;
}

.skills__tech-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 3rem;
  height: 3rem;
  font-size: 1.75rem;
  color: var(--text-secondary);
  background: var(--accent-soft);
  border-radius: 0.625rem;
  transition: color 0.2s, transform 0.2s;
}

.skills__tech-icon:hover {
  color: var(--accent-light);
  transform: scale(1.1);
}

.skills__grid {
  display: grid;
  gap: 2rem;
}

.skills__cat-title {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  font-size: 0.95rem;
  color: var(--accent-light);
  margin-bottom: 0.85rem;
  font-weight: 600;
}

.skills__list {
  display: grid;
  gap: 0.75rem;
}

@keyframes marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
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
  .skills__grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }
}
</style>
