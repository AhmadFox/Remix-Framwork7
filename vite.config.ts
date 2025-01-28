import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { RemixVitePWA } from "@vite-pwa/remix";
import tailwindcss from '@tailwindcss/vite';

declare module "@remix-run/node" {
  interface Future {
    v3_singleFetch: true;
  }
}

const { RemixVitePWAPlugin, RemixPWAPreset } = RemixVitePWA();

export default defineConfig({
  plugins: [
    tailwindcss(),
    remix({
    future: {
      v3_fetcherPersist: true,
      v3_relativeSplatPath: true,
      v3_throwAbortReason: true,
      v3_singleFetch: true,
      v3_lazyRouteDiscovery: true,
    },
    presets: [RemixPWAPreset()],
  }), tsconfigPaths(), RemixVitePWAPlugin({
    registerType: "autoUpdate",
    injectRegister: false,

    pwaAssets: {
      disabled: false,
      config: true,
    },

    manifest: {
      name: "PWA",
      short_name: "PWA",
      description: "Test Remix PWA app",
      theme_color: "#ffffff",
    },

    workbox: {
      globPatterns: ["**/*.{js,html,css,png,svg,ico}"],
      cleanupOutdatedCaches: true,
      clientsClaim: true,
    },

    devOptions: {
      enabled: false,
      suppressWarnings: true,
      navigateFallback: "/",
      navigateFallbackAllowlist: [/^\/$/],
      type: "module",
    },
  })],
});