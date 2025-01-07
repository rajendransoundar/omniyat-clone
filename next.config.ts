import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    // loader: 'akamai',
    // path: '',
  },

  /* config options here */
};

export default nextConfig;
