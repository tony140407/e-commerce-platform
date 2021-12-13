<template>
  <section class="delete modal fade" ref="deleteRef">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content p-2">
        <div class="modal-body">
          <h3 class="delete_title h4 mb-5">確定要刪除 {{ id }} ?</h3>
          <p class="mb-5 h3">一旦刪除資料將無法尋回!</p>
          <div class="row gx-2">
            <button class="col-4 delete_btn delete_btn_cancel" @click="hideModal">取消</button>
            <button class="col-7 offset-1 delete_btn delete_btn_confirm" @click="deleteFn">
              確定刪除!
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { toRefs, ref, onMounted } from "vue";
import { Modal } from "bootstrap";
import { apiDeleteAdminProduct, apiDeletAdmineOrder } from "@/js/api.js";
// props & emit
const props = defineProps({
  mode: String,
  id: String,
  getData: Function,
});
const { mode, id, getData } = toRefs(props);
const emit = defineEmits(["instance"]);

// bootstrap modal 建立並emit到父原件以供顯現( show() )
const deleteRef = ref(null);
const deleteModal = ref(null);
onMounted(() => {
  deleteModal.value = new Modal(deleteRef.value);
  emit("instance", deleteModal.value);
});
const hideModal = () => {
  deleteModal.value.hide();
};
// --------------------------------------------------
// 刪除api

const deleteFn = () => {
  hideModal();
  if (mode.value == "product") {
    apiDeleteAdminProduct(id.value)
      .then((res) => {
        getData.value();
      })
      .catch((error) => {
        console.log(error);
      });
  } else if (mode.value == "order") {
    apiDeletAdmineOrder(id.value)
      .then((res) => {
        getData.value();
      })
      .catch((error) => {
        console.log(error);
      });
  }
};
</script>
