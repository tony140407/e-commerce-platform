<template>
  <section class="modifyProduct modal fade" ref="modifyProductRef">
    <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content modal-lg">
        <div class="modal-body">
          <h3 class="modifyProduct_title h4 mb-3">
            {{ id == "" ? "新增產品" : "修改產品" }}
          </h3>
          <div class="row">
            <div class="col-sm-4">
              <div class="mb-1">
                <div class="form-group">
                  <label for="imageUrl">輸入圖片網址</label>
                  <input
                    type="text"
                    id="imageUrl"
                    class="form-control"
                    placeholder="請輸入圖片連結"
                    v-model="inputNewImg"
                  />
                </div>

                <figure>
                  <img class="img-fluid img-zoom" :src="modifyTemplate.imageUrl" alt="" />
                </figure>
              </div>
              <div class="mb-3">
                <button
                  class="btn modifyProduct_addImgBtn btn-sm d-block w-100 mb-1"
                  @click="addNewImg"
                >
                  新增圖片
                </button>

                <button
                  class="btn modifyProduct_deleteImgBtn btn-sm d-block w-100 mb-1"
                  @click="deleteImg"
                >
                  刪除圖片
                </button>
              </div>
              <div class="row g-2">
                <div
                  class="col-6 img-zoom"
                  v-for="(eachUrl, index) in modifyTemplate.imagesUrl"
                  :key="eachUrl"
                >
                  <figure @click="">
                    <img class="img-fluid" :src="eachUrl" />
                  </figure>
                </div>
              </div>
            </div>
            <div class="col-sm-8">
              <div class="form-group">
                <label for="title" class="required">標題</label>
                <input
                  id="title"
                  type="text"
                  class="form-control"
                  placeholder="請輸入標題"
                  v-model.trim="modifyTemplate.title"
                />
              </div>

              <div class="row">
                <div class="form-group col-md-6">
                  <label for="category" class="required">分類</label>
                  <input
                    id="category"
                    type="text"
                    class="form-control"
                    placeholder="請輸入分類"
                    v-model="modifyTemplate.category"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label for="unit" class="required">單位</label>
                  <input
                    id="unit"
                    type="text"
                    class="form-control"
                    placeholder="請輸入單位"
                    v-model="modifyTemplate.unit"
                  />
                </div>
              </div>

              <div class="row">
                <div class="form-group col-md-6">
                  <label for="origin_price" class="required">原價</label>
                  <input
                    id="origin_price"
                    type="number"
                    min="0"
                    class="form-control"
                    placeholder="請輸入原價"
                    v-model.number="modifyTemplate.origin_price"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label for="price" class="required">售價</label>
                  <input
                    id="price"
                    type="number"
                    min="0"
                    class="form-control"
                    placeholder="請輸入售價"
                    v-model.number="modifyTemplate.price"
                  />
                </div>
              </div>
              <hr />

              <div class="form-group">
                <label for="description">產品描述</label>
                <textarea
                  id="description"
                  type="text"
                  class="form-control"
                  placeholder="請輸入產品描述"
                  v-model="modifyTemplate.description"
                >
                </textarea>
              </div>
              <div class="form-group">
                <label for="content">說明內容</label>
                <textarea
                  id="content"
                  type="text"
                  class="form-control"
                  placeholder="請輸入說明內容"
                  v-model="modifyTemplate.content"
                >
                </textarea>
              </div>
              <div class="form-group">
                <div class="form-check">
                  <label class="form-check-label" for="is_enabled">是否啟用</label>
                  <input
                    id="is_enabled"
                    class="form-check-input"
                    type="checkbox"
                    :true-value="true"
                    :false-value="false"
                    v-model="modifyTemplate.is_enabled"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="row gx-2">
            <button
              class="col-4 modifyProduct_btn modifyProduct_btn_cancel"
              @click="
                hideModal();
                initModifyTemplate();
              "
            >
              取消
            </button>
            <button
              class="col-7 offset-1 modifyProduct_btn modifyProduct_btn_confirm"
              @click="
                hideModal();
                modifyProductFn();
              "
            >
              確定{{ id == "" ? "新增" : "修改" }}!
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
import { apiUpdateAdminProducts } from "@/js/api.js";
import { changeLoading } from "@/js/storeData.js";
// props & emit
const props = defineProps({
  template: Object,
  getData: Function,
  id: String,
});
const { template, getData, id } = toRefs(props);
const emit = defineEmits(["instance"]);
// 複製template，以防修改時改到原資料
const modifyTemplate = ref(template.value);
watch(
  () => id.value,
  () => {
    modifyTemplate.value = JSON.parse(JSON.stringify(template.value));
  }
);
function initModifyTemplate() {
  modifyTemplate.value = JSON.parse(JSON.stringify(template.value));
}
// bootstrap modal 建立並emit到父原件以供顯現( show() )
const modifyProductRef = ref(null);
const modifyProductModal = ref(null);
onMounted(() => {
  modifyProductModal.value = new Modal(modifyProductRef.value);
  emit("instance", modifyProductModal.value);
});
const hideModal = () => {
  modifyProductModal.value.hide();
};
// --------------------------------------------------
const inputNewImg = ref(null);
function addNewImg() {
  if (!modifyTemplate.value) {
    modifyTemplate.value.imageUrl = inputNewImg.value;
    inputNewImg.value = "";
    return;
  }
  if (!modifyTemplate.value.imagesUrl) {
    modifyTemplate.value.imagesUrl = [];
  }
  modifyTemplate.value.imagesUrl = modifyTemplate.value.imagesUrl.concat(
    modifyTemplate.value.imageUrl
  );
  modifyTemplate.value.imageUrl = inputNewImg.value;
  inputNewImg.value = "";
}
function deleteImg() {
  if (modifyTemplate.value.imageUrl === "") return;
  if (modifyTemplate.value.imagesUrl) {
    const newImgArr = modifyTemplate.value.imagesUrl.splice(0, 1);
    const newImg = newImgArr[0];
    modifyTemplate.value.imageUrl = newImg;
    inputNewImg.value = newImg; // 不知為何也需要修改 inputNewImg
  } else {
    modifyTemplate.value.imageUrl = "";
  }
}

// --------------------------------------------------
// 更新產品 / 新稱產品 API
const modifyProductFn = () => {
  changeLoading(true);
  const sendData = {
    data: {
      ...modifyTemplate.value,
    },
  };
  if (id.value == "") {
    // 新增產品
    apiUpdateAdminProducts("post", "", sendData)
      .then((res) => {
        changeLoading(false);
        getData.value();
      })
      .catch((error) => {
        changeLoading(false);
        console.log(error);
      });
  } else {
    // 修改產品
    apiUpdateAdminProducts("put", id.value, sendData)
      .then((res) => {
        changeLoading(false);
        getData.value();
      })
      .catch((error) => {
        changeLoading(false);
        console.log(error);
      });
  }
};
</script>
