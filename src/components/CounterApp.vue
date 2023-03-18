<template>
  <div class="counter">
    <h2>{{ counter }}</h2>
    <div>
      <button @click="increment">Increment</button>
      <button @click="decrement">Decrement</button>
      <button @click="reset">Reset</button>
    </div>
    <div>
      <input type="number" v-model="value" />
      <button @click="setValue">Set Value</button>
    </div>
  </div>
</template>
  
  <script>
  import { computed, ref } from 'vue'
import { mapMutations } from 'vuex'
  import store from '../store'
  
  export default {
    setup() {
    const counter = computed(() => store.getters.counter)
    const value = ref(0)

    const { increment, decrement, reset, setValue } = mapMutations([
      'increment',
      'decrement',
      'reset',
      'setValue'
    ])

    return {
      counter,
      value,
      increment,
      decrement,
      reset,
      setValue
    }
   }
}
</script>




  