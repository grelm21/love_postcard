<script setup>
import BackButtonComponent from './components/BackButtonComponent.vue'
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
  <div class="scene">
    <div>
      <BackButtonComponent v-if="route.path !== '/'" />
      <div class="flex w-screen justify-center mx-auto mt-8">
        <router-view />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
