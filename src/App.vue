<script setup>
import { Icon } from '@iconify/vue'
import FloatingObjects from '@/components/FloatingObjects.vue'
import AppHeader from '@/components/AppHeader.vue'
import HeroSection from '@/components/HeroSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import ImpactSection from '@/components/ImpactSection.vue'
import SkillsSection from '@/components/SkillsSection.vue'
import WorkSection from '@/components/WorkSection.vue'
import ProcessSection from '@/components/ProcessSection.vue'
import ExperienceSection from '@/components/ExperienceSection.vue'
import ServicesSection from '@/components/ServicesSection.vue'
import BlogsSection from '@/components/BlogsSection.vue'
import ContactSection from '@/components/ContactSection.vue'
import AppFooter from '@/components/AppFooter.vue'
</script>

<template>
  <div class="app">
    <FloatingObjects />
    <AppHeader />
    <main>
      <HeroSection />
      <AboutSection />
      <ImpactSection />
      <SkillsSection />
      <WorkSection />
      <ProcessSection />
      <ExperienceSection />
      <ServicesSection />
      <BlogsSection />
      <ContactSection />
    </main>
    <AppFooter />
    <a href="#home" class="scroll-top" aria-label="Scroll to top">
      <Icon icon="mdi:arrow-up" />
    </a>
  </div>
</template>
