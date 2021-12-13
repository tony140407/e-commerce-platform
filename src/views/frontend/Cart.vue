<template>
  <section class="Cart">
    <router-view></router-view>
    <CartTools />
  </section>
</template>
<script setup>
import CartTools from "@/components/frontend/cart/cartTools.vue";
import { getCartData } from "@/js/storeData.js";
getCartData();
</script>
