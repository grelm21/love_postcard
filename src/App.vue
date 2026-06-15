<script setup>
import BackButtonComponent from './components/BackButtonComponent.vue'
import FloatingParticles from '@/components/FloatingParticlesComponent.vue'
import { useToast } from '@/composables/UseToast'

const { message, show } = useToast()
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
  <div class="scene">
    <!-- <FloatingParticles /> -->
    <div class="wrap">
      <BackButtonComponent v-if="route.path !== '/'" />
      <router-view />
    </div>
  </div>
  <div :class="['toast', show ? 'show' : '']">{{ message }}</div>
</template>

<style scoped></style>
