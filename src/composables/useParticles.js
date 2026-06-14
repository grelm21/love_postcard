import { ref, onMounted } from 'vue'
const PARTICLES = ['💕', '✨', '💗', '🌸', '⭐', '💖', '🩷', '♡', '🦋', '🎀']

export function useParticles(count = 10) {
  const particles = ref([])

  onMounted(() => {
    particles.value = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      fontSize: 0.8 + Math.random() * 1.2,
      emoji: PARTICLES[i % PARTICLES.length],
      duration: 10 + Math.random() * 14,
      delay: Math.random() * 12,
    }))
  })
  return { particles }
}
