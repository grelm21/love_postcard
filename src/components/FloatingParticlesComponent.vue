<script setup>
import { useParticles } from '@/composables/useParticles'

const { particles } = useParticles(30)
</script>

<template>
  <div class="particles">
    <span
      class="particle"
      v-for="particle in particles"
      v-bind:key="particle.id"
      :style="{
        left: particle.x + '%',
        fontSize: particle.fontSize + 'rem',
        animationDuration: particle.duration + 's',
        animationDelay: particle.delay + 's',
      }"
    >
      {{ particle.emoji }}
    </span>
  </div>
</template>

<style scoped>
.particles {
  position: fixed;
  inset: 0;
  pointer-events: none; /* клики проходят сквозь слой */
  z-index: 0;
  overflow: hidden;
}

.particle {
  position: absolute;
  /* border-radius: 50%; */
  opacity: 0;
  animation: float-up linear infinite backwards;
}
</style>
