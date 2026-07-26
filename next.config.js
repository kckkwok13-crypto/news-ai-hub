/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack: (config) => {
    config.resolve.alias['@/components'] = path.join(__dirname, 'components');
    config.resolve.alias['@/app/components'] = path.join(__dirname, 'app', 'components');
    return config;
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      { hostname: 'images.unsplash.com' },
      { hostname: 'picsum.photos' },
      { hostname: 'i.guim.co.uk' },
      { hostname: 'ichef.bbci.co.uk' },
      { hostname: 'ichef-1.bbci.co.uk' },
      { hostname: 'images.cointelegraph.com' },
      { hostname: 'photos.smugmug.com' },
      { hostname: 'upload.wikimedia.org' },
      { hostname: 'cdn.britannica.com' },
      { hostname: 'media.istockphoto.com' },
    ],
    minimumCacheTTL: 31536000,
  },
  compress: true,
  poweredByHeader: false,
}
module.exports = nextConfig
