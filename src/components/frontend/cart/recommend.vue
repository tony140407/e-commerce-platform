<template>
  <section class="recommend">
    <h3 class="recommend_title"><font-awesome-icon :icon="['fas', 'medal']" /> 為您推薦</h3>
    <swiper
      v-if="storeData.products.length > 0"
      :breakpoints="breakpoints"
      navigation
      class="recommend_swiper"
    >
      <swiper-slide v-for="eachProduct in storeData.products" :key="eachProduct">
        <Card :productDetail="eachProduct" />
      </swiper-slide>
    </swiper>
  </section>
</template>

<script setup>
import { storeData, getShopData } from "@/js/storeData.js";
import Card from "@/components/frontend/card.vue";
import { Navigation } from "swiper";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const breakpoints = {
  499: {
    slidesPerView: 1,
    spaceBetween: 50,
  },
  767: {
    slidesPerView: 2,
    spaceBetween: 50,
  },
  1200: {
    slidesPerView: 3,
    spaceBetween: 50,
  },
};
</script>
