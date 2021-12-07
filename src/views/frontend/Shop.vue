<template>
  <section class="Shop container mx-auto my-5">
    <div class="row gx-5">
      <Sidebar class="col-12 col-lg-3" @sidebarSelect="changeSelectCategories" />
      <div class="col-12 col-lg-9">
        <div class="row gy-3">
          <div class="col-12 col-lg-6" v-for="eachProduct in filterProducts" :key="eachProduct">
            <Card :productDetail="eachProduct" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Sidebar from "@/components/frontend/sidebar.vue";
import Card from "@/components/frontend/card.vue";
import { storeData } from "@/js/storeData.js";
import { ref, inject, watch } from "vue";
//
const filterProducts = ref([]);
const selectCategories = ref("全部");
// api 取得資料
const axios = inject("axios");
function getData() {
  const api = `${process.env.VUE_APP_baseUrl}/api/${process.env.VUE_APP_apiPath}/products/all`;
  axios
    .get(api)
    .then((res) => {
      storeData.originProducts = res.data.products;
      storeData.products = JSON.parse(JSON.stringify(res.data.products));
      reorganization();
    })
    .catch((error) => {
      console.log(error);
    });
}
function reorganization() {
  changeCardCategory();
  cleanFilterProducts();
}
watch(
  () => selectCategories.value,
  () => {
    reorganization();
  }
);
function changeCardCategory() {
  if (selectCategories.value == "全部") {
    filterProducts.value = storeData.products;
    return;
  }
  filterProducts.value = storeData.products.filter(
    (product) => product.category === selectCategories.value
  );
}
function cleanFilterProducts() {
  // 資料庫刪不掉的資料
  const excessDataIndex = filterProducts.value.findIndex(
    (element) => element.title == "[賣]動物園造型衣服3"
  );
  if (excessDataIndex !== -1) {
    filterProducts.value.splice(excessDataIndex, 1);
  }

  // 資料庫刪不掉的資料
  // 過濾 size 資訊
  const bracketReg = /\(*\)/; //所有有括號的
  const sizeReg = {
    XS: /\(+XS+\)/,
    S: /\(+S+\)/,
    M: /\(+M+\)/,
    L: /\(+L+\)/,
    XL: /\(+XL+\)/,
    XXL: /\(+XXL+\)/,
  };
  const sizeList = ["XS", "S", "M", "L", "XL", "XXL"];
  let newProducts = [];
  // 先找出無size的樣本
  filterProducts.value.filter((eachProduct) => {
    // 沒有括號的拉出來當Card size屬性填入同名產品
    if (!bracketReg.test(eachProduct.title)) {
      eachProduct.size = {
        XS: "",
        S: "",
        M: "",
        L: "",
        XL: "",
        XXL: "",
      };
      newProducts.push(eachProduct);
    }
  });
  // 有括號的 ID 填入 size 屬性中
  sizeList.filter((eachSize) => {
    filterProducts.value.filter((eachProduct) => {
      if (sizeReg[eachSize].test(eachProduct.title)) {
        const key = eachProduct.title.replace(sizeReg[eachSize], "");
        newProducts.find((eachNewProduct) => {
          if (eachNewProduct.title == key) {
            eachNewProduct.size[eachSize] = eachProduct.id;
            return true;
          }
        });
      }
    });
  });
  filterProducts.value = newProducts;
}
function changeSelectCategories(value) {
  selectCategories.value = value;
}
getData();
</script>

<style lang="scss" scoped></style>
