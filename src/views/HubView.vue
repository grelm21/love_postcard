<script setup>
import MainButton from '../components/MainButtonComponent.vue'
import BtnComponent from '@/components/BtnComponent.vue'
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
    <div class="flex justify-center">
      <router-link to="/">
        <BtnComponent variant="primary" size="md" tag="button">Ку-ку ❤️</BtnComponent>
      </router-link>
    </div>
    <div class="flex justify-center">
      <BtnComponent variant="ghost" size="md" tag="button">Ку-ку ❤️</BtnComponent>
    </div>
    <div class="flex justify-center">
      <BtnComponent variant="primary" size="sm" tag="button">Ку-ку ❤️</BtnComponent>
    </div>
    <div class="flex justify-center">
      <BtnComponent variant="ghost" size="sm" tag="button">Ку-ку ❤️</BtnComponent>
    </div>
    <div class="flex justify-center">
      <router-link class="flex justify-center" to="/" tabondex="-1">
        <BtnComponent variant="primary" size="md" tag="button" :disabled="true"
          >Ку-ку ❤️</BtnComponent
        >
      </router-link>
    </div>
    <div class="flex justify-center">
      <BtnComponent variant="ghost" size="md" tag="button" :disabled="true">Ку-ку ❤️</BtnComponent>
    </div>
    <div class="flex justify-center">
      <BtnComponent variant="primary" size="sm" tag="button" :disabled="true"
        >Ку-ку ❤️</BtnComponent
      >
    </div>
    <div class="flex justify-center">
      <BtnComponent variant="ghost" size="sm" tag="button" :disabled="true">Ку-ку ❤️</BtnComponent>
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
