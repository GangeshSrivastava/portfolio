<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Icon } from '@iconify/vue'
import { socialLinks, heroRoles } from '@/data/portfolio'
import { useReveal } from '@/composables/useReveal'

const { el, visible } = useReveal(0.1)
const roleIndex = ref(0)
const imageError = ref(false)
let intervalId

onMounted(() => {
  intervalId = setInterval(() => {
    roleIndex.value = (roleIndex.value + 1) % heroRoles.length
  }, 2800)
})

onUnmounted(() => clearInterval(intervalId))
</script>

<template>
  <section id="home" ref="el" class="hero section container" :class="{ 'is-visible': visible }">
    <div class="hero__content">
      <p class="eyebrow reveal" :style="{ '--delay': '0.1s' }">
        <Icon icon="mdi:server-network" />
        Backend &amp; Platform Engineering
      </p>

      <h1 class="hero__title reveal" :style="{ '--delay': '0.2s' }">
        I build
        <span class="hero__title-animated">
          <Transition name="role" mode="out-in">
            <span :key="heroRoles[roleIndex]" class="gradient-text">{{ heroRoles[roleIndex] }}</span>
          </Transition>
        </span>
        <br />that scale.
      </h1>

      <p class="hero__intro reveal" :style="{ '--delay': '0.35s' }">
        Software engineer with 8 years of experience delivering secure APIs, distributed services, and data-intensive products.
      </p>

      <div class="hero__actions reveal" :style="{ '--delay': '0.45s' }">
        <a href="#contact" class="btn btn--primary">
          Let's work together
          <Icon icon="mdi:arrow-right" />
        </a>
        <a href="#work" class="btn btn--ghost">
          <Icon icon="mdi:briefcase-outline" />
          View work
        </a>
      </div>

      <div class="hero__social reveal" :style="{ '--delay': '0.55s' }">
        <a
          v-for="link in socialLinks"
          :key="link.name"
          :href="link.url"
          :aria-label="link.name"
          target="_blank"
          rel="noreferrer"
          class="hero__social-link"
        >
          <Icon :icon="link.icon" />
        </a>
      </div>
    </div>

    <div class="hero__visual reveal" :style="{ '--delay': '0.3s' }">
      <div class="hero__glow" />
      <div class="hero__avatar-ring">
        <div class="hero__avatar">
          <img
            v-if="!imageError"
            src="/assets/img/ProfMe.png"
            alt="Gangesh - Software Engineer"
            @error="imageError = true"
          />
          <div v-else class="hero__avatar-fallback">
            <Icon icon="mdi:account-circle" />
          </div>
        </div>
      </div>
      <div class="hero__orbit hero__orbit--1"><Icon icon="simple-icons:go" /></div>
      <div class="hero__orbit hero__orbit--2"><Icon icon="simple-icons:amazonwebservices" /></div>
      <div class="hero__orbit hero__orbit--3"><Icon icon="simple-icons:docker" /></div>
      <div class="hero__orbit hero__orbit--4"><Icon icon="simple-icons:postgresql" /></div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: calc(100vh - var(--header-height));
  display: grid;
  align-items: center;
  gap: 3rem;
  padding-top: calc(var(--header-height) + 2rem);
  padding-bottom: 4rem;
  position: relative;
  z-index: 1;
}

.hero__title {
  font-size: clamp(2rem, 5vw, 3.75rem);
  font-weight: 800;
  line-height: 1.15;
  margin-bottom: 1.25rem;
  letter-spacing: -0.02em;
}

.hero__title-animated {
  display: inline-block;
  min-width: 12ch;
  vertical-align: bottom;
}

.hero__intro {
  max-width: 34rem;
  color: var(--text-secondary);
  font-size: 1.05rem;
  line-height: 1.7;
  margin-bottom: 2rem;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
  margin-bottom: 2rem;
}

.hero__social {
  display: flex;
  gap: 0.75rem;
}

.hero__social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 0.75rem;
  background: var(--accent-soft);
  border: 1px solid var(--accent-border);
  color: var(--text-secondary);
  font-size: 1.25rem;
  transition: transform 0.25s, color 0.25s, background 0.25s, border-color 0.25s;
}

.hero__social-link:hover {
  transform: translateY(-3px);
  color: var(--accent-light);
  background: var(--accent-soft-hover);
}

.hero__visual {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 320px;
}

.hero__glow {
  position: absolute;
  width: 280px;
  height: 280px;
  border-radius: 50%;
  background: radial-gradient(circle, var(--glow-color), transparent 70%);
  filter: blur(40px);
  animation: pulse-glow 4s ease-in-out infinite alternate;
}

.hero__avatar-ring {
  position: relative;
  width: 260px;
  height: 260px;
  border-radius: 50%;
  padding: 4px;
  background: linear-gradient(135deg, var(--accent), var(--accent-purple), var(--accent-cyan));
  animation: spin-slow 12s linear infinite;
}

.hero__avatar {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  background: var(--bg-card);
  animation: spin-slow 12s linear infinite reverse;
}

.hero__avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.hero__avatar-fallback {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 8rem;
  color: var(--accent);
  opacity: 0.5;
}

.hero__orbit {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 0.75rem;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  backdrop-filter: blur(8px);
  font-size: 1.5rem;
  color: var(--accent-light);
  animation: orbit-bob 3s ease-in-out infinite;
}

.hero__orbit--1 { top: 5%; right: 10%; animation-delay: 0s; }
.hero__orbit--2 { bottom: 15%; right: 0; animation-delay: 0.8s; }
.hero__orbit--3 { bottom: 10%; left: 5%; animation-delay: 1.6s; }
.hero__orbit--4 { top: 20%; left: 0; animation-delay: 2.4s; }

.role-enter-active,
.role-leave-active {
  transition: opacity 0.35s, transform 0.35s;
}

.role-enter-from {
  opacity: 0;
  transform: translateY(12px);
}

.role-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}

@keyframes pulse-glow {
  from { transform: scale(0.95); opacity: 0.7; }
  to { transform: scale(1.08); opacity: 1; }
}

@keyframes spin-slow {
  to { transform: rotate(360deg); }
}

@keyframes orbit-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.7s ease var(--delay, 0s), transform 0.7s ease var(--delay, 0s);
}

.is-visible .reveal {
  opacity: 1;
  transform: translateY(0);
}

@media (min-width: 900px) {
  .hero {
    grid-template-columns: 1.1fr 0.9fr;
    gap: 2rem;
  }

  .hero__visual {
    min-height: 420px;
  }

  .hero__avatar-ring {
    width: 300px;
    height: 300px;
  }
}
</style>
