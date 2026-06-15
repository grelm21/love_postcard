<script setup></script>
<template>
  <div class="glass-card">
    <slot />
  </div>
</template>
<style scoped>
.glass-card {
  display: flex;
  padding: 1.5rem;
  background: var(--glass);
  border: 2px solid var(--glass-border);
  border-radius: var(--radius-lg);
  backdrop-filter: blur(12px);
  box-shadow: var(--shadow-soft);
}
</style>
