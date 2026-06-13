<script setup>
import BackButtonComponent from './components/BackButtonComponent.vue'
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
  <div class="relative gap-y-2 justify-center items-center min-h-screen bg-background py-16 px-8">
    <BackButtonComponent v-if="route.path !== '/'" />
    <div class="flex w-screen justify-center mx-auto mt-8">
      <router-view />
    </div>
  </div>
</template>

<style scoped></style>
