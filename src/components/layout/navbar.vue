<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container">
      <a class="navbar-brand" href="#">Wardrobe</a>
      <button class="navbar-toggler" type="button" @click="isCollapseActive = !isCollapseActive">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="navbar-collapse flex-row-reverse"
        :class="{ 'collapse--unActive': !isCollapseActive }"
        id="navbarText"
      >
        <ul class="navbar-nav">
          <li>
            <router-link class="navbar_link h4" :to="'/shop'"
              ><font-awesome-icon :icon="['fas', 'shopping-cart']" /> <span class="ms-1">Shop</span>
            </router-link>
          </li>
          <li>
            <router-link class="navbar_link h4" :to="'/cart'"
              ><font-awesome-icon :icon="['fab', 'shopify']" /><span class="ms-1"
                >Cart</span
              ></router-link
            >
          </li>
          <li>
            <a class="navbar_link h4" @click="showLoginModal"
              ><font-awesome-icon :icon="['fas', 'sign-in-alt']" />
              <span class="ms-1">Login</span></a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <Login @instance="copyInstance" />
</template>

<script setup>
import { ref } from "vue";
import Login from "../admin/login.vue";
const isCollapseActive = ref(false);

const loginInstance = ref(null);

function copyInstance(instance) {
  loginInstance.value = instance;
}
function showLoginModal() {
  loginInstance.value.show();
}
</script>
