<script setup>
import { onClickOutside } from '@vueuse/core'
import { ref } from 'vue'
import { watch } from 'vue'
import { mainDialog } from '../data/content'
import MainButton from './MainButtonComponent.vue'
import BtnComponent from './BtnComponent.vue'
import { useToast } from '@/composables/UseToast'

const { showToast } = useToast()

const dialogWindow = ref(null)
const props = defineProps(['title', 'text', 'photo', 'visible'])
const emit = defineEmits(['closed'])
const isVisible = ref(props.visible)

onClickOutside(dialogWindow, () => {
  isVisible.value = false
  emit('closed')
})

watch(
  () => props.visible,
  (newValue) => {
    isVisible.value = newValue
  },
)
</script>
<template>
  <div
    v-if="isVisible"
    class="absolute inset-0 flex h-full w-full backdrop-blur-sm bg-[#6D6D6D]/40 items-center justify-center"
  >
    <div
      class="flex flex-col gap-y-6 w-lg bg-white rounded-[30px] p-5 opacity-100 items-center justify-center"
      ref="dialogWindow"
    >
      <span class="text-center header text-2xl">{{ mainDialog.title }}</span>
      <img
        :src="mainDialog.photo"
        :alt="mainDialog.photoAlt"
        class="fit-cover h-full photo-container"
      />
      <p class="font-manrope">
        {{ mainDialog.text }}
      </p>
      <div class="flex justify-center">
        <BtnComponent variant="primary" size="sm" tag="button" @click="showToast('Диалог ❤️')"
          >Тост Ку-ку ❤️></BtnComponent
        >
      </div>
      <router-link :to="mainDialog.explorePath" class="flex justify-center mb-8">
        <MainButton :title="mainDialog.exploreButton" />
      </router-link>
    </div>
  </div>
</template>
<style scoped></style>
