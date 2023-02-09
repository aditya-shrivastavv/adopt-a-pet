import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  root: "src", // location of index.html
  build: {
    outDir: "../dist",
  },
});
