<template>
  <section class="products mt-4 mt-lg-0">
    <div class="row products_title h4">
      <div class="col">類別</div>
      <div class="col">名稱</div>
      <div class="col">原價</div>
      <div class="col">售價</div>
      <div class="col">修改</div>
    </div>

    <ul>
      <li class="products_list row" v-for="eachProduct in products" :key="eachProduct.id">
        <div class="col">{{ eachProduct.category }}</div>
        <div class="col">{{ eachProduct.title }}</div>
        <div class="col">{{ eachProduct.origin_price }}</div>
        <div class="col">{{ eachProduct.price }}</div>
        <div class="col">
          <button class="products_list_modifyBTN me-2">編輯</button>
          <button class="products_list_deleteBTN" @click="showDeleteModal(eachProduct.id)">
            刪除
          </button>
        </div>
      </li>
    </ul>
  </section>
  <!-- Modal -->
  <Delete :id="clickID" :mode="'product'" :getData="getData" @instance="deleteInstance" />
</template>

<script setup>
import Delete from "@/components/admin/modifyAdminModal/delete.vue";
import { ref, inject } from "vue";

// 取得資料
const axios = inject("axios");

const products = ref(null);
const pagination = ref(null);
const pageNum = ref(1);

function getData() {
  const productsUrl = `${process.env.VUE_APP_baseUrl}/api/${process.env.VUE_APP_apiPath}/admin/products?page=${pageNum.value}`;
  axios
    .get(productsUrl)
    .then((res) => {
      console.log(res.data);
      if (res.data.success) {
        pagination.value = res.data.pagination;
        products.value = res.data.products;
      }
    })
    .catch((err) => {
      alert(err);
    });
}

getData();
// 取得資料

// 取得 Modal 實體
const modalInstance = ref({});
function deleteInstance(instance) {
  modalInstance.value.delete = instance;
}
// 取得 Modal 實體

// Modal 方法
const clickID = ref(null);

function showDeleteModal(id) {
  clickID.value = id;
  modalInstance.value.delete.show();
}
// Modal 方法
</script>
