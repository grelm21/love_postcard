<script setup>
import BtnComponent from '@/components/BtnComponent.vue'
import GlassCard from '@/components/GlassCardComponent.vue'
import { hubPage, hubItems } from '../data/content'
</script>

<template>
  <div
    class="flex flex-col gap-y-8 lg:grid lg:grid-cols-2 lg:gap-y-8 lg:gap-x-4 justify-center items-center"
  >
    <div class="flex flex-col lg:col-span-2 justify-center items-center gap-y-8">
      <span class="title-hero">Открытка для любимой</span>
      <span class="title-section">{{ hubPage.title }}</span>
      <span class="subtitle">{{ hubPage.subtitle }}</span>
      <span class="badge">Hello</span>
      <GlassCard>Привет! Давай поговорим, что нас ждем впереди</GlassCard>
    </div>
    <div v-for="item in hubItems" :key="item.name" class="flex flex-col gap-y-2 justify-center">
      <div class="flex gap-x-4 tip-text justify-center">
        <span> {{ item.emoji }}</span>
        <span>{{ item.title }}</span>
      </div>
      <router-link
        :to="item.path"
        :class="['flex justify-center', { 'pointer-events-none': item.disabled === true }]"
        :tabindex="item.disabled === true ? -1 : 0"
        custom
        v-slot="{ navigate }"
      >
        <BtnComponent
          variant="ghost"
          size="md"
          :disabled="item.disabled"
          tag="button"
          @click="navigate"
          >{{ item.description }}</BtnComponent
        >
      </router-link>
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
      <router-link class="flex justify-center" to="/" tabindex="-1">
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
