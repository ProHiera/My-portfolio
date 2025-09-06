import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import type { NextConfig } from "next";

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm],
  },
});


import createMDX from '@next/mdx';
const withMDX = createMDX({ options: { remarkPlugins: [require('remark-gfm')] } });

/** @type {import('next').NextConfig} */
const nextConfig = { pageExtensions: ['ts','tsx','mdx'] };
export default withMDX(nextConfig);