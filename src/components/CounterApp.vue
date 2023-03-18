<template>
  <div class="">
    <h1 class="count">{{ count }}</h1>
    <div class="btns">
      <button @click="decrement">-</button>
      <button @click="reset">Reset</button>
      <button @click="increment">+</button>
    </div>
    <div class="inputContainer">
      <input type="number" v-model="value" placeholder="Set Counter" />
      <button @click="setValue(value)">Set Value</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "CounterApp",
  data() {
    return {
      value: "0",
    };
  },
  computed: {
    ...mapState(["count"]),
  },
  methods: {
    ...mapMutations(["increment", "decrement", "reset", "setValue"]),
  },
};
</script>

<style>
button {
  outline: none;
  cursor: pointer;
  border: 0;
  border-radius: 8px;
  transition: ease-in-out all 0.1s;
  font-size: 16px;
  font-weight: 900;
}
.count {
  margin: 0;
  margin-bottom: 16px;
  font-weight: 900;
  font-size: 64px;
}
.btns {
  display: flex;
  gap: 16px;
  flex-direction: row;
  justify-content: center;
}

.btns button {
  padding: 16px 32px;
  background-color: cadetblue;
  color: black;
}

.btns button:hover {
  transform: scale(1.1);
  background-color: black;
  color: cadetblue;
}

.inputContainer {
  margin-top: 8px;
  display: flex;
}

.inputContainer input {
  padding: 12px;
  border: 1px solid brown;
  outline: none;
  margin-right: 8px;
  font-size: 16px;
  flex: 2;
  color: brown;
}

.inputContainer button {
  padding: 12px;
  flex: 1;
  background-color: brown;
  color: #ffffff;
}

.inputContainer button:hover {
  background-color: black;
  color: brown;
}
</style>
