<template>
  <section class="card">
    <div class="row">
      <div class="col-6 col-md-4 offset-md-1 col-lg-6 offset-lg-0">
        <div class="card_product_img_wrapper">
          <div
            class="card_product_img"
            :style="{ backgroundImage: `url('  ${productDetail.imageUrl}  ')` }"
          ></div>
        </div>
      </div>
      <div
        class="card_detail col-6 offset-md-1 offset-lg-0 d-flex flex-column justify-content-between"
      >
        <div class="card_detail_dark">
          <h4 class="card_detail_name">{{ productDetail.title }}</h4>
          <p class="card_detail_price">NT${{ productDetail.price }}</p>
        </div>
        <div class="card_detail_light">
          <ul class="card_detail_size row">
            <li
              class="card_detail_size_item col-4"
              :class="{ 'card_detail_size_item--active': card_detail_size == 'XS' }"
              @click="card_detail_size = 'XS'"
            >
              XS
            </li>
            <li
              class="card_detail_size_item col-4"
              :class="{ 'card_detail_size_item--active': card_detail_size == 'S' }"
              @click="card_detail_size = 'S'"
            >
              S
            </li>
            <li
              class="card_detail_size_item col-4"
              :class="{ 'card_detail_size_item--active': card_detail_size == 'M' }"
              @click="card_detail_size = 'M'"
            >
              M
            </li>
            <li
              class="card_detail_size_item col-4"
              :class="{ 'card_detail_size_item--active': card_detail_size == 'L' }"
              @click="card_detail_size = 'L'"
            >
              L
            </li>
            <li
              class="card_detail_size_item col-4"
              :class="{ 'card_detail_size_item--active': card_detail_size == 'XL' }"
              @click="card_detail_size = 'XL'"
            >
              XL
            </li>
            <li
              class="card_detail_size_item col-4"
              :class="{ 'card_detail_size_item--active': card_detail_size == 'XXL' }"
              @click="card_detail_size = 'XXL'"
            >
              XXL
            </li>
          </ul>
          <button class="card_addCartBtn" @click="addCart()">加入購物車</button>
        </div>
      </div>
    </div>
    <span
      class="card_likeIcon"
      :class="{ 'card_likeIcon--active': card_likeIcon_isActive }"
      @click="card_likeIcon_isActive = !card_likeIcon_isActive"
      ><font-awesome-icon :icon="card_likeIcon_isActive ? ['fas', 'heart'] : ['far', 'heart']"
    /></span>
  </section>
</template>
<script setup>
import { defineProps, toRefs, inject, ref, computed } from "vue";
const props = defineProps({
  productDetail: Object,
});
const { productDetail } = toRefs(props);

const card_detail_size = ref("XS");
const currentProductID = computed(() => productDetail.value.size[card_detail_size.value]);

const card_likeIcon_isActive = ref(false);
// 變更 size
function changeSize() {}

// 加入購物車
const axios = inject("axios");
const VueSweetalert2 = inject("VueSweetalert2");
function addCart() {
  const totalUrl = `${process.env.VUE_APP_baseUrl}/api/${process.env.VUE_APP_apiPath}/cart`;
  const postData = { data: { product_id: currentProductID.value, qty: 1 } };

  axios.post(totalUrl, postData).then((res) => {
    if (res.data.success == true) {
      VueSweetalert2({
        icon: "success",
        title: "已加入購物車!",
        timer: 1000,
        showCloseButton: false,
        showCancelButton: false,
      });
    }
  });
}
</script>
