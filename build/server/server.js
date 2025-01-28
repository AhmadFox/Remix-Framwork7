import { createRequestHandler } from "@netlify/remix-adapter";
import { b as build } from "./assets/server-build-CLnvJWbR.js";
import "react/jsx-runtime";
import "node:stream";
import "@remix-run/node";
import "@remix-run/react";
import "isbot";
import "react-dom/server";
import "react";
import "framework7/lite-bundle";
import "framework7-react";
import "@heroicons/react/24/solid";
import "@shopify/hydrogen";
import "@heroicons/react/24/outline";
const _virtual_netlifyServer = createRequestHandler({
  build,
  getLoadContext: async (_req, ctx) => ctx
});
export {
  _virtual_netlifyServer as default
};
