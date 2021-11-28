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
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
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
  faHeart,
  faShopify,
  faFacebookSquare,
  faLinkedin,
  faGithubSquare
);

import "@/assets/scss/all.scss";

const app = createApp(App);

app.use(router);
app.use(VueAxios, axios);
app.component("font-awesome-icon", FontAwesomeIcon);
app.provide("axios", app.config.globalProperties.axios);

app.mount("#app");
