<template>
  <li
    class="row selectProductItem_item py-3"
    :class="{ 'selectProductItem_item--active': isActive }"
  >
    <div class="col-1">
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value="false"
          v-model="isActive"
          id="flexCheckDefault"
        />
      </div>
    </div>
    <div class="col-11 row">
      <div class="col-5 col-lg-3"><img class="img-fluid" :src="testImg" alt="" /></div>

      <section class="col-7 col-md-4 col-lg-6 d-flex flex-column justify-content-between">
        <h3 class="h3 selectProductItem_item_title">產品名</h3>
        <p class="text-truncate d-none d-md-block">
          普賽爾在過去曾經講過，所謂企業管理就是解決一連串關係密切的問題，必須有系統地予以解決，否則將會造成損失。強烈建議大家把這段話牢牢記住。儘管測試看似不顯眼，卻佔據了我的腦海。
        </p>
        <p class="h4 m-0">NT$100</p>
      </section>
      <section class="col-12 col-md-3 align-self-center mt-3 mt-md-0">
        <div class="mb-3">
          <div class="input-group">
            <span class="input-group-text selectProductItem_item_plus_minus" @click=""
              ><font-awesome-icon :icon="['fas', 'minus']" />
            </span>
            <input type="text" class="form-control text-center" value="1" />
            <span class="input-group-text selectProductItem_item_plus_minus" @click=""
              ><font-awesome-icon :icon="['fas', 'plus']"
            /></span>
          </div>
        </div>
        <button class="selectProductItem_item_deleteBTN">刪除</button>
      </section>
    </div>
  </li>
</template>

<script setup>
import { ref } from "vue";
const testImg = ref(
  "https://images.unsplash.com/photo-1481277542470-605612bd2d61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1406&q=80"
);

const isActive = ref(false);
</script>
