import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";

export default defineConfig({
  base: "/react-pdf-highlighter/",
  build: {
    outDir: "dist",
  },
  plugins: [reactRefresh()],
  server: {
    port: 3002,
  },
  define: {
    APP_VERSION: JSON.stringify(process.env.npm_package_version),
  },
});
