import { createRouter, createWebHashHistory } from "vue-router";
import axios from "axios";
import Index from "../views/frontend/Index.vue";
import HomePage from "../views/frontend/HomePage.vue";
import Shop from "../views/frontend/Shop.vue";
import Cart from "../views/frontend/Cart.vue";

import SeeMoreProduct from "../views/frontend/SeeMoreProduct.vue";
import Login from "../views/admin/Login.vue";
import Dashboard from "../views/admin/Dashboard.vue";
import Products from "../views/admin/Products.vue";
import Orders from "../views/admin/Orders.vue";
import Coupon from "../views/admin/Coupon.vue";
const routes = [
  {
    path: "/",
    name: Index,
    component: Index,
    children: [
      {
        path: "",
        name: "HomePage",
        component: HomePage,
      },
      {
        path: "shop",
        name: "Shop",
        component: Shop,
      },
      {
        path: "shop/:id",
        name: "SeeMoreProduct",
        component: SeeMoreProduct,
      },
      {
        path: "cart",
        name: "Cart",
        component: Cart,
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/admin",
    name: "Dashboard",
    component: Dashboard,
    meta: { requiresAuth: true },
    children: [
      {
        path: "",
        name: "Products",
        component: Products,
      },
      {
        path: "orders",
        name: "Orders",
        component: Orders,
      },
      {
        path: "coupons",
        name: "Coupons",
        component: Coupon,
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: {
      name: "HomePage",
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  // 若需要 requiresAuth 則先經過驗證
  console.log(to);
  if (to.meta.requiresAuth) {
    const api = `${process.env.VUE_APP_baseUrl}/api/user/check`;
    axios.post(api).then((res) => {
      console.log(res.data);
      if (res.data.success) {
        next();
      } else {
        next({
          path: "/",
        });
      }
    });
    return;
  }

  next();
});

export default router;
