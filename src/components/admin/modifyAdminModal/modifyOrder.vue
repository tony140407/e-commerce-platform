<template>
  <section class="modifyOrder modal fade" ref="modifyOrderRef">
    <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content modal-lg">
        <div class="modal-body">
          <h3 class="modifyOrder_title h4 mb-3">修改訂單</h3>

          <div class="modifyOrder_productList_title">
            <div class="row">
              <div class="col-4">名稱</div>
              <div class="col-2">數量</div>
              <div class="col-3">價格</div>
              <div class="col-3">刪除</div>
            </div>
          </div>
          <ul class="modifyOrder_productList_body mb-3">
            <li
              class="row modifyOrder_productList_body_listItem"
              v-for="eachProduct in modifyTemplate.products"
              :key="eachProduct.id"
            >
              <div class="col-4">{{ eachProduct.product.title }}</div>
              <div class="col-2">
                <input
                  class="modifyOrder_productList_body_input"
                  type="number"
                  v-model="eachProduct.qty"
                  @change="changeTotal()"
                />
              </div>
              <div class="col-3">{{ eachProduct.qty * eachProduct.product.price }}</div>
              <div class="col-3">
                <button
                  class="modifyOrder_productList_body_deleteBTN"
                  @click="showDeleteModal(eachOrder.id)"
                >
                  刪除
                </button>
              </div>
            </li>
          </ul>
          <div class="row modifyOrder_productList_body_totalCost h3">
            <div class="col-6 text-center">總計:</div>
            <div class="col-6 text-center">{{ modifyTemplate.total }}</div>
          </div>
          <div class="row gx-2">
            <button
              class="col-4 modifyOrder_productList_footer_btn_cancel"
              @click="
                hideModal();
                initModifyTemplate();
              "
            >
              取消
            </button>
            <button
              class="col-7 offset-1 modifyOrder_productList_footer_btn_confirm"
              @click="
                hideModal();
                modifyOrderFn();
              "
            >
              確定修改!
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { toRefs, ref, onMounted, inject, watch } from "vue";
import { Modal } from "bootstrap";
// props & emit
const props = defineProps({
  orders: Object,
  getData: Function,
  id: String,
});
const { orders, getData, id } = toRefs(props);
const emit = defineEmits(["instance"]);

// 複製template，以供初始化
const modifyTemplate = ref([]);
const initModifyTemplate = () => {
  const found = orders.value.find((element) => element.id == id.value);
  modifyTemplate.value = JSON.parse(JSON.stringify(found));
};
watch(
  () => id.value,
  () => {
    initModifyTemplate();
  }
);
// bootstrap modal 建立並emit到父原件以供顯現( show() )
const modifyOrderRef = ref(null);
const modifyOrderModal = ref(null);
onMounted(() => {
  modifyOrderModal.value = new Modal(modifyOrderRef.value);
  emit("instance", modifyOrderModal.value);
});
const hideModal = () => {
  modifyOrderModal.value.hide();
};
// --------------------------------------------------

// 更新訂單 API
const axios = inject("axios");

const modifyOrderFn = () => {
  let api;
  const sendData = {
    data: {
      ...modifyTemplate.value,
    },
  };
  api = `${process.env.VUE_APP_baseUrl}/api/${process.env.VUE_APP_apiPath}/admin/order/${id.value}`;
  axios
    .put(api, sendData)
    .then((res) => {
      console.log(res);
      getData.value();
    })
    .catch((error) => {
      console.log(error);
    });
};

// 改變價格
function changeTotal() {
  console.log("changeTotal");
  let totalSum = 0;
  const productsID = Object.keys(modifyTemplate.value.products);
  productsID.forEach((eachID) => {
    totalSum +=
      modifyTemplate.value.products[eachID].qty *
      modifyTemplate.value.products[eachID].product.price;
  });
  modifyTemplate.value.total = totalSum;
}
</script>
