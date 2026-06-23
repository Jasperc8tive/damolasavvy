/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // three / R3F ship untranspiled ESM in places; keep transpilation explicit.
  transpilePackages: ["three"],
};

export default nextConfig;
