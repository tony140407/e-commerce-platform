<template>
  <Navbar />
  <router-view></router-view>
</template>

<script setup>
import Navbar from "./components/layout/navbar.vue";
import { inject, onMounted, ref } from "vue";

// const VueSweetalert2 = inject("VueSweetalert2");
// VueSweetalert2({
//   icon: "error",
//   title: "Oops...",
//   text: "Something went wrong!",
//   footer: '<a href="">Why do I have this issue?</a>',
// });
</script>
