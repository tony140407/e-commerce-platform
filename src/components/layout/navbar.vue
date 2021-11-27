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
            <router-link class="navbar_link h4" :to="'shop'"
              ><font-awesome-icon :icon="['fas', 'shopping-cart']" /> <span class="ms-1">Shop</span>
            </router-link>
          </li>
          <li>
            <router-link class="navbar_link h4" :to="'cart'"
              ><font-awesome-icon :icon="['fab', 'shopify']" /><span class="ms-1"
                >Cart</span
              ></router-link
            >
          </li>
          <li>
            <router-link class="navbar_link h4" :to="'login'"
              ><font-awesome-icon :icon="['fas', 'sign-in-alt']" /><span class="ms-1"
                >Login</span
              ></router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";
const isCollapseActive = ref(false);
</script>

<style lang="scss" scoped>
.navbar {
  background-color: #daf5f0;
  &_link {
    display: inline-block;
    padding: 3px 10px;
    margin: 0;
    &:after {
      content: "";
      display: block;
      margin: auto;
      height: 3px;
      width: 0px;
      background: transparent;
      transition: width 0.5s ease, background-color 0.5s ease;
    }
    &:hover:after {
      width: 100%;
      background: #03c4b9;
    }
  }
}
.collapse--unActive {
  display: none;
}
</style>
