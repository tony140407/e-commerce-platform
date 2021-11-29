<template>
  <section class="modal fade" ref="modifyOrderRef">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <h3 class="login_title h3">確定要刪除 {{ id }}</h3>
          <p class="login_note mb-3">立即登入，享用更多服務!</p>
          <section class="mb-3">
            <div class="form-floating mb-3">
              <input
                type="email"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                v-model="loginInformation.username"
              />
              <label for="floatingInput">帳號</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="password"
                class="form-control"
                id="floatingPassword"
                placeholder="Password"
                v-model="loginInformation.password"
              />
              <label for="floatingPassword">密碼</label>
            </div>
            <div class="login_btn mb-3">
              <button @click="login">登入</button>
            </div>

            <p class="login_note mb-3">選擇其他登入方式</p>
            <ul class="login_otherMethod">
              <li><font-awesome-icon class="fa-3x" :icon="['fab', 'facebook-square']" /></li>
              <li><font-awesome-icon class="fa-3x" :icon="['fab', 'linkedin']" /></li>
              <li><font-awesome-icon class="fa-3x" :icon="['fab', 'github-square']" /></li>
            </ul>
          </section>
          <p class="login_register">還沒有帳號? <span>立即註冊</span></p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { defineProps, defineEmits, toRefs, ref, onMounted, inject } from "vue";
import { Modal } from "bootstrap";
// props & emit
const props = defineProps({
  mode: String,
  id: String,
});
const emit = defineEmits(["instance"]);

// bootstrap modal 建立並emit到父原件以供顯現( show() )
const modifyOrderRef = ref(null);
const modifyOrderModal = ref(null);
onMounted(() => {
  modifyOrderModal.value = new Modal(modifyOrderRef.value);
  emit("instance", modifyOrderModal.value);
});
const hideModal = () => {
  modifyOrderModal.value.hide();
};
// --------------------------------------------------

// 刪除api
const axios = inject("axios");

const modifyOrderFn = () => {
  hideModal();

  const api = `${process.env.VUE_APP_baseUrl}/admin/${props.mode}/${props.id}`;

  axios
    .delete(api)
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });
};
</script>
