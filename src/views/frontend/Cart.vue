<template>
  <section class="Cart">
    <router-view></router-view>
    <CartTools />
  </section>
</template>
<script setup>
import SelectProductItem from "@/components/frontend/cart/selectProductItem.vue";
import CartTools from "@/components/frontend/cart/cartTools.vue";
import { storeData, getCartData } from "@/js/storeData.js";
import { ref, inject } from "vue";
// api 取得資料
// const axios = inject("axios");

// function getData() {
//   const api = `${process.env.VUE_APP_baseUrl}/api/${process.env.VUE_APP_apiPath}/cart`;
//   axios
//     .get(api)
//     .then((res) => {
//       storeData.carts = res.data.data.carts;
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }
getCartData();
</script>
