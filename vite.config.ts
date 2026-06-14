import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";

export default defineConfig({
  base: "./",
  vite: {
    plugins: [
      tanstackStart({
        server: { entry: "server" },
      }),
      viteReact(),
    ],
  },
});
