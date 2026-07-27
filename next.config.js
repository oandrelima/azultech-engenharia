/** @type {import("next").NextConfig} */
const config = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  outputFileTracingIncludes: {
    "/*": ["./prisma/dev.db"],
    "/api/**/*": ["./prisma/dev.db"],
    "/servicos/**/*": ["./prisma/dev.db"],
    "/blog/**/*": ["./prisma/dev.db"],
  },
};

export default config;
