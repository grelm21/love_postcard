<script setup>
import { ref } from 'vue'
import MainButton from '../components/MainButton.vue'
import Dialog from '../components/Dialog.vue'

const counterValue = 20
const counterRef = ref(counterValue)
const showDialog = ref(false)

function moveToRandom(btn) {
  const randomTop = Math.floor(Math.random() * 90) // 0-90% to avoid overflow
  const randomLeft = Math.floor(Math.random() * 50)
  const counter = counterRef.value || counterValue
  console.log(counter)
  if (counterRef.value === 1) {
    showDialog.value = true
    return
  }
  if (btn && counter !== 1) {
    btn.style.top = randomTop + 'vh'
    btn.style.left = randomLeft + 'vw'
    counterRef.value = counter - 1
  }
}

function resetStates() {
  const btn = document.querySelector('.floating')
  counterRef.value = counterValue
  showDialog.value = false
  if (btn) {
    btn.style.top = '60%'
    btn.style.left = 'calc(50% - 150px)'
  }
}
</script>

<template>
  <div class="flex h-screen w-screen bg-background items-center justify-center">
    <div class="flex flex-col gap-y-2 justify-center items-center">
      <div class="font-comfortaa text-center text-2xl header">Тебе открыточка =)</div>
      <MainButton
        state=""
        class="floating"
        title="Открыть"
        @mouseenter="moveToRandom($event.currentTarget)"
      />
    </div>
    <Dialog :visible="showDialog" @closed="resetStates()" />
  </div>
</template>

<style scoped></style>
