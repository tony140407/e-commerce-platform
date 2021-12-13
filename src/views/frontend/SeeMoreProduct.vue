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

    <Recommend class="w-100" />
  </section>
</template>

<script setup>
import { ref, watch } from "vue";
import { storeData, getShopData } from "@/js/storeData.js";
import Recommend from "@/components/frontend/cart/recommend.vue";
import { useRoute } from "vue-router";

const route = useRoute();

const specialProduct = ref({ id: null });

function findProduct() {
  storeData.originProducts.find((element) => {
    if (element.id == route.params.id) {
      specialProduct.value = element;
      return;
    }
  });
}
function init() {
  if (storeData.originProducts.length !== 0) {
    findProduct();
  } else {
    getShopData();
    watch(
      () => storeData.originProducts,
      () => {
        findProduct();
      }
    );
  }
}

init();
</script>
