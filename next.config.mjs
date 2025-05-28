/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  // images: { unoptimized: true },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ceid.center',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  // swcMinify is no longer needed in Next.js 15.3.2 as it's enabled by default
};

export default nextConfig;
