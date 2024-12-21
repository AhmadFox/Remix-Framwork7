// flat-routes.config.ts
import { defineConfig } from "@remix-run/dev-flat-routes";

export default defineConfig({
  routes: [
    { path: "/", file: "routes/index.tsx" },
    { path: "/about", file: "routes/about.tsx" },
  ],
});
