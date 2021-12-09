<template>
  <div class="cartTools" v-show="route.path !== '/success'">
    <div class="container">
      <div class="cartTools_total">
        <p class="h3">總計: NT${{ storeData.final_total }}</p>
        <p class="Cart_note">單筆滿NT$700以上免運費!</p>
      </div>

      <!-- 購物車時 -->
      <div class="row" v-show="route.path == '/cart'">
        <router-link :to="'/shop'" class="col-4 h4 cartTools_continueShoppingBTN"
          >繼續逛</router-link
        >
        <router-link
          :to="'cart/order_form'"
          class="offset-1 col-7 h4 cartTools_nextBTN"
          :disabled="testCartLength"
          >下一步</router-link
        >
      </div>
      <!-- 填表單時 -->
      <div class="row" v-show="route.path == '/order_form'">
        <router-link :to="'/cart'" class="col-4 h4 cartTools_continueShoppingBTN"
          >購物車</router-link
        >
        <a class="offset-1 col-7 h4 cartTools_nextBTN" @click="onSubmit">結帳!</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, inject } from "vue";
import { storeData } from "@/js/storeData.js";
import { useRouter, useRoute } from "vue-router";
const VueSweetalert2 = inject("VueSweetalert2");
const axios = inject("axios");

const router = useRouter();
const route = useRoute();

// 防止購物車沒有商品卻送出訂單
const testCartLength = ref(storeData.carts.length == 0 ? false : true);
// 防止購物車沒有商品卻送出訂單

// 送出訂單
function onSubmit() {
  const { name, email, tel, address } = storeData.orderData.data.user;
  if (name == "" || email == "" || tel == "" || address == "") {
    VueSweetalert2({
      icon: "error",
      title: "請填妥個人資訊",
      timer: 1200,
      showCloseButton: false,
      showCancelButton: false,
    });
    return;
  }
  const totalUrl = `${process.env.VUE_APP_baseUrl}/api/${process.env.VUE_APP_apiPath}/order`;
  axios.post(totalUrl, storeData.orderData).then((res) => {
    router.push({
      name: "Success",
    });
  });
}
// 送出訂單
</script>
