import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react()],
  base: "https://alejandrox64.github.io/ecommerce-product",
  css: {
    modules: true, // Habilita los módulos de CSS
  },
});
