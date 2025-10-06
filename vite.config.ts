import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ViteWebfontDownload } from "vite-plugin-webfont-dl";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    ViteWebfontDownload([
      "https://fonts.googleapis.com/css2?family=Century+Gothic:wght@400;700&display=swap",
    ]),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
    },
  },
  publicDir: "./public",
  base: "./",
  // root: path.resolve(import.meta.dirname, "client"),
  // build: {
  //   outDir: path.resolve(import.meta.dirname, "dist/public"),
  //   emptyOutDir: true,
  // },
});
