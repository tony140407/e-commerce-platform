import axios from "axios";

const api = process.env.VUE_APP_baseUrl;
const path = process.env.VUE_APP_apiPath;

// 後台相關
// 登入
export let apiUserLogin = (data) => axios.post(`${api}/admin/signin`, data);

// 商品管理
export const apiGetAdminAllProducts = () => axios.get(`${api}/api/${path}/admin/products/all`);
export const apiGetAdminProducts = (page = 1) =>
  axios.get(`${api}/api/${path}/admin/products?page=${page}`);
export const apiUpdateAdminProducts = (method, id, data) =>
  axios[method](`${api}/api/${path}/admin/product/${id}`, data);
export const apiDeleteAdminProduct = (id) => axios.delete(`${api}/api/${path}/admin/product/${id}`);
export const apiUploadAdminFile = (data) => axios.post(`${api}/api/${path}/admin/upload`, data);

// 訂單管理
export const apiGetAdminOrders = (page = 1) =>
  axios.get(`${api}/api/${path}/admin/orders?page=${page}`);
export const apiUpdateAdminOrder = (id, data) =>
  axios.put(`${api}/api/${path}/admin/order/${id}`, data);
export const apiDeletAdmineOrder = (id) => axios.delete(`${api}/api/${path}/admin/order/${id}`);
export const apiDeleteAdminOrders = () => axios.delete(`${api}/api/${path}/admin/orders/all`);

// 前台相關
// 商品
export const apiGetAllProducts = () => axios.get(`${api}/api/${path}/products/all`);
export const apiGetProducts = (page = 1) => axios.get(`${api}/api/${path}/products?page=${page}`);
export const apiGetProduct = (id) => axios.get(`${api}/api/${path}/product/${id}`);

// 購物車
export const apiGetCart = () => axios.get(`${api}/api/${path}/cart`);
export const apiAddCart = (data) => axios.post(`${api}/api/${path}/cart`, data);
export const apiUpdateCart = (id, data) => axios.put(`${api}/api/${path}/cart/${id}`, data);
// export const apiClearCart = () => axios.delete(`${api}/api/${path}/carts`);
export const apiDeleteCart = (id) => axios.delete(`${api}/api/${path}/cart/${id}`);

// 訂單
export const apiCheckout = (data) => axios.post(`${api}/api/${path}/order`, data);
export const apiGetOrder = (id) => axios.get(`${api}/api/${path}/order/${id}`);
// export const apiPayOrder = (id) => axios.post(`${api}/api/${path}/pay/${id}`);
