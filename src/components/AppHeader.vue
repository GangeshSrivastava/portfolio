<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { Icon } from '@iconify/vue'
import { navLinks } from '@/data/portfolio'
import { useScrollSpy } from '@/composables/useScrollSpy'
import { useThemeState } from '@/composables/useTheme'

const menuOpen = ref(false)
const scrolled = ref(false)

const sectionIds = navLinks.map((l) => l.id)
const { activeSection, scrollTo } = useScrollSpy(sectionIds)
const { theme, toggleTheme } = useThemeState()

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const closeMenu = () => {
  menuOpen.value = false
}

const navigate = (id) => {
  scrollTo(id)
  closeMenu()
}

const onScroll = () => {
  scrolled.value = window.scrollY > 40
}

const onKeydown = (e) => {
  if (e.key === 'Escape') closeMenu()
}

watch(menuOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('keydown', onKeydown)
  onScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <header class="header" :class="{ 'header--scrolled': scrolled, 'header--open': menuOpen }">
    <nav class="nav container" aria-label="Main navigation">
      <a href="#home" class="nav__logo" @click.prevent="navigate('home')">
        <Icon icon="mdi:code-braces" class="nav__logo-icon" />
        <span class="nav__logo-text">Gangesh</span>
      </a>

      <div class="nav__actions">
        <button
          class="nav__theme"
          :aria-label="theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'"
          @click="toggleTheme"
        >
          <Icon :icon="theme === 'dark' ? 'mdi:weather-sunny' : 'mdi:weather-night'" />
        </button>

        <button
          class="nav__toggle"
          :aria-expanded="menuOpen"
          aria-controls="nav-menu"
          aria-label="Toggle navigation menu"
          @click="toggleMenu"
        >
          <Icon :icon="menuOpen ? 'mdi:close' : 'mdi:menu'" />
        </button>

        <div
          id="nav-menu"
          class="nav__menu"
          :class="{ 'nav__menu--open': menuOpen }"
          :aria-hidden="!menuOpen"
        >
          <ul class="nav__list">
            <li v-for="link in navLinks" :key="link.id" class="nav__item">
              <a
                href="#"
                class="nav__link"
                :class="{ 'nav__link--active': activeSection === link.id }"
                @click.prevent="navigate(link.id)"
              >
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <button
      v-if="menuOpen"
      class="nav__backdrop"
      aria-label="Close menu"
      tabindex="-1"
      @click="closeMenu"
    />
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  transition: background 0.3s, box-shadow 0.3s, backdrop-filter 0.3s, border-color 0.3s;
}

.header--scrolled,
.header--open {
  background: var(--header-bg);
  backdrop-filter: blur(16px);
  box-shadow: var(--header-shadow);
  border-bottom: 1px solid var(--glass-border);
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: var(--header-height);
  gap: 0.75rem;
  position: relative;
  z-index: 2;
}

.nav__logo {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  font-weight: 700;
  font-size: 1.05rem;
  color: var(--text-primary);
  transition: color 0.2s;
  flex-shrink: 0;
  min-width: 0;
}

.nav__logo:hover {
  color: var(--accent);
}

.nav__logo-icon {
  font-size: 1.4rem;
  color: var(--accent);
  flex-shrink: 0;
}

.nav__logo-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.nav__actions {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  flex-shrink: 0;
}

.nav__theme,
.nav__toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  font-size: 1.25rem;
  color: var(--text-primary);
  background: var(--accent-soft);
  border: 1px solid var(--accent-border);
  border-radius: 0.625rem;
  cursor: pointer;
  transition: background 0.2s, transform 0.2s;
  flex-shrink: 0;
}

.nav__theme:hover,
.nav__toggle:hover {
  background: var(--accent-soft-hover);
}

.nav__theme:hover {
  transform: rotate(15deg);
}

.nav__backdrop {
  position: fixed;
  inset: var(--header-height) 0 0 0;
  z-index: 1;
  background: var(--backdrop-bg);
  border: none;
  cursor: pointer;
  animation: fade-in 0.25s ease;
}

@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

.nav__menu {
  position: fixed;
  top: var(--header-height);
  right: 0;
  bottom: 0;
  width: min(300px, 88vw);
  background: var(--mobile-menu-bg);
  backdrop-filter: blur(20px);
  padding: 1rem 1rem 2rem;
  transform: translateX(100%);
  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  overflow-y: auto;
  overscroll-behavior: contain;
  -webkit-overflow-scrolling: touch;
  z-index: 2;
  border-left: 1px solid var(--glass-border);
  box-shadow: -8px 0 32px rgba(0, 0, 0, 0.2);
}

.nav__menu--open {
  transform: translateX(0);
}

.nav__list {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.nav__link {
  display: block;
  padding: 0.9rem 1rem;
  color: var(--text-secondary);
  font-weight: 500;
  font-size: 1rem;
  border-radius: 0.625rem;
  transition: color 0.2s, background 0.2s;
}

.nav__link:hover,
.nav__link--active {
  color: var(--accent-light);
  background: var(--accent-soft);
}

.nav__link--active {
  font-weight: 600;
}

/* Tablet/desktop horizontal nav */
@media (min-width: 1024px) {
  .nav__backdrop {
    display: none;
  }

  .nav__toggle {
    display: none;
  }

  .nav__menu {
    position: static;
    width: auto;
    height: auto;
    padding: 0;
    transform: none;
    overflow: visible;
    background: transparent;
    backdrop-filter: none;
    border: none;
    box-shadow: none;
  }

  .nav__list {
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    justify-content: flex-end;
    gap: 0.05rem;
  }

  .nav__link {
    padding: 0.45rem 0.55rem;
    font-size: 0.8rem;
  }

  .nav__logo {
    font-size: 1.15rem;
  }
}

@media (min-width: 1200px) {
  .nav__link {
    padding: 0.5rem 0.7rem;
    font-size: 0.85rem;
  }
}

@media (max-width: 360px) {
  .nav__logo-text {
    display: none;
  }

  .nav__theme,
  .nav__toggle {
    width: 2.35rem;
    height: 2.35rem;
    font-size: 1.15rem;
  }
}
</style>
