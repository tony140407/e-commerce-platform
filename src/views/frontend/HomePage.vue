<template>
  <section>
    <Banner />
    <Intro />
    <ScrollProduct
      @scrollProductInstance="getScrollProductPosition"
      @rightAndLeftPosition="setListPosition"
    />
  </section>
</template>

<script setup>
import Banner from "@/components/frontend/homepage/banner.vue";
import Intro from "@/components/frontend/homepage/intro.vue";
import ScrollProduct from "@/components/frontend/homepage/scrollProduct.vue";
import { getScrollProductPosition, setListPosition, handleScroll } from "@/js/homePageScroll.js";
import { onUnmounted } from "vue";

// 搭配 RWD 不讓 scrollProduct 元件再過小的畫面生效
if (screen.width > 992) {
  // scroll 事件載入
  window.addEventListener("scroll", handleScroll);
  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
  });
}
</script>
