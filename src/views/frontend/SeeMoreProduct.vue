<template>
  <section class="seeMoreProduct container py-5">
    <div v-if="specialProduct.id" class="row">
      <div class="col-12 col-md-8">
        <img class="img-fluid" :src="specialProduct.imageUrl" alt="" />
      </div>
      <div class="col-12 col-md-4 d-lg-flex flex-column justify-content-between">
        <div>
          <h3 class="seeMoreProduct_title h3">{{ specialProduct.title }}</h3>
          <p class="seeMoreProduct_description">
            {{ specialProduct.description }}
          </p>
          <p class="seeMoreProduct_price mb-3">NT${{ specialProduct.price }}</p>
          <div class="row g-0 mb-2">
            <select class="seeMoreProduct_inputNum col-4">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            <button class="seeMoreProduct_addCart offset-1 col-7">加入購物車</button>
          </div>
        </div>

        <div class="mt-5 mb-md-0">
          <p class="seeMoreProduct_title h4 mb-2">商品購買須知</p>
          <p class="mb-5">
            產品因拍攝關係顏色可能略有差異，實際以廠商出貨為主。
            商品情境照為示意用，僅商品主體不包含其他配件，請以規格內容物為主。 Wardrobe
            盡可能確保所列商品備貨充足，但偶爾仍會有產品售罄的情況。如您所訂購的商品庫存不足，我們將盡快以電子郵件通知您。任何訂單變動均會在訂單總額與出貨訊息內更新。
          </p>
          <p class="seeMoreProduct_title h4 mb-2">退換貨須知</p>
          <p>
            依《消費者保護法》的規定，於全站購物皆享有商品到貨【七日猶豫期】（含例假日）之權益。若收到的商品有任何問題，可於猶豫期內申請退貨。
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, inject } from "vue";
import { storeData } from "@/js/storeData.js";
import { useRoute } from "vue-router";

const route = useRoute();
// api 取得資料
const axios = inject("axios");

const specialProduct = ref({ id: null });
function init() {
  console.log(storeData.originProducts);
  if (storeData.originProducts.length !== 0) {
    storeData.originProducts.find((element) => {
      if (element.id == route.params.id) {
        specialProduct.value = element;
        return;
      }
    });
  } else {
    console.log("axios");
    getData();
  }
  function getData() {
    const api = `${process.env.VUE_APP_baseUrl}/api/${process.env.VUE_APP_apiPath}/product/${route.params.id}`;
    axios
      .get(api)
      .then((res) => {
        specialProduct.value = res.data.product;
        console.log(specialProduct.value);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
init();
const testImg = ref(
  "https://images.unsplash.com/photo-1481277542470-605612bd2d61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1406&q=80"
);
</script>
