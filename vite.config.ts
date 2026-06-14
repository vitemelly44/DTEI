import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import viteReact from "@vitejs/plugin-react";

export default defineConfig({
  base: "./",
  vite: {
    plugins: [viteReact()],
  },
});
