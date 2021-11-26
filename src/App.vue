<template>
  <Navbar />
  <router-view></router-view>
</template>

<script setup>
import Navbar from "./components/layout/navbar.vue";
import { inject } from "vue";

const axios = inject("axios");

const api = "https://jsonplaceholder.typicode.com/todos/1";
axios.get(api).then((response) => {
  console.log("success");
  console.log(response.data);
});
</script>
