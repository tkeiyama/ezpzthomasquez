import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";

export default defineConfig(({ mode }) => ({
  base: mode === "production" ? "/ezpzthomasquez/" : "/",
  plugins: [reactRouter()],
}));
