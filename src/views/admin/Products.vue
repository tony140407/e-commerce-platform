<template>
  <section class="products mt-4 mt-lg-0">
    <div class="products_addNewProduct mb-4">
      <button class="products_addNewProduct_btn" @click="showProductModal()">新增產品</button>
    </div>

    <div class="row products_title h4">
      <div class="col">類別</div>
      <div class="col">名稱</div>
      <div class="col">原價</div>
      <div class="col">售價</div>
      <div class="col">修改</div>
    </div>

    <ul class="mb-4">
      <li class="products_list row mb-2" v-for="eachProduct in products" :key="eachProduct.id">
        <div class="col">{{ eachProduct.category }}</div>
        <div class="col">{{ eachProduct.title }}</div>
        <div class="col">{{ eachProduct.origin_price }}</div>
        <div class="col">{{ eachProduct.price }}</div>
        <div class="col">
          <button class="products_list_modifyBTN me-lg-2" @click="showProductModal(eachProduct)">
            編輯
          </button>
          <button class="products_list_deleteBTN" @click="showDeleteModal(eachProduct.id)">
            刪除
          </button>
        </div>
      </li>
    </ul>
    <Pagination :pagination="pagination" />
  </section>

  <!-- Modal -->
  <ModifyProduct
    :id="clickID"
    :template="template"
    :getData="getData"
    @instance="modifyProductInstance"
  />
  <Delete :id="clickID" :mode="'product'" :getData="getData" @instance="deleteInstance" />
</template>

<script setup>
import Pagination from "@/components/admin/pagination.vue";
import ModifyProduct from "@/components/admin/modifyAdminModal/modifyProduct.vue";
import Delete from "@/components/admin/modifyAdminModal/delete.vue";
import { ref, inject } from "vue";
import { apiGetAdminProducts } from "@/js/api.js";

// modifyProduct / addProduct
const template = ref({
  category: "",
  content: "",
  description: "",
  id: "",
  is_enabled: true,
  origin_price: 0,
  price: 0,
  title: "",
  unit: "",
  num: 1,
  imageUrl: "",
  imagesUrl: [],
});
const emptyTemplate = {
  category: "",
  content: "",
  description: "",
  id: "",
  is_enabled: true,
  origin_price: 0,
  price: 0,
  title: "",
  unit: "",
  num: 1,
  imageUrl: "",
  imagesUrl: [],
};
// 取得資料
const axios = inject("axios");

const products = ref(null);
const pagination = ref(null);
const pageNum = ref(1);

// 取得資料
function getData() {
  apiGetAdminProducts(pageNum.value)
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

// 取得 Modal 實體
const modalInstance = ref({});

function modifyProductInstance(instance) {
  modalInstance.value.modifyProduct = instance;
}
function deleteInstance(instance) {
  modalInstance.value.delete = instance;
}
// 取得 Modal 實體

// Modal 方法
const clickID = ref(null);
function showProductModal(productDetail) {
  if (!productDetail || productDetail.id == "") {
    clickID.value = "";
    template.value = emptyTemplate;
    modalInstance.value.modifyProduct.show();
    return;
  }
  template.value = productDetail;
  clickID.value = template.value.id;
  modalInstance.value.modifyProduct.show();
}
function showDeleteModal(id) {
  clickID.value = id;
  modalInstance.value.delete.show();
}
// Modal 方法
</script>
