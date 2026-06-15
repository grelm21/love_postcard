<script setup>
import BackButtonComponent from './components/BackButtonComponent.vue'
import FloatingParticles from '@/components/FloatingParticlesComponent.vue'
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
  <div class="scene">
    <FloatingParticles />

    <div class="wrap">
      <BackButtonComponent v-if="route.path !== '/'" />
      <router-view />
    </div>
  </div>
</template>

<style scoped></style>
