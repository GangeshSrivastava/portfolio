<script setup>
import { Icon } from '@iconify/vue'
import { useReveal } from '@/composables/useReveal'

const { el, visible } = useReveal()
</script>

<template>
  <section id="about" ref="el" class="about section" :class="{ 'is-visible': visible }">
    <div class="container about__grid">
      <div class="about__visual reveal" :style="{ '--delay': '0.1s' }">
        <div class="about__img-wrap">
          <img src="/assets/img/ProfMe.png" alt="Gangesh" @error="($event.target.style.display='none')" />
          <div class="about__img-badge">
            <Icon icon="mdi:check-decagram" />
            8+ Years
          </div>
        </div>
        <div class="about__cards">
          <div class="about__mini-card">
            <Icon icon="mdi:api" />
            <span>API Design</span>
          </div>
          <div class="about__mini-card">
            <Icon icon="mdi:cloud-outline" />
            <span>Cloud Native</span>
          </div>
          <div class="about__mini-card">
            <Icon icon="mdi:chart-timeline-variant" />
            <span>Observability</span>
          </div>
        </div>
      </div>

      <div class="about__content reveal" :style="{ '--delay': '0.25s' }">
        <p class="eyebrow"><Icon icon="mdi:account-outline" /> A little about me</p>
        <h2 class="section-heading">Backend engineer.<br />Product-minded collaborator.</h2>
        <p class="about__text">
          I design and ship dependable web applications and microservices, with particular depth in Go, data systems, and cloud infrastructure. I enjoy turning complex product requirements into services that are secure, observable, and easy to evolve.
        </p>
        <ul class="about__highlights">
          <li><Icon icon="mdi:check-circle-outline" /> Microservices &amp; distributed systems</li>
          <li><Icon icon="mdi:check-circle-outline" /> High-throughput API platforms</li>
          <li><Icon icon="mdi:check-circle-outline" /> Data privacy &amp; compliance (GDPR)</li>
          <li><Icon icon="mdi:check-circle-outline" /> Cross-functional product delivery</li>
        </ul>
        <a href="#contact" class="btn btn--primary">
          Get in touch
          <Icon icon="mdi:email-outline" />
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about__grid {
  display: grid;
  gap: 3rem;
  align-items: center;
}

.about__visual {
  position: relative;
}

.about__img-wrap {
  position: relative;
  border-radius: 1.25rem;
  overflow: hidden;
  border: 1px solid var(--glass-border);
  background: var(--bg-card);
  aspect-ratio: 4/5;
  max-width: 360px;
  margin: 0 auto;
}

.about__img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.about__img-badge {
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.5rem 0.85rem;
  background: var(--header-bg);
  backdrop-filter: blur(8px);
  border: 1px solid var(--glass-border);
  border-radius: 2rem;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--accent-light);
}

.about__cards {
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
  margin-top: 1.25rem;
  justify-content: center;
}

.about__mini-card {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.55rem 0.85rem;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: 0.625rem;
  font-size: 0.82rem;
  color: var(--text-secondary);
  transition: transform 0.25s, border-color 0.25s;
}

.about__mini-card:hover {
  transform: translateY(-2px);
  border-color: rgba(99, 102, 241, 0.4);
}

.about__mini-card svg {
  color: var(--accent);
  font-size: 1.1rem;
}

.about__text {
  color: var(--text-secondary);
  line-height: 1.75;
  margin-bottom: 1.5rem;
}

.about__highlights {
  display: grid;
  gap: 0.65rem;
  margin-bottom: 2rem;
}

.about__highlights li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-secondary);
  font-size: 0.95rem;
}

.about__highlights svg {
  color: var(--accent-cyan);
  flex-shrink: 0;
}

.reveal {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.65s ease var(--delay, 0s), transform 0.65s ease var(--delay, 0s);
}

.is-visible .reveal {
  opacity: 1;
  transform: translateY(0);
}

@media (min-width: 768px) {
  .about__grid {
    grid-template-columns: 1fr 1.1fr;
  }

  .about__img-wrap {
    margin: 0;
  }

  .about__cards {
    justify-content: flex-start;
  }
}
</style>
