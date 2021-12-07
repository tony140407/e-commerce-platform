<template>
  <section class="seeMoreProduct container py-5">
    <div class="row">
      <div class="col-12 col-md-8">
        <img class="img-fluid" :src="testImg" alt="" />
      </div>
      <div class="col-12 col-md-4 d-lg-flex flex-column justify-content-between">
        <div>
          <h3 class="seeMoreProduct_title h3">CHANEL N°5</h3>
          <p class="seeMoreProduct_description">
            N°5，女性魅力的極致精髓。散發柔美澄透的乙醛花束香氣。經典傳奇香氛，蘊藏於極簡設計的獨特瓶身。
          </p>
          <p class="seeMoreProduct_price mb-3">NT$4,980</p>
          <div class="row g-0 mb-2">
            <select class="seeMoreProduct_inputNum col-4">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            <button class="seeMoreProduct_addCart offset-1 col-7">加入購物車</button>
          </div>
          <!-- <a class="d-block text-black">
            <font-awesome-icon :icon="['far', 'heart']" class='' /><span>加入我的收藏</span></a
          > -->
        </div>

        <div class="mb-10 mb-md-0">
          <p class="font-weight-bolder mb-2">商品購買須知</p>
          <p class="mb-5">
            產品因拍攝關係顏色可能略有差異，實際以廠商出貨為主。
            商品情境照為示意用，僅商品主體不包含其他配件，請以規格內容物為主。 D’Perfume
            盡可能確保所列商品備貨充足，但偶爾仍會有產品售罄的情況。如您所訂購的商品庫存不足，我們將盡快以電子郵件通知您。任何訂單變動均會在訂單總額與出貨訊息內更新。
          </p>
          <p class="font-weight-bolder mb-2">退換貨須知</p>
          <p>
            依《消費者保護法》的規定，於全站購物皆享有商品到貨【七日猶豫期】（含例假日）之權益。若收到的商品有任何問題，可於猶豫期內申請退貨。
          </p>
        </div>
        <div class="row d-md-none mb-10">
          <img class="col-12 img-fluid mb-4" src="../img/pages/productIntro/phone1.png" alt="" />
          <img class="col-12 img-fluid mb-4" src="../img/pages/productIntro/phone2.png" alt="" />
          <img class="col-12 img-fluid" src="../img/pages/productIntro/phone3.png" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
const testImg = ref(
  "https://images.unsplash.com/photo-1481277542470-605612bd2d61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1406&q=80"
);
</script>
