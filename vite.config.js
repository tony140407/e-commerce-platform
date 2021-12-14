import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 發現 .env 沒作用，把環境變數改寫於此
  // 參考: https://github.com/vitejs/vite/issues/1973
  define: {
    "process.env": {
      VUE_APP_baseUrl: "https://vue3-course-api.hexschool.io",
      VUE_APP_apiPath: "blueapi001",
    },
  },
  // 設定模組路徑別名
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "~": path.resolve(__dirname, "./node_modules"),
    },
  },
  // 部屬位置
  publicPath: "/e-commerce-platform/",
  base: "/e-commerce-platform/",
});
