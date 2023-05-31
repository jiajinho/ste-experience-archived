const { withSentryConfig } = require("@sentry/nextjs");

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
  },
  sentry: {
    widenClientFileUpload: true,
    transpileClientSDK: true,
    tunnelRoute: "/monitoring",
    hideSourceMaps: true,
    disableLogger: true,
    autoInstrumentServerFunctions: false
  }
}

module.exports = withSentryConfig(nextConfig, {
  silent: true,
  org: "mighty-jaxx-international",
  project: "ste-encounter",
});