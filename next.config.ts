/* eslint-disable @typescript-eslint/no-require-imports */

import createMDX from "@next/mdx";
import type { NextConfig } from "next";
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);

const withMDX = createMDX({
  options: {
    remarkPlugins: [require.resolve("remark-gfm")],
  },
});

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "mdx"],
};

export default withMDX(nextConfig);
