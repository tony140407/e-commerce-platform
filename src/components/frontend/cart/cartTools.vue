<template>
  <div class="cartTools" v-show="route.path !== '/success'">
    <div class="container">
      <div class="cartTools_total">
        <p class="h3">總計: NT$1000</p>
        <p class="Cart_note">單筆滿NT$700以上免運費!</p>
      </div>

      <!-- 購物車時 -->
      <div class="row" v-show="route.path == '/cart'">
        <router-link :to="'/shop'" class="col-4 h4 cartTools_continueShoppingBTN"
          >繼續逛</router-link
        >
        <router-link :to="'cart/order_form'" class="offset-1 col-7 h4 cartTools_nextBTN"
          >下一步</router-link
        >
      </div>
      <!-- 填表單時 -->
      <div class="row" v-show="route.path == '/order_form'">
        <router-link :to="'/cart'" class="col-4 h4 cartTools_continueShoppingBTN"
          >購物車</router-link
        >
        <router-link :to="'cart/success'" class="offset-1 col-7 h4 cartTools_nextBTN"
          >結帳!</router-link
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
</script>
