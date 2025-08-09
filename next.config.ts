import type { NextConfig } from "next";

// Check if we want static export (for platforms like Vercel static)
const isStaticExport = process.env.STATIC_EXPORT === "true";

const nextConfig: NextConfig = {
  // Only use static export if explicitly set
  ...(isStaticExport && {
    output: "export",
    distDir: "build",
    trailingSlash: true,
  }),

  images: {
    unoptimized: isStaticExport, // Only unoptimize for static export
  },

  // Add environment variables for build-time configuration
  env: {
    CONTACT_EMAIL: process.env.CONTACT_EMAIL || "dev.rajeshkumar.s@gmail.com",
  },
};

export default nextConfig;
