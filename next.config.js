/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'ichef.bbci.co.uk' },
      { hostname: 'ichef-1.bbci.co.uk' },
      { hostname: 'images.cointelegraph.com' },
      { hostname: 'i.guim.co.uk' },  // Guardian
      { hostname: 'picsum.photos' },
      { hostname: '**' }
    ]
  }
}
module.exports = nextConfig