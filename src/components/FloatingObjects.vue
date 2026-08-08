<template>
  <div class="floating-objects" aria-hidden="true">
    <span
      v-for="(obj, i) in objects"
      :key="i"
      class="float-object"
      :class="obj.shape"
      :style="{
        left: obj.left,
        top: obj.top,
        width: obj.size,
        height: obj.size,
        animationDuration: obj.duration,
        animationDelay: obj.delay,
      }"
    />
    <div class="grid-overlay" />
  </div>
</template>

<script setup>
const objects = [
  { shape: 'circle', left: '8%', top: '12%', size: '64px', duration: '18s', delay: '0s' },
  { shape: 'square', left: '85%', top: '18%', size: '48px', duration: '22s', delay: '1s' },
  { shape: 'circle', left: '72%', top: '55%', size: '80px', duration: '20s', delay: '2s' },
  { shape: 'triangle', left: '15%', top: '65%', size: '56px', duration: '24s', delay: '0.5s' },
  { shape: 'circle', left: '45%', top: '8%', size: '32px', duration: '16s', delay: '3s' },
  { shape: 'square', left: '92%', top: '78%', size: '40px', duration: '19s', delay: '1.5s' },
  { shape: 'circle', left: '5%', top: '85%', size: '72px', duration: '21s', delay: '2.5s' },
  { shape: 'triangle', left: '58%', top: '88%', size: '44px', duration: '23s', delay: '0.8s' },
]
</script>

<style scoped>
.floating-objects {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}

.grid-overlay {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(99, 102, 241, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(99, 102, 241, 0.04) 1px, transparent 1px);
  background-size: 48px 48px;
  mask-image: radial-gradient(ellipse 80% 60% at 50% 0%, black 20%, transparent 70%);
}

.float-object {
  position: absolute;
  opacity: var(--float-opacity);
  animation: float-drift ease-in-out infinite alternate;
}

.circle {
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.5), rgba(168, 85, 247, 0.3));
  filter: blur(1px);
}

.square {
  border-radius: 12px;
  background: linear-gradient(135deg, rgba(56, 189, 248, 0.4), rgba(99, 102, 241, 0.25));
  transform: rotate(45deg);
}

.triangle {
  width: 0 !important;
  height: 0 !important;
  border-left: 22px solid transparent;
  border-right: 22px solid transparent;
  border-bottom: 38px solid rgba(168, 85, 247, 0.35);
  background: none !important;
}

@keyframes float-drift {
  0% {
    transform: translate(0, 0) rotate(0deg);
  }
  100% {
    transform: translate(24px, -32px) rotate(12deg);
  }
}
</style>
