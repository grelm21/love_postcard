import { ref } from 'vue'
const message = ref('')
const show = ref(false)

export function useToast() {
  function showToast(msg, duration = 3500) {
    if (!show.value) {
      show.value = true
      message.value = msg

      setTimeout(() => {
        show.value = false
        message.value = ''
      }, duration)
    }
  }
  return { showToast, message, show }
}
