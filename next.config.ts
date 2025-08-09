import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Remove static export - let Vercel handle deployment automatically
  output: "export", // Enable static export
  distDir: "build", // Output to 'build' directory instead of '.next'
  trailingSlash: true, // Add trailing slashes to URLs
  images: {
    unoptimized: false, // Vercel supports image optimization
  },

  // Add environment variables for build-time configuration
  env: {
    CONTACT_EMAIL: process.env.CONTACT_EMAIL || "dev.rajeshkumar.s@gmail.com",
  },
};

export default nextConfig;
