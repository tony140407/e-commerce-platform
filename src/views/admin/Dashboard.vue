<template>
  <section class="container mx-auto mt-5">
    <div class="row gx-5">
      <Sidebar class="col-12 col-lg-3" />
      <div class="col-12 col-lg-9">
        <router-view></router-view>
      </div>
    </div>
  </section>
</template>
<script setup>
import Sidebar from "@/components/admin/sidebar.vue";
</script>
