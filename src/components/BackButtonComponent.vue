<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const backTo = computed(() => (route.path === '/hub' ? '/' : '/hub'))
</script>
<template>
  <router-link :to="backTo" class="back-btn"> ← Назад </router-link>
</template>
<style scoped>
.back-btn {
  display: inline-flex;
  background: var(--glass);
  border-radius: var(--radius-pill);
  font-family: var(--font-nunito);
  font-size: 0.9rem;
  color: var(--ink-muted);
  font-weight: 700;
  font-style: bold;
  padding: 0.5rem 0.75rem;
  transition:
    transform 0.2s ease-in-out,
    color 0.2s ease-in-out,
    background 0.2s ease-in-out;
}

.back-btn:hover {
  color: var(--rose-deep);
  background: #fff;
  transform: translateX(-3px);
}
</style>
