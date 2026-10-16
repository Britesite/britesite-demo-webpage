import type { NextConfig } from "next";
import { selectionBridgeConfig } from "./src/lib/selection/config";

const selectionBridge = selectionBridgeConfig();

const nextConfig: NextConfig = {
  /* config options here */
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "Content-Security-Policy", value: selectionBridge.frameAncestors },
          ...(selectionBridge.xFrameOptions ? [{ key: "X-Frame-Options", value: selectionBridge.xFrameOptions }] : []),
          { key: "X-Robots-Tag", value: "noindex, nofollow" },
        ],
      },
    ];
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
