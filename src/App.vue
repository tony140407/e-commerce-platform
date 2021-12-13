<template>
  <Navbar />
  <router-view></router-view>
  <Footer />
</template>

<script setup>
import Navbar from "./components/layout/navbar.vue";
import Footer from "./components/layout/footer.vue";
import { getShopData } from "@/js/storeData.js";

getShopData();
</script>
