<script setup>
const props = defineProps(['state', 'title'])
const title = props.title || 'Подтвердить'
</script>
<template>
  <div>
    <button :class="`regular button ${state}`" id="button">{{ title }}</button>
  </div>
</template>
<style scoped></style>
