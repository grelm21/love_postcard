<script setup>
import { onClickOutside } from '@vueuse/core'
import { ref } from 'vue'
import { watch } from 'vue'

const dialogWindow = ref(null)
const props = defineProps(['title', 'text', 'photo', 'visible'])
const emit = defineEmits(['closed'])
const isVisible = ref(props.visible)

console.log(props.visible)

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
    class="absolute flex h-full w-full backdrop-blur-sm bg-[#6D6D6D]/40 items-center justify-center"
  >
    <div
      class="flex flex-col gap-y-6 w-lg bg-white rounded-[30px] p-5 opacity-100 items-center justify-center"
      ref="dialogWindow"
    >
      <span class="text-center header text-2xl">Ура, она открылась =)</span>
      <img src="/love_cat.gif" alt="love_cat" class="fit-cover h-full photo-container" />
      <p class="font-manrope">
        🐾 Мяу-мяу! Люблю тебя, моё солнышко 🌞 Ты самая красивая 😻, замечательная, замурчательная
        🐱 (потому что я кот, а ты меня мурчать заставляешь!). Люблю всем своим кошачьим сердцем 💘
        Чмоки-чмоки в носик 💋 Твой муж =)
      </p>
    </div>
  </div>
</template>
<style scoped></style>
