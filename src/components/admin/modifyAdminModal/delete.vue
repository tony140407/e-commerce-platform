<template>
  <section class="modal fade" ref="modifyOrderRef">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <h3 class="login_title h3">確定要刪除 {{ id }}</h3>
          <div class="row">
            <button class="col-4" @click="hideModal()">取消</button>
            <button class="col-8" @click="deleteFn()">確定刪除!</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { defineProps, defineEmits, toRefs, ref, onMounted, inject } from "vue";
import { Modal } from "bootstrap";
// props & emit
const props = defineProps({
  mode: String,
  id: String,
  getData: Function,
});
const { mode, id, getData } = toRefs(props);
const emit = defineEmits(["instance"]);

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

// 刪除api
const axios = inject("axios");

const deleteFn = () => {
  hideModal();
  const api = `${process.env.VUE_APP_baseUrl}/api/${process.env.VUE_APP_apiPath}/admin/${mode}/${id}`;
  axios
    .delete(api)
    .then((res) => {
      console.log(res);
      getData.value();
    })
    .catch((error) => {
      console.log(error);
    });
};
</script>
