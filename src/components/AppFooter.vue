<script setup>
import { Icon } from '@iconify/vue'
import { socialLinks } from '@/data/portfolio'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="container footer__inner">
      <div class="footer__brand">
        <Icon icon="mdi:code-braces" />
        <span>Gangesh</span>
      </div>

      <div class="footer__social">
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

      <p class="footer__copy">&copy; {{ year }} Gangesh. All rights reserved.</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  position: relative;
  z-index: 1;
  padding: 2.5rem 0;
  border-top: 1px solid var(--glass-border);
  background: var(--footer-bg);
  color: var(--footer-text);
  transition: background 0.3s, color 0.3s;
}

.footer__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  text-align: center;
}

.footer__brand {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--footer-text);
}

.footer__brand svg {
  font-size: 1.5rem;
  color: var(--accent);
}

.footer__social {
  display: flex;
  gap: 0.85rem;
}

.footer__social a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.625rem;
  background: var(--accent-soft);
  border: 1px solid var(--accent-border);
  font-size: 1.15rem;
  color: var(--footer-text-muted);
  transition: transform 0.25s, color 0.25s, background 0.25s;
}

.footer__social a:hover {
  transform: translateY(-2px);
  color: var(--accent);
  background: var(--accent-soft-hover);
}

.footer__copy {
  font-size: 0.85rem;
  color: var(--footer-text-muted);
}
</style>
