<template>
  <section class="card">
    <div class="row">
      <div class="col-6">
        <div class="card_product_img_wrapper">
          <div class="card_product_img" :style="{ backgroundImage: `url('  ${testImg}  ')` }"></div>
        </div>
      </div>
      <div class="card_detail col-6 d-flex flex-column justify-content-between">
        <div class="card_detail_dark">
          <h4 class="card_detail_name">斯雅的帽子</h4>
          <p class="card_detail_price">$1500</p>
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
          <button class="card_addCartBtn">加入購物車</button>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from "vue";
const testImg =
  "https://images.unsplash.com/photo-1607352208720-3f8883a35f9e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80";

const card_detail_size = ref("XS");
</script>
