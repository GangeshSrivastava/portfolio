<script setup>
import { Icon } from '@iconify/vue'
import { blogs } from '@/data/portfolio'
import { useReveal } from '@/composables/useReveal'

const { el, visible } = useReveal()
const doubled = [...blogs, ...blogs, ...blogs]
</script>

<template>
  <section id="blogs" ref="el" class="blogs section" :class="{ 'is-visible': visible }">
    <div class="container">
      <div class="blogs__header reveal" :style="{ '--delay': '0.1s' }">
        <p class="eyebrow"><Icon icon="mdi:post-outline" /> Writing</p>
        <h2 class="section-heading section-heading--center">Blogs</h2>
      </div>
    </div>

    <div class="blogs__marquee reveal" :style="{ '--delay': '0.2s' }">
      <div class="blogs__track">
        <article
          v-for="(blog, i) in doubled"
          :key="`${blog.title}-${i}`"
          class="blogs__card"
        >
          <Icon :icon="blog.icon" class="blogs__icon" />
          <h3 class="blogs__title">{{ blog.title }}</h3>
          <p class="blogs__text">{{ blog.text }}</p>
          <a :href="blog.url" class="blogs__link" target="_blank" rel="noreferrer">
            Read more
            <Icon icon="mdi:arrow-top-right" />
          </a>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.blogs {
  position: relative;
  z-index: 1;
  overflow: hidden;
}

.blogs__header {
  text-align: center;
  margin-bottom: 2.5rem;
}

.blogs__marquee {
  overflow: hidden;
  mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
  padding: 0.5rem 0 1rem;
}

.blogs__track {
  display: flex;
  gap: 1.25rem;
  width: max-content;
  animation: blog-scroll 40s linear infinite;
  padding: 0 1rem;
}

.blogs__track:hover {
  animation-play-state: paused;
}

.blogs__card {
  flex-shrink: 0;
  width: min(340px, 85vw);
  padding: 1.75rem;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: 1rem;
  transition: transform 0.3s, border-color 0.3s, box-shadow 0.3s;
}

.blogs__card:hover {
  transform: translateY(-4px);
  border-color: var(--accent-border);
  box-shadow: var(--card-shadow);
}

.blogs__icon {
  font-size: 2rem;
  color: var(--accent);
  margin-bottom: 1rem;
}

.blogs__title {
  font-size: 1.15rem;
  font-weight: 700;
  margin-bottom: 0.65rem;
}

.blogs__text {
  color: var(--text-secondary);
  font-size: 0.92rem;
  line-height: 1.65;
  margin-bottom: 1.25rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.blogs__link {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-weight: 600;
  font-size: 0.9rem;
  color: var(--accent-light);
  transition: gap 0.2s;
}

.blogs__link:hover {
  gap: 0.6rem;
}

@keyframes blog-scroll {
  from { transform: translateX(0); }
  to { transform: translateX(calc(-50% - 0.625rem)); }
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
</style>
