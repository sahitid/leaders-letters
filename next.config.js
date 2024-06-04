/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: '/clubs/leaders-letters',
  async rewrites() {
    return [
      { source: '/clubs/leaders-letters/_next/:path*', destination: '/_next/:path*' }
    ]
  }
  
}

module.exports = nextConfig
