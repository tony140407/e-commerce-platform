<template>
  <Loading />
  <Navbar />
  <router-view></router-view>
  <Footer />
</template>

<script setup>
import Navbar from "./components/layout/navbar.vue";
import Footer from "./components/layout/footer.vue";
import Loading from "./components/layout/loading.vue";
import AOS from "aos";
import "aos/dist/aos.css";
import { getShopData } from "@/js/storeData.js";

AOS.init({
  duration: 1000,
  offset: 60,
});
// 許多元件要用到商品資料，故先取得
getShopData();
</script>
