import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/customer-facing-assets",
  images: { unoptimized: true },
};

export default nextConfig;
