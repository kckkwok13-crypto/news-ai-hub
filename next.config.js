/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
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
    ]
  },
}
module.exports = nextConfig
