import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vazxmixjsiawhamofees.supabase.co",
        pathname: "/storage/v1/object/public/models/**",
      },
    ],
  },
};

export default nextConfig;
