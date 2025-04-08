// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/SatyaPir1998.github.io/", // 👈 VERY IMPORTANT
  plugins: [react()],
});
