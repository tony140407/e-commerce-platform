<template>
  <img alt="Vue logo" src="./assets/logo.png" />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<script setup>
import { inject } from "vue";

const axios = inject("axios");

const api = "https://jsonplaceholder.typicode.com/todos/1";
axios.get(api).then((response) => {
  console.log("success");
  console.log(response.data);
});
</script>
