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

export function getShopData() {
  const api = `${process.env.VUE_APP_baseUrl}/api/${process.env.VUE_APP_apiPath}/products/all`;
  axios
    .get(api)
    .then((res) => {
      storeData.originProducts = res.data.products;
      storeData.products = JSON.parse(JSON.stringify(res.data.products));
      filterProducts();
    })
    .catch((error) => {
      console.log(error);
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
