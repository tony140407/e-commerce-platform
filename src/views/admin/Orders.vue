<template>
  <section class="products mt-4 mt-lg-0">
    <div class="row products_title h4">
      <div class="col">訂單編號</div>
      <div class="col">總價</div>
      <div class="col">下單時間</div>
      <div class="col">是否付款</div>
      <div class="col">修改</div>
    </div>

    <ul>
      <li class="products_list row" v-for="eachOrder in orders" :key="eachOrder.id">
        <div class="col">{{ eachOrder.id }}</div>
        <div class="col">{{ eachOrder.title }}</div>
        <div class="col">{{ timeNewDate(eachOrder.create_at) }}</div>
        <div
          class="col"
          :class="
            eachOrder.is_paid ? 'products_list_isPaid--success' : 'products_list_isPaid--fail'
          "
        >
          {{ eachOrder.is_paid ? "已付款" : "未付款" }}
        </div>
        <div class="col">
          <button class="products_list_modifyBTN me-2">編輯</button>
          <button class="products_list_deleteBTN" @click="showDeleteModal">刪除</button>
        </div>
      </li>
    </ul>
  </section>

  <!-- Modal -->
  <Delete :id="clickID" :mode="'order'" :getData="getData" @instance="deleteInstance" />
</template>
<script setup>
import { ref, inject } from "vue";
import Delete from "@/components/admin/modifyAdminModal/delete.vue";
const is_paid = ref(false);
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

// 取得訂單資料
const axios = inject("axios");
const orders = ref(null);
const pagination = ref(null);
const pageNum = ref(1);

function getData() {
  const api = `${process.env.VUE_APP_baseUrl}/api/${process.env.VUE_APP_apiPath}/admin/orders?page=${pageNum.value}`;
  axios.get(api).then((res) => {
    if (res.data.success === true) {
      orders.value = res.data.orders;
      pagination.value = res.data.pagination;
      console.log(res.data);
    }
  });
}
// 取得訂單資料

// 處理時間
function timeFormat(time) {
  const timeNewDate = new Date(time * 1000);
  return new Intl.DateTimeFormat("zh-TW", { dateStyle: "short", timeStyle: "short" }).format(
    timeNewDate
  );
}
// 處裡時間
</script>
