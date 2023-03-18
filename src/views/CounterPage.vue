<template>
  <div class="wrapper">
    <h1 class="counter-title">Counter App</h1>
    <Counter />
  </div>
</template>

<script>
import Counter from "../components/CounterApp.vue";

export default {
  components: {
    Counter,
  },
};
</script>

<style>
.wrapper {
  text-align: center;
}
.counter-title {
  margin: 0;
  color: brown;
  font-size: 48px;
  margin-bottom: 16px;
}
</style>
