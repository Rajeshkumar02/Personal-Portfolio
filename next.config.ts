import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Remove static export - let Vercel handle deployment automatically
  // output: "export", // Enable static export
  // distDir: "build", // Output to 'build' directory instead of '.next'
  // trailingSlash: true, // Add trailing slashes to URLs
  images: {
    unoptimized: false, // Vercel supports image optimization
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },

  // Add environment variables for build-time configuration
  env: {
    CONTACT_EMAIL: process.env.CONTACT_EMAIL || "dev.rajeshkumar.s@gmail.com",
  },
};

export default nextConfig;
