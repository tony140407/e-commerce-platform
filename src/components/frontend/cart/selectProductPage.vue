<template>
  <div class="container my-3">
    <h3 class="h3 Cart_title">購物車</h3>
    <p class="Cart_note">請確認想要購買的產品</p>
    <ul class="SelectProductItem mb-3">
      <SelectProductItem />
      <SelectProductItem />
      <SelectProductItem />
      <SelectProductItem />
    </ul>
  </div>
</template>

<script setup>
import SelectProductItem from "@/components/frontend/cart/selectProductItem.vue";
</script>
