<template>
  <section class="sidebar d-flex d-md-block justify-content-between">
    <ul class="sidebar_btn_wrapper">
      <li>
        <button
          class="sidebar_btn h4 mb-md-3"
          :class="{ 'sidebar_btn--active': whichSidebarBtnActive == 'all' }"
          @click="changeSidebarBtnActive('all')"
        >
          全部
        </button>
      </li>
      <li>
        <button
          class="sidebar_btn h4 mb-md-3"
          :class="{ 'sidebar_btn--active': whichSidebarBtnActive == 'clothes' }"
          @click="changeSidebarBtnActive('clothes')"
        >
          衣服
        </button>
      </li>
      <li>
        <button
          class="sidebar_btn h4 mb-md-3"
          :class="{ 'sidebar_btn--active': whichSidebarBtnActive == 'pants' }"
          @click="changeSidebarBtnActive('pants')"
        >
          褲子
        </button>
      </li>
      <li>
        <button
          class="sidebar_btn h4 mb-md-3"
          :class="{ 'sidebar_btn--active': whichSidebarBtnActive == 'shoes' }"
          @click="changeSidebarBtnActive('shoes')"
        >
          鞋子
        </button>
      </li>
      <li>
        <button
          class="sidebar_btn h4 mb-md-3"
          :class="{ 'sidebar_btn--active': whichSidebarBtnActive == 'outerwear' }"
          @click="changeSidebarBtnActive('outerwear')"
        >
          外套
        </button>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { ref } from "vue";
const whichSidebarBtnActive = ref("all");
function changeSidebarBtnActive(category) {
  whichSidebarBtnActive.value = category;
}
</script>
