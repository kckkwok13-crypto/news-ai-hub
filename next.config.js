/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'ichef.bbci.co.uk' },
      { hostname: 'images.cointelegraph.com' },
      { hostname: 'picsum.photos' },
      { hostname: 'ichef-1.bbci.co.uk' },
      { hostname: 'www.google.com' },
      { hostname: '**' }
    ]
  }
}
module.exports = nextConfig
