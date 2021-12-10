import { createApp } from "vue";
import App from "./App.vue";

import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faShoppingCart,
  faSignInAlt,
  faHeart as faSolidHeart,
  faPlus,
  faMinus,
  faUser,
  faPhoneAlt,
  faMapMarkedAlt,
  faTag,
  faSearch,
  faMedal,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faShopify,
  faFacebookSquare,
  faLinkedin,
  faGithubSquare,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(
  faShoppingCart,
  faSignInAlt,
  faSolidHeart,
  faPlus,
  faMinus,
  faUser,
  faPhoneAlt,
  faTag,
  faMedal,
  faSearch,
  faMapMarkedAlt,
  faHeart,
  faShopify,
  faFacebookSquare,
  faLinkedin,
  faGithubSquare,
  faEnvelope
);

import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

// 匯入 vee-validate 主套件
import { Field, Form, ErrorMessage, defineRule, configure } from "vee-validate";
// 匯入 vee-validate 相關規則
import { required, email, min } from "@vee-validate/rules";
// 匯入多國語系的功能
import { localize, setLocale } from "@vee-validate/i18n";
// 匯入繁體中文語系檔案
import zhTW from "@vee-validate/i18n/dist/locale/zh_TW.json";

// 定義驗證規則

defineRule("required", required);

defineRule("email", email);

defineRule("min", min);

// 設定 vee-validate 全域規則

configure({
  generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系

  validateOnInput: true, // 當輸入任何內容直接進行驗證
});

// 設定預設語系

setLocale("zh_TW");

import "@/assets/scss/all.scss";

const app = createApp(App);

app.use(router);
app.use(VueAxios, axios);
app.use(VueSweetalert2);
app.component("font-awesome-icon", FontAwesomeIcon);
// 註冊 vee-validate 三個全域元件
app.component("Form", Form);
app.component("Field", Field);
app.component("ErrorMessage", ErrorMessage);
app.provide("axios", app.config.globalProperties.axios);
app.provide("VueSweetalert2", app.config.globalProperties.$swal);

app.mount("#app");
