<template>
  <section class="container d-flex flex-column my-3 my-lg-5">
    <div class="my-3 my-lg-5">
      <h3 class="h3 Cart_title">訂單資料</h3>
      <p class="Cart_note">請確實輸入詳盡資料!</p>
    </div>

    <div class="orderForm d-block d-lg-flex mb-5">
      <div
        class="
          orderForm_personalCard
          col-12 col-lg-6
          px-2
          py-5
          p-lg-3
          d-flex
          justify-content-center
          align-items-center
        "
      >
        <div class="orderForm_personalCard_information col-7">
          <div class="pb-3">
            <h3 class="h3">{{ storeData.orderData.data.user.name }} <span>先生/小姐</span></h3>
          </div>
          <div class="pb-3">
            <font-awesome-icon class="fa-1x" :icon="['fas', 'phone-alt']" /> 電話:
            {{ storeData.orderData.data.user.tel }}
          </div>
          <div class="pb-3">
            <font-awesome-icon class="fa-1x" :icon="['far', 'envelope']" /> 信箱:
            {{ storeData.orderData.data.user.email }}
          </div>
          <div class="pb-5">
            <font-awesome-icon class="fa-1x" :icon="['fas', 'map-marked-alt']" /> 地址:
            {{ storeData.orderData.data.user.address }}
          </div>
          <div class="pb-3">
            <select
              class="orderForm_selectCard"
              v-model="selectCardName"
              @change="getLocalStorage(selectCardName)"
            >
              <option value="" selected="true" disabled>選擇儲存資料卡</option>
              <option
                v-for="eachCardName in initLocalStorage"
                :key="eachCardName"
                :value="eachCardName"
              >
                {{ eachCardName }}
              </option>
            </select>
          </div>
          <button class="orderForm_personalCard_saveBTN pb-3" @click="setLocalStorage">
            保存使用者資訊
          </button>
        </div>
      </div>
      <Form ref="form" class="orderForm_form col-12 col-lg-6 px-5 py-3" v-slot="{ errors }">
        <div class="mb-3">
          <label for="name" class="form-label">收件人姓名</label>
          <Field
            id="name"
            name="姓名"
            type="text"
            class="form-control"
            :class="{ 'is-invalid': errors['姓名'] }"
            placeholder="請輸入姓名"
            rules="required"
            v-model="storeData.orderData.data.user.name"
          ></Field>
          <error-message name="姓名" class="invalid-feedback"></error-message>
        </div>

        <div class="mb-3">
          <label for="tel" class="form-label">收件人電話</label>
          <Field
            id="tel"
            name="電話"
            type="tel"
            class="form-control"
            :class="{ 'is-invalid': errors['電話'] }"
            placeholder="請輸入電話"
            :rules="isPhone"
            v-model="storeData.orderData.data.user.tel"
          ></Field>
          <error-message name="電話" class="invalid-feedback"></error-message>
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <Field
            id="email"
            name="email"
            type="email"
            class="form-control"
            :class="{ 'is-invalid': errors['email'] }"
            placeholder="請輸入 Email"
            :rules="isMail"
            v-model="storeData.orderData.data.user.email"
          ></Field>
          <error-message name="email" class="invalid-feedback"></error-message>
        </div>
        <div class="mb-3">
          <label for="address" class="form-label">收件人地址</label>
          <Field
            id="address"
            name="地址"
            type="text"
            class="form-control"
            :class="{ 'is-invalid': errors['地址'] }"
            placeholder="請輸入地址"
            rules="required"
            v-model="storeData.orderData.data.user.address"
          ></Field>
          <error-message name="地址" class="invalid-feedback"></error-message>
        </div>
      </Form>
    </div>
  </section>
</template>

//
<script>
// export default {
//   name: "Home",
//   props: { cart: Object },
//   data() {
//     return {
//       orderData: {
//         data: {
//           user: {
//             name: "",
//             email: "",
//             tel: "",
//             address: "",
//           },
//           message: "",
//         },
//       },
//     };
//   },

//   methods: {
//     isPhone(value) {
//       const phoneNumber = /^(09)[0-9]{8}$/;
//       return phoneNumber.test(value) ? true : "需要正確的電話號碼";
//     },
//     isMail(value) {
//       const mail = /\S+@\S+\.\S+/;
//       return mail.test(value) ? true : "需要正確的電子信箱";
//     },
//     onSubmit() {
//       if (this.cart.carts.length === 0) {
//         alert("購物車裡面沒有東西喔");
//         return;
//       }
//       const totalUrl = `${process.env.VUE_APP_baseUrl}/api/${process.env.VUE_APP_apiPath}/order`;
//       this.$http.post(totalUrl, this.orderData).then((res) => {
//         console.log(res.data);
//         // console.log("emit重整");
//         // this.$emit("render-view");
//       });
//     },
//   },

//   created() {},
// };
//
</script>
<script setup>
import { ref, inject } from "vue";
import { storeData } from "@/js/storeData.js";
const VueSweetalert2 = inject("VueSweetalert2");

// 檢視表單資料
function isPhone(value) {
  const phoneNumber = /^(09)[0-9]{8}$/;
  return phoneNumber.test(value) ? true : "需要正確的電話號碼";
}
function isMail(value) {
  const mail = /\S+@\S+\.\S+/;
  return mail.test(value) ? true : "需要正確的電子信箱";
}
// 檢視表單資料

// local
const initLocalStorage = ref(Object.keys(localStorage).length > 0 ? Object.keys(localStorage) : []);
const selectCardName = ref("");
function setLocalStorage() {
  if (storeData.orderData.data.user.name == "") {
    VueSweetalert2({
      icon: "error",
      title: "請輸入個人資訊",
      timer: 1200,
      showCloseButton: false,
      showCancelButton: false,
    });
    return;
  }
  localStorage.setItem(
    `${storeData.orderData.data.user.name}的資訊卡`,
    JSON.stringify(storeData.orderData)
  );
  VueSweetalert2({
    icon: "success",
    title: "新增個人資訊卡!",
    timer: 1200,
    showCloseButton: false,
    showCancelButton: false,
  });
}
function getLocalStorage(name) {
  storeData.orderData = JSON.parse(localStorage.getItem(name));
}
</script>
