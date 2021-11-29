<template>
  <Navbar />
  <router-view></router-view>
</template>

<script setup>
import Navbar from "./components/layout/navbar.vue";
import { inject, onMounted, ref } from "vue";

const axios = inject("axios");

const api = "https://jsonplaceholder.typicode.com/todos/1";
axios.get(api).then((response) => {
  console.log("success");
  console.log(response.data);
});
// --------------------------
// import Swal from "sweetalert2";
// new Swal("Hello Vue world!!!");
// --------------------------------------------------------
const VueSweetalert2 = inject("VueSweetalert2");
VueSweetalert2({
  icon: "error",
  title: "Oops...",
  text: "Something went wrong!",
  footer: '<a href="">Why do I have this issue?</a>',
});
</script>
