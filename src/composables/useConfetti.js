const PARTICLES = ['💕', '✨', '💗', '🌸', '⭐', '💖', '🩷', '♡', '🦋', '🎀']

export function useConfetti() {
  function confetti(n = 50) {
    for (let i = 0; i < n; i++) {
      const p = document.createElement('span')
      p.className = 'confetti-emoji'
      p.textContent = PARTICLES[i % PARTICLES.length]
      p.style.left = `${Math.random() * 100}%`
      p.style.top = '0'
      p.style.fontSize = `${0.9 + Math.random() * 1.4}rem`
      const duration = 2.5 + Math.random() * 3
      const delay = Math.random() * 0.4
      p.style.animation = `float-up ${duration}s linear ${delay}s forwards`
      document.body.appendChild(p)
      setTimeout(() => p.remove(), (duration + delay + 0.5) * 1000)
    }
  }
  return { confetti }
}
