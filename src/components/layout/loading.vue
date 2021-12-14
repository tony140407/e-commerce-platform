<template>
  <div class="loading" v-if="isLoading == true">
    <div class="loadingio-spinner-spin-ran6x16c2me">
      <div class="ldio-z5icckezza">
        <div><div></div></div>
        <div><div></div></div>
        <div><div></div></div>
        <div><div></div></div>
        <div><div></div></div>
        <div><div></div></div>
        <div><div></div></div>
        <div><div></div></div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { isLoading } from "@/js/storeData.js";
</script>
