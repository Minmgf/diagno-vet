import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'app.diagnovet.ai',
      },
    ],
  },
};

export default nextConfig;
