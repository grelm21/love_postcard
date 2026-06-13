<script setup>
const props = defineProps(['state', 'title'])
const title = props.title || 'Подтвердить'
</script>
<template>
  <button :class="`regular button ${state}`" id="button">{{ title }}</button>
</template>
<style scoped></style>
