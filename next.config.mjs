import "./src/env.mjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "176.100.14.214",
        port: "9000",
        pathname: "*/**",
      },
    ],
  },
};

export default nextConfig;
