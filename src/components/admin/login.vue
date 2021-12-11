<template>
  <section class="login modal fade" ref="loginRef">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <h3 class="login_title h3">登入</h3>
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
import { ref, onMounted, inject } from "vue";
import { useRouter } from "vue-router";
import { Modal } from "bootstrap";
const emit = defineEmits(["instance"]);

// bootstrap modal 建立並emit到父原件以供顯現( show() )
const loginRef = ref(null);
const loginModal = ref(null);
onMounted(() => {
  loginModal.value = new Modal(loginRef.value);
  emit("instance", loginModal.value);
});
const hideModal = () => {
  loginModal.value.hide();
};
// --------------------------------------------------

// login 按鈕登入及路徑導向
const axios = inject("axios");
const router = useRouter();

const loginInformation = ref({ username: null, password: null });
const login = () => {
  hideModal();
  const { username, password } = loginInformation.value;
  const user = {
    username,
    password,
  };
  const loginAPI = `${process.env.VUE_APP_baseUrl}/admin/signin`;

  axios
    .post(loginAPI, user)
    .then((res) => {
      if (res.data.success) {
        const { token, expired } = res.data;
        document.cookie = `hexToken=${token}; expires=${new Date(expired)}; path=/`;
        axios.defaults.headers.common.Authorization = token;

        router.push({
          path: "/admin",
        });
      } else {
        alert(res.data.message);
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
</script>
