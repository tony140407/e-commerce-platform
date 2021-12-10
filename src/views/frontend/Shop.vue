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
import { storeData, getShopData } from "@/js/storeData.js";
import { ref, inject, watch } from "vue";

const filterProducts = ref([]);
const selectCategories = ref("全部");
watch(
  () => storeData.products,
  () => {
    filterProducts.value = storeData.products;
    changeCardCategory();
  }
);
watch(
  () => selectCategories.value,
  () => {
    changeCardCategory();
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
function changeSelectCategories(value) {
  selectCategories.value = value;
}
getShopData();
</script>
