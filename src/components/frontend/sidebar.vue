<template>
  <section class="sidebar d-flex d-lg-block justify-content-between">
    <ul class="sidebar_btn_wrapper">
      <li>
        <button
          class="sidebar_btn h4 mb-lg-3"
          :class="{ 'sidebar_btn--active': whichSidebarBtnActive == '全部' }"
          @click="changeSidebarBtnActive('全部')"
        >
          全部
        </button>
      </li>
      <li>
        <button
          class="sidebar_btn h4 mb-lg-3"
          :class="{ 'sidebar_btn--active': whichSidebarBtnActive == '衣服' }"
          @click="changeSidebarBtnActive('衣服')"
        >
          衣服
        </button>
      </li>
      <li>
        <button
          class="sidebar_btn h4 mb-lg-3"
          :class="{ 'sidebar_btn--active': whichSidebarBtnActive == '褲子' }"
          @click="changeSidebarBtnActive('褲子')"
        >
          褲子
        </button>
      </li>
      <li>
        <button
          class="sidebar_btn h4 mb-lg-3"
          :class="{ 'sidebar_btn--active': whichSidebarBtnActive == '鞋子' }"
          @click="changeSidebarBtnActive('鞋子')"
        >
          鞋子
        </button>
      </li>
      <li>
        <button
          class="sidebar_btn h4 mb-lg-3"
          :class="{ 'sidebar_btn--active': whichSidebarBtnActive == '外套' }"
          @click="changeSidebarBtnActive('外套')"
        >
          外套
        </button>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { ref } from "vue";
const emit = defineEmits(["sidebarSelect"]);
const whichSidebarBtnActive = ref("全部");
function changeSidebarBtnActive(category) {
  whichSidebarBtnActive.value = category;
  emit("sidebarSelect", whichSidebarBtnActive.value);
}
</script>
