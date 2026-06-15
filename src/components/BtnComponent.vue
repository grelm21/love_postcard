<script setup>
defineProps({
  variant: { type: String, default: 'primary' }, // primary | ghost | muted
  size: { type: String, default: 'md' }, // md | sm
  disabled: { type: Boolean, default: false },
  tag: { type: String, default: 'button' }, // button | a — для router-link обёртки снаружи
})
</script>

<template>
  <button
    :class="['btn-default', `btn-${variant}`, size === 'sm' ? 'sm' : '', !disabled && 'shimmer']"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<style scoped>
.btn-default {
  display: block;
  border-radius: var(--radius-pill);
  padding: 0.85rem 2rem;
  font-family: 'Comfortaa', cursive;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
}

.btn-default:disabled {
  background: #e8dce6;
  color: #9ca3af;
  box-shadow: none;
  border: none;
  cursor: not-allowed;
}

.sm {
  padding: 0.6rem 1.4rem;
  font-size: 0.8rem;
}

.btn-primary {
  background-image: linear-gradient(135deg, var(--rose), var(--rose-deep));
  color: #fff;
  box-shadow:
    0 4px 0 #9d174d,
    0 8px 24px rgba(225, 29, 106, 0.35);
  transition:
    transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1),
    box-shadow 0.2s ease-in-out;
}

.btn-primary:hover:not(:disabled) {
  transform: translateY(-3px);
  box-shadow:
    0 6px 0 #9d174d,
    0 14px 32px rgba(225, 29, 106, 0.4);
}

.btn-primary:active:not(:disabled) {
  transform: translateY(-3px);
  box-shadow:
    0 6px 0 #9d174d,
    0 14px 32px rgba(225, 29, 106, 0.4);
}

.btn-ghost {
  background: var(--glass);
  color: var(--ink);
  border: 2px solid #fff;
  transition: 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.btn-ghost:hover:not(:disabled) {
  background: #fff;
  transform: translateY(-3px);
}

.btn-ghost:active:not(:disabled) {
  background: #fff;
  transform: translateY(-3px);
}

/* ── Shimmer on hover ── */
.shimmer {
  position: relative;
  overflow: hidden;
}

.shimmer::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    105deg,
    transparent 40%,
    rgba(237, 233, 254, 0.5) 50%,
    transparent 60%
  );
  transform: translateX(-100%);
  transition: transform 0.6s;
}

.shimmer:hover::after {
  transform: translateX(100%);
}
</style>
