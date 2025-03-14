import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import postcssSimpleVars from "postcss-simple-vars";

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@icons": path.resolve(__dirname, "src/assets"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@interfaces": path.resolve(__dirname, "src/interfaces"),
      "@data": path.resolve(__dirname, "src/data"),
      "@contexts": path.resolve(__dirname, "src/contexts"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@layout": path.resolve(__dirname, "src/layout"),
      "@components": path.resolve(__dirname, "src/components"),
      "@helpers": path.resolve(__dirname, "src/helpers"),
      "@public": path.resolve(__dirname, "public"),
    },
  },
  server: {
    host: "0.0.0.0",
    port: 3000,
    open: true,
  },
  plugins: [react()],
  css: {
    modules: {
      scopeBehaviour: "local",
    },
    postcss: {
      plugins: [
        postcssSimpleVars({
          variables: {
            "mantine-breakpoint-xs": "36em",
            "mantine-breakpoint-sm": "48em",
            "mantine-breakpoint-md": "62em",
            "mantine-breakpoint-lg": "75em",
            "mantine-breakpoint-xl": "88em",
          },
        }),
      ],
    },
  },
});
