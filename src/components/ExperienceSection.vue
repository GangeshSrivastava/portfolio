<script setup>
import { Icon } from '@iconify/vue'
import { experience } from '@/data/portfolio'
import { useReveal } from '@/composables/useReveal'

const { el, visible } = useReveal()
</script>

<template>
  <section id="experience" ref="el" class="experience section" :class="{ 'is-visible': visible }">
    <div class="container">
      <div class="experience__header reveal" :style="{ '--delay': '0.1s' }">
        <p class="eyebrow"><Icon icon="mdi:timeline-clock-outline" /> Career</p>
        <h2 class="section-heading section-heading--center">Experience &amp; journey</h2>
      </div>

      <div class="experience__timeline">
        <div class="experience__rail" aria-hidden="true">
          <span class="experience__rail-track" />
          <span class="experience__rail-fill" />
          <span class="experience__rail-dot" />
        </div>

        <article
          v-for="(item, i) in experience"
          :key="item.company"
          class="experience__item reveal"
          :class="{ 'experience__item--alt': i % 2 === 1 }"
          :style="{ '--delay': `${0.2 + i * 0.15}s`, '--i': i }"
        >
          <div class="experience__node-wrap">
            <span class="experience__node-ring" />
            <span class="experience__node-ring experience__node-ring--delay" />
            <div class="experience__marker">
              <Icon :icon="item.icon" />
            </div>
          </div>

          <div class="experience__card">
            <div class="experience__card-shine" aria-hidden="true" />
            <div class="experience__meta">
              <span class="experience__period">{{ item.period }}</span>
              <span class="experience__type">{{ item.type }}</span>
            </div>
            <h3 class="experience__role">{{ item.role }}</h3>
            <p class="experience__company">{{ item.company }}</p>
            <p v-if="item.projects?.length" class="experience__projects">
              <Icon icon="mdi:briefcase-outline" />
              <span class="experience__projects-track">
                <span>{{ item.projects.join(' · ') }}</span>
              </span>
            </p>
            <p class="experience__desc">{{ item.description }}</p>
            <div class="experience__tags">
              <span
                v-for="(tag, ti) in item.tags"
                :key="tag"
                class="experience__tag"
                :style="{ '--tag-delay': `${ti * 0.08}s` }"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.experience {
  position: relative;
  z-index: 1;
  overflow: hidden;
}

.experience__header {
  text-align: center;
  margin-bottom: 3rem;
}

.experience__timeline {
  position: relative;
  display: grid;
  gap: 1.75rem;
  max-width: 820px;
  margin-inline: auto;
  padding-left: 1.5rem;
}

/* Vertical animated rail */
.experience__rail {
  position: absolute;
  left: 0.65rem;
  top: 0.5rem;
  bottom: 0.5rem;
  width: 3px;
  pointer-events: none;
}

.experience__rail-track {
  position: absolute;
  inset: 0;
  border-radius: 3px;
  background: var(--track-bg);
}

.experience__rail-fill {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 0;
  border-radius: 3px;
  background: linear-gradient(180deg, var(--accent), var(--accent-purple), var(--accent-cyan));
  box-shadow: 0 0 12px rgba(99, 102, 241, 0.5);
  transition: height 2s cubic-bezier(0.4, 0, 0.2, 1) 0.3s;
}

.is-visible .experience__rail-fill {
  height: 100%;
}

.experience__rail-dot {
  position: absolute;
  left: 50%;
  top: 0;
  width: 10px;
  height: 10px;
  margin-left: -5px;
  border-radius: 50%;
  background: var(--accent-cyan);
  box-shadow: 0 0 16px var(--accent-cyan), 0 0 32px rgba(56, 189, 248, 0.4);
  opacity: 0;
}

.is-visible .experience__rail-dot {
  opacity: 1;
  animation: rail-travel 3.5s ease-in-out infinite;
}

@keyframes rail-travel {
  0% { top: 0; opacity: 1; }
  90% { opacity: 1; }
  100% { top: calc(100% - 10px); opacity: 0.3; }
}

/* Timeline items */
.experience__item {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1.25rem;
  align-items: start;
  position: relative;
}

.experience__node-wrap {
  position: relative;
  flex-shrink: 0;
  z-index: 2;
}

.experience__node-ring {
  position: absolute;
  inset: -6px;
  border-radius: 1rem;
  border: 2px solid var(--accent);
  opacity: 0;
  animation: node-pulse 2.4s ease-out infinite;
  animation-delay: calc(var(--i, 0) * 0.4s);
}

.experience__node-ring--delay {
  animation-delay: calc(0.6s + var(--i, 0) * 0.4s);
}

.is-visible .experience__node-ring {
  opacity: 1;
}

@keyframes node-pulse {
  0% {
    transform: scale(0.85);
    opacity: 0.7;
  }
  100% {
    transform: scale(1.45);
    opacity: 0;
  }
}

.experience__marker {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 0.75rem;
  background: var(--glass-bg);
  border: 2px solid var(--accent-border);
  font-size: 1.4rem;
  color: var(--accent);
  transition: transform 0.35s, border-color 0.35s, box-shadow 0.35s;
  animation: marker-float 4s ease-in-out infinite;
  animation-delay: calc(var(--i, 0) * 0.5s);
}

.experience__item:hover .experience__marker {
  transform: scale(1.1) rotate(-4deg);
  border-color: var(--accent);
  box-shadow: 0 0 20px rgba(99, 102, 241, 0.35);
}

@keyframes marker-float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

.experience__item:hover .experience__marker {
  animation: none;
}

/* Card */
.experience__card {
  position: relative;
  padding: 1.5rem;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: 1rem;
  overflow: hidden;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.3s, box-shadow 0.3s;
}

.experience__card-shine {
  position: absolute;
  top: 0;
  left: -100%;
  width: 60%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(99, 102, 241, 0.08),
    transparent
  );
  transform: skewX(-20deg);
  pointer-events: none;
}

.experience__item:hover .experience__card-shine {
  animation: card-shine 0.8s ease forwards;
}

@keyframes card-shine {
  to { left: 150%; }
}

.experience__item:hover .experience__card {
  transform: translateX(8px);
  border-color: var(--accent-border);
  box-shadow: var(--card-shadow);
}

.experience__item--alt:hover .experience__card {
  transform: translateX(8px);
}

.experience__meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 0.4rem;
}

.experience__period {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--accent-cyan);
  font-family: 'JetBrains Mono', monospace;
}

.experience__type {
  font-size: 0.75rem;
  padding: 0.15rem 0.55rem;
  border-radius: 2rem;
  background: var(--accent-soft);
  color: var(--accent-light);
  font-weight: 600;
}

.experience__role {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 0.2rem;
}

.experience__company {
  font-size: 0.9rem;
  color: var(--text-muted);
  margin-bottom: 0.4rem;
}

.experience__projects {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--accent-light);
  margin-bottom: 0.65rem;
  overflow: hidden;
}

.experience__projects svg {
  font-size: 1rem;
  flex-shrink: 0;
  animation: icon-wiggle 2s ease-in-out infinite;
}

@keyframes icon-wiggle {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(-8deg); }
  75% { transform: rotate(8deg); }
}

.experience__projects-track {
  overflow: hidden;
  white-space: nowrap;
  mask-image: linear-gradient(to right, black 85%, transparent);
}

.experience__item:hover .experience__projects-track span {
  display: inline-block;
  animation: projects-scroll 6s linear infinite;
}

@keyframes projects-scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-8px); }
}

.experience__desc {
  color: var(--text-secondary);
  font-size: 0.92rem;
  line-height: 1.65;
  margin-bottom: 0.85rem;
}

.experience__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.experience__tag {
  padding: 0.2rem 0.55rem;
  font-size: 0.72rem;
  font-weight: 600;
  border-radius: 2rem;
  background: var(--accent-soft);
  color: var(--accent-light);
  border: 1px solid var(--accent-border);
  opacity: 0;
  transform: translateY(8px);
  transition: opacity 0.4s ease var(--tag-delay, 0s), transform 0.4s ease var(--tag-delay, 0s);
}

.is-visible .experience__tag {
  opacity: 1;
  transform: translateY(0);
}

.experience__item:hover .experience__tag {
  animation: tag-pop 0.35s ease var(--tag-delay, 0s);
}

@keyframes tag-pop {
  0% { transform: scale(1); }
  50% { transform: scale(1.08); }
  100% { transform: scale(1); }
}

/* Staggered reveal — slide from left */
.reveal {
  opacity: 0;
  transform: translateX(-32px);
  transition:
    opacity 0.7s ease var(--delay, 0s),
    transform 0.7s cubic-bezier(0.4, 0, 0.2, 1) var(--delay, 0s);
}

.is-visible .reveal {
  opacity: 1;
  transform: translateX(0);
}

@media (min-width: 768px) {
  .experience__timeline {
    padding-left: 2rem;
  }

  .experience__rail {
    left: 1.15rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .experience__rail-dot,
  .experience__node-ring,
  .experience__marker,
  .experience__projects svg {
    animation: none !important;
  }

  .experience__rail-fill {
    transition: none;
    height: 100%;
  }

  .is-visible .experience__rail-dot {
    opacity: 0.6;
    top: 50%;
  }
}
</style>
