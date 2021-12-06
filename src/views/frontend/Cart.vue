<template>
  <section class="Cart">
    <router-view></router-view>
    <CartTools />
  </section>
</template>
<script setup>
import SelectProductItem from "@/components/frontend/cart/selectProductItem.vue";
import CartTools from "@/components/frontend/cart/cartTools.vue";
</script>
