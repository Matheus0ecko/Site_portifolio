import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base '/' funciona no endpoint do Blob Storage (site servido na raiz do $web)
export default defineConfig({
  plugins: [react()],
  base: "/",
});
