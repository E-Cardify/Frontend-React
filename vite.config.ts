import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@icons": path.resolve(
        __dirname,
        "src/assets"
      ),
      "@hooks": path.resolve(
        __dirname,
        "src/hooks"
      ),
      "@interfaces": path.resolve(
        __dirname,
        "src/interfaces"
      ),
      "@data": path.resolve(
        __dirname,
        "src/data"
      ),
      "@contexts": path.resolve(
        __dirname,
        "src/contexts"
      ),
      "@features": path.resolve(
        __dirname,
        "src/features"
      ),
      "@pages": path.resolve(
        __dirname,
        "src/pages"
      ),
      "@layout": path.resolve(
        __dirname,
        "src/layout"
      ),
      "@components": path.resolve(
        __dirname,
        "src/components"
      ),
      "@helpers": path.resolve(
        __dirname,
        "src/helpers"
      ),
    },
  },
  server: {
    host: "0.0.0.0",
    port: 3000,
    open: true,
  },
  plugins: [react()],
});
