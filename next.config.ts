import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.aceternity.com",
        pathname: "/**", // Allows all paths under this hostname
      },
    ],
    domains : ['images.unsplash.com','images.pexels.com']
  },
};

export default nextConfig;
