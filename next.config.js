/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      { hostname: 'images.unsplash.com' },
      { hostname: 'picsum.photos' },
      { hostname: 'i.guim.co.uk' },  // Guardian
      { hostname: 'ichef.bbci.co.uk' },
      { hostname: 'ichef-1.bbci.co.uk' },
      { hostname: 'images.cointelegraph.com' },
      { hostname: 'photos.smugmug.com' },
    ]
  }
}
module.exports = nextConfig