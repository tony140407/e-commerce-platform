<template>
  <section class="Shop container mx-auto mt-5">
    <div class="row gx-5">
      <Sidebar class="col-12 col-lg-3" />
      <div class="col-12 col-lg-9">
        <div class="row gy-3">
          <div class="col-12 col-lg-6"><Card /></div>
          <div class="col-12 col-lg-6"><Card /></div>
          <div class="col-12 col-lg-6"><Card /></div>
          <div class="col-12 col-lg-6"><Card /></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Sidebar from "@/components/frontend/sidebar.vue";
import Card from "@/components/frontend/card.vue";
import { ref } from "vue";
const testImg =
  "https://images.unsplash.com/photo-1607352208720-3f8883a35f9e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80";

const card_detail_size = ref("XS");
</script>

<style lang="scss" scoped></style>
