import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { RemixVitePWA } from "@vite-pwa/remix";
import tailwindcss from '@tailwindcss/vite';
import { netlifyPlugin } from "@netlify/remix-adapter/plugin";

declare module "@remix-run/node" {
	interface Future {
		v3_singleFetch: true;
	}
}

const { RemixVitePWAPlugin, RemixPWAPreset } = RemixVitePWA();

export default defineConfig({
	plugins: [
		remix(),
		tailwindcss(),
		tsconfigPaths(),
		netlifyPlugin()
	],
});

// "start": "remix-serve ./build/server/index.js",