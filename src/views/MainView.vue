<script setup>
import { ref } from 'vue'
import MainButton from '../components/MainButtonComponent.vue'
import Dialog from '../components/DialogComponent.vue'
import { mainPage } from '../data/content'

const counterValue = mainPage.dodgeAttempts
const counterRef = ref(counterValue)
const showDialog = ref(false)
const INITIAL_POSITION = { top: '60%', left: 'calc(50% - 150px)' }
const buttonPosition = ref({ ...INITIAL_POSITION })

function moveToRandom() {
  const randomTop = Math.floor(Math.random() * 90) // 0-90% to avoid overflow
  const randomLeft = Math.floor(Math.random() * 50)
  const counter = counterRef.value || counterValue

  if (counterRef.value === 1) {
    showDialog.value = true
    return
  }
  if (counter !== 1) {
    buttonPosition.value = {
      top: randomTop + 'vh',
      left: randomLeft + 'vw',
    }
    counterRef.value = counter - 1
  }
}

function resetStates() {
  counterRef.value = counterValue
  showDialog.value = false
  buttonPosition.value = { ...INITIAL_POSITION }
}
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-y-2">
    <div class="flex font-comfortaa text-center text-2xl header">{{ mainPage.headline }}</div>
    <MainButton
      state=""
      class="floating"
      :style="buttonPosition"
      :title="mainPage.buttonTitle"
      @mouseenter="moveToRandom()"
    />
  </div>
  <Dialog :visible="showDialog" @closed="resetStates()" />
</template>

<style scoped></style>
