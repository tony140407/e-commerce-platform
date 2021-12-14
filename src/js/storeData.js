import { ref, reactive } from "vue";
import axios from "axios";
import { apiGetAllProducts, apiGetCart } from "./api.js";

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
export const isLoading = ref(false);

export function getCartData() {
  changeLoading(true);
  apiGetCart()
    .then((res) => {
      storeData.carts = res.data.data.carts;
      storeData.final_total = res.data.data.final_total;
      changeLoading(false);
    })
    .catch((error) => {
      console.log(error);
      changeLoading(false);
    });
}

export function getShopData() {
  changeLoading(true);
  apiGetAllProducts()
    .then((res) => {
      storeData.originProducts = res.data.products;
      storeData.products = JSON.parse(JSON.stringify(res.data.products));
      filterProducts();
      changeLoading(false);
    })
    .catch((error) => {
      console.log(error);
      changeLoading(false);
    });

  function filterProducts() {
    // 資料庫刪不掉的資料
    const excessDataIndex = storeData.products.findIndex(
      (element) => element.title == "[賣]動物園造型衣服3"
    );
    if (excessDataIndex !== -1) {
      storeData.products.splice(excessDataIndex, 1);
    }

    // 資料庫刪不掉的資料
    // 過濾 size 資訊
    const bracketReg = /\(*\)/; //所有有括號的
    const sizeReg = {
      XS: /\(+XS+\)/,
      S: /\(+S+\)/,
      M: /\(+M+\)/,
      L: /\(+L+\)/,
      XL: /\(+XL+\)/,
      XXL: /\(+XXL+\)/,
    };
    const sizeList = ["XS", "S", "M", "L", "XL", "XXL"];
    let newProducts = [];
    // 先找出無size的樣本
    storeData.products.filter((eachProduct) => {
      // 沒有括號的拉出來當Card size屬性填入同名產品
      if (!bracketReg.test(eachProduct.title)) {
        eachProduct.size = {
          XS: "",
          S: "",
          M: "",
          L: "",
          XL: "",
          XXL: "",
        };
        newProducts.push(eachProduct);
      }
    });
    // 有括號的 ID 填入 size 屬性中
    sizeList.filter((eachSize) => {
      storeData.products.filter((eachProduct) => {
        if (sizeReg[eachSize].test(eachProduct.title)) {
          const key = eachProduct.title.replace(sizeReg[eachSize], "");
          newProducts.find((eachNewProduct) => {
            if (eachNewProduct.title == key) {
              eachNewProduct.size[eachSize] = eachProduct.id;
              return true;
            }
          });
        }
      });
    });
    storeData.products = newProducts;
  }
}

export function changeLoading(status) {
  isLoading.value = status;
}
