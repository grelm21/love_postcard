<script setup>
import MainButton from '../components/MainButtonComponent.vue'
import { hubPage, hubItems } from '../data/content'
</script>

<template>
  <div
    class="flex flex-col gap-y-8 lg:grid lg:grid-cols-2 lg:gap-y-8 lg:gap-x-4 justify-center items-center"
  >
    <div class="flex flex-col lg:col-span-2 justify-center items-center">
      <span class="header text-2xl">{{ hubPage.title }}</span>
      <span class="font-manrope font-bold">{{ hubPage.subtitle }}</span>
    </div>
    <div v-for="item in hubItems" :key="item.name" class="flex flex-col gap-y-2 justify-center">
      <div class="flex gap-x-4 tip-text justify-center">
        <span> {{ item.emoji }}</span>
        <span>{{ item.title }}</span>
      </div>
      <router-link
        :to="item.path"
        :class="['flex justify-center', { 'pointer-events-none': item.state === 'disabled' }]"
        :tabindex="item.state === 'disabled' ? -1 : 0"
      >
        <MainButton :state="item.state" :title="item.description" />
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.tip-text {
  font-family: 'Comfortaa';
  font-weight: 900;
  font-size: 24px;
  color: #ea4986;
}
</style>
