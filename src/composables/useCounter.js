import { reactive } from 'vue'

export default function useCounter(initialValue = 0) {
  const state = reactive({
    value: initialValue
  })

  const increment = () => {
    state.value++
  }

  const decrement = () => {
    state.value--
  }

  const reset = () => {
    state.value = 0
  }

  const setValue = (newValue) => {
    state.value = newValue
  }

  return {
    state,
    increment,
    decrement,
    reset,
    setValue
  }
}
