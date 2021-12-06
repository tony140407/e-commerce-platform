<template>
  <section class="container d-flex flex-column">
    <div class="my-3">
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
            <h3 class="h3">藍治傑 <span>先生/小姐</span></h3>
          </div>
          <div class="pb-3">
            <font-awesome-icon class="fa-1x" :icon="['fas', 'phone-alt']" /> 電話:
          </div>
          <div class="pb-3">
            <font-awesome-icon class="fa-1x" :icon="['far', 'envelope']" /> 信箱:
          </div>
          <div class="pb-3">
            <font-awesome-icon class="fa-1x" :icon="['fas', 'map-marked-alt']" /> 地址:
          </div>

          <button class="orderForm_personalCard_saveBTN pb-3">保存使用者資訊</button>
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
            v-model="orderData.data.user.name"
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
            v-model="orderData.data.user.tel"
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
            v-model="orderData.data.user.email"
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
            v-model="orderData.data.user.address"
          ></Field>
          <error-message name="地址" class="invalid-feedback"></error-message>
        </div>
      </Form>
    </div>
  </section>
</template>

<script>
export default {
  name: "Home",
  props: { cart: Object },
  data() {
    return {
      orderData: {
        data: {
          user: {
            name: "",
            email: "",
            tel: "",
            address: "",
          },
          message: "",
        },
      },
    };
  },

  methods: {
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/;
      return phoneNumber.test(value) ? true : "需要正確的電話號碼";
    },
    isMail(value) {
      const mail = /\S+@\S+\.\S+/;
      return mail.test(value) ? true : "需要正確的電子信箱";
    },
    onSubmit() {
      if (this.cart.carts.length === 0) {
        alert("購物車裡面沒有東西喔");
        return;
      }
      const totalUrl = `${process.env.VUE_APP_baseUrl}/api/${process.env.VUE_APP_apiPath}/order`;
      this.$http.post(totalUrl, this.orderData).then((res) => {
        console.log(res.data);
        // console.log("emit重整");
        // this.$emit("render-view");
      });
    },
  },

  created() {},
};
</script>
