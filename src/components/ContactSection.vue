<script setup>
import { Icon } from '@iconify/vue'
import { contactDetails, socialLinks } from '@/data/portfolio'
import { useReveal } from '@/composables/useReveal'

const { el, visible } = useReveal()
</script>

<template>
  <section id="contact" ref="el" class="contact section" :class="{ 'is-visible': visible }">
    <div class="container">
      <div class="contact__wrapper reveal" :style="{ '--delay': '0.1s' }">
        <div class="contact__intro">
          <p class="eyebrow"><Icon icon="mdi:message-text-outline" /> Let's connect</p>
          <h2 class="section-heading">Have a project in mind?</h2>
          <p class="contact__text">
            Get in touch directly. I'm always open to discussing meaningful engineering work and collaboration.
          </p>
          <div class="contact__social">
            <a
              v-for="link in socialLinks"
              :key="link.name"
              :href="link.url"
              :aria-label="link.name"
              target="_blank"
              rel="noreferrer"
            >
              <Icon :icon="link.icon" />
            </a>
          </div>
        </div>

        <div class="contact__details">
          <a
            v-for="(detail, i) in contactDetails"
            :key="detail.label"
            :href="detail.href"
            class="contact__card reveal"
            :style="{ '--delay': `${0.2 + i * 0.1}s` }"
          >
            <div class="contact__card-icon">
              <Icon :icon="detail.icon" />
            </div>
            <div>
              <small>{{ detail.label }}</small>
              <span>{{ detail.value }}</span>
            </div>
            <Icon icon="mdi:chevron-right" class="contact__arrow" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  position: relative;
  z-index: 1;
}

.contact__wrapper {
  display: grid;
  gap: 2.5rem;
  padding: 2rem;
  border-radius: 1.25rem;
  background: var(--contact-bg);
  border: 1px solid var(--glass-border);
}

.contact__text {
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

.contact__social {
  display: flex;
  gap: 0.75rem;
}

.contact__social a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 0.75rem;
  background: var(--accent-soft);
  border: 1px solid var(--accent-border);
  font-size: 1.25rem;
  color: var(--text-secondary);
  transition: transform 0.25s, color 0.25s, background 0.25s;
}

.contact__social a:hover {
  transform: translateY(-3px);
  color: var(--accent-light);
  background: var(--accent-soft-hover);
}

.contact__details {
  display: grid;
  gap: 1rem;
}

.contact__card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem 1.5rem;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: 1rem;
  transition: transform 0.25s, border-color 0.25s;
}

.contact__card:hover {
  transform: translateX(6px);
  border-color: var(--accent-border);
}

.contact__card-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 0.75rem;
  background: var(--accent-soft);
  font-size: 1.5rem;
  color: var(--accent);
  flex-shrink: 0;
}

.contact__card small {
  display: block;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-muted);
  margin-bottom: 0.15rem;
}

.contact__card span {
  font-weight: 600;
  font-size: 0.95rem;
}

.contact__arrow {
  margin-left: auto;
  color: var(--text-muted);
  transition: transform 0.25s;
}

.contact__card:hover .contact__arrow {
  transform: translateX(4px);
  color: var(--accent-light);
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
  .contact__wrapper {
    grid-template-columns: 1fr 1fr;
    align-items: center;
    padding: 2.5rem 3rem;
  }
}
</style>
