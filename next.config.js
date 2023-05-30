/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: {
      displayName: true
    }
  },
  images: {
    domains: ['d2sie3twm806m7.cloudfront.net']
  }
}

module.exports = nextConfig
