const { withSentryConfig } = require("@sentry/nextjs");

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === 'true'
});


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: {
      displayName: true,
      ssr: true
    }
  },
  images: {
    domains: ['d2sie3twm806m7.cloudfront.net']
  },
  sentry: {
    widenClientFileUpload: false,
    transpileClientSDK: true,
    tunnelRoute: "/monitoring",
    hideSourceMaps: true,
    disableLogger: true,
    autoInstrumentServerFunctions: false
  },
  redirects: () => [
    {
      source: '/tickets',
      destination: 'https://mightyexperiences.com/tickets/ste-sg',
      permanent: true,
    },
  ],
  webpack: (config, { webpack }) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        __SENTRY_DEBUG__: false,
        __SENTRY_TRACING__: false,
      })
    );

    return config;
  }
}


module.exports = withBundleAnalyzer(
  withSentryConfig(nextConfig, {
    silent: true,
    org: "mighty-jaxx-international",
    project: "ste-encounter",
  })
);