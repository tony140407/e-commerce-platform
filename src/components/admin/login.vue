<template>
  <section class="login modal fade" ref="loginModal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <h3 class="login_title h3">登入</h3>
          <p class="login_note mb-3">立即登入，享用更多服務!</p>
          <section class="mb-3">
            <div class="form-floating mb-3">
              <input
                type="text"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">帳號</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="password"
                class="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label for="floatingPassword">密碼</label>
            </div>
            <div class="login_btn mb-3">
              <button>登入</button>
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
import { defineProps, defineEmits, toRefs, ref, onMounted } from "vue";
import { Modal } from "bootstrap";
const emit = defineEmits(["instance"]);
const loginModal = ref(null);
onMounted(() => {
  loginModal.value = new Modal(loginModal.value);
  emit("instance", loginModal.value);
});
</script>
