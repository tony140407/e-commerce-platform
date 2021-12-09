<template>
  <li class="row selectProductItem_item py-3">
    <!-- <div class="col-1">
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value="false"
          v-model="isActive"
          @click=""
          id="flexCheckDefault"
        />
      </div>
    </div> -->
    <div class="col-12 row">
      <div class="col-5 col-lg-3">
        <div
          class="selectProductItem_item_img"
          :style="{ backgroundImage: `url('  ${productDetail.product.imageUrl}  ')` }"
        ></div>
      </div>

      <section class="col-7 col-md-4 col-lg-6 d-flex flex-column justify-content-between">
        <h3 class="h3 selectProductItem_item_title">{{ productDetail.product.title }}</h3>
        <p class="text-truncate">
          {{ productDetail.product.description }}
        </p>
        <p class="h4 m-0">單價： NT${{ productDetail.product.price }}</p>
      </section>
      <section class="col-12 col-md-3 align-self-center mt-3 mt-md-0">
        <div class="mb-3">
          <div class="input-group">
            <span
              class="input-group-text selectProductItem_item_plus_minus"
              @click="changeQty(productDetail.qty - 1)"
              ><font-awesome-icon :icon="['fas', 'minus']" />
            </span>
            <input
              type="text"
              class="form-control text-center"
              @blur="changeQty(productDetail.qty)"
              v-model="productDetail.qty"
            />
            <span
              class="input-group-text selectProductItem_item_plus_minus"
              @click="changeQty(productDetail.qty + 1)"
              ><font-awesome-icon :icon="['fas', 'plus']"
            /></span>
          </div>
        </div>
        <button class="selectProductItem_item_deleteBTN" @click="deleteSingleProduct">刪除</button>
      </section>
    </div>
  </li>
</template>

<script setup>
import { ref, watch, defineProps, toRefs, inject } from "vue";
import { storeData, getCartData } from "@/js/storeData.js";

// props & emit
const props = defineProps({
  productDetail: Object,
});
const { productDetail } = toRefs(props);
console.log(productDetail.value);

// 變更購物車
const axios = inject("axios");
const VueSweetalert2 = inject("VueSweetalert2");

function changeQty(num) {
  productDetail.value.qty = num;
  // axios
  axiosPutCartQty(num);
  function axiosPutCartQty(qty) {
    const data = { data: { product_id: productDetail.value.product_id, qty: qty } };
    const api = `${process.env.VUE_APP_baseUrl}/api/${process.env.VUE_APP_apiPath}/cart/${productDetail.value.id}`;
    axios
      .put(api, data)
      .then((res) => {
        if (res.data.success == true) {
          VueSweetalert2({
            icon: "success",
            title: "成功改變商品數量!",
            timer: 1000,
            showCloseButton: false,
            showCancelButton: false,
          });
          getCartData();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

function deleteSingleProduct() {
  const api = `${process.env.VUE_APP_baseUrl}/api/${process.env.VUE_APP_apiPath}/cart/${productDetail.value.id}`;
  axios
    .delete(api)
    .then((res) => {
      if (res.data.success == true) {
        // storeData.carts
        VueSweetalert2({
          icon: "success",
          title: "已從購物車中刪除產品!",
          timer: 1000,
          showCloseButton: false,
          showCancelButton: false,
        });
        getCartData();
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

// function getCartData() {
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
</script>
