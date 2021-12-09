import { reactive } from "vue";
import axios from "axios";

export const storeData = reactive({
  originProducts: [],
  products: [],
  carts: [],
  orders: [],
  final_total: null,
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
});

export function getCartData() {
  const api = `${process.env.VUE_APP_baseUrl}/api/${process.env.VUE_APP_apiPath}/cart`;
  axios
    .get(api)
    .then((res) => {
      storeData.carts = res.data.data.carts;
      storeData.final_total = res.data.data.final_total;
    })
    .catch((error) => {
      console.log(error);
    });
}
