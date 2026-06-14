<script setup>
import BackButtonComponent from './components/BackButtonComponent.vue'
import FloatingParticles from '@/components/FloatingParticlesComponent.vue'
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
  <div class="scene">
    <div class="wrap">
      <BackButtonComponent v-if="route.path !== '/'" />
      <router-view />
    </div>
  </div>
  <FloatingParticles />
</template>

<style scoped></style>
