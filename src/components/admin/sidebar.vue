<template>
  <section class="sidebar d-flex d-lg-block justify-content-between">
    <ul class="sidebar_btn_wrapper">
      <li>
        <router-link
          class="sidebar_btn h4 mb-lg-3"
          :class="{ 'sidebar_btn--active': path == '/admin/' }"
          :to="'/admin/'"
        >
          產品
        </router-link>
      </li>
      <li>
        <router-link
          class="sidebar_btn h4 mb-lg-3"
          :class="{ 'sidebar_btn--active': path == '/admin/orders' }"
          :to="'/admin/orders'"
        >
          訂單
        </router-link>
      </li>
      <li>
        <router-link
          class="sidebar_btn h4 mb-lg-3"
          :class="{ 'sidebar_btn--active': path == '/admin/coupons' }"
          :to="'/admin/coupons'"
        >
          優惠券
        </router-link>
      </li>
      <li>
        <button class="sidebar_btn h4 mb-lg-3">登出</button>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { ref, watch } from "vue";
const whichSidebarBtnActive = ref("products");

import { useRoute } from "vue-router";

const route = useRoute();

const path = ref("/admin/");
watch(route, (newValue) => {
  path.value = newValue.path;
});
</script>
