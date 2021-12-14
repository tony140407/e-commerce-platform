<template>
  <div class="container my-3">
    <h3 class="h3 Cart_title">購物車</h3>
    <p class="Cart_note">請確認想要購買的產品</p>
    <ul class="SelectProductItem mb-3" v-if="storeData.carts.length != 0" data-aos="flip-up">
      <SelectProductItem
        v-for="eachCart in storeData.carts"
        :key="eachCart.id"
        :productDetail="eachCart"
      />
    </ul>
    <EmptyCartError v-else data-aos="flip-up" />

    <Recommend data-aos="zoom-in-right" />
  </div>
</template>

<script setup>
import SelectProductItem from "@/components/frontend/cart/selectProductItem.vue";
import EmptyCartError from "@/components/frontend/cart/EmptyCartError.vue";
import Recommend from "@/components/frontend/cart/recommend.vue";
import { storeData } from "@/js/storeData.js";
</script>
